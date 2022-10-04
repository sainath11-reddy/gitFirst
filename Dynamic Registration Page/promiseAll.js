// const promisel =Promise.resolve('Hello World');
// const promise2 = 10 ;
// const promise3 = new Promise ( ( resolve , reject ) =>
//   setTimeout ( resolve , 2000 , ' Goodbye ' )
// );
// Promise.all ( [ promisel , promise2 , promise3 ] ) . then ( values=> console.log ( values ) ) ;
const posts = [
    {title : "Post One", body:"This is Post 1"},
    {title : "Post Two", body:"This is Post 2"},
];
function getPosts(){
    // clearInterval(intervalId);
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li> ${post.title} </li>`;
        });
        document.body.innerHTML=output;
    }, 1000);
}
function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            if(posts.length>0){
                resolve(posts.pop());
            }else 
                reject("Array is full");
        },2000)
    })
}


function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;

           if(!error){
                resolve();
            }else 
                reject("Error: Something went wrong");
        },1000);
    })
}

function updateLastUserActivityTime(){ return new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(new Date().getTime())},1000)
});}

Promise.all([createPost({title:"Post 3", body:"this is post 3"}), updateLastUserActivityTime()]).then((values)=>{getPosts();
                                                                                            console.log(values[1])});
setTimeout(()=>{Promise.all([createPost({title:"Post 4", body:"this is post 4"}), updateLastUserActivityTime()]).then((values)=>{getPosts();
console.log(values[1])})},0); 
deletePost().then(console.log(posts));

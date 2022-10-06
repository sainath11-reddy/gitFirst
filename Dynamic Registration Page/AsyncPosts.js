const posts = [
    {title : "Post One", body:"This is Post 1"},
    {title : "Post Two", body:"This is Post 2"},
];
// let intervalId =0;
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

createAndDelete = async ()=>{
    try{
        await createPost({title: "Post Three", body:"This is Post 3"});
        getPosts();
        await deletePost();
        getPosts();
        await deletePost();
        getPosts();
        await deletePost();
        getPosts();
        try{
            await deletePost();
            getPosts();
        }catch(e){
            console.log(e);
        }
        
        createPost({title: "Post Four", body:"This is Post 4"});
        getPosts();
        setTimeout(async()=>{await deletePost();
        getPosts();},5000);
    }catch(e){
        console.log(e);
    }
    
}
createAndDelete();
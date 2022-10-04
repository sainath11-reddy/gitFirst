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
createPost({title: "Post Three", body:"This is Post 3"}).then(()=>{
    getPosts();
deletePost().then(()=>{
    getPosts();
deletePost().then(()=>{
    getPosts();
deletePost().then(()=>{
    getPosts();
deletePost().then(()=>{
    getPosts();
}).catch(err=> console.log("Array is full"));
setTimeout(()=>{createPost({title: "Post Four", body:"This is Post 4"}).then(()=>{
        
    getPosts();
    console.log("4 th ele");
deletePost().then(()=>{
    getPosts();
    console.log("4th ele gone");

}).catch(err=> console.log("Array is full"));
}).catch(err=>console.log(err));;},2000);   
}).catch(err=>console.log(err));
}).catch(err=>console.log(err));
}).catch(err=>console.log(err));
}).catch(err=>console.log(err));


// function createPost4(post){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             posts.push(post);
//             const error=false;

//            if(!error){
//                 resolve();
//             }else 
//                 reject("Error: Something went wrong");
//         },1000);
//     })
// }
// setTimeout(
// createPost({title: "Post Four", body:"This is Post 4"}).then(()=>{
    

// deletePost().then(()=>{
//     getPosts();
// }).catch(err=> console.log("Array is full"))
// }).catch(err=>console.log(err)),1000);







// deletePost().then(getPosts).catch(err=>console.log(err));
// deletePost().then(getPosts).catch(err=>console.log(err));
// deletePost().then(getPosts).catch(err=>console.log(err));
// deletePost().then(getPosts).catch(err=>console.log(err));
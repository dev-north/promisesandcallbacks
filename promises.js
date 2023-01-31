const posts = [];


let lastActivityTime = undefined;

function getPosts() {
    setTimeout(() => {
    let output = "";
    posts.forEach((post , index)=>{
        output += `<li>${post.title} created ${Math.floor((Date.now()-post.createdAt)/1000)} seconds ago.</li>`;
    })
    document.body.innerHTML = output;  
    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        timestampedPost = {...post, createdAt:new Date().getTime()}
        posts.push(timestampedPost);        
        const error = false;

        if(!error){
            resolve(`${post.title}`);
        }
        else{
            reject("Error: Something went wrong");
        }
    }, 2000);
});
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (!posts.length == 0){
                let temp = posts.pop();
                console.log(`Deleted ${temp.title}`)
                resolve(posts);
            }
            else{
                reject("Error: No posts to delete");
            }
        }, 5000);
    })
}

function updateLastUserActiveTime(){
    return new Promise((resolve , reject )=>{
        setTimeout(() => {
            lastActivityTime = new Date();
            const error = false;

            if(!error){
                resolve(lastActivityTime);
            }
            else{
                reject("Error: Something went wrong");
            }
        }, 1000);
    })
}
// updateLastUserActiveTime().then((values)=>console.log(values)); //Tue Jan 31 2023 14:55:14 GMT+0530 (India Standard Time) 
const promise1 = createPost({ title: "Post One" , body:"This is post one", createdAt: undefined});
Promise.all([promise1,updateLastUserActiveTime()]).then(([createResolve , activityResolve])=> console.log(`Created ${createResolve} || last active time ${activityResolve}`)); 
const promise2 = createPost({title:"Post Two", body:"This is post two", createdAt: undefined});
Promise.all([promise2,updateLastUserActiveTime()]).then(([createResolve , activityResolve])=> console.log(`Created ${createResolve} || last active time ${activityResolve}`)); 
const promise3 = createPost({title:"Post Three", body:"This is Post Three", createdAt:undefined});
Promise.all([promise3,updateLastUserActiveTime()]).then(([createResolve , activityResolve])=> console.log(`Created ${createResolve} || last active time ${activityResolve}`)); 


deletePost()
.then((posts)=>console.log(posts))
.catch(e => console.log(e));
// deletePost()
// .then(getPosts)
// .catch(e => console.log(e));
// deletePost()
// .then(getPosts)
// .catch(e => console.log(e));


// deletePost()
// .then(getPosts)
// .catch(e => console.log(e));


// createPost({title:"Post Four",body:"This is post four", createdAt: undefined})
// .then( setTimeout(deletePost,1000))
// .catch(e=>console.log(e));

setInterval(getPosts,1000);


//promsie.all


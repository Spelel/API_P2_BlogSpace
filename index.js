fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then((response) => response.json())
.then(data => {
    const postArr = data.slice(0, 5)
    postArr.forEach(post => document.getElementById("postHandler").innerHTML+=`
        <p class="postTitle">${post.title}</p> 
        <p class="postBody">${post.body}</p>
    `)
})
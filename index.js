let postsArray = []

function renderPosts () {
    let html = ""
    for (let post of postsArray) {
        html +=`
        <h2 class="postTitle">${post.title}</h2> 
        <p class="postBody">${post.body}</p>
        <hr />
    `}
    document.getElementById("postHandler").innerHTML = html
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then((response) => response.json())
.then(data => {
    postsArray = data.slice(0, 5)
    renderPosts()
})



document.addEventListener('submit', function(e){           
    e.preventDefault()
    const newPost = document.getElementById("newPostTitle").value
    const newBody = document.getElementById("newPostBody").value

    const post = {
        title: newPost,
        body: newBody
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify (post)
    })
    .then(res => res.json())
    .then(data => {
        postsArray.unshift(data)
        renderPosts()
        document.getElementById("newPostTitle").value = ''
        document.getElementById("newPostBody").value = ''
    })
})


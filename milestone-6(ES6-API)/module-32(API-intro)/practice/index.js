// users load 
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data)); 
};

function displayUsers(data){
    const ul = document.getElementById('users');
    for (const user of data) {
        // console.log(user.name)
       const li =  document.createElement('li');
       li.innerText = user.name
       ul.appendChild(li)
    }
};

//posts load

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data) )
}

function displayPosts(posts){
    const postContainer = document.getElementById('posts');
    for (const post of posts) {
        console.log(post)
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h2> ${post.title} </h2>
        <p> ${post.body} </p>
        `;
        postContainer.appendChild(div)
    }
}


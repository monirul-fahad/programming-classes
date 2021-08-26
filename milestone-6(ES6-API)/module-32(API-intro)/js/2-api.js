// user
function loadData(){
   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(data => console.log(data))
};

//posts
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
}

// users 
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}


function displayUsers(data){
    const ul = document.getElementById('users');
for (const user of data) {
    const li = document.createElement('li');
    li.innerText = `Name: ${user.name}, email: ${user.email}`
    ul.appendChild(li)
}
};

function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => comments(data))
};


function comments(comments){
    const commentContainer = document.getElementById('comments');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
        <h3> Name: ${comment.name}</h3>
        <h4> email: ${comment.email}</h4>
        <p>${comment.body}</p>
        `;
        commentContainer.appendChild(div)
    }
}
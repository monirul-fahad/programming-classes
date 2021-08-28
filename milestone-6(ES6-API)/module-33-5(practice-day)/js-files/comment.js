console.log('connected')
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}

const displayComments = (comments) =>  {
    const commentSection = document.getElementById('comment-section');
    comments.forEach(comment => {
        const div = document.createElement('div');
      
    div.classList.add('style');
    div.innerHTML = `
    <div onclick="loadCommentById(${comment.id})">
    <h3>Name- ${comment.name}</h3>
    <h4>email- ${comment.email}</h4>
    <p>Comments- ${comment.body}</p>
    </div>    
    `;
    commentSection.appendChild(div)
    });
}

const loadCommentById = id =>{
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCommentDetails(data))
}

const displayCommentDetails = (comment) => {
    const commentDetails = document.getElementById('comment-details');
    commentDetails.textContent = ''
    const h3 = document.createElement('h3');
    h3.innerText = comment.email;
    commentDetails.appendChild(h3);
    const h5 = document.createElement('h5');
    h5.innerText = comment.body;
    commentDetails.appendChild(h5);
}
function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbum();

function displayAlbums(albums){
    const albumContainer = document.getElementById('albums')
    for (const album of albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.style.fontSize = '1.3em';
        
        p.innerText = album.title;
        albumContainer.appendChild(p)
    }
}
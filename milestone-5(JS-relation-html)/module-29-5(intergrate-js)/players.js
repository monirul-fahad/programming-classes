function setPlayersStyle(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
const players = document.getElementsByClassName('player');
for (const player of players) {
   setPlayersStyle(player);

}

function addPlayer(){
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            dignissimos porro ad aliquam? Debitis temporibus numquam, sapiente
            modi aut sed officia commodi, quidem deleniti quis ratione
            consequuntur adipisci. Sit, ex.
          </p>
    `;
    setPlayersStyle(player)
    playerContainer.appendChild(player);
}

document.getElementById('players').addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'rgb(95, 93, 67)';  
    } else {
        event.target.parentNode.style.backgroundColor = 'rgb(95, 93, 67'; 
    }
})
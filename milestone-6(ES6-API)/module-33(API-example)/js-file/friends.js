const loadFriends = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayFriend(data))
}
loadFriends()

const displayFriend = friend => {
    const friendDiv = document.getElementById('friend');
    const friends = friend.results;
    for (const friend of friends) {
        console.log(friend.email);
        const p = document.createElement('p');
        p.innerText =`
        Name: ${friend.name.title} ${friend.name.first} ${friend.name.last}
        email: ${friend.email}
        ` 
        friendDiv.appendChild(p);
    }
}
const loadUsers = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data))
};
loadUsers();

const displayUser = (data) => {
    const users = data.results;
    const userContainer = document.getElementById('user-contianer')
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('style')
        div.innerHTML = `
        <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <h5>${user.email}</h5>
        <img src="${user.picture.large}">
        <p> Locations- City: ${user.location.city}, State: ${user.location.state}, Country: ${user.location.country}</p>
        `;

        userContainer.appendChild(div)
        console.log(user)
    }
}
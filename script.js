let users_wrap = document.querySelector('main');

let userList = [
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBeooz7o-1RJtto-zFyWc8mz_cIWvCzRDQ6g&usqp=CAU',
        name: "Jerome Williams",
        friends: "7"
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: "Sally Steele",
        friends: "3"
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: "Rachel Ball",
        friends: "8"
    }
]

let users = [];
function initApp() {
    userList.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('user');

        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="info">
                <strong>${value.name}</strong>
                <p>${value.friends} mutual friends</p>
            </div>
            <button class="btn">Confirm</button>
        `;
        users_wrap.appendChild(newDiv);
    });
}
initApp();

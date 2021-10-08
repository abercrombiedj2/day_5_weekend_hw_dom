document.addEventListener('DOMContentLoaded', () => {
    const newItem = document.querySelector('#new-item');
    newItem.addEventListener('submit', handleSubmit);

    const deleteAll = document.querySelector('#delete-all');
    deleteAll.addEventListener('click', handleClick);
});

const handleSubmit = function (event) {
    event.preventDefault();

    const favouriteListItem = createFavouriteListItem(event.target);
    const favouriteList = document.querySelector('#favourite-list');
    favouriteList.appendChild(favouriteListItem);

    event.target.reset();
}

const createFavouriteListItem = function (form) {
    const favouriteListItem = document.createElement('li');
    favouriteListItem.classList.add('item');

    const name = document.createElement('h2');
    name.textContent = `Name: ${form.name.value}`;
    favouriteListItem.appendChild(name);

    const age = document.createElement('h3');
    age.textContent = `Age: ${form.age.value}`;
    favouriteListItem.appendChild(age);

    const sport = document.createElement('h3');
    sport.textContent = `Sport: ${form.sport.value}`;
    favouriteListItem.appendChild(sport);

    const status = document.createElement('h3');
    status.textContent = `Status: ${form.status.value}`;
    favouriteListItem.appendChild(status);

    return favouriteListItem;
}

const handleClick = function (event) {
    const favouriteList = document.querySelector('#favourite-list');
    favouriteList.innerHTML = '';
}
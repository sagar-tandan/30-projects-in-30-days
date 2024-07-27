const filter = document.getElementById("filter");
const user_Container = document.querySelector(".user-container");

fetchrandomUser();
filter.addEventListener("input", () => filterUsers(filter.value));

const userCollectionDiv = [];

async function fetchrandomUser() {
  const response = await fetch("https://randomuser.me/api/?results=50");
  const users = await response.json();
  console.log(users.results);
  mapEachUser(users.results);
}

function mapEachUser(users) {
  users.map((user) => {
    const userdiv = document.createElement("div");
    userdiv.classList.add("userdiv");
    userdiv.classList.add("add");
    console.log(user);
    userdiv.innerHTML = `
          <img
            class="user"
            src=${user.picture.large}
            alt = 'loading'
          />

          <div class="user-info">
            <p class="userName">${user.name.first} ${user.name.last}</p>
            <p class="userLocation">${user.location.state} , ${user.location.country}</p>
          </div>
        `;

    user_Container.appendChild(userdiv);
    userCollectionDiv.push(userdiv);
    // console.log(userdiv);
  });
}

function filterUsers(keyword) {
  //   console.log(keyword);
  userCollectionDiv.forEach((user) => {
    if (user.innerText.toLowerCase().includes(keyword.toLowerCase())) {
      user.classList.remove("remove");
    } else {
      user.classList.add("remove");
    }
  });
}

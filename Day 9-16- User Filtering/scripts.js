const filter = document.getElementById("filter");
const user_Container = document.querySelector(".user-container");

fetchrandomUser();

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
    console.log(user);
    userdiv.innerHTML = `
          <img
            class="user"
            src="https://www.bing.com/th?id=OIP.DHyFcS5hHaDKu-ozXYHR6gHaLG&w=146&h=219&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt=""
          />

          <div class="user-info">
            <p class="userName">Prabhas</p>
            <p class="userLocation">Tamilnadu, India</p>
          </div>
        `;

    user_Container.appendChild(userdiv);
  });
}

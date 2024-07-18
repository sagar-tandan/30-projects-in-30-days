const text = document.getElementById("jokes");
const button = document.querySelector('.btn')

async function fetchDadJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();
  console.log(data);
  text.innerHTML = data.joke;
}

fetchDadJokes();

button.addEventListener('click',fetchDadJokes)



const button = document.getElementById("shorten-btn");
const input = document.getElementById("url-input");
const apiKey = "GhVjfrrVh6xiEeWPUaEY0EwGJEBbhULjnfue4nhFtzoPeB77NqCz24uGsC67";
const para = document.getElementById("shortened-url");
button.addEventListener("click", () => {
  if (input.value) {
    shortURL(input.value);
  }
});

async function shortURL(url) {
  const response = await fetch(
    `https://api.tinyurl.com/create?api_token=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    }
  );
  const data = await response.json();
  const shotrtedUrl = data.data.tiny_url;
  console.log(data);
  para.innerText = `${shotrtedUrl}`;
}

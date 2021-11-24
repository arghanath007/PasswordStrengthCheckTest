const myForm = document.getElementById("myForm");
const URL = "http://127.0.0.1:5000/password/predict";

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = document.getElementById("password").value;

  console.log(password);
  fetchPassword(URL, password);
});

async function fetchPassword(url, data) {
  const response = await fetch(url, {
    method: "POST",
    // body: JSON.stringify({ password: data }),
    body: { password: data },
  });
  console.log(response);
  result = response.json();
  console.log("Output", result);
}

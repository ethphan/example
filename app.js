const form = document.getElementById("form");
const name = document.getElementById("name");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // check name value
  const nameValue = name.value.trim();
  if (nameValue == "") {
    setErrorFor(name, "Username cannot be blank");
  }

  //post method
  const formData = new FormData(this);

  fetch("http://localhost:3000/example", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

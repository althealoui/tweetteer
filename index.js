const user = document.querySelector("#username");
const pass = document.querySelector("#password");
const login = document.querySelector("#login-btn");

const create = document.querySelector("#create");
const firstname = document.querySelector("#signup-fname");
const lastname = document.querySelector("#signup-lname");
const username = document.querySelector("#signup-username");
const password = document.querySelector("#signup-password");
const confirmPass = document.querySelector("#signup-confirm-password");
const signup = document.querySelector("#signup-btn");

const users = [];

login.addEventListener("click", function () {
  if (user.value == users[2] && pass.value == users[3]) {
    location.href = "home.html";
  } else {
    alert("Your username and password  is incorrect!");
  }
});

create.addEventListener("click", function () {
  document.querySelector(".login-container").style.display = "none";
  document.querySelector(".signup-container").style.display = "block";
});

function makeAccount(fname, lname, username, password, confirmPass) {
  users.push(fname, lname, username, password, confirmPass);
  return fname, lname, username, password, confirmPass;
}

signup.addEventListener("click", function () {
  makeAccount(
    firstname.value,
    lastname.value,
    username.value,
    password.value,
    confirmPass.value
  );

  if (
    firstname.value &&
    lastname.value &&
    username.value &&
    password.value === confirmPass.value
  ) {
    document.querySelector(".signup-container").style.display = "none";
    document.querySelector(".login-container").style.display = "block";
  } else {
    alert("Your username and password  is incorrect!");
  }
});

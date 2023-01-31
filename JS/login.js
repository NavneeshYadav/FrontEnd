const Submit = document.getElementById("Submit");

Submit.addEventListener("click", (event) => {
  event.preventDefault();
  const container = document.getElementById("container-1");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users"));
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (email === null || email === "" || atpos < 1 || dotpos - atpos < 2) {
    alert("Please provide your correct email ID!");
    document.getElementById("email").focus();
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].Email === email && users[i].Password === password) {
      container.innerHTML = `<a href="home.html" id="back-button"><i class="fa-regular fa-circle-left fa-2x"></i></a><h1 class="heading-company">Systango</h1><div class="profile-container"> <h1 id="profile-heading">Profile Information <i class="fa-solid fa-user"></i></h1> <p class="profile"><b>Name:</b> ${users[i].Name}</p><p class="profile"><b>Email:</b> ${users[i].Email}</p><p class="profile"><b>Phone No.:</b> ${users[i].Phone_No}</p>
        <a href="/login.html"
    ><button>LogOut</button></a
  ></div>`;
      return;
    }
  }
  alert("User not found!");
});
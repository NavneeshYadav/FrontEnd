//Register JS
const Submit = document.getElementById("Submit");

if (Submit != null) {
  Submit.addEventListener("click", (event) => {
    event.preventDefault();
    let users = [];
    let user = {};
    user.Name = document.getElementById("Name").value;
    user.Email = document.getElementById("Email").value;
    user.Phone_No = document.getElementById("Phone_No").value;
    user.Password = document.getElementById("Password").value;
    user.Image=document.getElementById("upload-img").value;
    let atpos = user.Email.indexOf("@");
    let dotpos = user.Email.lastIndexOf(".");
    if (user.Name == null || user.Name == "") {
      alert("Name can't be blank");
      return;
    } else if (
      user.Email == null ||
      user.Email == "" ||
      atpos < 1 ||
      dotpos - atpos < 2
    ) {
      alert("Please provide your correct email ID!");
      return;
    } else if (user.Phone_No == null || user.Phone == "") {
      alert("Phone no. is required");
      return;
    } else if (user.Password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully!");
    window.location.href = "/login.html";
  });
}

// LOGIN JS
const Submit1 = document.getElementById("Submit1");

Submit1.addEventListener("click", (event) => {
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
    console.log(users);
    if (users[i].Email === email && users[i].Password === password) {


  //     container.innerHTML = `<a href="home.html" id="back-button"><i class="fa-regular fa-circle-left fa-2x"></i></a><h1 class="heading-company">Systango</h1><div class="profile-container"> <h1 id="profile-heading">Profile Information <i class="fa-solid fa-user"></i></h1> <p class="profile"><b>Name:</b> ${users[i].Name}</p><p class="profile"><b>Email:</b> ${users[i].Email}</p><p class="profile"><b>Phone No.:</b> ${users[i].Phone_No}</p>
  //       <a href="/login.html"
  //   ><button>LogOut</button></a
  // ></div>`;
  localStorage.setItem("users1",JSON.stringify(users[i]));
 
  window.location.href="home2.html";
      return;
    }
  }
  alert("User not found!");
});


//home2 JS


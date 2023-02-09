//Register JS
const profile=document.querySelector("#upload-img")
if(profile != null){
  var upload_image=" ";
  profile.addEventListener("change",function(){
    console.log(profile.value);
    const reader = new FileReader();
    reader.addEventListener("load",() => {
      upload_image+=reader.result;
      // document.querySelector("#upload-img").style.backgroundImage = `url(${upload_image})`;
      localStorage.setItem("recent-image",reader.result);
    })
    reader.readAsDataURL(this.files[0]);
              })
}
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
    user.image = localStorage.getItem("recent-image")
    localStorage.removeItem("recent-image");
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
    else if (user.image == null) {
      alert("Image is not upload");
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

if(Submit1 != null){
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
      if (users[i].Email === email && users[i].Password === password) {
    localStorage.setItem("users1",JSON.stringify(users[i]));
    window.location.href="home2.html";
        return;
      }
    }
    alert("User not found!");
  });
}


//home2 JS

window.onload = function () {
  let users1 = JSON.parse(localStorage.getItem("users1"));
  const recentImageDataUrl = users1.image;
            
        if(recentImageDataUrl){
            document.querySelector("#image").setAttribute("src", recentImageDataUrl);
        }
  for (let key in users1) {
    document.getElementById(key).innerHTML = users1[key];
  }
};
const logoutbtn = document.getElementById("logout-btn");
logoutbtn.addEventListener("click", () => {
  localStorage.removeItem("users1");
  window.location.href="login.html";
});
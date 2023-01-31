const Submit = document.getElementById("Submit");

      Submit.addEventListener("click", (event) => {
        event.preventDefault();
        let users = [];
        let user = {};
        user.Name = document.getElementById("Name").value;
        user.Email = document.getElementById("Email").value;
        user.Phone_No = document.getElementById("Phone_No").value;
        user.Password = document.getElementById("Password").value;
        if (user.Name == null || user.Name == "") {
          alert("Name can't be blank");
          return;
        } else if (user.Password.length < 6) {
          alert("Password must be at least 6 characters long.");
          return;
        } else if (user.Email == null || user.Email == "") {
          alert("Email can't be blank");
          return;
        } else if (user.Phone_No == null || user.Phone == "") {
          alert("Phone no. is required");
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
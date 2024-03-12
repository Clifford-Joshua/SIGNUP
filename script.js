// nav bar
const btn = document.querySelectorAll(".btn");
const pagelink = document.querySelector("ul");
const Question = document.querySelector(".Question");
const signin_page = document.querySelector(".signin-page");
const login_page = document.querySelector(".login-signup");
// signin details
let detailbox = document.querySelector("#details");
let username = document.querySelector("#Username");
let password = document.querySelector("#password");
let Email = document.querySelector("#email");
// logins
const Upassword = document.querySelector("#loginpassword");
const UName = document.querySelector("#loginmail");
const rememberme = document.getElementById("rememberme");
//
btn.forEach((Eachbtn) => {
  Eachbtn.addEventListener("click", (e) => {
    let currentbtn = e.currentTarget.classList;
    // mobile view dropdown for nav
    if (currentbtn.contains("navdrop")) {
      pagelink.classList.toggle("showpage");
      currentbtn.toggle("btn2");
    }
    // for contact/signin or login question
    if (currentbtn.contains("signup")) {
      Question.classList.toggle("showlogin");
    }
    // onclicking sign open sign in page
    if (currentbtn.contains("clicksign-in")) {
      signin_page.classList.add("addz-index");
    }
    if (currentbtn.contains("clicksign-in1")) {
      signin_page.classList.add("addz-index");
      login_page.classList.remove("addz-index");
    }
    // onclicking login open login page
    if (currentbtn.contains("clicklogin")) {
      login_page.classList.add("addz-index");
      signin_page.classList.remove("addz-index");
    }
    // onclicking login at signin page open login page
    if (currentbtn.contains("clicklogin1")) {
      login_page.classList.add("addz-index");
      signin_page.classList.remove("addz-index");
    }
    // onclick go back to previous(Qeustion page)
    if (currentbtn.contains("fa-arrow-left")) {
      signin_page.classList.remove("addz-index");
      login_page.classList.remove("addz-index");
    }
    // prevent the sign up button from working till the detail box has been click
    if (currentbtn.contains("sign-in")) {
      if (detailbox.checked) {
        localStorage.setItem("Email", Email.value);
        localStorage.setItem("password", password.value);
        signin_page.classList.remove("addz-index");
        if (Email.value.includes("@")) {
        } else {
          alert("invaild Email please include @");
          signin_page.classList.add("addz-index");
        }
        e.preventDefault();
        login_page.classList.add("addz-index");
      } else {
        alert("please kindly click the detail box to save your details");
        e.preventDefault();
      }
    }
    if (currentbtn.contains("loginbtn")) {
      // storeditems
      let storedemail = localStorage.getItem("Email");
      let storedpw = localStorage.getItem("password");
      if (rememberme.checked) {
        UName.value = storedemail;
        Upassword.value = storedpw;
      } else {
        e.preventDefault();
        alert(
          "Please sorry for the inconvenience but kindly click on the remember me to input your details"
        );
      }
    }
  });
});

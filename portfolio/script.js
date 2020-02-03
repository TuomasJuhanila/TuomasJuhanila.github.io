const toggleCLass = () => {
  const menu = document.querySelector(".mainMenu");
  menu.classList.toggle("toggleCls");
};
const checkbox = () => {
  let inputs = document.getElementsByTagName("input");
  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].type == "checkbox") { 
      if(inputs[i].checked === false) {
        inputs[i].checked = true; 
      } else {
        if(inputs[i].checked === true) {
          inputs[i].checked = false; 
        }   
      }
    }  
  } 
};

const hamburger = document.querySelector(".sidebarIconToggle");
const mainMenuItems = document.querySelector(".mainMenuItems");

hamburger.addEventListener("click", toggleCLass);
mainMenuItems.addEventListener("click", toggleCLass);
mainMenuItems.addEventListener("click", checkbox);

const email = document.querySelector(".email");
const phone = document.querySelector(".phone");

// const showEmail = () => {
//   const x = document.querySelector(".showEmail");
//   if(x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };
// email.addEventListener("click", showEmail);

// const showPhone = () => {
//   const x = document.querySelector(".showPhone");
//   if(x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// };
// phone.addEventListener("click", showPhone);

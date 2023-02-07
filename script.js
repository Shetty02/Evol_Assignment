console.log("Hi")


const followButtons = document.querySelectorAll(".follow-button");


followButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => followUnFollow(e.target));
  });
  
  function followUnFollow(button) {
    button.classList.toggle("followed");
    if (button.innerText == "Follow") button.innerText = "Following";
    else button.innerText = "Follow";
  }
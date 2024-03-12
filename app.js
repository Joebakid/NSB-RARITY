//ADS CHANGE COLOR

// PRELOADER

document.addEventListener("DOMContentLoaded", () => {
  // Display the preloader
  const preloader = document.querySelector(".preloader");
  preloader.style.display = "flex"; // Show the preloader

  // Hide the preloader after 3 seconds
  setTimeout(() => {
    preloader.style.display = "none"; // Hide the preloader
  }, 3000); // 3000 milliseconds = 3 seconds
});

// Function to generate random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change the color of the link
function changeLinkColor() {
  var link = document.getElementById("adLink");
  link.style.color = getRandomColor(); // Set random color
}

// Change link color every 2 seconds
setInterval(changeLinkColor, 2000);

// SEARCH
const search = () => {
  const searchBox = document.getElementById("search-item").value.toUpperCase();
  const storeItems = document.getElementById("project-list");
  const project = document.querySelectorAll(".card");
  const projectName = document.getElementsByTagName("h2");

  for (var i = 0; i < projectName.length; i++) {
    let match = project[i].getElementsByTagName("h2")[0];
    if (match) {
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toLocaleUpperCase().indexOf(searchBox) > -1) {
        project[i].style.display = "";
      } else {
        project[i].style.display = "none";
      }
    }
  }
};

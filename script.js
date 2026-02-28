function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function togglePickup() {
  const pickup = document.getElementById("pickupDropdown");
  pickup.style.display = pickup.style.display === "block" ? "none" : "block";
}

function showNow() {
  document.getElementById("calendarContainer").style.display = "none";
  alert("Pickup: Now");
}

function showLater() {
  document.getElementById("calendarContainer").style.display = "block";
}

document.addEventListener("click", function (e) {
  const menu = document.getElementById("dropdownMenu");
  const icon = document.querySelector(".menu-icon");

  if (!icon.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

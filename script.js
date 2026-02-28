function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("show");
}

function closeMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.remove("show");
}

function togglePickup() {
  const panel = document.getElementById("pickupPanel");
  panel.classList.toggle("show");
}

// Close dropdown if user clicks outside
document.addEventListener("click", (e) => {
  const menu = document.getElementById("dropdownMenu");
  const btn = document.querySelector(".icon-btn");
  if (!menu || !btn) return;

  const clickedInsideMenu = menu.contains(e.target);
  const clickedButton = btn.contains(e.target);

  if (!clickedInsideMenu && !clickedButton) {
    menu.classList.remove("show");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

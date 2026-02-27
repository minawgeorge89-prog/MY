function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function togglePickup() {
  const dropdown = document.getElementById("pickupDropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function showNow() {
  document.getElementById("calendarContainer").style.display = "none";
}

function showLater() {
  const calendar = document.getElementById("calendarContainer");
  calendar.style.display = "block";

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

  const datePicker = document.getElementById("datePicker");
  datePicker.min = today.toISOString().split("T")[0];
  datePicker.max = maxDate.toISOString().split("T")[0];
}

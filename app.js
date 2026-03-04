(function(){
  const pages = ["home","menu","share","warmth","story","contact","order"];

  function showPage(name){
    pages.forEach(p=>{
      const el = document.getElementById(`page-${p}`);
      if(el) el.classList.toggle("active", p === name);
    });
    // close dropdown
    closeDropdown();
    // scroll top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Top nav + buttons
  document.addEventListener("click", (e)=>{
    const btn = e.target.closest("[data-page]");
    if(!btn) return;

    e.preventDefault();
    const page = btn.getAttribute("data-page");
    if(page) showPage(page);
  });

  // Dropdown toggle
  const toggle = document.getElementById("menuToggle");
  const dropdown = document.getElementById("dropdown");

  function openDropdown(){
    dropdown.classList.add("open");
    dropdown.setAttribute("aria-hidden","false");
    toggle.setAttribute("aria-expanded","true");
  }
  function closeDropdown(){
    dropdown.classList.remove("open");
    dropdown.setAttribute("aria-hidden","true");
    toggle.setAttribute("aria-expanded","false");
  }

  toggle?.addEventListener("click", (e)=>{
    e.stopPropagation();
    dropdown.classList.contains("open") ? closeDropdown() : openDropdown();
  });

  // Close when clicking outside
  document.addEventListener("click", (e)=>{
    if(!dropdown.contains(e.target) && e.target !== toggle){
      closeDropdown();
    }
  });

  // Copy share text
  const copyBtn = document.getElementById("copyShare");
  copyBtn?.addEventListener("click", async ()=>{
    const text = "Oh MY! Try the fusion of Neapolitan pizza & Egyptian feteer — fresh dough, bold flavor.";
    try{
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copied ✅";
      setTimeout(()=> copyBtn.textContent = "Copy Share Text", 1400);
    }catch{
      alert(text);
    }
  });

  // footer year
  const year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();

  // default
  showPage("home");
})();

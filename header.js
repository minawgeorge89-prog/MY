(function(){
  function qs(sel, root=document){ return root.querySelector(sel); }

  function getCartCount(){
    try{
      const cart = JSON.parse(localStorage.getItem("MY_CART") || "[]");
      return cart.reduce((sum, item)=> sum + (item.qty || 1), 0);
    }catch{ return 0; }
  }

  function renderHeader(){
    const cfg = window.SITE;
    if(!cfg) return;

    // Apply theme variables from config
    const r = document.documentElement;
    r.style.setProperty("--bg", cfg.brand.colors.bg);
    r.style.setProperty("--brand", cfg.brand.colors.brand);
    r.style.setProperty("--text", cfg.brand.colors.text);
    r.style.setProperty("--muted", cfg.brand.colors.muted);
    r.style.setProperty("--border", cfg.brand.colors.border);

    const mount = qs("#siteHeader");
    if(!mount) return;

    const dropdownLinks = cfg.header.dropdown
      .map(i => `<a href="${i.href}">${i.label}</a>`)
      .join("");

    // Cart icon with wood accent
    const cartSvg = `
      <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 6h15l-2 8H8L6 6Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M6 6 5 3H2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="9" cy="19" r="1.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <circle cx="18" cy="19" r="1.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <rect x="1.7" y="2.1" width="4.2" height="1.9" rx="0.9" fill="var(--brand)" opacity="0.9"/>
      </svg>
    `;

    mount.innerHTML = `
      <header class="header">
        <div class="header-inner">
          <div class="brand-left">
            <a class="logo-wrap" href="index.html" aria-label="Home">
              <img src="assets/logo.png" alt="Oh MY logo"/>
            </a>
          </div>

          <div class="brand-center">
            <div class="brand-name">${cfg.brand.displayName}</div>
            <div class="brand-slogan">${cfg.brand.slogan}</div>
            <div class="business-name">${cfg.brand.businessName}</div>
          </div>

          <div class="brand-right">
            <a class="icon-btn" href="cart.html" aria-label="Cart">
              ${cartSvg}
              <span class="cart-badge" id="cartBadge" style="display:none">0</span>
            </a>

            <a class="order-btn" href="${cfg.header.orderButtonHref}">
              ${cfg.header.orderButtonText}
            </a>

            <div class="dropdown">
              <button class="icon-btn" id="menuBtn" aria-label="Open menu">
                <span class="hamburger" aria-hidden="true">
                  <span></span><span></span><span></span>
                </span>
              </button>

              <nav class="dropdown-menu" id="dropdownMenu">
                ${dropdownLinks}
              </nav>
            </div>
          </div>
        </div>
      </header>
    `;

    // Menu toggle
    const menuBtn = qs("#menuBtn");
    const menu = qs("#dropdownMenu");
    menuBtn?.addEventListener("click", (e)=>{
      e.stopPropagation();
      menu.classList.toggle("show");
    });
    document.addEventListener("click", ()=> menu?.classList.remove("show"));
    menu?.addEventListener("click", (e)=> e.stopPropagation());

    // Cart badge
    const badge = qs("#cartBadge");
    const count = getCartCount();
    if(badge){
      badge.textContent = String(count);
      badge.style.display = count > 0 ? "flex" : "none";
    }
  }

  window.renderHeader = renderHeader;
  document.addEventListener("DOMContentLoaded", renderHeader);
})();

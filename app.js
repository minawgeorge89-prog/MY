(function(){
  window.MY = {
    toast(msg){
      let el = document.getElementById("toast");
      if(!el){
        el = document.createElement("div");
        el.id = "toast";
        el.style.position = "fixed";
        el.style.left = "50%";
        el.style.bottom = "18px";
        el.style.transform = "translateX(-50%)";
        el.style.background = "rgba(43,43,43,0.92)";
        el.style.color = "white";
        el.style.padding = "10px 12px";
        el.style.borderRadius = "14px";
        el.style.boxShadow = "0 10px 28px rgba(0,0,0,0.22)";
        el.style.fontWeight = "800";
        el.style.zIndex = "999";
        el.style.maxWidth = "92vw";
        el.style.textAlign = "center";
        el.style.opacity = "0";
        el.style.transition = "opacity 180ms ease";
        document.body.appendChild(el);
      }
      el.textContent = msg;
      el.style.opacity = "1";
      clearTimeout(el._t);
      el._t = setTimeout(()=>{ el.style.opacity = "0"; }, 1800);
    },

    getCart(){
      try{ return JSON.parse(localStorage.getItem("MY_CART") || "[]"); }catch{ return []; }
    },
    setCart(cart){
      localStorage.setItem("MY_CART", JSON.stringify(cart));
      if(window.renderHeader) window.renderHeader();
    },
    addToCart(item){
      const cart = window.MY.getCart();
      const idx = cart.findIndex(x => x.id === item.id);
      if(idx >= 0) cart[idx].qty = (cart[idx].qty || 1) + 1;
      else cart.push({ ...item, qty: 1 });
      window.MY.setCart(cart);
      window.MY.toast("Added to cart");
    },
    clearCart(){
      window.MY.setCart([]);
      window.MY.toast("Cart cleared");
    }
  };
})();

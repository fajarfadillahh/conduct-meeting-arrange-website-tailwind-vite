import "../css/index.css";

// ===== SHOW MENU =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  toggle.onclick = () => {
    menu.classList.toggle("show-menu");
  };
}
showMenu("header-menu", "header-toggle");

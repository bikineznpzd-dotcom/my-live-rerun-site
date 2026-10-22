const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");

const setNavigationOpen = (open) => {
  if (navigation) navigation.dataset.open = String(open);
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  }
};

menuButton?.addEventListener("click", () => {
  const open = navigation?.dataset.open !== "true";
  setNavigationOpen(open);
});

navigation?.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  setNavigationOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !navigation) return;
  const wasOpen = navigation.dataset.open === "true";
  setNavigationOpen(false);
  if (wasOpen) menuButton?.focus();
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

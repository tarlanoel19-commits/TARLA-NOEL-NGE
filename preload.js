// Preload file kept intentionally tiny.
// The app does not need Node.js access in the browser window, which keeps it safer.

window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.dataset.platform = process.platform;
});

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".products-grid");
  const viewButtons = document.querySelectorAll(".view-btn");

  if (!grid || viewButtons.length === 0) return;

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.view;

      // Toggle grid/list class
      grid.classList.toggle("list-view", view === "list");
      grid.classList.toggle("grid-view", view === "grid");

      // Update active state
      viewButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Persist preference
      localStorage.setItem("shopView", view);
    });
  });

  // Load saved preference
  const savedView = localStorage.getItem("shopView");
  if (savedView) {
    const targetBtn = document.querySelector(
      `.view-btn[data-view="${savedView}"]`
    );
    targetBtn?.click();
  }
});

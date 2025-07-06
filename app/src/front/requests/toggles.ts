export function togglePostForm() {

  const toggleButton = document.getElementById("toggle-form");
  const formContainer = document.getElementById("form-container");

  toggleButton?.addEventListener("click", () => {
    formContainer?.classList.toggle("hidden");
  });

}

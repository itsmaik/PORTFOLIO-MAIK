document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[name='contact']");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      alert("Thanks! Your message has been sent successfully.");
      form.reset();
    } catch (err) {
      alert("Oops! Something went wrong. Please try again later.");
      console.error(err);
    }
  });
});

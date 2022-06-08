document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact__form");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let formData = new FormData(contactForm);
    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      contactForm.reset();
    } else {
      alert("ERROR");
    }
  });
});

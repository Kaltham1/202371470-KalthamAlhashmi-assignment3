const toggleBtn = document.getElementById("toggle-btn");
const moreText = document.getElementById("read-more");

toggleBtn.addEventListener("click", () => {
  moreText.classList.toggle("hidden");
  toggleBtn.textContent = moreText.classList.contains("hidden")
    ? "Read More"
    : "Read Less";
});

const contactForm = document.getElementById("contact-form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const feedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  feedback.textContent = "Sending...";
  feedback.style.color = "black";

  const nameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

  if (!nameValue || !emailValue || !phoneValue || !messageValue) {
    feedback.textContent = "Please fill in all fields before sending your message.";
    feedback.style.color = "red";
    return;
  }

  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  if (!phoneValue.startsWith("05") || phoneValue.length < 10) {
    feedback.textContent = "Please enter a valid phone number starting with 05.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = `Thank you, ${nameValue}! Your message was sent successfully.`;
  feedback.style.color = "green";

  contactForm.reset();
});

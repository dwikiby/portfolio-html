document.addEventListener("DOMContentLoaded", (event) => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Random color generator for project cards
  const projectCards = document.querySelectorAll(".project-card");
  const colors = ["#ff6b6b", "#4ecdc4", "#ffe66d", "#ff8c42", "#6b5b95"];

  projectCards.forEach((card) => {
    card.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.1)";
      card.style.transition = "all 0.3s ease";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
      card.style.transition = "all 0.3s ease";
    });
  });

  // Hover effect for social media links
  const socialLinks = document.querySelectorAll("#social ul li");

  socialLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.1)";
      link.style.transition = "all 0.3s ease";
    });

    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
    });
  });

  // Hover effect for skill items
  const skillItems = document.querySelectorAll("#skills ul li");

  skillItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.1) rotate(5deg)";
      item.style.transition = "all 0.3s ease";
    });

    item.addEventListener("mouseout", () => {
      item.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Add a simple animation to the header
  const header = document.querySelector("header");
  header.style.transition = "all 0.5s ease";

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.transform = "translateY(-20px)";
      header.style.opacity = "0.8";
    } else {
      header.style.transform = "translateY(0)";
      header.style.opacity = "1";
    }
  });
});

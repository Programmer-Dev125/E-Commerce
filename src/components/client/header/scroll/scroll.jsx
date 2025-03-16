export function handleScroll(e) {
  switch (e.target.textContent) {
    case "Contact":
      {
        document.querySelector(".contact-section").scrollIntoView(true, {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
      break;
    case "About":
      {
        document.querySelector(".about-section").scrollIntoView(true, {
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
      break;
    default:
      break;
  }
}

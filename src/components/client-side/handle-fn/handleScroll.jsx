export function handleScroll(e) {
  const elem = e.target;
  switch (elem.textContent) {
    case "Contact":
      document.querySelector(".contact-section").scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "start",
      });

      break;
    case "About":
      document.querySelector(".about-section").scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "start",
      });
      break;
    default:
      break;
  }
}

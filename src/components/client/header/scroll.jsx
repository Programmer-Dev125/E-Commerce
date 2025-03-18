export function handleScroll(e) {
  switch (e.target.textContent) {
    case "Contact":
      document.querySelector(".contact-section").scrollIntoView(true, {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
      break;
    case "About":
      document.querySelector(".about-section").scrollIntoView(true, {
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
      break;
    default:
      break;
  }
}

export function Route(e, onRoute) {
  switch (e.target.textContent) {
    case "Home":
      {
        onRoute("/");
        window.history.pushState({}, "", "/");
      }
      break;
    case "Products":
      {
        onRoute("/products");
        window.history.pushState({}, "", "/products");
      }
      break;
    case "E.":
      {
        onRoute("/");
        window.history.pushState({}, "", "/");
      }
      break;
    default:
      break;
  }
}

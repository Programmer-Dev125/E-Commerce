export function handleSearchBox(e, val, setVal) {
  e.stopPropagation();
  if (
    e.target.classList.contains("full-search-width") ||
    e.target.tagName === "path" ||
    e.target.tagName === "svg"
  ) {
    if (val) {
      document.querySelector(".search-box").classList.add("toClose");
      document.querySelector(".below-search-icon").classList.remove("active");
      setTimeout(() => {
        setVal((n) => (n = false));
        if (window.innerWidth > 768) {
          document.querySelector("body").classList.remove("no-scroll");
        }
      }, 300);
      return;
    }
    setVal((n) => (n = true));
    document.querySelector("body").classList.add("no-scroll");
    document.querySelector(".below-search-icon").classList.add("active");
  }
}

export function handleCartBox(e, cartVal, setCartVal) {
  e.stopPropagation();
  if (
    e.target.classList.contains("full-cart-width") ||
    e.target.tagName === "path" ||
    e.target.tagName === "svg"
  ) {
    if (cartVal) {
      document.querySelector(".cart-box").classList.add("toClose");
      document.querySelector(".below-cart-icon").classList.remove("active");
      setTimeout(() => {
        setCartVal((n) => (n = false));
        if (window.innerWidth > 768) {
          document.querySelector("body").classList.remove("no-scroll");
        }
      }, 300);
      return;
    }
    setCartVal((n) => (n = true));
    document.querySelector("body").classList.add("no-scroll");
    document.querySelector(".below-cart-icon").classList.add("active");
  }
}

export function handleDiv(e) {
  e.stopPropagation();
  const isMain = document.querySelector(".right-row-in");
  const isMenuText = document.querySelector(".menu-text-mobile");
  if (e.target.tagName !== "P") return;
  switch (e.target.textContent) {
    case "About":
      isMain.querySelector(".toAbsolute-mob").classList.add("isClosed");
      setTimeout(() => {
        isMenuText.classList.remove("active");
        document.querySelector("body").classList.remove("no-scroll");
        isMain.classList.remove("mob");
        document.querySelector(".about-section").scrollIntoView(true, {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 200);
      break;
    case "Contact":
      isMain.querySelector(".toAbsolute-mob").classList.add("isClosed");
      setTimeout(() => {
        isMenuText.classList.remove("active");
        document.querySelector("body").classList.remove("no-scroll");
        isMain.classList.remove("mob");
        document.querySelector(".contact-section").scrollIntoView(true, {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 200);
      break;
    case "Products":
      isMain.querySelector(".toAbsolute-mob").classList.add("isClosed");
      setTimeout(() => {
        isMenuText.classList.remove("active");
        document.querySelector("body").classList.remove("no-scroll");
        isMain.classList.remove("mob");
        document.querySelector(".product-section").scrollIntoView(true, {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 200);
      break;
    default:
      break;
  }
}

export function handleModal(e, accountVal, setAccountVal) {
  e.stopPropagation();
  if (
    e.target.classList.contains("account-modal") ||
    e.target.tagName === "BUTTON" ||
    e.target.tagName === "svg" ||
    e.target.tagName === "path"
  ) {
    if (accountVal) {
      document.querySelector(".account-modal").classList.add("toClose");
      setTimeout(() => {
        setAccountVal((n) => (n = false));
        if (window.innerWidth > 768) {
          document.querySelector("body").classList.remove("no-scroll");
        }
      }, 1000);
      return;
    }
    setAccountVal((n) => (n = true));
    document.querySelector("body").classList.add("no-scroll");
  }
}

export function handleMobileMenu(e) {
  e.preventDefault();
  e.stopPropagation();
  const isMain = document.querySelector(".right-row-in");
  const isMenuText = document.querySelector(".menu-text-mobile");

  if (!e.target.classList.contains("mob")) {
    isMenuText.classList.add("active");
    document.querySelector("body").classList.add("no-scroll");
    isMain.classList.add("mob");
    isMain.querySelector(".toAbsolute-mob").classList.remove("isClosed");
  } else {
    isMain.querySelector(".toAbsolute-mob").classList.add("isClosed");
    setTimeout(() => {
      isMenuText.classList.remove("active");
      document.querySelector("body").classList.remove("no-scroll");
      isMain.classList.remove("mob");
    }, 200);
  }
}

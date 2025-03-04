export function handleObserver() {
  const isContact = document.querySelector(".contact-section");
  const toContent = document.querySelector(".client-content-section");
  const isProduct = document.querySelector(".product-section");
  const isAbout = document.querySelector(".about-section");

  function handleContact(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isContact.querySelector(".left-contact").classList.add("toAnimate");
        isContact.querySelector(".right-contact").classList.add("toAnimate");
      }
    });
  }

  function handleContent(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        toContent.classList.add("toAnimate");
      }
    });
  }

  function handleProduct(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isProduct.classList.add("toAnimate");
      }
    });
  }

  function handleAbout(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isAbout.querySelector(".about-text-content").classList.add("toAnimate");
      }
    });
  }

  const observer = new IntersectionObserver(handleContact, {
    root: null,
    threshold: 0.4,
  });

  const contentObserver = new IntersectionObserver(handleContent, {
    root: null,
    threshold: 0.4,
  });

  const productObserver = new IntersectionObserver(handleProduct, {
    root: null,
    threshold: 0.4,
  });

  const aboutObserver = new IntersectionObserver(handleAbout, {
    root: null,
    threshold: 0.4,
  });

  observer.observe(isContact);
  contentObserver.observe(toContent);
  productObserver.observe(isProduct);
  aboutObserver.observe(isAbout);
}

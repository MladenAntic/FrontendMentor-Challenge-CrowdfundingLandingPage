const bookmark = document.querySelector(".cta-bookmark");
const bookmarkMobile = document.querySelector(".icon-bookmark-mobile");
const toggleMenu = document.querySelector(".toggle-menu");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.querySelector(".overlay");

const closeMenu = document.createElement("div");
closeMenu.innerHTML = `<img src="images/icon-close-menu.svg" alt="Icon Close Menu"/>`;
closeMenu.style.position = "fixed";
closeMenu.style.right = "13%";
closeMenu.style.cursor = "pointer";
closeMenu.style.zIndex = "10";

const bookmarked = document.createElement("button");
bookmarked.innerHTML = `<img src="images/icon-bookmarked.svg" class="icon-bookmark" alt="Icon Bookmark"/>Bookmarked`;
bookmarked.classList.add("cta-bookmark");
const bookmarkedMobile = document.createElement("div");
bookmarkedMobile.innerHTML = `<img src="images/icon-bookmarked.svg" class="icon-bookmark" alt="Icon Bookmark"/>`;
bookmarkedMobile.style.width = "50px";
bookmarkedMobile.style.height = "50px";
bookmarkedMobile.style.cursor = "pointer";

const supportProject = document.querySelectorAll(".cta-support");

const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close-modal");
const selectSupport = document.querySelectorAll(".select-support");
const selectOption = document.querySelectorAll('.select')
const pledge = document.querySelectorAll(".pledge-container");
const pledgeAmount = document.querySelectorAll(".pledge-amount");
const completePledge = document.querySelectorAll(".complete-pledge");

const modalCompleted = document.getElementById("modal-completed");
const confirmBtn = document.querySelector(".confirm");

bookmark.addEventListener("click", () => {
  bookmark.replaceWith(bookmarked);
  bookmarked.style.color = "var(--dark-cyan)";

  bookmarked.addEventListener("click", () => {
    bookmarked.replaceWith(bookmark);
  });
});

bookmarkMobile.addEventListener("click", () => {
  bookmarkMobile.replaceWith(bookmarkedMobile);

  bookmarkedMobile.addEventListener("click", () => {
    bookmarkedMobile.replaceWith(bookmarkMobile);
  });
});

toggleMenu.addEventListener("click", () => {
  toggleMenu.replaceWith(closeMenu);
  overlay.style.display = "block";
  mobileMenu.style.display = "block";

  closeMenu.addEventListener("click", () => {
    closeMenu.replaceWith(toggleMenu);

    overlay.style.display = "none";
    mobileMenu.style.display = "none";
  });
});

function hideMobileMenu() {
  if (window.innerWidth >= 768) {
    closeMenu.replaceWith(toggleMenu);

    overlay.style.display = "none";
    mobileMenu.style.display = "none";
  }
}

window.addEventListener("resize", hideMobileMenu);

supportProject.forEach((project) => {
  project.addEventListener("click", () => {
    overlay.style.display = "block";
    modal.style.display = "block";
    selectOption.forEach(option => {
      option.checked = false
    })
  });
});

supportProject[0].addEventListener("click", () => {
  selectSupport[0].style.border = "1px solid var(--dark-gray)";
  selectSupport[0].style.cursor = "pointer";
  pledge[0].style.display = "none";
  selectSupport[1].style.border = "1px solid var(--dark-gray)";
  selectSupport[1].style.cursor = "pointer";
  pledge[1].style.display = "none";
  selectSupport[2].style.border = "1px solid var(--dark-gray)";
  selectSupport[2].style.cursor = "pointer";
  pledge[2].style.display = "none";
});

function displayModalComplete() {
  overlay.style.display = "block";
  modal.style.display = "none";
  modalCompleted.style.display = "block";
}

completePledge[0].addEventListener("click", () => {
  displayModalComplete()
});

function pledge25() {
  selectSupport[1].style.border = "1px solid var(--moderate-cyan)";
  selectSupport[1].style.cursor = "auto";
  pledge[1].style.display = "flex";
  selectOption[1].checked = true

  if (pledgeAmount[0].value < 25) {
    completePledge[1].addEventListener("click", () => {
      pledgeAmount[0].style.border = "1px solid red";
      modalCompleted.style.display = "none";
    });
  } else if (pledgeAmount[0].value >= 25) {
    completePledge[1].addEventListener("click", () => {
      pledgeAmount[0].style.border = "1px solid var(--dark-gray)";
      displayModalComplete()
    });
  }
}

function pledge75() {
  selectSupport[2].style.border = "1px solid var(--moderate-cyan)";
  selectSupport[2].style.cursor = "auto";
  pledge[2].style.display = "flex";
  selectOption[2].checked = true

  if (pledgeAmount[1].value < 75) {
    completePledge[2].addEventListener("click", () => {
      pledgeAmount[1].style.border = "1px solid red";
      modalCompleted.style.display = "none";
    });
  } else if (pledgeAmount[1].value >= 75) {
    completePledge[2].addEventListener("click", () => {
      pledgeAmount[1].style.border = "1px solid var(--dark-gray)";
      displayModalComplete()
    });
  }
}

supportProject[1].addEventListener("click", () => {
  pledge25();

  selectSupport[0].style.border = "1px solid var(--dark-gray)";
  selectSupport[0].style.cursor = "pointer";
  pledge[0].style.display = "none";
  selectSupport[2].style.border = "1px solid var(--dark-gray)";
  selectSupport[2].style.cursor = "pointer";
  pledge[2].style.display = "none";
});

supportProject[2].addEventListener("click", () => {
  pledge75();

  selectSupport[0].style.border = "1px solid var(--dark-gray)";
  selectSupport[0].style.cursor = "pointer";
  pledge[0].style.display = "none";
  selectSupport[1].style.border = "1px solid var(--dark-gray)";
  selectSupport[1].style.cursor = "pointer";
  pledge[1].style.display = "none";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  overlay.style.display = "none";
});

selectSupport[0].addEventListener("click", () => {
  selectSupport[0].style.border = "1px solid var(--moderate-cyan)";
  selectSupport[0].style.cursor = "auto";
  pledge[0].style.display = "flex";
  selectOption[0].checked = true

  selectSupport[1].style.border = "1px solid var(--dark-gray)";
  selectSupport[2].style.border = "1px solid var(--dark-gray)";
  selectSupport[1].style.cursor = "pointer";
  selectSupport[2].style.cursor = "pointer";
  pledge[1].style.display = "none";
  pledge[2].style.display = "none";
});

selectSupport[1].addEventListener("click", () => {
  pledge25();

  selectSupport[0].style.border = "1px solid var(--dark-gray)";
  selectSupport[2].style.border = "1px solid var(--dark-gray)";
  selectSupport[0].style.cursor = "pointer";
  selectSupport[2].style.cursor = "pointer";
  pledge[0].style.display = "none";
  pledge[2].style.display = "none";
});

selectSupport[2].addEventListener("click", () => {
  pledge75();

  selectSupport[0].style.border = "1px solid var(--dark-gray)";
  selectSupport[1].style.border = "1px solid var(--dark-gray)";
  selectSupport[0].style.cursor = "pointer";
  selectSupport[1].style.cursor = "pointer";
  pledge[0].style.display = "none";
  pledge[1].style.display = "none";
});

confirmBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  modalCompleted.style.display = "none";
});

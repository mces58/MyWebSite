function navbarMobile() {
  if (window.scrollY === 0) {
    document.body
      .querySelector("#main-navbar")
      .classList.remove("navbar-mobile");
  } else {
    document.body.querySelector("#main-navbar").classList.add("navbar-mobile");
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  navbarMobile();
  document.addEventListener("scroll", navbarMobile);
});

var animatedText = document.querySelectorAll(".animated-text");

function animate(element) {
  var textArray = element.innerText.split("");
  element.firstChild.remove();

  var elArray = textArray.map((letter, index) => {
    if (letter == " ") letter = "&nbsp;";
    var el = document.createElement("span");
    el.className = "letter";
    el.innerHTML = letter;
    el.style.animationDelay = index / textArray.length + "s";
    element.appendChild(el);
    return el;
  });
  element.innerHtml = elArray;
}

Array.from(animatedText).map(animate);

var tag = document.querySelector("[data-headline]"),
  glossary = [
    "Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including JavaScript.",
  ];
tag.setAttribute("data-headline", 0);
typewriter(0);

function typewriter(element) {
  var tag = document.querySelector('[data-headline="' + element + '"]');
  var word = ~~(Math.random() * glossary.length);
  spellWord(tag, word);
}

function spellWord(tag, word) {
  var word = glossary[word];
  var letters = word.length;
  var count = 0;
  var animation = setInterval(function () {
    tag.innerHTML += word[count];
    letters--;
    count++;
    if (letters == 0) {
      clearInterval(animation);
      setTimeout(function () {
        tag.innerHTML = "";
        typewriter(tag.getAttribute("data-headline"));
      }, 2500);
    }
  }, 100);
}

window.addEventListener("scroll", function () {
  document.querySelectorAll(".my-section").forEach(function (section) {
    const sectionTop = section.offsetTop - 50;
    const sectionBottom = sectionTop + section.offsetHeight;
    const navLinks = document.querySelectorAll(
      "#main-navbar .nav-item a.nav-link"
    );

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionBottom
    ) {
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active-link");
      });

      const activeNavLink = document.querySelector(
        `#main-navbar .nav-item a.nav-link[href='#${section.id}']`
      );
      activeNavLink.classList.add("active-link");
    }
  });
});

var btnCanvas = document.querySelectorAll(".btn-close-canvas");

for (let i = 0; i < btnCanvas.length; i++) {
  btnCanvas[i].addEventListener("click", function () {
    document.querySelector('[data-bs-dismiss="offcanvas"]').click();
  });
}

var modalLinks = document.querySelectorAll(".modal-links");
var themeToggle = document.querySelector("#theme-toggle");
var themeSetting = document.querySelector("#theme-setting");
var btnCloseModal = document.querySelectorAll(".btn-close-modal");

for (let i = 0; i < modalLinks.length; i++) {
  modalLinks[i].addEventListener("click", function () {
    themeToggle.classList.remove("theme-toggle");
    themeSetting.style.display = "none";
  });
}

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener("click", function () {
    themeToggle.classList.add("theme-toggle");
    themeSetting.style.display = "block";
  });
}

var btn = document.querySelector("#submit-button");

btn.addEventListener("click", function () {
  this.classList.add("btn-progress");

  setTimeout(function () {
    btn.classList.add("btn-fill");
  }, 500);

  setTimeout(function () {
    btn.classList.remove("btn-fill");
  }, 4500);

  setTimeout(function () {
    btn.classList.add("btn-complete");
  }, 4500);

  setTimeout(function () {
    btn.classList.remove("btn-complete");
  }, 6000);

  setTimeout(function () {
    btn.classList.add("btn-progress");
  }, 6000);
});

(function () {
  "use strict";
  var myName = document.querySelector("#name");
  var myMail = document.querySelector("#mail");
  var mySubject = document.querySelector("#subject");
  var myMessage = document.querySelector("#message");
  var myBtn = document.querySelector("#submit-button");

  if (myMessage.value.length == 0) {
    myBtn.disabled = true;
    myBtn.style.cursor = "not-allowed";
  }

  const namePattern = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  const emailPattern =
    /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

  myName.addEventListener("blur", controlName);
  myMail.addEventListener("blur", controlEmail);
  mySubject.addEventListener("blur", controlSubject);
  myMessage.addEventListener("blur", controlMessage);

  function controlName() {
    var myError = document.querySelector("#error-name");
    if (myName.value.length == 0) {
      myName.classList.remove("is-valid");
      myName.classList.add("is-invalid");
      myError.textContent = "Name is required!";
      return false;
    } else if (myName.value.length < 3) {
      myName.classList.remove("is-valid");
      myName.classList.add("is-invalid");
      myError.textContent = "Your name can not be less than 3 characters!";
      return false;
    } else if (!namePattern.test(myName.value)) {
      myName.classList.remove("is-valid");
      myName.classList.add("is-invalid");
      myError.textContent = "Name is not valid format!";
      return false;
    } else {
      myName.classList.remove("is-invalid");
      myName.classList.add("is-valid");
      return true;
    }
  }

  function controlEmail() {
    var myError = document.querySelector("#error-mail");
    if (myMail.value.length == 0) {
      myMail.classList.remove("is-valid");
      myMail.classList.add("is-invalid");
      myError.textContent = "Mail is required!";
      return false;
    } else if (!emailPattern.test(myMail.value)) {
      myMail.classList.remove("is-valid");
      myMail.classList.add("is-invalid");
      myError.textContent = "Mail is not valid format!";
      return false;
    } else {
      myMail.classList.remove("is-invalid");
      myMail.classList.add("is-valid");
      return true;
    }
  }

  function controlSubject() {
    var myError = document.querySelector("#error-subject");
    if (mySubject.value.length == 0) {
      mySubject.classList.remove("is-valid");
      mySubject.classList.add("is-invalid");
      myError.textContent = "Subject is required!";
      return false;
    } else {
      mySubject.classList.remove("is-invalid");
      mySubject.classList.add("is-valid");
      return true;
    }
  }

  function controlMessage() {
    var myError = document.querySelector("#error-message");
    if (myMessage.value.length == 0) {
      myMessage.classList.remove("is-valid");
      myMessage.classList.add("is-invalid");
      myError.textContent = "Message is required!";
      return false;
    } else if (myMessage.value.length < 10) {
      myMessage.classList.remove("is-valid");
      myMessage.classList.add("is-invalid");
      myError.textContent = "Your message can not be less than 10 characters!";
      return false;
    } else {
      myMessage.classList.remove("is-invalid");
      myMessage.classList.add("is-valid");
      return true;
    }
  }

  myMessage.addEventListener("keyup", function () {
    document.getElementById("current-character").textContent =
      myMessage.value.length;
    if (myMessage.value.length >= 10) {
      myBtn.disabled = false;
      myBtn.style.cursor = "pointer";
      myBtn.title = "";
    } else {
      myBtn.disabled = true;
      myBtn.style.cursor = "not-allowed";
    }
  });

  var myForms = document.querySelector(".need-validation");
  myForms.addEventListener(
    "submit",
    function (e) {
      if (
        !myForms.checkValidity() ||
        !controlName() ||
        !controlEmail() ||
        !controlSubject() ||
        !controlMessage()
      ) {
        e.preventDefault();
        e.stopPropagation();
        setTimeout(function () {
          myBtn.classList.add("btn-fail");
        }, 4500);
        setTimeout(function () {
          myBtn.classList.remove("btn-fail");
        }, 6000);

        setTimeout(function () {
          myBtn.classList.add("btn-progress");
        }, 6000);
      } else {
        document.getElementById("form-contact").reset();
        document.getElementById("current-character").textContent = "0";
        myName.classList.remove("is-valid");
        myMail.classList.remove("is-valid");
        mySubject.classList.remove("is-valid");
        myMessage.classList.remove("is-valid");
        if (myMessage.value.length < 10) {
          myBtn.disabled = true;
          myBtn.style.cursor = "not-allowed";
        } else {
          myBtn.disabled = false;
          myBtn.style.cursor = "pointer";
          myBtn.title = "";
        }
      }
    },
    false
  );
})();

const toastMessage = document.getElementById("message");
const toastLive = document.getElementById("liveToast");

if (toastMessage) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
  toastMessage.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

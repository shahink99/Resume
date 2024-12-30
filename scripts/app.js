const navToggleIcon = document.querySelector(".nav__toggle-icon");
const navToggleIconMenu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
// const liItems = document.querySelectorAll(".Resume__icons");

const liItems = document.querySelectorAll(".Resume__icons");
const liItemsContentMenu = document.querySelectorAll(".Resume__ul-lis");
const contenWrapper = document.querySelectorAll(".Resume__content");
const portfolioContent = document.querySelectorAll(".portfolio-content");
const portFolioLi = document.querySelectorAll(".portfolio-ul-li");

const menuItem = document.querySelectorAll(".menu__item");
const allSection = document.querySelectorAll("main > section");
const changeThemeIcon = document.querySelector(".changeThemeIcon");

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`
const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3,4.9c0.4-0.2,0.6-0.7,0.5-1.1S12.2,3,11.7,3C6.8,3.1,3,7.1,3,12c0,5,4,9,9,9c3.8,0,7.1-2.4,8.4-5.9c0.2-0.4,0-0.9-0.4-1.2c-0.4-0.3-0.9-0.2-1.2,0.1c-1,0.9-2.3,1.4-3.7,1.4c-3.1,0-5.7-2.5-5.7-5.7C9.4,7.8,10.5,5.9,12.3,4.9zM15.1,17.4c0.5,0,1,0,1.4-0.1C15.3,18.4,13.7,19,12,19c-3.9,0-7-3.1-7-7c0-2.5,1.4-4.8,3.5-6c-0.7,1.1-1,2.4-1,3.8C7.4,14,10.9,17.4,15.1,17.4z"/></svg>`



let toggleFlat = false;

if(window.localStorage.getItem('theme')=== 'dark-theme'){
  document.documentElement.classList.add('dark-theme')
}

navToggleIcon.addEventListener("click", function () {
  navToggleIcon.classList.toggle("nav__toggle-icon--open");
  navToggleIconMenu.classList.toggle("menu--open");
  cover.classList.toggle("cover--show");

  // console.log('click shod');
});

// document.addEventListener("DOMContentLoaded", () => {

liItems.forEach((item) => {
  item.addEventListener("click", () => {
    liItems.forEach((li) => {
      li.classList.remove("Resume__icons--active");
    });

    let liID = item.getAttribute("get-content-id");

    console.log("li :", liID);

    contenWrapper.forEach((content) => {
      content.classList.remove("Resume__content-show");
      document.querySelector(liID).classList.add("Resume__content-show");
    });

    item.classList.add("Resume__icons--active");
  });
});

liItemsContentMenu.forEach((liMenu) => {
  liMenu.addEventListener("click", () => {
    liItemsContentMenu.forEach((liMenuItems) => {
      liMenuItems.classList.remove("Resume__ul-lis--active");
    });

    let liID = liMenu.getAttribute("get-content-id");

    console.log("li :", liID);

    contenWrapper.forEach((content) => {
      content.classList.remove("Resume__content-show");
      document.querySelector(liID).classList.add("Resume__content-show");
    });

    liMenu.classList.add("Resume__ul-lis--active");
  });
});

portFolioLi.forEach((portLi) => {
  portLi.addEventListener("click", () => {
    portFolioLi.forEach((portLiItems) => {
      portLiItems.classList.remove("portfolio-ul-li--active");
    });

    let portLiID = portLi.getAttribute("data-content-id");
    console.log(portLiID);

    portfolioContent.forEach((portContent) => {
      portContent.classList.remove("portfolio-content--show");
      document
        .getElementById(portLiID)
        .classList.add("portfolio-content--show");
    });

    portLi.classList.add("portfolio-ul-li--active");
  });
});

menuItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    menuItem.forEach((li) => {
      li.classList.remove("menu__item--active");
    });

    let liContent = item.getAttribute("data-section");
    const sectionOffset = document.querySelector(`.${liContent}`).offsetTop;

    console.log("li :", liContent);
    console.log("li Offset :", sectionOffset);

    window.scrollTo({
      top: sectionOffset - 120,
      behavior: "instant",
    });

    item.classList.add("menu__item--active");
  });
});

const obsever = new IntersectionObserver(obseverHandler, {
  threshold: 0.5,
});

function obseverHandler(section) {
  section.map((sec) => {
    let sectionClassList = sec.target.classList;
    let sectionMenuItem = document.querySelector(`.menu__item[data-section=${sectionClassList}]`)
    console.log(sec);

    if (sec.isIntersecting) {
      sectionMenuItem.classList.add("menu__item--active")
    } else {
      sectionMenuItem.classList.remove("menu__item--active")
    }
  });
}

allSection.forEach((section) => {
  obsever.observe(section);
});

// });

// Dark THeme


changeThemeIcon.addEventListener('click', function () {

  document.documentElement.classList.toggle('dark-theme')

  if (document.documentElement.classList.contains('dark-theme')) {
    changeThemeIcon.innerHTML = darkIcon;
    window.localStorage.setItem('theme', 'dark-theme')

  } else {
    changeThemeIcon.innerHTML = lightIcon;
    window.localStorage.setItem('theme', 'light-theme')

  }

})
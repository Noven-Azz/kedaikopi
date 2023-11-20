// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
// Ketika search form di klik
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shooping-cart
const shoopingCart = document.querySelector(".shopping-cart");
// ketika shooping cart menu di klik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoopingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Klik di luar side bar untuk menghilangkan search form
const search = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Klik di luar side bar untuk menghilangkan shooping cart
const shopping = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!shopping.contains(e.target) && !shoopingCart.contains(e.target)) {
    shoopingCart.classList.remove("active");
  }
});

// modal container
const itemModal1 = document.querySelector(".modal1");
const itemModal2 = document.querySelector(".modal2");
const itemModal3 = document.querySelector(".modal3");

const eye1 = document.querySelector(".eye1");
const eye2 = document.querySelector(".eye2");
const eye3 = document.querySelector(".eye3");

const closeModal1 = document.querySelector(".close-icons1");
const closeModal2 = document.querySelector(".close-icons2");
const closeModal3 = document.querySelector(".close-icons3");

eye1.onclick = (e) => {
  itemModal1.style.display = "flex";
  e.preventDefault();
};

eye2.onclick = (e) => {
  itemModal2.style.display = "flex";
  e.preventDefault();
};

eye3.onclick = (e) => {
  itemModal3.style.display = "flex";
  e.preventDefault();
};

closeModal1.onclick = (e) => {
  itemModal1.style.display = "none";
  e.preventDefault();
};

closeModal2.onclick = (e) => {
  itemModal2.style.display = "none";
  e.preventDefault();
};

closeModal3.onclick = (e) => {
  itemModal3.style.display = "none";
  e.preventDefault();
};

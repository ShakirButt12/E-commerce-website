const wrapper = document.querySelector(".wrapper");
const menuItems = document.querySelectorAll(".menu");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

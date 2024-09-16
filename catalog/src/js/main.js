import { getBanner, getCatalog, getTabContent } from "./data.js";

const hero = document.querySelector(".slider");

// const heroSlider = async () => {
//     const data = await getBanner();
//     hero.innerHTML = data.map((item) => (
//         `<div><img src="${item.img}"></div>`
//     )).join("");
// };

// heroSlider();

const heroSlider = async () => {
    const data = await getBanner();
    const firstItem = data[0]; // faqat birinchi elementni olamiz
    hero.innerHTML = `<div><img src="${firstItem.img}"></div>`;
};

heroSlider();


const catalog = document.querySelector(".catalog__list");
const box = document.querySelector(".box")
const btns = document.getElementsByClassName("btns");

const catalogList = async () => {
    const data = await getCatalog();
    catalog.innerHTML = data.map((item) => (
        `<li class="w-[230px] rounded-[4px] text-center shadow-md px-[10px] py-[20px]">
        <div class="flex justify-center items-center mb-[10px]"><img src="${item.img}"></div>
        <button class="btns font-semibold text-[16px] text-[#000] hover:text-[#ef4444]" data-name="${item.name}">${item.text}</button>
        
        </li>`
    )).join("")
};

catalogList();

const renderTabContent = async (name) => {
    const data = await getTabContent(name);
    box.innerHTML = data.map((item) => (
      `<li class="w-[250px] rounded-[4px] text-center shadow-md px-[20px] py-[20px] bg-[#fff]">
      <div class="flex justify-center items-center mb-[10px]"><img src="${item.img}"></div>
    <h2 class="font-semibold text-[16px] text-[#000] mb-[10px]">${item.title}</h2>
    <div class="flex justify-between mb-[15px]">
    <p>${item.rame}</p>
    <p>${item.color}</p>
    </div>
    <div class="flex justify-between">
    <p>${item.brand}</p>
    <p>${item.price}</p>
    </div>
    </li>`
  )).join("")
  };

  catalog.addEventListener("click", (e) => {
    if (e.target.dataset.name) {
      renderTabContent(e.target.dataset.name);
      for (let i of btns) {
        i.style.color = "";
      }
      e.target.style.color = "black";
    }
  });

$(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          dots: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

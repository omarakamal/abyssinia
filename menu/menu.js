const menuItems = [
  {
    number: 1,
    amharic: "ዱሌት",
    transliteration: "dulet",
    price: "3.500",
    description: "Lamb trip with liver and lean meat chopped and cooked in spiced butter with pepper, onion, garlic, and mitmita, served with Ethiopian injera.",
    src: "../public/dulet.jpeg" // representative dulet image
  },
  {
    number: 2,
    amharic: "ኪኪል",
    transliteration: "kikil",
    price: "3.500",
    description: "Curried lamb stew cooked with exotic spices and mixed with bits of injera, served with Ethiopian injera.",
    src: "../public/kikil.jpg"
  },
  {
    number: 3,
    amharic: "ባናቱ",
    transliteration: "banatu",
    price: "6.000",
    description: "Kikil fitfit, kitfo, cottage cheese, and boiled egg, served on Ethiopian injera.",
    src: "../public/banatu.avif"
  },
  {
    number: 4,
    amharic: "ቲብስ",
    transliteration: "tibs",
    price: "3.500",
    description: "Tender rib-eye beef tips marinated in berbere, cooked with peppers, onions, garlic, rosemary, and spices, served with injera or flat bread.",
    src: "../public/tibs.webp"
  },
  {
    number: 5,
    amharic: "ጆርጅና",
    transliteration: "georgenna",
    price: "3.500",
    description: "Lamb stew with some bone, cooked with green exotic spices and peppers, served with mitmita on Ethiopian injera.",
    src: "" // image not found
  },
  {
    number: 6,
    amharic: "ቁልፍ እርጥብ",
    transliteration: "key wet",
    price: "3.500",
    description: "Beef stew cooked in berbere sauce and spices, served with Ethiopian injera.",
    src: "../public/key-wet.jpg" 
  },
  {
    number: 7,
    amharic: "አልቻ እርጥብ",
    transliteration: "alcha wet",
    price: "3.500",
    description: "Curried beef stew cooked with exotic spices and peppers, served with Ethiopian injera.",
    src: "../public/alcha-wet.webp"
  },
  {
    number: 8,
    amharic: "ጎረድ ጎሬድ",
    transliteration: "gored gored",
    price: "4.500",
    description: "Lean beef warmed in spiced butter, cooked rare or medium with mitmita sauce, served with Ethiopian injera or flat bread.",
    src: "../public/gored-gored.jpg"
  },
  {
    number: 9,
    amharic: "ኪፍቶ",
    transliteration: "kifto",
    price: "4.500",
    description: "Lean beef chopped and warmed in spiced butter, cooked rare or medium with mitmita, served with cottage cheese and Ethiopian injera.",
    src: "https://tse3.mm.bing.net/th/id/OIP.2sEm5yhrkKk8U2x1cH68SAHaFj"
  },
  {
    number: 10,
    amharic: "ልዩ ኪፍቶ ከቆቾ ጋር",
    transliteration: "special kifto with kocho",
    price: "6.600",
    description: "Lean beef chopped and warmed in spiced butter, cooked rare or medium with mitmita, served with cottage cheese and kocho on Ethiopian injera.",
    src: "../public/special-kifto.jpg"
  },
  {
    number: 11,
    amharic: "ኮርኒስ",
    transliteration: "cornis",
    price: "5.000",
    description: "Lean beef chopped and warmed in spiced butter, mixed with key wet fitfit, served with cottage cheese and gomen on Ethiopian injera.",
    src: "../public/cornis.jpeg"
  },
  {
    number: 12,
    amharic: "ቋንጣ ፍርፍር",
    transliteration: "quanta firfir",
    price: "3.500",
    description: "Dried beef stewed in berbere sauce and spices, mixed with injera, served with boiled egg on Ethiopian injera.",
    src: "../public/quanta-firfir.jpg"
  },
  {
    number: 13,
    amharic: "ቲብስ ፍርፍር",
    transliteration: "tibs firfir",
    price: "3.500",
    description: "Beef stewed in berbere sauce and spices, mixed with injera, served with boiled egg on Ethiopian injera.",
    src: "../public/tibs-firfir.jpeg"
  },
  {
    number: 14,
    amharic: "የቁልፍ ዘንጎች",
    transliteration: "key tibs",
    price: "3.500",
    description: "Tender beef pieces marinated in berbere, cooked with peppers, onions, garlic, rosemary, and spices, served with Ethiopian injera or flat bread.",
    src: "../public/key-tibs.webp"
  },
  {
    number: 15,
    amharic: "ጅባ ቲብስ",
    transliteration: "jeba tibs",
    price: "5.000",
    description: "Marinated dried beef cooked with peppers, onions, garlic, rosemary, and spices, served with Ethiopian injera or flat bread.",
    src: "../public/jeba-tibs.jpeg"
  },
  {
    number: 16,
    amharic: "ቦዘና ሽሮ",
    transliteration: "bozena shiro",
    price: "3.500",
    description: "Beef jerky stew cooked with spiced bean flour, exotic spices, and peppers, served with selata on Ethiopian injera.",
    src: "../public/bozena-shiro.jpeg"
  },
  {
    number: 17,
    amharic: "ስፓጌቲ ከበሬ ሥጋ ጋር",
    transliteration: "spaghetti with beef",
    price: "3.500",
    description: "Homemade spaghetti with beef sauce and feta cheese.",
    src: "../public/spagetti-with-beef.jpeg"
  },
  {
    number: 18,
    amharic: "ዶሮ",
    transliteration: "chicken",
    price: "3.500",
    description: "Chicken slow-simmered in berbere sauce, served with boiled egg and cottage cheese on Ethiopian injera.",
    src: "../public/chicken-ethiopian.jpg"
  },
  {
    number: 19,
    amharic: "በየአይነቱ",
    transliteration: "beyeaynetu",
    price: "3.500",
    description: "A platter of various lentil, pea, cabbage, carrot, and potato stews, served with Ethiopian injera.",
    src: "../public/Beyaynetu.JPG" // generic platter image might fit
  },
  {
    number: 20,
    amharic: "ማህበረዊ",
    transliteration: "maheberawi",
    price: "5.000",
    description: "A special mixed meat platter with beef stew, chicken, tibs, and gomen, served with Ethiopian injera.",
    src: "../public/maheberawi.jpg"
  },
  {
    number: 21,
    amharic: "አቢሲኒያ ልዩ",
    transliteration: "abyssinia special",
    price: "6.000",
    description: "A grand combination of beef stew, chicken, tibs, kitfo, gomen, cottage cheese, boiled egg, and various vegetable stews, served with two pieces of Ethiopian injera.",
    src:"../public/Abysenia-Special.png"  // compilation dish
  },
  {
    number: 22,
    amharic: "ፍርፍር በቅቤ",
    transliteration: "firfir with butter",
    price: "3.500",
    description: "Ethiopian firfir cooked in spiced butter and berbere, mixed with injera.",
    src: "../public/fir-fir-with-butter.jpg"
  },
  {
    number: 23,
    amharic: "ቂንቼ በቅቤ",
    transliteration: "kinche with butter",
    price: "3.000",
    description: "Coarsely cracked wheat cooked with spiced butter.",
    src: "../public/kinche-with-butter.webp"
  }
];



const menuContainer = document.querySelector(".menu-section");

menuItems.forEach((item, index) => {
  const isInverted = index % 2 !== 0;
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.id = `menu-item-${item.itemNumber}`
  if (isInverted) menuItem.classList.add("invert");

  menuItem.innerHTML = `
    <div class="image-wrapper">
        <img src="${item.src}" alt="${item.transliteration}" class="dish-img" />
        <span class="price">${item.price}</span>
        <span class="item-number">${item.number}</span>
    </div>
    <div class="label">
        <span class="dish-name">${item.amharic} (${item.transliteration})</span>
    </div>
    <p class="description">${item.description}</p>
  `;


  menuContainer.appendChild(menuItem);
});

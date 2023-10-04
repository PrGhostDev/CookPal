// Hamburger
let menuBtn = document.querySelector(".menu__icon");
let mobileNav = document.querySelector(".Mobile__nav");

mobileNav.style.transition = "all 0.5s ease";

let isNavOpen = false;

menuBtn.addEventListener("click", () => {

    if(isNavOpen === false){
        mobileNav.style.display = "block";
        isNavOpen = true
    } else if(isNavOpen === true){
        mobileNav.style.display = "none";
        isNavOpen = false
    }
})

  

// ----------------------------------------------------------------------------------

const data = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

const itemsContainer = document.querySelector(".items");

function displayItems(data) {
  itemsContainer.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = item.imageSrc;
    img.alt = "";
    imgDiv.appendChild(img);

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("Bottom");

    const type = document.createElement("p");
    type.textContent = item.type;

    const box1Div = document.createElement("div");
    box1Div.classList.add("box1");

    const name = document.createElement("h2");
    name.textContent = item.name;

    const ratingDiv = document.createElement("p");
    ratingDiv.innerHTML = `<ion-icon name="star" style="color: orange"></ion-icon> ${item.rating}`;

    box1Div.appendChild(name);
    box1Div.appendChild(ratingDiv);

    const box2Div = document.createElement("div");
    box2Div.classList.add("box1");

    const time = document.createElement("h3");
    time.textContent = item.time;

    const iconsDiv = document.createElement("div");
    const heartIcon = document.createElement("ion-icon");
    heartIcon.name = "heart-outline";
    const chatIcon = document.createElement("ion-icon");
    chatIcon.name = "chatbubble-outline";
    iconsDiv.appendChild(heartIcon);
    iconsDiv.appendChild(chatIcon);

    box2Div.appendChild(time);
    box2Div.appendChild(iconsDiv);

    bottomDiv.appendChild(type);
    bottomDiv.appendChild(box1Div);
    bottomDiv.appendChild(box2Div);

    card.appendChild(imgDiv);
    card.appendChild(bottomDiv);

    itemsContainer.appendChild(card);
  });
}

displayItems(data);

// -----------------------------------------------------------------------------


// Searching--------------------------------------------
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm);
  });
  displayItems(filteredData);
});

// -----------------------------------------------------------------------------

let typeFilter = "all"; 
let filteredDataByType = [];

// Filter by types-----------------------------
const allRecipesDiv = document.getElementById("all-recipes");
const vegRecipesDiv = document.getElementById("veg-recipes");
const nonVegRecipesDiv = document.getElementById("non-veg-recipes");

allRecipesDiv.addEventListener("click", () => filterItems("all"));
vegRecipesDiv.addEventListener("click", () => filterItems("veg"));
nonVegRecipesDiv.addEventListener("click", () => filterItems("non-veg"));

function filterItems(type) {
    typeFilter = type; 
    filteredDataByType = data.filter((item) => {
        if (type === "all") {
            return true;
        } else {
            return item.type === type;
        }
    });

    filterItemsByRating();
}

// Filter by rating----------------------
const aboveFourCheckbox = document.getElementById("above-four");
const belowFourCheckbox = document.getElementById("below-four");

aboveFourCheckbox.addEventListener("change", () => filterItemsByRating());
belowFourCheckbox.addEventListener("change", () => filterItemsByRating());

function filterItemsByRating() {
    const aboveFourChecked = aboveFourCheckbox.checked;
    const belowFourChecked = belowFourCheckbox.checked;

    let filteredData = filteredDataByType; 

    if (aboveFourChecked) {
        filteredData = filteredData.filter((item) => item.rating >= 4);
    } else if (belowFourChecked) {
        filteredData = filteredData.filter((item) => item.rating < 4);
    }

    displayItems(filteredData);
}

displayItems(data);

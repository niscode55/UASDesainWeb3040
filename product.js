// Toggle Layer Produk
const productsMenu = document.querySelector(".main-nav a:nth-child(3)"); // Link "PRODUCTS"
const productLayer = document.getElementById("product-layer");

productsMenu.addEventListener("click", (e) => {
  e.preventDefault();
  productLayer.style.display =
    productLayer.style.display === "flex" ? "none" : "flex";
});

// Data Produk
const productData = {
    sport: [
      {
        name: "FZN-R15",
        price: "Rp 39.875.000",
        image: "https://i.pinimg.com/736x/8d/26/d4/8d26d4305b03607f996d46c3fb7fa315.jpg",
        url: "fzn-r15.html",
      },
      {
        name: "FZN-R25",
        price: "Rp 68.000.000",
        image: "https://i.pinimg.com/736x/f9/7f/f7/f97ff77c0c8f4e061c3a5b52fd8c0c5e.jpg",
        url: "fzn-r25.html",
      },
      {
        name: "FT-15",
        price: "Rp 36.930.000",
        image: "https://i.pinimg.com/736x/e4/07/08/e40708bdac834b230515ba703e35d261.jpg",
        url: "ft-15.html",
      },
    ],
  off_road: [
    {
      name: "Rallynomad V4",
      price: "Rp 1.100.000.000",
      image: "https://i.pinimg.com/736x/49/f0/d1/49f0d106356515c2584c9a746434b1ad.jpg",
      url:"rallynomad-v4.html",
    },
    {
      name: "Sweet X",
      price: "Rp 625.000.000",
      image: "https://i.pinimg.com/736x/f5/28/e4/f528e4515922345c41eb6300f04eda54.jpg",
      url:"sweet-x.html",
    },
    {
      name: "Sandstorm Scranbler",
      price: "Rp 525.000.000",
      image: "https://i.pinimg.com/736x/47/98/33/4798332cb4ee872083377485dd9b7057.jpg",
      url:"sandstrom-scrambler.html",
    },
  ],
  maxi: [
    {
      name: "FMAX 250",
      price: "Rp 66.605.000",
      image: "https://i.pinimg.com/736x/da/ce/e4/dacee40cd093568db051ac0c7d5b0616.jpg",
      url:"fmax-250.html",
    },
    {
      name: "FMAX Turbo",
      price: "Rp 32.855.000",
      image: "https://i.pinimg.com/736x/9e/90/dd/9e90dd4dd73b2b8433d509032f475e04.jpg",
      url:"fmax-turbo.html",
    },
    {
      name: "Rogue X",
      price: "Rp 28.330.000",
      image: "https://i.pinimg.com/736x/e4/d0/cb/e4d0cb0c49830a91204a3f14dbee4ca3.jpg",
      url:"rogue-x.html",
    },
  ],
  matic: [
    {
      name: "Fiora 160",
      price: "Rp 27.600.000",
      image: "https://i.pinimg.com/736x/6c/ca/21/6cca211419a957d08f0d65a15f30cc71.jpg",
      url:"fiora-160.html",
    },
    {
      name: "Fiora 125",
      price: "Rp 24.965.000",
      image: "https://i.pinimg.com/736x/da/c7/9d/dac79debe4d621620d23ee3e3ca3b7bc.jpg",
      url:"fiora-125.html",
    },
    {
      name: "Fet Street",
      price: "Rp 19.500.000",
      image: "https://i.pinimg.com/736x/18/2c/04/182c04be8214b313c948add5b8c88127.jpg",
      url:"fet-street.html",
    },
  ],
  classy: [
    {
      name: "Velano",
      price: "Rp32.345.000",
      image: "https://i.pinimg.com/736x/9b/03/7e/9b037ed8d36c64734e0a9679707844fd.jpg",
      url:"velano.html",
    },
    {
      name: "Hybrid-Fizao.html",
      price: "Rp 21.890.000",
      image: "https://i.pinimg.com/736x/d2/67/8a/d2678a0ddcc23a7471cdf795449cc185.jpg",
      url:"hybrid-fizao.html",
    },
    {
      name: "Snoopy",
      price: "Rp 23.330.000",
      image: "https://i.pinimg.com/736x/1d/af/13/1daf1360ed226983c169bbb541fc3d31.jpg",
      url:"snoopy.html",
    },
  ],
  moped: [
    {
      name: "FX King 150",
      price: "Rp 25.625.000",
      image: "https://i.pinimg.com/736x/1d/4e/ec/1d4eeca48f7afe3319d4ac1801949dfa.jpg",
      url:"fx-king.html",
    },
    {
      name: "Mega Force",
      price: "Rp 18.855.000",
      image: "https://i.pinimg.com/736x/0c/4f/5e/0c4f5e5e99afa5ea0bba1781c4e85184.jpg",
      url:"mega-force.html",
    },
    {
      name: "Mars Z1",
      price: "Rp 20.490.000",
      image: "https://i.pinimg.com/736x/ae/71/45/ae71458521585b04667a9e78ef780df8.jpg",
      url:"mars-z1.html",
    },
  ],
};

// Menangani Klik Kategori
const categories = document.querySelectorAll(".category");
const productItems = document.getElementById("product-items");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const selectedCategory = category.dataset.category;
    displayProducts(selectedCategory);
  });
});

function displayProducts(category) {
  productItems.innerHTML = ""; // Hapus konten sebelumnya
  productData[category].forEach((product) => {
    const productHTML = `
      <div class="product-item">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;
    productItems.innerHTML += productHTML;
  });
}

// Menampilkan Produk
function displayProducts(category) {
    productItems.innerHTML = "";
    productData[category].forEach((product) => {
      const productHTML = `
        <a href="${product.url}" class="product-item">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.price}</p>
        </a>
      `;
      productItems.innerHTML += productHTML;
    });
  }

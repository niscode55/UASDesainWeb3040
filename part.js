// Toggle Layer Part & Accessories
const partsMenu = document.querySelector(".main-nav a:nth-child(5)"); // Link "PARTS"
const partLayer = document.getElementById("part-layer");

partsMenu.addEventListener("click", (e) => {
  e.preventDefault();
  partLayer.style.display =
    partLayer.style.display === "flex" ? "none" : "flex";
});

// Data Part & Accessories
const partData = {
  piston: [
    {
      name: "Piston Kit",
      price: "Rp 500.000",
      image: "https://i.pinimg.com/736x/44/82/07/4482073c7893923c84fbe5cb4a9a2f65.jpg",
      url: "piston.html",
    },
    {
      name: "Gir",
      price: "Rp 350.000",
      image: "https://i.pinimg.com/736x/c8/6a/4e/c86a4e5549b8f09398139b144514e977.jpg",
      url: "gir.html",
    },
    {
      name: "Cylinder Kit",
      price: "Rp 1.200.000",
      image: "https://i.pinimg.com/736x/d1/16/81/d1168117091744d4137444d02d5a5e20.jpg",
      url: "cylinder.html",
    },
  ],
  lube: [
    {
      name: "Fennolube Sport",
      price: "Rp 50.000",
      image: "https://i.pinimg.com/736x/75/82/e9/7582e916fbc4753e5cc676c7e44901e5.jpg",
      url: "fennolube-sport.html",
    },
    {
      name: "Fennolube 4T",
      price: "Rp 60.000",
      image: "https://i.pinimg.com/736x/8e/b6/2e/8eb62ecc686b0976f526c1e2a76fa24f.jpg",
      url: "fennolube-4t.html",
    },
    {
      name: "Fennolube Matic",
      price: "Rp 55.000",
      image: "https://i.pinimg.com/736x/8c/e8/43/8ce843bb231eb05850dd80b339f14ccf.jpg",
      url: "fennolube-matic.html",
    },
  ],
  helmet: [
    {
      name: "Fennor X1 Helmet",
      price: "Rp 1.200.000",
      image: "https://i.pinimg.com/736x/00/40/ca/0040cabf942a664dd4459117c50f111c.jpg",
      url: "helmet1.html",
    },
    {
      name: "Fennor X2 Helmet",
      price: "Rp 1.500.000",
      image: "https://i.pinimg.com/736x/1c/60/22/1c6022648b7cfd35bcde16ccd55564e1.jpg",
      url: "helmet2.html",
    },
    {
      name: "Fennor X3 Helmet",
      price: "Rp 1.800.000",
      image: "https://i.pinimg.com/736x/a9/74/19/a9741948224b45fae3756fd8f8f2bb2e.jpg",
      url: "helmet3.html",
    },
  ],
  apprael: [
    {
      name: "Riding Jacket",
      price: "Rp 1.000.000",
      image: "https://i.pinimg.com/736x/f9/ee/33/f9ee3361f3e20eee4f1f6423db8f2585.jpg",
      url: "riding-jacket.html",
    },
    {
      name: "Riding Gloves",
      price: "Rp 250.000",
      image: "https://i.pinimg.com/736x/2a/f5/8c/2af58c9f01dc6cb7082c34fb1aeb2875.jpg",
      url: "riding-gloves.html",
    },
    {
      name: "Riding Pants",
      price: "Rp 750.000",
      image: "https://i.pinimg.com/736x/5f/34/7a/5f347a1f8a305fefe9e488684440cc52.jpg",
      url: "riding-pants.html",
    },
  ],
  accessories: [
    {
      name: "Phone Holder",
      price: "Rp 250.000",
      image: "https://i.pinimg.com/736x/2e/f9/75/2ef975b5794aa4082a10839bb735da3a.jpg",
      url: "phone-holder.html",
    },
    {
      name: "Tank Bag",
      price: "Rp 450.000",
      image: "https://i.pinimg.com/736x/ff/3c/69/ff3c699170cca01c27f0e95b055c19e7.jpg",
      url: "tank-bag.html",
    },
    {
      name: "Side Bags",
      price: "Rp 800.000",
      image: "https://i.pinimg.com/736x/05/61/27/056127b0817c8a19d9e7fbf52aefd36e.jpg",
      url: "side-bags.html",
    },
  ],
};

// Menangani Klik Kategori Part
const partCategories = document.querySelectorAll(".category");
const partItems = document.getElementById("part-items");

partCategories.forEach((category) => {
  category.addEventListener("click", () => {
    const selectedCategory = category.dataset.category;
    displayPartProducts(selectedCategory);
  });
});

function displayPartProducts(category) {
  partItems.innerHTML = ""; // Hapus konten sebelumnya
  partData[category].forEach((part) => {
    const partHTML = `
      <a href="${part.url}" class="part-item" style="display: flex; flex-direction: column; align-items: center; text-decoration: none;">
        <img src="${part.image}" alt="${part.name}"/>
        <h3>${part.name}</h3>
        <p>${part.price}</p>
      </a>
    `;
    partItems.innerHTML += partHTML;
  });
}


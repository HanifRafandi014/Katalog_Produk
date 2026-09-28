// --- DATA KATALOG PRODUK (28 PRODUK LENGKAP) ---
const products = [
  {
    id: 1,
    name: "Baby powder Mitu Baby Fresh & Clean 50+25 gram",
    category: "Perawatan Bayi",
    image: "assets/mitu_baby_powder.jpg",
    desc: "Bedak tabur bayi formulasi lembut menjaga kulit si kecil tetap halus, segar, wangi alami, dan bebas iritasi.",
    shopee: "https://shopee.co.id/search?keyword=baby%20powder%20mitu%20baby%20fresh%20clean",
    tokopedia: "https://www.tokopedia.com/search?q=baby%20powder%20mitu%20baby%20fresh%20clean"
  },
  {
    id: 2,
    name: "Viva Hand & Body Lotion Mangir 100 ml",
    category: "Perawatan Kulit",
    image: "assets/viva_hand_body_mangir.jpg",
    desc: "Lotion tubuh dengan ekstrak mangir tradisional khas Indonesia untuk merawat kelembutan dan aroma alami kulit.",
    shopee: "https://shopee.co.id/search?keyword=viva%20hand%20body%20lotion%20mangir",
    tokopedia: "https://www.tokopedia.com/search?q=viva%20hand%20body%20lotion%20mangir"
  },
  {
    id: 3,
    name: "Viva Milk Cleanser Spirulina 100 ml",
    category: "Pembersih Wajah",
    image: "assets/viva_milk_cleaner_spirulina.jpg",
    desc: "Susu pembersih wajah dengan kandungan spirulina untuk kulit kering/normal guna regenerasi sel kulit.",
    shopee: "https://shopee.co.id/search?keyword=viva%20milk%20cleanser%20spirulina",
    tokopedia: "https://www.tokopedia.com/search?q=viva%20milk%20cleanser%20spirulina"
  },
  {
    id: 4,
    name: "Viva Face Tonic Spirulina 100 ml",
    category: "Pembersih Wajah",
    image: "assets/viva_face_tonik_spirulina.jpg",
    desc: "Penyegar wajah pendamping milk cleanser untuk membersihkan sisa kotoran dan menjaga pH alami kulit.",
    shopee: "https://shopee.co.id/search?keyword=viva%20face%20tonic%20spirulina",
    tokopedia: "https://www.tokopedia.com/search?q=viva%20face%20tonic%20spirulina"
  },
  {
    id: 5,
    name: "Garnier Men Oil Control Bright + Oil Control Super Duo Foam 50 ml",
    category: "Pembersih Wajah",
    image: "assets/garnier_men_duo_foam.jpg",
    desc: "Sabun cuci muka pria dengan sensasi dingin instan, membersihkan minyak berlebih dan mencerahkan wajah kusam.",
    shopee: "https://shopee.co.id/search?keyword=garnier%20men%20super%20duo%20foam",
    tokopedia: "https://www.tokopedia.com/search?q=garnier%20men%20super%20duo%20foam"
  },
  {
    id: 6,
    name: "Marina UV Health & Glow 8* Advanced Brightening 185 ml",
    category: "Perawatan Kulit",
    image: "assets/marina_health_glow.jpg",
    desc: "Body lotion dengan perlindungan UV ganda dan Vitamin B3 & E untuk kulit tampak lebih cerah merata bercahaya.",
    shopee: "https://shopee.co.id/search?keyword=marina%20uv%20health%20glow%20185ml",
    tokopedia: "https://www.tokopedia.com/search?q=marina%20uv%20health%20glow%20185ml"
  },
  {
    id: 7,
    name: "Marina UV E Collagen Asta 8* Advanced Brightening 185 ml",
    category: "Perawatan Kulit",
    image: "assets/marina_collagen_asta.jpg",
    desc: "Diperkaya Red Algae Astaxanthin dan Bio Collagen untuk menjaga kekenyalan, elastisitas, serta kecerahan kulit.",
    shopee: "https://shopee.co.id/search?keyword=marina%20uv%20e%20collagen%20asta%20185ml",
    tokopedia: "https://www.tokopedia.com/search?q=marina%20uv%20e%20collagen%20asta%20185ml"
  },
  {
    id: 8,
    name: "Deodorant Black Rock Phantom 50 ml",
    category: "Perawatan Pria",
    image: "assets/deodorant_black_rock_phantom.jpg",
    desc: "Roll-on deodorant pria dengan proteksi anti-keringat andal dan keharuman maskulin tahan lama sepanjang hari.",
    shopee: "https://shopee.co.id/search?keyword=deodorant%20black%20rock%20phantom",
    tokopedia: "https://www.tokopedia.com/search?q=deodorant%20black%20rock%20phantom"
  },
  {
    id: 9,
    name: "Parfum Braven Cool Water 100 ml",
    category: "Parfum & Wewangian",
    image: "assets/parfum_braven_cool_water.jpg",
    desc: "Eau De Parfum pria dengan wangi aquatic aquatic yang segar, sporty, dan elegan untuk pemakaian harian.",
    shopee: "https://shopee.co.id/search?keyword=parfum%20braven%20cool%20water",
    tokopedia: "https://www.tokopedia.com/search?q=parfum%20braven%20cool%20water"
  },
  {
    id: 10,
    name: "Stand Laptop Alumunium Portable 24 x 16 x 6.5 - 11.5 cm (Up to 15 Inch)",
    category: "Aksesoris Gadget",
    image: "assets/stand_laptop_alumunium.jpg",
    desc: "Dudukan laptop bahan aluminium kokoh, tinggi bisa disesuaikan, memperbaiki postur leher dan sirkulasi udara laptop.",
    shopee: "https://shopee.co.id/search?keyword=stand%20laptop%20aluminium%20portable",
    tokopedia: "https://www.tokopedia.com/search?q=stand%20laptop%20aluminium%20portable"
  },
  {
    id: 11,
    name: "Kipas Mini Fan M11",
    category: "Elektronik & Rumah",
    image: "assets/kipas_mini_fan_m11.jpg",
    desc: "Kipas angin mini portable rechargeable baterai awet, mudah dibawa traveling dan diletakkan di atas meja kerja.",
    shopee: "https://shopee.co.id/search?keyword=kipas%20mini%20fan%20m11",
    tokopedia: "https://www.tokopedia.com/search?q=kipas%20mini%20fan%20m11"
  },
  {
    id: 12,
    name: "Sunscreen Skin Aqua UV Whitening Milk SPF 50 PA+++ 40 gram",
    category: "Perawatan Kulit",
    image: "assets/skin_aqua_whitening_milk.jpg",
    desc: "Tabir surya harian bertekstur cair ringan cepat meresap tanpa white cast, melindungi kulit dari UVA & UVB.",
    shopee: "https://shopee.co.id/search?keyword=skin%20aqua%20uv%20whitening%20milk%20spf%2050",
    tokopedia: "https://www.tokopedia.com/search?q=skin%20aqua%20uv%20whitening%20milk%20spf%2050"
  },
  {
    id: 13,
    name: "Gatsby Normal Long Lasting Moisture 125 gram",
    category: "Perawatan Pria",
    image: "assets/gatsby_normal_moisture.jpg",
    desc: "Pomade/styling hair cream untuk merapikan rambut pria dengan kilau natural dan kelembapan tahan lama.",
    shopee: "https://shopee.co.id/search?keyword=gatsby%20normal%20long%20lasting%20moisture",
    tokopedia: "https://www.tokopedia.com/search?q=gatsby%20normal%20long%20lasting%20moisture"
  },
  {
    id: 14,
    name: "Deodorant Inuoi Fresh 65 ml",
    category: "Perawatan Tubuh",
    image: "assets/deodorant_inuoi_fresh.jpg",
    desc: "Deodorant spray/roll-on lembut di ketiak, mencegah bau badan tanpa meninggalkan noda kuning di baju.",
    shopee: "https://shopee.co.id/search?keyword=deodorant%20inuoi%20fresh",
    tokopedia: "https://www.tokopedia.com/search?q=deodorant%20inuoi%20fresh"
  },
  {
    id: 15,
    name: "Kipas USB Portable",
    category: "Elektronik & Rumah",
    image: "assets/kipas_usb.jpg",
    desc: "Kipas fleksibel port USB praktis dicolok ke powerbank, laptop, atau charger HP saat darurat maupun bekerja.",
    shopee: "https://shopee.co.id/search?keyword=kipas%20usb%20portable",
    tokopedia: "https://www.tokopedia.com/search?q=kipas%20usb%20portable"
  },
  {
    id: 16,
    name: "Baterai Alkaline AA / A2 Isi 8 Pcs (1 Kotak Plastik)",
    category: "Elektronik & Rumah",
    image: "assets/baterai_alkaline_aa_8pcs.jpg",
    desc: "Baterai daya tahan tinggi untuk mouse, remote TV, jam dinding, dan mainan. Dilengkapi kotak penyimpanan mika rapi.",
    shopee: "https://shopee.co.id/search?keyword=baterai%20alkaline%20aa%20isi%208",
    tokopedia: "https://www.tokopedia.com/search?q=baterai%20alkaline%20aa%20isi%208"
  },
  {
    id: 17,
    name: "Brush Pembersih Keyboard 7 in 1 Multifunction Pen Cleaner",
    category: "Aksesoris Gadget",
    image: "assets/brush_keyboard_7in1.jpg",
    desc: "Kit pembersih multifungsi untuk keyboard mechanical, TWS/earphone, layar HP, dan lensa kamera.",
    shopee: "https://shopee.co.id/search?keyword=brush%20pembersih%20keyboard%207%20in%201",
    tokopedia: "https://www.tokopedia.com/search?q=brush%20pembersih%20keyboard%207%20in%201"
  },
  {
    id: 18,
    name: "Pisau Cukur Kumis Gillette 6 Pcs",
    category: "Perawatan Pria",
    image: "assets/pisau_cukur_gillette.jpg",
    desc: "Pisau cukur tajam presisi dengan strip pelicin, mencukur kumis dan jenggot lebih bersih dan nyaman tanpa luka.",
    shopee: "https://shopee.co.id/search?keyword=pisau%20cukur%20gillette%20isi%206",
    tokopedia: "https://www.tokopedia.com/search?q=pisau%20cukur%20gillette%20isi%206"
  },
  {
    id: 19,
    name: "Earphone Macaron Glossy Hi-Fi Stereo Super Bass U19",
    category: "Audio & Gadget",
    image: "assets/earphone_macaron_u19.jpg",
    desc: "Earphone jack 3.5mm warna pastel macaron lucu dengan bass solid, treble jernih, dan microphone telepon responsif.",
    shopee: "https://shopee.co.id/search?keyword=earphone%20macaron%20u19%20super%20bass",
    tokopedia: "https://www.tokopedia.com/search?q=earphone%20macaron%20u19%20super%20bass"
  },
  {
    id: 20,
    name: "Tas Ransel Sekolah Unisex Waterproof Ransel Distro Winner 088",
    category: "Fashion & Aksesoris",
    image: "assets/tas_ransel_winner_088.jpg",
    desc: "Backpack distro material nilon tahan air, slot laptop tebal, jahitan bartex kokoh untuk sekolah, kuliah & kerja.",
    shopee: "https://shopee.co.id/search?keyword=tas%20ransel%20distro%20winner%20088",
    tokopedia: "https://www.tokopedia.com/search?q=tas%20ransel%20distro%20winner%20088"
  },
  {
    id: 21,
    name: "Bantal Leher Karakter",
    category: "Perlengkapan Rumah",
    image: "assets/bantal_leher_karakter.jpg",
    desc: "Bantal travel empuk berbentuk U dengan bahan velboa halus, menyangga leher saat perjalanan mobil atau pesawat.",
    shopee: "https://shopee.co.id/search?keyword=bantal%20leher%20karakter",
    tokopedia: "https://www.tokopedia.com/search?q=bantal%20leher%20karakter"
  },
  {
    id: 22,
    name: "Bantal Alas Duduk Kursi Tebal 35 cm",
    category: "Perlengkapan Rumah",
    image: "assets/bantal_alas_duduk_35cm.jpg",
    desc: "Bantalan kursi busa empuk dengan tali pengikat, nyaman untuk kursi kerja, lesehan, ataupun jok mobil.",
    shopee: "https://shopee.co.id/search?keyword=bantal%20alas%20duduk%20kursi%20tebal%2035",
    tokopedia: "https://www.tokopedia.com/search?q=bantal%20alas%20duduk%20kursi%20tebal%2035"
  },
  {
    id: 23,
    name: "Kacamata Antiradiasi Blueray Unisex",
    category: "Fashion & Aksesoris",
    image: "assets/kacamata_antiradiasi_blueray.jpg",
    desc: "Lensa bening anti sinar biru gadget melindungi mata dari radiasi monitor PC & smartphone, mencegah mata lelah.",
    shopee: "https://shopee.co.id/search?keyword=kacamata%20antiradiasi%20blueray%20unisex",
    tokopedia: "https://www.tokopedia.com/search?q=kacamata%20antiradiasi%20blueray%20unisex"
  },
  {
    id: 24,
    name: "KOOYIINN 8 in 1 USB Hub Type-C To HDMI 4K OTG SD TF Card Reader 100M",
    category: "Aksesoris Gadget",
    image: "assets/kooyiinn_usb_hub_8in1.jpg",
    desc: "Adapter converter multiport serbaguna: port 4K HDMI, USB 3.0, TF/SD card reader, dan slot LAN kabel internet.",
    shopee: "https://shopee.co.id/search?keyword=kooyiinn%208%20in%201%20usb%20hub%20type%20c",
    tokopedia: "https://www.tokopedia.com/search?q=kooyiinn%208%20in%201%20usb%20hub%20type%20c"
  },
  {
    id: 25,
    name: "OTG Type-C to USB / Connector Flashdisk Type C",
    category: "Aksesoris Gadget",
    image: "assets/otg_type_c_to_usb.jpg",
    desc: "Konektor mini plug & play untuk menghubungkan flashdisk, mouse, keyboard ke HP atau laptop bertipe port USB-C.",
    shopee: "https://shopee.co.id/search?keyword=otg%20type%20c%20to%20usb%20connector",
    tokopedia: "https://www.tokopedia.com/search?q=otg%20type%20c%20to%20usb%20connector"
  },
  {
    id: 26,
    name: "Holder STAND LIVE Mini Stand HP Rotary 360 Monopod 4.5 - 6.7 Inch",
    category: "Aksesoris Gadget",
    image: "assets/holder_stand_live_360.jpg",
    desc: "Stand meja ponsel fleksibel dapat diputar 360 derajat, stabil dan kokoh untuk live streaming, TikTok, dan video call.",
    shopee: "https://shopee.co.id/search?keyword=holder%20stand%20live%20mini%20rotary%20360",
    tokopedia: "https://www.tokopedia.com/search?q=holder%20stand%20live%20mini%20rotary%20360"
  },
  {
    id: 27,
    name: "Sandal Jepit Swallow Legian 100% FULL KARET",
    category: "Fashion & Aksesoris",
    image: "assets/sandal_swallow_legian.jpg",
    desc: "Sandal jepit legendaris Swallow bahan karet murni tebal, lentur, tahan air, tidak licin dan sangat awet digunakan.",
    shopee: "https://shopee.co.id/search?keyword=sandal%20jepit%20swallow%20legian",
    tokopedia: "https://www.tokopedia.com/search?q=sandal%20jepit%20swallow%20legian"
  },
  {
    id: 28,
    name: "Masker Duckbill 3Ply Mix Pastel Gradasi (Isi 50 Pcs)",
    category: "Kesehatan & Sanitasi",
    image: "assets/masker_duckbill_pastel.jpg",
    desc: "Masker duckbill 3 lapis proteksi dengan warna gradasi pastel cantik, sirkulasi pernapasan lega dan tidak pengap.",
    shopee: "https://shopee.co.id/search?keyword=masker%20duckbill%203ply%20mix%20pastel%2050pcs",
    tokopedia: "https://www.tokopedia.com/search?q=masker%20duckbill%203ply%20mix%20pastel%2050pcs"
  }
];

// --- FALLBACK SVG GENERATOR (Mencegah Gambar Rusak) ---
function getFallbackImage(title) {
  const shortTitle = title.length > 20 ? title.substring(0, 18) + '...' : title;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <rect width="400" height="400" fill="#f1f5f9"/>
      <g fill="#94a3b8" transform="translate(160, 140)">
        <path d="M10 20v40h60V20H10zm5 5h50v30H15V25zm10 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-5 22 15-18 10 12 10-8 10 14H20z"/>
      </g>
      <text x="50%" y="240" font-family="Inter, sans-serif" font-size="16" font-weight="600" fill="#64748b" text-anchor="middle">
        ${shortTitle}
      </text>
      <text x="50%" y="265" font-family="Inter, sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">
        assets/ foto belum diisi
      </text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// --- STATE APLIKASI ---
let currentCategory = "Semua";
let searchQuery = "";

// --- ELEMEN DOM ---
const productGrid = document.getElementById("productGrid");
const categoryContainer = document.getElementById("categoryContainer");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const productCount = document.getElementById("productCount");
const emptyState = document.getElementById("emptyState");

// Modal Elemen
const modal = document.getElementById("detailModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalImg = document.getElementById("modalImg");
const modalCat = document.getElementById("modalCat");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalShopee = document.getElementById("modalShopee");
const modalTokopedia = document.getElementById("modalTokopedia");

// --- RENDER DAFTAR KATEGORI ---
function setupCategories() {
  const categories = ["Semua", ...new Set(products.map(p => p.category))];
  categoryContainer.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `pill-btn ${cat === currentCategory ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pill-btn").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = cat;
      renderProducts();
    });
    categoryContainer.appendChild(btn);
  });
}

// --- RENDER GRID PRODUK ---
function renderProducts() {
  const filtered = products.filter(item => {
    const matchCategory = currentCategory === "Semua" || item.category === currentCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  productCount.textContent = filtered.length;

  if (filtered.length === 0) {
    productGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  productGrid.innerHTML = filtered.map(item => `
    <div class="product-card">
      <div class="product-img-wrapper" onclick="openProductModal(${item.id})">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          loading="lazy" 
          onerror="this.onerror=null; this.src=getFallbackImage('${item.name.replace(/'/g, "\\'")}');"
        />
      </div>
      <div class="product-content">
        <span class="product-category">${item.category}</span>
        <h3 class="product-title" onclick="openProductModal(${item.id})" title="${item.name}">${item.name}</h3>
        <p class="product-desc">${item.desc}</p>
        <div class="product-actions">
          <a href="${item.shopee}" target="_blank" rel="noopener noreferrer" class="btn btn-shopee">
            <i class="fa-solid fa-bag-shopping"></i> Shopee
          </a>
          <a href="${item.tokopedia}" target="_blank" rel="noopener noreferrer" class="btn btn-tokopedia">
            <i class="fa-solid fa-shop"></i> Tokopedia
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

// --- FUNGSI MODAL DETAIL ---
window.openProductModal = function(id) {
  const item = products.find(p => p.id === id);
  if (!item) return;

  modalImg.src = item.image;
  modalImg.onerror = () => {
    modalImg.src = getFallbackImage(item.name);
  };
  modalCat.textContent = item.category;
  modalTitle.textContent = item.name;
  modalDesc.textContent = item.desc;
  modalShopee.href = item.shopee;
  modalTokopedia.href = item.tokopedia;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Tutup modal dengan tombol Escape keyboard
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// --- EVENT SEARCH ---
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.style.display = searchQuery ? "block" : "none";
  renderProducts();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  clearSearchBtn.style.display = "none";
  searchInput.focus();
  renderProducts();
});

// --- INISIALISASI AWAL ---
setupCategories();
renderProducts();
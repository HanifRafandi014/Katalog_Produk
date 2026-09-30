// --- DATA ARRAY KATALOG LENGKAP (28 PRODUK AFFILIATE) ---
const products = [
  {
    id: 1,
    name: "Baby powder Mitu Baby Fresh & Clean 50+25 gram",
    category: "Perawatan Bayi",
    image: "assets/mitu_baby_powder.jpg",
    desc: "Bedak tabur bayi formulasi lembut menjaga kulit si kecil tetap halus, segar, wangi alami, dan bebas iritasi.",
    shopee: "https://s.shopee.co.id/2BFH75GYif",
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
    category: "Perawatan Pria",
    image: "assets/garnier_men_duo_foam1.jpg",
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
    image: "assets/deodorant_black_rock_phantom1.jpg",
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
    desc: "Styling hair cream untuk merapikan rambut pria dengan kilau natural dan kelembapan tahan lama.",
    shopee: "https://shopee.co.id/search?keyword=gatsby%20normal%20long%20lasting%20moisture",
    tokopedia: "https://www.tokopedia.com/search?q=gatsby%20normal%20long%20lasting%20moisture"
  },
  {
    id: 14,
    name: "Deodorant Inuoi Fresh 65 ml",
    category: "Perawatan Tubuh",
    image: "assets/deodorant_inuoi_fresh.jpg",
    desc: "Deodorant spray/roll-on lembut di ketiak, mencegah bau badan tanpa meninggalkan noda kuning di pakaian.",
    shopee: "https://shopee.co.id/search?keyword=deodorant%20inuoi%20fresh",
    tokopedia: "https://www.tokopedia.com/search?q=deodorant%20inuoi%20fresh"
  },
  {
    id: 15,
    name: "Kipas USB Portable Fleksibel",
    category: "Elektronik & Rumah",
    image: "assets/kipas_usb.jpg",
    desc: "Kipas mini fleksibel port USB praktis dicolok ke powerbank, laptop, atau port charger saat cuaca panas.",
    shopee: "https://shopee.co.id/search?keyword=kipas%20usb%20portable",
    tokopedia: "https://www.tokopedia.com/search?q=kipas%20usb%20portable"
  },
  {
    id: 16,
    name: "Baterai Alkaline AA / A2 Isi 8 Pcs (1 Kotak Plastik)",
    category: "Elektronik & Rumah",
    image: "assets/baterai_alkaline_aa_8pcs.jpg",
    desc: "Baterai daya tahan tinggi untuk mouse, remote TV, jam dinding, dan mainan. Dilengkapi kotak penyimpanan rapi.",
    shopee: "https://shopee.co.id/search?keyword=baterai%20alkaline%20aa%20isi%208",
    tokopedia: "https://www.tokopedia.com/search?q=baterai%20alkaline%20aa%20isi%208"
  },
  {
    id: 17,
    name: "Brush Pembersih Keyboard 7 in 1 Multifunction Pen Cleaner",
    category: "Aksesoris Gadget",
    image: "assets/brush_keyboard_7in1.jpg",
    desc: "Kit pembersih multifungsi untuk keyboard mechanical, TWS/earphone, layar smartphone, dan lensa kamera.",
    shopee: "https://shopee.co.id/search?keyword=brush%20pembersih%20keyboard%207%20in%201",
    tokopedia: "https://www.tokopedia.com/search?q=brush%20pembersih%20keyboard%207%20in%201"
  },
  {
    id: 18,
    name: "Pisau Cukur Kumis Gillette 6 Pcs",
    category: "Perawatan Pria",
    image: "assets/pisau_cukur_gillette.jpg",
    desc: "Pisau cukur tajam presisi dengan pelicin aloe vera, mencukur kumis & jenggot lebih bersih tanpa iritasi.",
    shopee: "https://shopee.co.id/search?keyword=pisau%20cukur%20gillette%20isi%206",
    tokopedia: "https://www.tokopedia.com/search?q=pisau%20cukur%20gillette%20isi%206"
  },
  {
    id: 19,
    name: "Earphone Macaron Glossy Hi-Fi Stereo Super Bass U19",
    category: "Aksesoris Gadget",
    image: "assets/earphone_macaron_u19.jpg",
    desc: "Earphone 3.5mm warna pastel macaron estetik dengan bass solid, treble jernih, serta mikrofon telepon jelas.",
    shopee: "https://shopee.co.id/search?keyword=earphone%20macaron%20u19%20super%20bass",
    tokopedia: "https://www.tokopedia.com/search?q=earphone%20macaron%20u19%20super%20bass"
  },
  {
    id: 20,
    name: "Tas Ransel Sekolah Unisex Waterproof Ransel Distro Winner 088",
    category: "Fashion & Aksesoris",
    image: "assets/tas_ransel_winner_088.jpg",
    desc: "Backpack distro material nilon tahan air, slot laptop tebal, jahitan kuat cocok untuk sekolah, kuliah & harian.",
    shopee: "https://shopee.co.id/search?keyword=tas%20ransel%20distro%20winner%20088",
    tokopedia: "https://www.tokopedia.com/search?q=tas%20ransel%20distro%20winner%20088"
  },
  {
    id: 21,
    name: "Bantal Leher Karakter",
    category: "Perlengkapan Rumah",
    image: "assets/bantal_leher_karakter.jpg",
    desc: "Bantal leher travel empuk bentuk U dengan bahan velboa lembut, mencegah leher pegal saat traveling mobil & pesawat.",
    shopee: "https://shopee.co.id/search?keyword=bantal%20leher%20karakter",
    tokopedia: "https://www.tokopedia.com/search?q=bantal%20leher%20karakter"
  },
  {
    id: 22,
    name: "Bantal Alas Duduk Kursi Tebal 35 cm",
    category: "Perlengkapan Rumah",
    image: "assets/bantal_alas_duduk_35cm.jpg",
    desc: "Bantalan kursi busa tebal empuk dilengkapi tali pengikat, nyaman untuk kursi kerja, lesehan belajar, atau jok mobil.",
    shopee: "https://shopee.co.id/search?keyword=bantal%20alas%20duduk%20kursi%20tebal%2035",
    tokopedia: "https://www.tokopedia.com/search?q=bantal%20alas%20duduk%20kursi%20tebal%2035"
  },
  {
    id: 23,
    name: "Kacamata Antiradiasi Blueray Unisex",
    category: "Fashion & Aksesoris",
    image: "assets/kacamata_antiradiasi_blueray.jpg",
    desc: "Lensa anti sinar biru komputer dan smartphone, mengurangi mata perih, kering, lelah akibat screen time lama.",
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
    desc: "Konektor mini plug & play untuk menghubungkan flashdisk, mouse, keyboard ke ponsel atau laptop berport USB-C.",
    shopee: "https://shopee.co.id/search?keyword=otg%20type%20c%20to%20usb%20connector",
    tokopedia: "https://www.tokopedia.com/search?q=otg%20type%20c%20to%20usb%20connector"
  },
  {
    id: 26,
    name: "Holder STAND LIVE Mini Stand HP Rotary 360 Monopod 4.5 - 6.7 Inch",
    category: "Aksesoris Gadget",
    image: "assets/holder_stand_live_360.jpg",
    desc: "Dudukan smartphone meja putar 360 derajat kokoh, ideal untuk live streaming, konten TikTok, rapat zoom & video call.",
    shopee: "https://shopee.co.id/search?keyword=holder%20stand%20live%20mini%20rotary%20360",
    tokopedia: "https://www.tokopedia.com/search?q=holder%20stand%20live%20mini%20rotary%20360"
  },
  {
    id: 27,
    name: "Sandal Jepit Swallow Legian 100% FULL KARET",
    category: "Fashion & Aksesoris",
    image: "assets/sandal_swallow_legian.jpg",
    desc: "Sandal karet legendaris Swallow seri Legian orisinal, bahan karet murni empuk, lentur, tahan air, dan antiselip.",
    shopee: "https://shopee.co.id/search?keyword=sandal%20jepit%20swallow%20legian",
    tokopedia: "https://www.tokopedia.com/search?q=sandal%20jepit%20swallow%20legian"
  },
  {
    id: 28,
    name: "Masker Duckbill 3Ply Mix Pastel Gradasi (Isi 50 Pcs)",
    category: "Perawatan Tubuh",
    image: "assets/masker_duckbill_pastel.jpg",
    desc: "Masker model duckbill 3 lapis proteksi dengan warna gradasi pastel estetik, tali elastis lembut dan bernapas lega.",
    shopee: "https://shopee.co.id/search?keyword=masker%20duckbill%203ply%20mix%20pastel%2050pcs",
    tokopedia: "https://www.tokopedia.com/search?q=masker%20duckbill%203ply%20mix%20pastel%2050pcs"
  }
];

// --- GENERATOR PLACEHOLDER SVG OTOMATIS (FALLBACK) ---
function getFallbackImage(title) {
  const shortTitle = title.length > 22 ? title.substring(0, 20) + '...' : title;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="450" height="450" viewBox="0 0 450 450">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#141c2e" />
          <stop offset="100%" stop-color="#0b101c" />
        </linearGradient>
      </defs>
      <rect width="450" height="450" fill="url(#grad)" />
      <g fill="#435272" transform="translate(185, 150)">
        <path d="M40 10l30 20v40L40 90 10 70V30l30-20zm0 10L18 35l22 15 22-15-22-15zm-25 21v28l20 13V45L15 41zm50 0l-20 14v27l20-13V41z"/>
      </g>
      <text x="50%" y="270" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#cbd5e1" text-anchor="middle">
        ${shortTitle}
      </text>
      <text x="50%" y="295" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b" text-anchor="middle">
        assets/ foto belum diisi
      </text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Menentukan class warna badge kategori
function getCategoryTagClass(category) {
  if (category.includes("Kulit") || category.includes("Wajah") || category.includes("Bayi")) return "tag-skincare";
  if (category.includes("Gadget")) return "tag-gadget";
  if (category.includes("Pria")) return "tag-men";
  if (category.includes("Rumah") || category.includes("Elektronik")) return "tag-home";
  if (category.includes("Fashion")) return "tag-fashion";
  return "tag-default";
}

// --- STATE APLIKASI ---
let currentCategory = "Semua";
let searchQuery = "";
let currentSort = "default";
let currentPage = 1;
let itemsPerPage = 12;

// --- ELEMEN DOM ---
const productGrid = document.getElementById("productGrid");
const categoryContainer = document.getElementById("categoryContainer");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const sortSelect = document.getElementById("sortSelect");
const itemsPerPageSelect = document.getElementById("itemsPerPage");
const showingRangeText = document.getElementById("showingRangeText");
const totalProductsText = document.getElementById("totalProductsText");
const emptyState = document.getElementById("emptyState");
const resetFilterBtn = document.getElementById("resetFilterBtn");

// Pagination Elemen
const paginationWrapper = document.getElementById("paginationWrapper");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const pageNumbersContainer = document.getElementById("pageNumbersContainer");

// Modal Detail Elemen
const detailModal = document.getElementById("detailModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalImg = document.getElementById("modalImg");
const modalCat = document.getElementById("modalCat");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalShopee = document.getElementById("modalShopee");
const modalTokopedia = document.getElementById("modalTokopedia");

// --- RENDER FILTER KATEGORI ---
function renderCategoryFilter() {
  const categories = ["Semua", ...new Set(products.map(p => p.category))];
  categoryContainer.innerHTML = "";

  categories.forEach(cat => {
    const count = cat === "Semua" ? products.length : products.filter(p => p.category === cat).length;
    const btn = document.createElement("button");
    btn.className = `cat-filter-btn ${cat === currentCategory ? 'active' : ''}`;
    btn.innerHTML = `<span>${cat}</span><span class="cat-count">${count}</span>`;
    
    btn.addEventListener("click", () => {
      currentCategory = cat;
      currentPage = 1; // Reset ke halaman pertama saat ganti kategori
      updateCategoryUI();
      renderApp();
    });

    categoryContainer.appendChild(btn);
  });
}

function updateCategoryUI() {
  const buttons = categoryContainer.querySelectorAll(".cat-filter-btn");
  buttons.forEach(btn => {
    const text = btn.querySelector("span").textContent;
    btn.classList.toggle("active", text === currentCategory);
  });
}

// --- PEMFILTERAN & PENGURUTAN (FILTER & SORT) ---
function getFilteredAndSortedProducts() {
  let list = products.filter(item => {
    const matchCategory = currentCategory === "Semua" || item.category === currentCategory;
    const term = searchQuery.toLowerCase().trim();
    const matchSearch = item.name.toLowerCase().includes(term) || item.desc.toLowerCase().includes(term);
    return matchCategory && matchSearch;
  });

  if (currentSort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === "name-desc") {
    list.sort((a, b) => b.name.localeCompare(a.name));
  } else if (currentSort === "category") {
    list.sort((a, b) => a.category.localeCompare(b.category));
  }

  return list;
}

// --- RENDER PRODUK & PAGINATION ---
function renderApp(scrollUp = false) {
  const filteredList = getFilteredAndSortedProducts();
  const totalCount = filteredList.length;
  totalProductsText.textContent = totalCount;

  // Jika hasil kosong
  if (totalCount === 0) {
    productGrid.innerHTML = "";
    emptyState.style.display = "block";
    paginationWrapper.style.display = "none";
    showingRangeText.textContent = "0";
    return;
  }

  emptyState.style.display = "none";
  paginationWrapper.style.display = "flex";

  // Perhitungan Pagination
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalCount);
  const pagedProducts = filteredList.slice(startIndex, endIndex);

  showingRangeText.textContent = `${startIndex + 1} - ${endIndex}`;

  // Render Card Produk
  productGrid.innerHTML = pagedProducts.map(item => `
    <div class="product-card">
      <div class="card-img-box" onclick="openDetailModal(${item.id})">
        <img 
          src="${item.image}" 
          alt="${item.name}" 
          loading="lazy" 
          onerror="this.onerror=null; this.src=getFallbackImage('${item.name.replace(/'/g, "\\'")}');"
        />
        <div class="card-quick-view">
          <i class="fa-solid fa-eye"></i> Lihat Detail
        </div>
      </div>
      <div class="card-body">
        <span class="card-category-tag ${getCategoryTagClass(item.category)}">${item.category}</span>
        <h3 class="card-title" onclick="openDetailModal(${item.id})" title="${item.name}">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-actions">
          <a href="${item.shopee}" target="_blank" rel="noopener noreferrer" class="btn-market btn-shopee">
            <i class="fa-solid fa-bag-shopping"></i> Shopee
          </a>
          <a href="${item.tokopedia}" target="_blank" rel="noopener noreferrer" class="btn-market btn-tokopedia">
            <i class="fa-solid fa-shop"></i> Tokopedia
          </a>
        </div>
      </div>
    </div>
  `).join("");

  // Render Angka Pagination
  renderPaginationControls(totalPages);

  // Smooth scroll kembali ke katalog saat ganti halaman
  if (scrollUp) {
    document.getElementById("catalogSection").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// --- KONTROL TOMBOL PAGINATION ---
function renderPaginationControls(totalPages) {
  prevPageBtn.disabled = currentPage <= 1;
  nextPageBtn.disabled = currentPage >= totalPages;

  pageNumbersContainer.innerHTML = "";

  if (totalPages <= 1) {
    paginationWrapper.style.display = "none";
    return;
  } else {
    paginationWrapper.style.display = "flex";
  }

  const createPageBtn = (num) => {
    const btn = document.createElement("button");
    btn.className = `page-btn ${num === currentPage ? 'active' : ''}`;
    btn.textContent = num;
    btn.addEventListener("click", () => {
      currentPage = num;
      renderApp(true);
    });
    return btn;
  };

  const createDots = () => {
    const span = document.createElement("span");
    span.className = "page-dots";
    span.textContent = "...";
    return span;
  };

  // Navigasi angka halaman cerdas dengan elipsis
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbersContainer.appendChild(createPageBtn(i));
    }
  } else {
    pageNumbersContainer.appendChild(createPageBtn(1));

    if (currentPage > 3) {
      pageNumbersContainer.appendChild(createDots());
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pageNumbersContainer.appendChild(createPageBtn(i));
    }

    if (currentPage < totalPages - 2) {
      pageNumbersContainer.appendChild(createDots());
    }

    pageNumbersContainer.appendChild(createPageBtn(totalPages));
  }
}

// --- MODAL DETAIL PRODUK ---
window.openDetailModal = function(id) {
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

  detailModal.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeDetailModal() {
  detailModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeModalBtn.addEventListener("click", closeDetailModal);
detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) closeDetailModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && detailModal.classList.contains("active")) {
    closeDetailModal();
  }
});

// --- EVENT LISTENERS PENCARIAN & KONTROL ---
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.style.display = searchQuery ? "block" : "none";
  currentPage = 1;
  renderApp();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  clearSearchBtn.style.display = "none";
  currentPage = 1;
  searchInput.focus();
  renderApp();
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  currentPage = 1;
  renderApp();
});

itemsPerPageSelect.addEventListener("change", (e) => {
  itemsPerPage = parseInt(e.target.value, 10);
  currentPage = 1;
  renderApp();
});

prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderApp(true);
  }
});

nextPageBtn.addEventListener("click", () => {
  const totalCount = getFilteredAndSortedProducts().length;
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderApp(true);
  }
});

resetFilterBtn.addEventListener("click", () => {
  searchQuery = "";
  searchInput.value = "";
  clearSearchBtn.style.display = "none";
  currentCategory = "Semua";
  currentSort = "default";
  sortSelect.value = "default";
  currentPage = 1;
  updateCategoryUI();
  renderApp();
});

// --- INISIALISASI SAAT PERTAMA KALI DIMUAT ---
renderCategoryFilter();
renderApp();
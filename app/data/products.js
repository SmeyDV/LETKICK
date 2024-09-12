const products = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus",
    price: "$120",
    description:
      "A versatile and comfortable shoe perfect for running and training.",
    image: "https://i.ebayimg.com/images/g/ozkAAOSwnMtidUSn/s-l500.jpg",
    type: "sport",
    reviews: 120,
    rating: 4,
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: "$180",
    description: "Boost your performance with exceptional energy return.",
    image:
      "https://images.prismic.io/sportsshoesprod/732c2c21-da0e-498a-8603-563a9bec5409_adidas-ultraboost-light-article1.jpg?auto=compress,format",
      type: "sport",
      reviews: 10,
      rating: 5,
  },
  {
    id: 3,
    name: "Under Armour HOVR Phantom",
    price: "$150",
    description:
      "High-performance shoe with HOVR technology for a zero-gravity feel.",
    image:
      "https://cdn.runrepeat.com/storage/gallery/product_primary/39388/under-armour-hovr-phantom-3-21232010-main.jpg",
      type: "sport",
      reviews: 8,
      rating: 4,
  },
  {
    id: 4,
    name: "Puma Speed 500",
    price: "$100",
    description: "Lightweight shoe designed for maximum speed and agility.",
    image:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/192253/08/fnd/PNA/fmt/png/SPEED-500-Mens-Running-Shoes",
      type: "sport",
      reviews: 20,
      rating: 4,
  },
  {
    id: 5,
    name: "Reebok Nano X",
    price: "$130",
    description: "Engineered for high-intensity workouts with maximum support.",
    image:
      "https://www.hoylesfitness.com/wp-content/uploads/2021/01/IMG_1910-scaled.jpeg",
      type: "sport",
      reviews: 34,
      rating: 4,
  },
  {
    id: 6,
    name: "New Balance Fresh Foam",
    price: "$140",
    description: "Ultimate comfort and cushioning for long-distance running.",
    image:
      "https://www.runningshoesguru.com/wp-content/uploads/2022/09/New-Balance-Fresh-Foam-X-1080-v12-14.jpeg",
      type: "sport",
      reviews: 85,
      rating: 4,
  },
  {
    id: 7,
    name: "ASICS Gel-Kayano",
    price: "$160",
    description: "Premium stability shoe with advanced GEL cushioning.",
    image:
      "https://i.ebayimg.com/00/s/OTAwWDE2MDA=/z/8N0AAOSwfXBluyZc/$_57.JPG?set_id=8800005007",
      type: "sport",
      reviews: 120,
      rating: 4,
  },
  {
    id: 8,
    name: "Mizuno Wave Rider",
    price: "$130",
    description: "Responsive and smooth ride for everyday runs.",
    image:
      "https://www.blueridgeoutdoors.com/wp-content/uploads/2012/07/MizunoWave15.jpg",
      type: "sport",
      reviews: 34,
      rating: 4,
  },
  {
    id: 9,
    name: "Saucony Kinvara",
    price: "$110",
    description: "Lightweight and fast shoe with a natural feel.",
    image:
      "https://cdn.fleetfeet.com/a:1.7777777777778-f:cover-w:1600/assets/Saucony-Kinvara-11-Masthead.png?s=aad42b49",
      type: "sport",
      reviews: 35,
      rating: 4,
  },
  {
    id: 10,
    name: "Brooks Ghost 13",
    price: "$150",
    description: "Balanced, soft cushioning for a smooth ride.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Xg2d7ZC8C9Ijjy1V_olCohuGheX7sfwWpw&s",
      type: "sport",
      reviews: 71,
      rating: 4,
  },
  // Hiking
  {
    id: 11,
    name: "Salomon X Ultra 3",
    price: "$150",
    description:
      "A lightweight, durable hiking shoe designed for all-terrain adventures.",
    image:
      "https://outdoorguru.com/wp-content/uploads/2020/04/Salomon_X_Ultra_3_GTX_Cover.jpg",
      type: "hiking",
      reviews: 41,
      rating: 4,
  },
  {
    id: 12,
    name: "Merrell Moab 2",
    price: "$120",
    description:
      "Comfortable and supportive, perfect for long hikes and rough terrain.",
    image:
      "https://www.switchbacktravel.com/sites/default/files/Merrell%20Moab%202%20shoes%20%28m%29.jpg",
      type: "hiking",
      reviews: 21,
      rating: 4,
  },
  {
    id: 13,
    name: "Columbia Newton Ridge",
    price: "$110",
    description:
      "Waterproof construction and superior cushioning for mountain trails.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZy_L9a1NTZ70J_miijgC8W9RofsylQzHJrQ&s",
      type: "hiking",
      reviews: 21,
      rating: 4,
  },
  {
    id: 14,
    name: "La Sportiva Nucleo High GTX",
    price: "$200",
    description:
      "High-performance hiking boot with GORE-TEX for ultimate protection.",
    image:
      "https://www.switchbacktravel.com/sites/default/files/images/articles/La%20Sportiva%20Nucleo%20High%20II%20GTX%20%28standing%20on%20log%20by%20water%29_0.jpg",
      type: "hiking",
      reviews: 24,
      rating: 4,
  },
  {
    id: 15,
    name: "Keen Targhee III",
    price: "$140",
    description:
      "Known for its comfort and versatility on various hiking paths.",
    image:
      "https://d1nymbkeomeoqg.cloudfront.net/photos/28/66/408164_29823_XXL.jpg",
      type: "hiking",
      reviews: 16,
      rating: 4,
  },
  //cuasual
  {
    id: 16,
    name: "Nike Air Force 1",
    price: "$120",
    description: "Classic and versatile, perfect for everyday casual wear.",
    image:
      "https://sneakcenter.com/cdn/shop/products/nike-air-force-1-low-white-supreme-sneakcenter-1-34784981156107.webp?v=1701593817",
      type: "casual",
      reviews: 20,
      rating: 4,
  },
  {
    id: 17,
    name: "Adidas Stan Smith",
    price: "$80",
    description: "A timeless sneaker for a clean and simple look.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4GnyXzPVPagWPI2kTttFw_bBZ_EEyJXDZw&s",
      type: "casual",
      reviews: 18,
      rating: 4,
  },
  {
    id: 18,
    name: "Vans Old Skool",
    price: "$60",
    description:
      "The classic skate shoe with a casual twist for everyday wear.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Ual9GAEJIn7eBsB2yOXCfcg2-Ji7tHAlQQ&s",
      type: "casual",
      reviews: 14,
      rating: 3,
  },
  {
    id: 19,
    name: "Puma Suede Classic",
    price: "$70",
    description: "Retro-inspired sneakers for a stylish casual look.",
    image:
      "https://i5.walmartimages.com/seo/Puma-Mens-Suede-Classic-XXI-Sneakers-Black-White-11-US_c089bb1c-a199-4fe4-9987-2ff66f9cd859.d48a1eac667747ed6f53b7504bf79460.jpeg",
      type: "casual",
      reviews: 11,
      rating: 4,
  },
  {
    id: 20,
    name: "New Balance 574",
    price: "$85",
    description: "Comfortable and stylish, ideal for casual outings.",
    image:
      "https://i5.walmartimages.com/seo/New-Balance-574-Men-s-Running-Shoes-Size-9-5D_f4f85206-a6eb-40e5-9025-b2162a4d3ac4_1.1193d5f2132b5553def5b4b69ac09fcb.jpeg",
      type: "casual",
      reviews: 22,
      rating: 4,
  },

  {
    id: 21,
    name: "Air Jordan",
    price: "$299.99",
    description: "Perfect for running and everyday casual wear.",
    image:
      "https://ir.ebaystatic.com/pictures/aw/pics/sneakers/s_l640_c46b85470d.png",
      type: "casual",
      reviews: 42,
      rating: 4,
  },
  {
    id: 22,
    name: "Classic Loafers",
    price: "$99.99",
    description: "Elegant loafers for formal and semi-formal occasions.",
    image:
      "https://static.vecteezy.com/system/resources/previews/024/764/478/original/casual-shoes-isolated-3d-png.png",
      type: "casual",
      reviews: 91,
      rating: 4,
  },
  {
    id: 23,
    name: "Converse All-Stars",
    price: "$199.99",
    description: "Comfortable flip flops for a relaxed day out.",
    image: "https://pngimg.com/d/converse_PNG66.png",
    type: "casual",
    reviews: 62,
    rating: 4,
  },
];

export default products;

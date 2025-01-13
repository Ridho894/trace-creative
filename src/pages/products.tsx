import Image from "next/image";
import { useState } from "react";

const catalogItems = [
  {
    id: 1,
    name: "Clothing",
  },
  {
    id: 2,
    name: "Accessories",
  },
  {
    id: 3,
    name: "Drinkware",
  },
  {
    id: 4,
    name: "Bags & Wallets",
  },
  {
    id: 5,
    name: "Stationery and Office Supplies",
  },
  {
    id: 6,
    name: "Electronics",
  },
  {
    id: 7,
    name: "Safety Apparel",
  },
  {
    id: 8,
    name: "Eco-Friendly Items",
  },
  {
    id: 9,
    name: "Digital Printing",
  },
  {
    id: 10,
    name: "Premium Items",
  },
];

const Clothing = [
  {
    id: 1,
    name: "Baseball Varsity",
    image: "/products/clothing/Baseball Varsity.png",
  },
  {
    id: 2,
    name: "Batik’s Shirt",
    image: "/products/clothing/Batik’s Shirt.png",
  },
  {
    id: 3,
    name: "Blazer Men",
    image: "/products/clothing/Blazer.png",
  },
  {
    id: 4,
    name: "Blazer Women",
    image: "/products/clothing/Blazer(1).png",
  },
  {
    id: 5,
    name: "Bomber Jacket",
    image: "/products/clothing/Bomber Jacket.png",
  },
  {
    id: 6,
    name: "Crewneck",
    image: "/products/clothing/Crewneck.png",
  },
  {
    id: 7,
    name: "Full Print",
    image: "/products/clothing/Full Print.png",
  },
  {
    id: 8,
    name: "Jersey",
    image: "/products/clothing/Jersey.png",
  },
  {
    id: 9,
    name: "Long T-shirt",
    image: "/products/clothing/Long T-shirt.png",
  },
  {
    id: 10,
    name: "Polo",
    image: "/products/clothing/Polo.png",
  },
  {
    id: 11,
    name: "Raglan",
    image: "/products/clothing/Raglan.png",
  },
  {
    id: 12,
    name: "Riding Jacket",
    image: "/products/clothing/Riding Jacket.png",
  },
  {
    id: 13,
    name: "Shirt",
    image: "/products/clothing/Shirt.png",
  },
  {
    id: 14,
    name: "Sweater Hoodie",
    image: "/products/clothing/Sweater Hoodie.png",
  },
  {
    id: 15,
    name: "T-shirt",
    image: "/products/clothing/T-shirt.png",
  },
  {
    id: 16,
    name: "Trouser",
    image: "/products/clothing/Trouser.png",
  },
  {
    id: 17,
    name: "Turtleneck Zipper",
    image: "/products/clothing/Turtleneck Zipper.png",
  },
  {
    id: 18,
    name: "Utility Jacket",
    image: "/products/clothing/Utility Jacket.png",
  },
  {
    id: 19,
    name: "Vest",
    image: "/products/clothing/Vest.png",
  },
  {
    id: 20,
    name: "Zipper Hoodie",
    image: "/products/clothing/Zipper Hoodie.png",
  },
];

const Accessories = [
  { id: 1, name: "Cap", image: "/products/accessories/Cap.png" },
  { id: 2, name: "Clock", image: "/products/accessories/Clock.png" },
  { id: 3, name: "Golf Ball", image: "/products/accessories/Golf Ball.png" },
  {
    id: 4,
    name: "Luggage Case",
    image: "/products/accessories/Luggage Case.png",
  },
  { id: 5, name: "Pin", image: "/products/accessories/Pin.png" },
  { id: 6, name: "Towel", image: "/products/accessories/Towel.png" },
  { id: 7, name: "Umbrella", image: "/products/accessories/Umbrella.png" },
];

const Drinkware = [
  { id: 1, name: "Corkcicle", image: "/products/drinkware/Corkcicle.png" },
  { id: 2, name: "Hydro Flask", image: "/products/drinkware/Hydro Flask.png" },
  {
    id: 3,
    name: "Infused Bottle",
    image: "/products/drinkware/Infused Bottle.png",
  },
  { id: 4, name: "LED Bottle", image: "/products/drinkware/LED Bottle.png" },
  { id: 5, name: "Lock & Lock", image: "/products/drinkware/Lock & Lock.png" },
  { id: 6, name: "Mugs", image: "/products/drinkware/Mugs.png" },
  {
    id: 7,
    name: "Stainless Bottle",
    image: "/products/drinkware/Stainless Bottle.png",
  },
  { id: 8, name: "Stanley", image: "/products/drinkware/Stanley.png" },
  {
    id: 9,
    name: "Water Bottle",
    image: "/products/drinkware/Water Bottle.png",
  },
];

const BagsAndWallets = [
  { id: 1, name: "Backpack", image: "/products/bags-and-wallets/Backpack.png" },
  {
    id: 2,
    name: "Card Holder",
    image: "/products/bags-and-wallets/Card Holder.png",
  },
  { id: 3, name: "Clutch", image: "/products/bags-and-wallets/Clutch.png" },
  {
    id: 4,
    name: "Drawstring Bag",
    image: "/products/bags-and-wallets/Drawstring Bag.png",
  },
  {
    id: 5,
    name: "Duffle Bag",
    image: "/products/bags-and-wallets/Duffle Bag.png",
  },
  {
    id: 6,
    name: "Laptop Bag",
    image: "/products/bags-and-wallets/Laptop Bag.png",
  },
  { id: 7, name: "Luggage", image: "/products/bags-and-wallets/Luggage.png" },
  {
    id: 8,
    name: "Pouch",
    image: "/products/bags-and-wallets/Pouch.png",
  },
  {
    id: 9,
    name: "PVC Bag",
    image: "/products/bags-and-wallets/PVC Bag.png",
  },
  {
    id: 10,
    name: "Shopping Bag",
    image: "/products/bags-and-wallets/Shopping Bag.png",
  },
  {
    id: 11,
    name: "Totebag",
    image: "/products/bags-and-wallets/Totebag.png",
  },
];

const StationeryAndOfficeSupplies = [
  {
    id: 1,
    name: "Desk Calendar",
    image: "/products/stationery/Desk Calendar.png",
  },
  {
    id: 2,
    name: "Mousepad",
    image: "/products/stationery/Mousepad.png",
  },
  {
    id: 3,
    name: "Notebook",
    image: "/products/stationery/Notebook.png",
  },
  {
    id: 4,
    name: "Pen",
    image: "/products/stationery/Pen.png",
  },
  {
    id: 5,
    name: "Stationery Kit",
    image: "/products/stationery/Stationery Kit.png",
  },
  {
    id: 6,
    name: "Sticky Note",
    image: "/products/stationery/Sticky Note.png",
  },
  {
    id: 7,
    name: "USB Flash Drive",
    image: "/products/stationery/USB Flash Drive.png",
  },
];

const Electronics = [
  {
    id: 1,
    name: "Bluetooth  Speakers",
    image: "/products/electronics/Bluetooth  Speakers.png",
  },
  { id: 2, name: "Headphones", image: "/products/electronics/Headphone.png" },
  {
    id: 3,
    name: "LED Light",
    image: "/products/electronics/LED Light.png",
  },
  {
    id: 4,
    name: "Phone Stand",
    image: "/products/electronics/Phone Stand.png",
  },
  {
    id: 5,
    name: "Powerbank",
    image: "/products/electronics/Powerbank.png",
  },
  {
    id: 6,
    name: "Running Headset",
    image: "/products/electronics/Running Headset.png",
  },
  {
    id: 7,
    name: "Smart Notebook",
    image: "/products/electronics/Smart Notebook.png",
  },
  {
    id: 8,
    name: "TWS",
    image: "/products/electronics/TWS.png",
  },
  {
    id: 9,
    name: "Wireless  Powerbank",
    image: "/products/electronics/Wireless  Powerbank.png",
  },
];

const SafetyApparel = [
  { id: 1, name: "Bump Caps", image: "/products/safety-apparel/Bump Caps.png" },
  {
    id: 2,
    name: "Face Shields",
    image: "/products/safety-apparel/Face Shields.png",
  },
  {
    id: 3,
    name: "Flame-Resistant Jacket",
    image: "/products/safety-apparel/Flame-Resistant Jacket.png",
  },
  {
    id: 4,
    name: "Full-Body Protections",
    image: "/products/safety-apparel/Full-Body Protections.png",
  },
  { id: 5, name: "Helmets", image: "/products/safety-apparel/Helmets.png" },
  {
    id: 6,
    name: "High-Visibility Jacket",
    image: "/products/safety-apparel/High-Visibility Jacket.png",
  },
  {
    id: 7,
    name: "Reflective Safety Vests",
    image: "/products/safety-apparel/Reflective Safety Vests.png",
  },
  {
    id: 8,
    name: "Respirators",
    image: "/products/safety-apparel/Respirators.png",
  },
  {
    id: 9,
    name: "Safety Gloves",
    image: "/products/safety-apparel/Safety Gloves.png",
  },
  {
    id: 10,
    name: "Safety Googles",
    image: "/products/safety-apparel/Safety Googles.png",
  },
  {
    id: 11,
    name: "Safety Harnesses",
    image: "/products/safety-apparel/Safety Harnesses.png",
  },
  {
    id: 12,
    name: "Vest (Multi Pocker)",
    image: "/products/safety-apparel/Vest (Multi Pocker).png",
  },
];

const EcoFriendlyItems = [
  {
    id: 1,
    name: "Ashtray",
    image: "/products/eco-friendly/Ashtray.png",
  },
  {
    id: 2,
    name: "Bamboo Bottles",
    image: "/products/eco-friendly/Bamboo Bottles.png",
  },
  {
    id: 3,
    name: "Bamboo Straws",
    image: "/products/eco-friendly/Bamboo Straws.png",
  },
  {
    id: 4,
    name: "Canvas Bag",
    image: "/products/eco-friendly/Canvas Bag.png",
  },
  {
    id: 5,
    name: "Desktop Pen Holder",
    image: "/products/eco-friendly/Desktop Pen Holder.png",
  },
  {
    id: 6,
    name: "Jute Totebag",
    image: "/products/eco-friendly/Jute Totebag.png",
  },
  {
    id: 7,
    name: "Keychain",
    image: "/products/eco-friendly/Keychain.png",
  },
  {
    id: 8,
    name: "Namecard Holder",
    image: "/products/eco-friendly/Namecard Holder.png",
  },
  {
    id: 9,
    name: "Phone Holder",
    image: "/products/eco-friendly/Phone Holder.png",
  },
  {
    id: 10,
    name: "Recycled Pens",
    image: "/products/eco-friendly/Recycled Pens.png",
  },
  {
    id: 11,
    name: "Stainless Straws",
    image: "/products/eco-friendly/Stainless Straws.png",
  },
  {
    id: 12,
    name: "Trivet",
    image: "/products/eco-friendly/Trivet.png",
  },
];

const DigitalPrinting = [
  {
    id: 1,
    name: "Flyer Pamflet",
    image: "/products/digital-printing/Flyer_Pamflet.png",
  },
  {
    id: 2,
    name: "Packaging",
    image: "/products/digital-printing/Packaging.png",
  },
  {
    id: 3,
    name: "Promotion Banner",
    image: "/products/digital-printing/Promotion Banner.png",
  },
];

const PremiumItems = [
  { id: 1, name: "2XU", image: "/products/premium-brand/2XU.png" },
  { id: 2, name: "Adidas", image: "/products/premium-brand/Adidas.png" },
  { id: 3, name: "Diadora", image: "/products/premium-brand/Diadora.png" },
  { id: 4, name: "DKNY", image: "/products/premium-brand/DKNY.png" },
  { id: 5, name: "Lacoste", image: "/products/premium-brand/Lacoste.png" },
  {
    id: 6,
    name: "Marks & Spencer",
    image: "/products/premium-brand/Marks & Spencer.png",
  },
  {
    id: 7,
    name: "Massino Dutti",
    image: "/products/premium-brand/Massino Dutti.png",
  },
  {
    id: 8,
    name: "New Balance",
    image: "/products/premium-brand/New Balance.png",
  },
  { id: 9, name: "New Era", image: "/products/premium-brand/New Era.png" },
  { id: 10, name: "Nike", image: "/products/premium-brand/Nike.png" },
  {
    id: 11,
    name: "On Running",
    image: "/products/premium-brand/On Running.png",
  },
  {
    id: 12,
    name: "Onitsuka Tiger",
    image: "/products/premium-brand/Onitsuka Tiger.png",
  },
  { id: 13, name: "Puma", image: "/products/premium-brand/Puma.png" },
  { id: 14, name: "Reebok", image: "/products/premium-brand/Reebok.png" },
  { id: 15, name: "Samsonite", image: "/products/premium-brand/Samsonite.png" },
  { id: 16, name: "Skechers", image: "/products/premium-brand/Skechers.png" },
  { id: 17, name: "Speedo", image: "/products/premium-brand/Speedo.png" },
  { id: 18, name: "Srixon", image: "/products/premium-brand/Srixon.png" },
  { id: 19, name: "Tissot", image: "/products/premium-brand/Tissot.png" },
  { id: 20, name: "Tumi", image: "/products/premium-brand/Tumi.png" },
  { id: 21, name: "Wilson", image: "/products/premium-brand/Wilson.png" },
];

const Products = () => {
  const [selectedCatalog, setSelectedCatalog] = useState<string | null>(
    "Clothing"
  );
  const [selectedItems, setSelectedItems] = useState<any[]>(Clothing);

  const handleCategoryClick = (category: string) => {
    setSelectedCatalog(category);

    if (category === "Clothing") {
      setSelectedItems(Clothing);
    } else if (category === "Accessories") {
      setSelectedItems(Accessories);
    } else if (category === "Drinkware") {
      setSelectedItems(Drinkware);
    } else if (category === "Bags & Wallets") {
      setSelectedItems(BagsAndWallets);
    } else if (category === "Stationery and Office Supplies") {
      setSelectedItems(StationeryAndOfficeSupplies);
    } else if (category === "Electronics") {
      setSelectedItems(Electronics);
    } else if (category === "Safety Apparel") {
      setSelectedItems(SafetyApparel);
    } else if (category === "Eco-Friendly Items") {
      setSelectedItems(EcoFriendlyItems);
    } else if (category === "Digital Printing") {
      setSelectedItems(DigitalPrinting);
    } else if (category === "Premium Items") {
      setSelectedItems(PremiumItems);
    } else {
      setSelectedItems([]); // Default, jika kategori tidak dikenali
    }
  };

  return (
    <div>
      <div className="relative w-screen h-max xl:h-screen overflow-hidden">
        <img
          src="/background_top.png"
          alt="Background Image"
          className="object-cover h-[550px] xl:h-screen w-screen"
        />
      </div>
      <div className="relative w-full bg-[#FFD205] pb-20">
        <div className="bg-[url('/small_curve.png')] h-full w-screen bg-contain bg-no-repeat">
          <div className="max-w-7xl mx-auto">
            <h2 className="xl:text-h2 text-h5 text-white pt-5 tracking-wide uppercase text-right">
              Products
            </h2>
          </div>
          <div className="max-w-7xl h-full mx-auto space-x- xl:pt-20 pt-10 flex xl:flex-row flex-col items-start justify-between">
            {/* DESKTOP */}
            <div className="hidden xl:block">
              {catalogItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      handleCategoryClick(item.name);
                    }}
                    className={`leading-tight text-[#043D58] p-2 pl-10 w-96 text-left ${
                      item.name === selectedCatalog
                        ? "text-white bg-[#0D6286] rounded-full"
                        : ""
                    }`}
                  >
                    <h6 className="text-h6">{item.name}</h6>
                  </button>
                </div>
              ))}
            </div>
            {/* MOBILE BUAT SCROLL KIRI KANAN */}
            <div className="flex xl:hidden overflow-x-auto space-x-4 px-4 w-full pb-10">
              {catalogItems.map((item) => (
                <div key={item.id} className="flex-shrink-0">
                  <button
                    onClick={() => {
                      handleCategoryClick(item.name);
                    }}
                    className={`leading-tight text-[#043D58] p-2 px-10 w-full text-left ${
                      item.name === selectedCatalog
                        ? "text-white bg-[#0D6286] rounded-full"
                        : ""
                    }`}
                  >
                    <h6 className="text-sub2">{item.name}</h6>
                  </button>
                </div>
              ))}
            </div>
            <div className="grid xl:grid-cols-5 grid-cols-2 gap-5 place-self-center w-max xl:px-0 px-4">
              {/* Baris pertama - 5 item */}
              {selectedItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl h-36 w-36 shadow-md p-4 flex flex-col items-center justify-around"
                >
                  <p className="text-gray-800 font-medium text-center text-sub3">
                    {item.name}
                  </p>
                  <img
                    className="h-20 w-20 object-contain"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

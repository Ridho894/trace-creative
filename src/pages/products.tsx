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
  { id: 1, name: "T-Shirt", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Jacket", image: "https://via.placeholder.com/150" },
];

const Accessories = [
  { id: 3, name: "Necklace", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Watch", image: "https://via.placeholder.com/150" },
];

const Drinkware = [
  { id: 5, name: "Mug", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Water Bottle", image: "https://via.placeholder.com/150" },
];

const BagsAndWallets = [
  { id: 9, name: "Notebook", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Pen", image: "https://via.placeholder.com/150" },
];

const StationeryAndOfficeSupplies = [
  {
    id: 1,
    name: "Notebooks",
    image:
      "https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png",
  },
  {
    id: 2,
    name: "USB Flash Drive",
    image:
      "https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png",
  },
  {
    id: 3,
    name: "Planners Book",
    image:
      "https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png",
  },
  {
    id: 4,
    name: "Ballpoint Pens",
    image:
      "https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png",
  },
  {
    id: 5,
    name: "Mousepads",
    image:
      "https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png",
  },
  {
    id: 6,
    name: "Desk Calendars",
    image:
      "https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png",
  },
  {
    id: 7,
    name: "Sticky Note",
    image:
      "https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png",
  },
  {
    id: 8,
    name: "Stationery Kit",
    image:
      "https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png",
  },
];

const Electronics = [
  { id: 11, name: "USB Flash Drive", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Headphones", image: "https://via.placeholder.com/150" },
];

const SafetyApparel = [
  { id: 13, name: "Reflective Vest", image: "https://via.placeholder.com/150" },
  { id: 14, name: "Hard Hat", image: "https://via.placeholder.com/150" },
];

const EcoFriendlyItems = [
  {
    id: 15,
    name: "Recycled Tote Bag",
    image: "https://via.placeholder.com/150",
  },
  { id: 16, name: "Bamboo Pen", image: "https://via.placeholder.com/150" },
];

const DigitalPrinting = [
  { id: 17, name: "Custom Stickers", image: "https://via.placeholder.com/150" },
  { id: 18, name: "Brochure", image: "https://via.placeholder.com/150" },
];

const PremiumItems = [
  { id: 19, name: "Luxury Pen", image: "https://via.placeholder.com/150" },
  {
    id: 20,
    name: "Premium Notebook",
    image: "https://via.placeholder.com/150",
  },
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
      <div className="relative w-screen h-screen overflow-hidden">
        <Image
          src="/background_top.png"
          alt="Background Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-full bg-[#FFD205]">
        <div className="bg-[url('/small_curve.png')] h-screen w-screen bg-contain bg-no-repeat">
          <h2 className="text-h2 text-white pr-40 pt-5 tracking-wide uppercase text-right">
            Products
          </h2>
          <div className="max-w-7xl mx-auto space-x-32 space-y-4 pt-10 flex items-center justify-between">
            <div>
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
            <div className="grid grid-cols-5 gap-10">
              {/* Baris pertama - 5 item */}
              {selectedItems.slice(0, 5).map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl h-32 w-32 shadow-md p-4 flex flex-col items-center"
                >
                  <p className="text-gray-800 font-medium text-center text-sub2">
                    {item.name}
                  </p>
                  <img
                    className="h-12 w-12 object-contain"
                    src="https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png"
                    alt={item.name}
                  />
                </div>
              ))}
              {/* Baris kedua - 3 item ditengah */}
              <div className="col-span-1"></div> {/* Spacer kiri */}
              {selectedItems.slice(5, 8).map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl h-32 w-32 shadow-md p-4 flex flex-col items-center"
                >
                  <p className="text-gray-800 font-medium">{item.name}</p>
                  <img
                    className="h-12 w-12 object-contain"
                    src="https://w7.pngwing.com/pngs/792/536/png-transparent-notebook-blue-adobe-illustrator-notebook-miscellaneous-text-rectangle.png"
                    alt={item.name}
                  />
                </div>
              ))}
              <div className="col-span-1"></div> {/* Spacer kanan */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

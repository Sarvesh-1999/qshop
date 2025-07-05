import Divider from "@mui/material/Divider";

const Products = () => {
  const sidebarFilter = {
    category: [
      {
        id: "men",
        title: "Men",
      },
      {
        id: "women",
        title: "Women",
      },
      {
        id: "kids",
        title: "Kids",
      },
      {
        id: "accessories",
        title: "Accessories",
      },
      {
        id: "footware",
        title: "Footware",
      },
    ],
    brand: [
      {
        id: "nike",
        title: "Nike",
      },
      {
        id: "adidas",
        title: "Adidas",
      },
      {
        id: "puma",
        title: "Puma",
      },
      {
        id: "levis",
        title: "Levi's",
      },
      {
        id: "zara",
        title: "Zara",
      },
      {
        id: "handm",
        title: "H&M",
      },
    ],
  };

  const sampleProducts = [
    {
      image: "https://example.com/products/shirt.jpg",
      title: "cotton casual shirt",
      description:
        "comfortable and breathable cotton casual shirt for daily wear",
      category: "clothing",
      brand: "united colors",
      price: 999,
      salePrice: 799,
      totalStock: 50,
      averageReview: 4.2,
    },
    {
      image: "https://example.com/products/laptop.jpg",
      title: "hp pavilion laptop",
      description:
        "powerful hp laptop with i5 processor and 8GB RAM for multitasking",
      category: "electronics",
      brand: "hp",
      price: 58999,
      salePrice: 54999,
      totalStock: 20,
      averageReview: 4.5,
    },
    {
      image: "https://example.com/products/smartphone.jpg",
      title: "samsung galaxy s21",
      description:
        "android smartphone with dynamic AMOLED display and high-end camera",
      category: "mobiles",
      brand: "samsung",
      price: 69999,
      salePrice: 64999,
      totalStock: 35,
      averageReview: 4.6,
    },
    {
      image: "https://example.com/products/shoes.jpg",
      title: "nike running shoes",
      description:
        "lightweight running shoes for men with extra grip and durability",
      category: "footwear",
      brand: "nike",
      price: 4999,
      salePrice: 3999,
      totalStock: 75,
      averageReview: 4.3,
    },
    {
      image: "https://example.com/products/watch.jpg",
      title: "fossil analog watch",
      description:
        "premium analog wristwatch with leather strap and metal case",
      category: "accessories",
      brand: "fossil",
      price: 10999,
      salePrice: 8999,
      totalStock: 15,
      averageReview: 4.0,
    },
    {
      image: "https://example.com/products/mixer.jpg",
      title: "philips mixer grinder",
      description: "750-watt powerful mixer grinder for daily kitchen use",
      category: "home appliances",
      brand: "philips",
      price: 3899,
      salePrice: 3499,
      totalStock: 30,
      averageReview: 4.1,
    },
    {
      image: "https://example.com/products/book.jpg",
      title: "atomic habits book",
      description: "bestseller book on building habits for long-term success",
      category: "books",
      brand: "penguin",
      price: 499,
      salePrice: 399,
      totalStock: 200,
      averageReview: 4.8,
    },
    {
      image: "https://example.com/products/table.jpg",
      title: "wooden study table",
      description: "compact wooden study table with drawer and open shelf",
      category: "furniture",
      brand: "urban ladder",
      price: 7999,
      salePrice: 7499,
      totalStock: 10,
      averageReview: 3.9,
    },
    {
      image: "https://example.com/products/earbuds.jpg",
      title: "boat airdopes 441",
      description:
        "wireless bluetooth earbuds with immersive sound and long battery",
      category: "audio",
      brand: "boat",
      price: 2999,
      salePrice: 2499,
      totalStock: 60,
      averageReview: 4.4,
    },
    {
      image: "https://example.com/products/helmet.jpg",
      title: "vega full face helmet",
      description: "strong and stylish full face helmet for two-wheeler riders",
      category: "safety",
      brand: "vega",
      price: 1599,
      salePrice: 1399,
      totalStock: 40,
      averageReview: 4.1,
    },
  ];

  return (
    <div className="mt-[70px] flex flex-col md:flex-row">
      <aside className="bg-white min-h-screen w-full md:w-[20%] p-3 order-2 md:order-1 md:block hidden md:sticky top-[70px]">
        <header className="p-5">
          <h1 className="text-2xl font-bold">Filters</h1>
        </header>

        <Divider />

        <section className="p-5">
          <h1 className="text-2xl font-bold">Category</h1>

          <ul className="py-4 select-none">
            {sidebarFilter.category.map((ele) => {
              return (
                <li
                  className="flex items-center font-semibold text-lg gap-2"
                  key={ele.id}
                >
                  <input type="radio" name="category" id={ele.id} />
                  <label htmlFor={ele.id}>{ele.title}</label>
                </li>
              );
            })}
          </ul>
        </section>

        <Divider />

        <section className="p-5">
          <h1 className="text-2xl font-bold">Brands</h1>

          <ul className="py-4 select-none">
            {sidebarFilter.brand.map((ele) => {
              return (
                <li
                  className="flex items-center font-semibold text-lg gap-2"
                  key={ele.id}
                >
                  <input type="radio" name="brand" id={ele.id} />
                  <label htmlFor={ele.id}>{ele.title}</label>
                </li>
              );
            })}
          </ul>
        </section>
      </aside>

      {/* Mobile filter button */}
      <div className="md:hidden flex justify-end p-2 order-1">
        <button
          className="bg-black text-white px-4 py-2 rounded font-semibold"
          onClick={() =>
            document
              .getElementById("mobile-filter")
              .classList.toggle("hidden")
          }
        >
          Filters
        </button>
      </div>

      {/* Mobile filter drawer */}
      <div
        id="mobile-filter"
        className="fixed inset-0 bg-black bg-opacity-40 z-40 hidden md:hidden"
      >
        <div className="absolute top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-6">
          <header className="p-2">
            <h1 className="text-xl font-bold">Filters</h1>
          </header>
          <Divider />
          <section className="p-2">
            <h1 className="text-lg font-bold">Category</h1>
            <ul className="py-2 select-none">
              {sidebarFilter.category.map((ele) => (
                <li
                  className="flex items-center font-semibold text-base gap-2"
                  key={ele.id}
                >
                  <input type="radio" name="category" id={ele.id + "-mobile"} />
                  <label htmlFor={ele.id + "-mobile"}>{ele.title}</label>
                </li>
              ))}
            </ul>
          </section>
          <Divider />
          <section className="p-2">
            <h1 className="text-lg font-bold">Brands</h1>
            <ul className="py-2 select-none">
              {sidebarFilter.brand.map((ele) => (
                <li
                  className="flex items-center font-semibold text-base gap-2"
                  key={ele.id}
                >
                  <input type="radio" name="brand" id={ele.id + "-mobile"} />
                  <label htmlFor={ele.id + "-mobile"}>{ele.title}</label>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <main className="min-h-screen w-full md:w-[80%] p-2 md:p-3 order-3">
        <header className="p-2 md:p-5 flex flex-col md:flex-row gap-2 md:gap-0 justify-between bg-white rounded-lg shadow">
          <h1 className="text-xl md:text-2xl font-bold">All Products</h1>

          <div className="flex gap-2 md:gap-4 items-center">
            <span className="text-sm md:text-base">4 Products</span>
            <select
              name="sort"
              id="sort"
              className="p-2 shadow-md rounded outline-0 bg-black text-white cursor-pointer min-w-[120px] md:min-w-[150px] text-sm md:text-base"
            >
              <option
                value=""
                disabled
                selected
                className="bg-gray-800 text-gray-300"
              >
                --Sort--
              </option>
              <option value="high" className="bg-black text-white">
                High to Low
              </option>
              <option value="low" className="bg-black text-white">
                Low to High
              </option>
            </select>
          </div>
        </header>

        <article className="p-2 md:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {sampleProducts.map((product, idx) => {
            return (
              <section key={idx} className="p-2 md:p-4 w-full flex justify-center">
                <div className="shadow-lg rounded-lg overflow-hidden w-full max-w-xs">
                  <img
                    src={
                      "https://www.shutterstock.com/image-vector/no-image-available-picture-coming-600nw-2057829641.jpg"
                    }
                    alt=""
                    className="h-48 md:h-64 w-full object-cover object-top block mx-auto"
                  />
                  <div className="p-3 md:p-4">
                    <h1 className="capitalize font-extrabold text-lg md:text-xl">
                      {product.title}
                    </h1>
                    <p className="flex justify-between text-xs md:text-sm capitalize text-gray-600 font-semibold">
                      <span>{product.category}</span>
                      <span>{product.brand}</span>
                    </p>
                    <h3 className="flex justify-between font-semibold text-sm md:text-base">
                      <del>Rs.{product.price}</del>
                      <span>Rs.{product.salePrice}</span>
                    </h3>
                    <button className="bg-black text-white w-full rounded py-1 mt-3 cursor-pointer text-sm md:text-base">
                      Add to cart
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
        </article>
      </main>
    </div>
  );
};

export default Products;

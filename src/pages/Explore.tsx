
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Premium Cotton T-Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    name: "Slim Fit Denim Jeans",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    name: "Classic Oxford Shirt",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "4",
    name: "Leather Jacket",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "5",
    name: "Casual Blazer",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1594938374225-fb6aa0b77367?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "6",
    name: "Designer Polo Shirt",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&auto=format&fit=crop&q=60",
  },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-heading font-semibold mb-8">
            Explore Our Collection
          </h1>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            {["All", "New Arrivals", "Best Sellers", "Sale"].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

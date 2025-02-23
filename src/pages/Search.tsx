import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Search as SearchIcon } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const allProducts = [
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

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState(allProducts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Results */}
          <div className="mt-8">
            <h2 className="text-xl font-heading font-medium mb-6">
              {searchQuery ? `Results for "${searchQuery}"` : "Popular Products"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {results.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

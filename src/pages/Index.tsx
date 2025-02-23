
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import HeroSlider from "@/components/HeroSlider";
import { Star, Truck, ShieldCheck, RefreshCcw } from "lucide-react";

const featuredProducts = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Products */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-heading font-semibold mb-8">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-heading font-semibold mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Shirts", "Pants", "Outerwear", "Accessories"].map((category) => (
              <div
                key={category}
                className="glass-card p-6 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-medium">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-heading font-semibold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Free Shipping",
                description: "On orders over $100",
              },
              {
                icon: <RefreshCcw className="w-8 h-8" />,
                title: "Easy Returns",
                description: "30-day return policy",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Secure Shopping",
                description: "100% secure checkout",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Quality",
                description: "Handpicked products",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Collection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold mb-4">
                Summer Collection 2024
              </h2>
              <p className="text-gray-300 mb-8">
                Discover our latest collection of premium menswear, designed for the modern gentleman.
              </p>
              <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors">
                Explore Collection
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop&q=60"
                alt="Summer Collection"
                className="rounded-lg object-cover h-48 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60"
                alt="Summer Collection"
                className="rounded-lg object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-heading font-semibold text-center mb-8">
            @SleekStyle on Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1616696038562-574c68778e84?w=800&auto=format&fit=crop&q=60",
              "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&auto=format&fit=crop&q=60",
            ].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square group overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={image}
                  alt="Instagram Post"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Post
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-500 mb-6">
            Subscribe to our newsletter for exclusive offers and style updates.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;

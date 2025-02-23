
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="product-card block">
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;

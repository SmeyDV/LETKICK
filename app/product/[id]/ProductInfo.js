import { Star } from 'lucide-react';

export default function ProductInfo({ brand, name, price, rating, reviews, description }) {
  return (
    <div className="md:flex-grow">
      <div className="uppercase tracking-wide text-sm text-gray-500 dark:text-gray-400 font-semibold mb-2">
        {brand}
      </div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{name}</h1>
      <p className="text-3xl font-bold text-red-500 mt-4">{price}</p>

      <div className="mt-4 flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill={i < rating ? 'currentColor' : 'none'}
          />
        ))}
        <span className="ml-2 text-gray-600 dark:text-gray-300">({reviews} reviews)</span>
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default function ProductImage({ image, name }) {
  return (
    <div className="md:flex-shrink-0">
      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover md:h-96 md:w-96 rounded-lg border-2 border-black-400 "
      />
    </div>
  );
}

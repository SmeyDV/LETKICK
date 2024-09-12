export default function ProductOptions({ selectedSize, setSelectedSize, selectedColor, setSelectedColor }) {
  const colors = [
    { label: 'Black', value: 'black', hex: '#000000' },
    { label: 'White', value: 'white', hex: '#ffffff' },
    { label: 'Red', value: 'red', hex: '#ff0000' },
    { label: 'Blue', value: 'blue', hex: '#0000ff' },
  ];

  return (
    <div className="mt-6 space-y-4">
      {/* Size Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Size:</label>
        <select 
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">Select a size</option>
          {['S', 'M', 'L', 'XL'].map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      {/* Color Selection with Circles */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Color:</label>
        <div className="flex space-x-4">
          {colors.map((color) => (
            <div
              key={color.value}
              className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color.value ? 'border-indigo-500' : 'border-gray-300'}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.value)}
            >
              {/* Circle with border */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

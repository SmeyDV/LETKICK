export default function AlertMessage({ showAlert }) {
  return (
    showAlert && (
      <div className="mt-4 text-sm text-green-600">
        Item added to your cart successfully!
      </div>
    )
  );
}

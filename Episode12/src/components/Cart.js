import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const formatPrice = (p) => {
  if (p == null) return "N/A";
  return `₹${(p / 100).toFixed(2)}`;
};

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items || []);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = cartItems.reduce((sum, item) => {
    const unitPrice = item.price ?? item.defaultPrice ?? 0;
    const qty = item.quantity ?? 1;
    return sum + unitPrice * qty;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Your Cart</h1>
          <p className="text-sm text-gray-600">
            {cartItems.length} item{cartItems.length !== 1 && "s"}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Clear Cart
          </button>
          <button
            disabled={cartItems.length === 0}
            className={`px-4 py-2 rounded-md text-white transition ${
              cartItems.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-md p-10 text-center text-gray-600">
          <p className="text-lg mb-2">Your cart is empty.</p>
          <p className="text-sm">Add some delicious items to get started!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, idx) => {
            const {
              uid,
              id,
              name,
              price,
              defaultPrice,
              quantity,
              description,
              isVeg,
              imageId,
            } = item.card.info;
            const unitPrice = price ?? defaultPrice ?? 0;
            const itemTotal = unitPrice * (quantity ?? 1);
            const key = uid ?? id ?? `${name}-${quantity ?? 1}-${unitPrice}-${idx}`;

            return (
              <div
                key={key}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-gray-100 rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {typeof isVeg !== "undefined" && (
                    <span
                      className={`w-3 h-3 mt-1 rounded-full flex-shrink-0 border ${
                        isVeg
                          ? "border-green-600 bg-green-500"
                          : "border-red-600 bg-red-500"
                      }`}
                      aria-label={isVeg ? "Vegetarian" : "Non-Vegetarian"}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-md font-semibold text-gray-800 truncate">
                      {name}
                    </h2>
                    {description && (
                      <p
                        className="text-sm text-gray-500 mt-1"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {description}
                      </p>
                    )}
                    <div className="mt-2 flex gap-4 text-sm">
                      <div>
                        Qty: <span className="font-medium">{quantity ?? 1}</span>
                      </div>
                      <div>
                        Price:{" "}
                        <span className="font-medium">
                          {formatPrice(unitPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 flex flex-col items-end">
                  <p className="text-sm text-gray-600">Item total</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {formatPrice(itemTotal)}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Summary */}
          <div className="flex justify-end border-t pt-4">
            <div className="w-full sm:w-auto flex flex-col items-end gap-2">
              <div className="flex justify-between w-full max-w-xs">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              <div className="flex justify-between w-full max-w-xs text-xl font-bold">
                <span>Total:</span>
                <span>{formatPrice(totalAmount)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

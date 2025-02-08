"use client";

import { useCart } from "@/src/context/CartContext";
import { X } from "lucide-react";

const CartSidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { cart, removeFromCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 md:w-96 bg-gradient-to-b from-gray-900 to-black text-white shadow-lg border-l border-gray-700 
      transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-400"
      >
        <X size={24} />
      </button>

      {/* Sidebar Content */}
      <div className="p-6 flex flex-col h-full overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>

        {/* Empty Cart Message */}
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="bg-white text-black flex justify-between p-3 rounded-lg shadow-md"
              >
                <span>{item.name} - ${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;

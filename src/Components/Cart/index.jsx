import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete, MdEdit, MdOutlineClear, MdSave } from "react-icons/md";

const Cart = ({ cartItems, setCart }) => {
  const [dropDown, setDropDown] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [editQuantity, setEditQuantity] = useState(1);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setEditQuantity(item.quantity);
  };

  const handleUpdate = () => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.cardTitle === editingItem.cardTitle
        ? { ...cartItem, quantity: editQuantity }
        : cartItem
    );
    setCart(updatedCart);
    setEditingItem(null);
  };

  const handleQuantityChange = (event) => {
    setEditQuantity(Number(event.target.value));
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter(
      (cartItem) => cartItem.cardTitle !== item.cardTitle
    );
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      setCart([]);
    }
  };

  const formatCurrency = (amount) =>
    amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });

  
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + (item.cardPriceNum || 0) * (item.quantity || 1),
    0
  );
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <div className="fixed right-14 top-5 z-50">
      <div
        className="bg-white border border-[#3A35411F] w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
        onClick={handleDropDown}
      >
        <FaCartShopping className="h-6 w-6 text-tertiary-400" />
      </div>
      <div className="bg-error-default w-4 h-4 rounded-full absolute top-0 right-0 text-xs text-white flex justify-center items-center">
        {totalQuantity}
      </div>
      <div className={`${dropDown ? "" : "hidden"}`}>
        <div className="bg-white border border-[#3A35411F] w-screen md:w-[600px] h-auto px-4 py-2 rounded-lg absolute md:top-14 md:right-0 -right-14">
          {cartItems.length === 0 ? (
            <p className="text-center">Cart is empty</p>
          ) : (
            <div className="max-w-4xl mx-auto p-1 md:p-4">
              <h2 className="text-xl md:text-2xl font-bold">Cart</h2>
              <div className="grid grid-cols-4 md:grid-cols-5 text-xs md:text-base gap-4 bg-gray-100 p-2 rounded-lg">
                <div className="font-semibold md:col-span-2">Item</div>
                <div className="font-semibold text-center">Jumlah</div>
                <div className="font-semibold text-right">Total</div>
                <div className="font-semibold text-right">
                  <button
                    className="bg-error-default hover:bg-error-hover text-white px-2 py-1 mx-2 rounded"
                    onClick={handleClearCart}
                  >
                    <MdOutlineClear />
                  </button>
                </div>

                {cartItems.map((item) => (
                  <div className="contents" key={item.cardTitle}>
                    <div className="md:col-span-2">{item.cardTitle || "No Name"}</div>
                    <div className="text-center">
                      {editingItem && editingItem.cardTitle === item.cardTitle ? (
                        <input
                          type="number"
                          value={editQuantity}
                          onChange={handleQuantityChange}
                          className="border border-gray-300 rounded px-2 py-1 w-16"
                        />
                      ) : (
                        item.quantity
                      )}
                    </div>
                    <div className="text-right">
                      {formatCurrency((item.cardPriceNum || 0) * (item.quantity || 1))}
                    </div>
                    <div className="text-right flex flex-col justify-evenly md:block mx-4 md:mx-0">
                      {editingItem && editingItem.cardTitle === item.cardTitle ? (
                        <button
                          className="bg-primary-400 hover:bg-primary-500 text-white px-2 py-1 rounded"
                          onClick={handleUpdate}
                        >
                          <MdSave />
                        </button>
                      ) : (
                        <button
                          className="bg-secondary-500 hover:bg-[#ffb03a] text-white px-2 py-1 rounded"
                          onClick={() => handleEdit(item)}
                        >
                          <MdEdit />
                        </button>
                      )}
                      <button
                        className="bg-error-default hover:bg-error-hover text-white px-2 py-1 md:mx-2 rounded"
                        onClick={() => handleRemoveItem(item)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="col-span-2 md:col-span-3 font-bold text-right">
                  Total Harga:
                </div>
                <div className="font-bold">
                  {formatCurrency(totalAmount)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

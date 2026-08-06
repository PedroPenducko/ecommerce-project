import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import { useState } from "react";
export function CartItem({
  loadCart,
  selectedDeliveryOption,
  deliveryOptions,
  cartItem,
}) {
  let [isEditingQuantity, setIsEditingQuantity] = useState(false);
  let [quantity, setQuantity] = useState(cartItem.quantity);
  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };
  const startEditingQuantity = () => {
    setQuantity(cartItem.quantity);
    setIsEditingQuantity(true);
  };
  const saveCartItem = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      quantity,
    });
    await loadCart();
    setIsEditingQuantity(false);
  };
  const updateCartQuantity = (event) => {
  setQuantity(Number(event.target.value))
  }
  return (
    <div className="cart-item-container">
      <div className="delivery-date">
        Delivery date:{" "}
        {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
          "dddd, MMMM, D",
        )}
      </div>

      <div className="cart-item-details-grid">
        <img className="product-image" src={cartItem.product.image} />

        <div className="cart-item-details">
          <div className="product-name">{cartItem.product.name}</div>
          <div className="product-price">
            {formatMoney(cartItem.product.priceCents)}
          </div>

          {isEditingQuantity ? (
            <div className="product-quantity">
              <input
                min="1"
                max="100"
                type="number"
                value={quantity}
                onChange={updateCartQuantity}
              />
    
              <span
                className="delete-quantity-link link-primary"
                 onClick={saveCartItem}>Save</span>
              <span
                className="delete-quantity-link link-primary"
                onClick={deleteCartItem}
              >
                Delete
              </span>
            </div>
          ) : (
            <div className="product-quantity">
              <span>
                Quantity:{" "}
                <span className="quantity-label">{cartItem.quantity}</span>
              </span>
              <span
                className="update-quantity-link link-primary"
                onClick={startEditingQuantity}
              >
                Update
              </span>
              <span
                className="delete-quantity-link link-primary"
                onClick={deleteCartItem}
              >
                Delete
              </span>
            </div>
          )}
        </div>
        <DeliveryOptions
          cartItem={cartItem}
          deliveryOptions={deliveryOptions}
          loadCart={loadCart}
        />
      </div>
    </div>
  );
}

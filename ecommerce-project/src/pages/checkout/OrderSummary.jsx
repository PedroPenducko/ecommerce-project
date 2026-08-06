
import { CartItem } from "./CartItem";

export function OrderSummary({cart, deliveryOptions, loadCart}){
  return(
              <div className="order-summary">
                {deliveryOptions.length > 0 && cart.map(cartItem => {
                  const selectedDeliveryOption = deliveryOptions.find(deliveryOption => deliveryOption.id === cartItem.deliveryOptionId)
                  
                  
                  return (
                    <CartItem  key={cartItem.productId} loadCart={loadCart} selectedDeliveryOption={selectedDeliveryOption}  deliveryOptions={deliveryOptions} cartItem={cartItem} />
                  )
                })}
    
              </div>
  )
}
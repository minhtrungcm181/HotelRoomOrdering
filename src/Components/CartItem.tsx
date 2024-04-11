import { useContext } from "react"
import { useShoppingCart } from "../context/ShoppingCartContext"

import { useItemContext } from "../context/ItemContext"
import { formatCurrency } from "../ultilities/formatCurrency"
import './CartItem.css'

type CartItemProps = {
    id:number
    quantity:number
}
export function CartItem({id, quantity}: CartItemProps) {
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()

    const {foodList} = useItemContext()
    const item = foodList.find(i=> i.id === id)
    if (item == null) return null
    return (
        <div className="mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={item.foodThumb} className="thumb" style={{objectFit:"cover"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="title">{item.foodTitle}</h5>
       
        <p className="text-muted">{formatCurrency(item.foodPrice)} </p>
        <div className='mt-auto'>
        <button className = "btn" onClick={() => decreaseCartQuantity(id)}>-</button>
        
          <span className="fs-3">{quantity}</span>
         
          <button className = "btn" onClick={() => increaseCartQuantity(id)}>+</button>
          <div className="h5">{formatCurrency(item.foodPrice*quantity)}</div>
          </div>
          <button className = "remove-btn" onClick={() => removeFromCart(id)}> remove </button>
        </div>
       </div>
      </div>
    </div>
  

    )

}
export default CartItem;
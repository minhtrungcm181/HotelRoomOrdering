import CartItem from "../Components/CartItem"
import { useItemContext } from "../context/ItemContext"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../ultilities/formatCurrency"
import'./Cart.css'

const ShoppingCart = () => {
    const {cartItems} = useShoppingCart()
    const {foodList} = useItemContext()
return(
    <div className="container">
        <p className="h1">Cart</p>
        <div className="container Cart">
            {cartItems.length === 0 ? (<p className="h3"> Nothing on cart</p>) :
             cartItems.map(item => (
             <CartItem key = {item.id} {...item}/>
            )
        )}
        </div>
        <div className="mt-3">
            <div className="ms-auto fw-bold fs-5">Total:{" "}{
                formatCurrency(cartItems.reduce(
                    (total, cartItem) => {
                        const item = foodList.find(i => i.id === cartItem.id)
                        return total + (item?.foodPrice || 0) * cartItem.quantity
                    }, 0
                ))
            }</div>
        </div>
       <div className="Payment">
        <button>Payment</button>
       </div>
    </div>
)
}
export default ShoppingCart
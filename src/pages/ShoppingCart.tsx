import CartItem from "../Components/CartItem"
import { useItemContext } from "../context/ItemContext"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../ultilities/formatCurrency"
import { FaArrowRight } from "react-icons/fa";
import'./Cart.css'
import MomoConfig from "../Payment/MomoConfig";
import { Payment } from "../Payment/Payment";

const ShoppingCart = () => {
    const {cartItems} = useShoppingCart()
    const {foodList} = useItemContext()
    const Checkout = () =>{
        MomoConfig(totalMoney)

    };
    var totalMoney: any
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
                        totalMoney = total + (item?.foodPrice || 0) * cartItem.quantity
                        return totalMoney
                    }, 0
                ))
            }</div>
        </div>
       <div className="Payment">
        <button onClick={Checkout}>
            Checkout 
            <FaArrowRight/>
        </button>
       </div>
    </div>
)
}
export default ShoppingCart
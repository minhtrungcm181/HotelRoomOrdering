import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../ultilities/formatCurrency';
import './FoodCard.css';

type FoodItemProps = {
  id: number,
  foodTitle: string,
  foodPrice: number,
  foodDescription: string,
  foodThumb: string  
}

const FoodCard = ({id, foodTitle, foodPrice, foodDescription, foodThumb}:FoodItemProps ) => {

    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    
    
    return(
      <div className="Card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={foodThumb} className="thumb" style={{objectFit:"cover"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="title">{foodTitle}</h5>
        <p className="description">{foodDescription}</p>
        <p className="price">{formatCurrency(foodPrice)}</p>
       <div className='mt-auto'>
        {quantity === 0 ? (
          <button className="w-20" onClick={() => increaseCartQuantity(id) }> Add to cart </button>
        ): <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
          <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
          <button onClick={() => decreaseCartQuantity(id)}>-</button>
          <span className="fs-3">{quantity}</span>
          <button onClick={() => increaseCartQuantity(id)}>+</button>
          </div>
          <button onClick={() => removeFromCart(id)}> remove </button>
           </div>
           
           }
       </div>
      </div>
    </div>
  </div>
</div>
    )
};
export default FoodCard;
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
export default Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return (
        <div className="header-cart">
            <div>
                <h1>Cart</h1>
                <button onClick={handleClearCart}>clear</button>
                {
                    cartItems.length === 0 ? <p>The cart is empty. Add items </p> : 
                    <ItemList items={cartItems}></ItemList>
                }
            </div>
        </div>
    );
}
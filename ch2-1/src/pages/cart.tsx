import { Product } from "@/components/Product";
import { useEffect, useState } from "react"

type CartProduct = {
    productId: number,
    quantity: number,
}

type CartItemType ={
    id: number;
    userId: number;
    date: string; // yyyy-mm-dd
    products: Array<CartProduct>
}

const Cart: React.FC = () => {
    const [cart, setCart] = useState<CartItemType[]>([])

    useEffect(() => {
        const getMyCart = async () => {
            const userId = 1 // get from my page
            const res = await fetch(`https://fakestoreapi.com/carts/${userId}`)
            const data = await res.json()
            setCart(data)
        }
        getMyCart()
    }, [])

    return (
        <div>
            {cart.map( item => <Product key={item.id} id={item.id} />)}
            <button>Checkout</button>
        </div>
    )
}


export default Cart

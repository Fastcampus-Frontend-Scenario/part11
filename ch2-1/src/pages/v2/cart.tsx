import { getCoupons } from "@/api/getCoupons";
import { getProduct } from "@/api/getProduct";
import { Product } from "@/components/Product";
import { RecommendItems } from "@/components/RecommendItems";
import { CartItemType } from "@/types/type";

import { useEffect, useState } from "react"

const CartRecommend: React.FC = () => {
    const [cart, setCart] = useState<CartItemType | null>(null)
    const [total, setTotal] = useState<number>(0)
    const [discount, setDiscount] = useState<number>(0)

    useEffect(() => {
        const getMyCart = async () => {
            const userId = 1 // get from my page
            const res = await fetch(`https://fakestoreapi.com/carts/${userId}`)
            const data = await res.json()
            setCart(data)
        }
        getMyCart()
    }, [])
    useEffect(()=> {
        const calc = async () => {
            // get Appliable coupons based on the cart
            const coupons = await getCoupons(cart)
            coupons.sort((a, b) => b.discountAmount - a.discountAmount)
            const discounted =  coupons[0]?.discountAmount ??0
            setDiscount(discounted)
        }
        calc()
    }, [cart])

    return (
        <div>
            {!Boolean(cart) && <RecommendItems />}
            {Boolean(cart) &&(
                <>
                    {cart?.products.map(item => <Product key={item.productId} id={item.productId} />)}
                    <button>Checkout</button>
                </>
            )}
        </div>
    )
}


export default CartRecommend
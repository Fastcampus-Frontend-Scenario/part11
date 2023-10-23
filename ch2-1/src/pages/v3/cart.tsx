import { getCoupons } from "@/api/getCoupons";
import { getDownloadableCoupons } from "@/api/getDownloadableCoupons";
import { getProduct } from "@/api/getProduct";
import { Product } from "@/components/Product";
import { RecommendItems } from "@/components/RecommendItems";
import { CartItemType } from "@/types/type";

import { useEffect, useState } from "react"

const CartRecommendAndAppliedCoupon: React.FC = () => {
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

    useEffect(() => {
        const calc = async () => {
            const prices = cart?.products.map(async (productInfo) => {
                const product = await getProduct(productInfo.productId)
                return product.price * productInfo.quantity

            })
            const price = await Promise.all(prices?? []).then((values) => {
                return values.reduce((a, b) => a + b, 0) 
            })
            setTotal(price)
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
            <div>{`총 ${total} 원`}</div>
            <div>{`쿠폰할인 ${discount} 원`}</div>
        </div>
    )
}


export default CartRecommendAndAppliedCoupon
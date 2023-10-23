import { CartItemType, Coupon } from "@/types/type"



export const getCoupons = (_cart: CartItemType | null): Promise<Array<Coupon>>  => {
    const result =  new Promise<Array<Coupon>>((resolve, reject)=> {
        resolve([])
    })
    return result
}
    
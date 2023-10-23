import { Coupon } from "@/types/type";

export const getDownloadableCoupons  = async (): Promise<Array<Coupon>> => {
    return new Promise<Array<Coupon>>((resolve, reject) => {
        resolve([])
    })
}
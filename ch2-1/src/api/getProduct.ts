import { Product } from "@/types/type"

export const getProduct = (id: number): Promise<Product> => {
    return new Promise((resolve, reject) => {
        resolve({
            id: 1,
            price: 1000
        })
    })
}
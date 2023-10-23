export type CartItemType = {
    id: number;
    userId: number;
    date: string; // yyyy-mm-dd
    products: Array<CartProduct>
}

export type CartProduct = {
    productId: number,
    quantity: number,
}

export type Coupon = {
    id: number
    discountAmount: number
    discountRate: number
    discountType: 'amount' | 'rate'
    name: string // coupon name
    minimumAmount: number // required minimum amount to use this coupon
}

export type Product = {
    id: number;
    price: number;
}
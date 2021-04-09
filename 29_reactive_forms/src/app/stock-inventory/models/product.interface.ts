export interface Product {
  id: number,
  price: number,
  name: string,
}

export interface Item {
  quantity: number,
  product_id: number,
}
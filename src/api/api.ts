import type { ProductType } from "@/types/ProductType.type";
import axios from "axios";

export const getProducts = async (limit: number, offset: number, type: ProductType) => {
  // const query = new URLSearchParams()
  // query.set('prodType', prodType)
  // const { data } = await axios.get(`https://app.cuddlycat.ru/lk/product?limit=${limit}&offset=${offset}&type=${prodType}`)
  const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}&offset=${offset}&type=${type}`)
  return data.products
}
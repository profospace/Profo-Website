import axios from "axios";
import { get_user_wishlist } from "../../../utils/base_url";
import { getConfig } from "../../../utils/config";

// get user wishlist
const getWishlist = async ()=>{
  const response = await axios.get(`${get_user_wishlist}` , getConfig())
  console.log(response.data?.user?.history)
  return response.data?.user?.history
}


// const addToWishlist = async(id)=>{
//   const response = await axios.put(`${products_base_url}/addtowishlist` ,{productId : id} ,getConfig())
//   return response.data
// }


const wishlistService = {
  getWishlist,
  // addToWishlist,

};

export default wishlistService;

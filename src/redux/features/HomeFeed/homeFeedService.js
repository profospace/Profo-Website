import axios from "axios";
import { home_feed_base_url } from "../../../utils/base_url";

const getHomeFeed = async () => {
  const response = await axios.get(`${home_feed_base_url}`);
  console.log(response)
  return response.data;
};
// const getHomeFeed = async ({ latitude, longitude, radius }) => {
//   const response = await axios.get(`${home_feed_base_url}?latitude=${latitude}&longitude=${longitude}&radius=${radius || 1}`);
//   console.log(response)
//   return response.data;
// };


const homeFeedService = {
  getHomeFeed
};

export default homeFeedService;

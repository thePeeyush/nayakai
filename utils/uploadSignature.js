import { v2 as cloudinary } from 'cloudinary';
const apiSecret = process.env.CLOUDINARY_API_SECRET;

// Server-side function used to sign an upload with a couple of
// example eager transformations included in the request.
const signuploadform = () => {
  const timestamp = Math.round((new Date).getTime()/1000);

  const signature = cloudinary.utils.api_sign_request({
    timestamp: timestamp,
    folder: 'posts'}, apiSecret);

  return { timestamp, signature }
}

export default signuploadform

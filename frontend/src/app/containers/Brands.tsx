import { Box } from "@mui/material"
import { images } from "../constants"

const Brands = () => {
  return (
    <Box component="section"
    sx={{ flexGrow: 1,
      p: 5,
      bgcolor: 'black',
      display: 'flex',
      justifyContent: 'space-evenly',
      }}>
        <img src={images.atlassian} alt="atlassian" />
        <img src={images.dropbox} alt="dropbox" />
        <img src={images.google} alt="google" />
        <img src={images.slack} alt="slack" />
        <img src={images.shopify} alt="shopify" />
    </Box>
  )
}

export default Brands
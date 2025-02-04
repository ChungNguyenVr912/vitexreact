import axios from "axios";

const product = {}
product.getAll = () =>
  axios.get( 'https://65813c7d3dfdd1b11c42ae8c.mockapi.io/api/products', {headers: {}})

export {product}
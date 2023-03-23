const data = require('../data/products.json');

function getProducts() {
  return data.products;
}

function getProductById(id) {
  return data.products.find(product => product.id === id);
}

function addProduct(product) {
 products.id=data.products.length+1;
 data.products.push(product);
}

function updateProduct(id, product) {
  const index = data.products.findIndex(product => product.id === id);
  data.products[index] = product;
}

function deleteProduct(id) {
  const index = data.products.findIndex(product => product.id === id);
  data.products.splice(index, 1);
}

function searchProducts(searchTerm) {
  return data.products.filter(product => {
    return product.title.toLowerCase().indexOf(searchTerm.toLowercase()) ||
    product.description.toLowerCase().indexOf(searchTerm.toLowercase()) ||
    product.brand.toLowerCase().indexOf(searchTerm.toLowercase());
  });
}
module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}
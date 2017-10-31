const product = [{
    name: 'xiaomi',
    price: 1000
}, {
    name: 'redmi',
    price: 500
}]

const fn_product = async (ctx, next) => {
    ctx.response.type = 'application/json',
    ctx.response.body = {
        product: product
    }
}

module.exports = {
    'GET /api/product': fn_product
}
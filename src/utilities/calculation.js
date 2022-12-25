

const cosmeticTotalPrice = (products) => {
    const sumReducer = (previous, current) => previous + current.price;
    const total = products.reduce(sumReducer, 0)
    return total;
}
export {

    cosmeticTotalPrice as totalPrice
};
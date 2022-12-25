const localStrorageDb = (id) => {
    // const quantity = localStorage.getItem(id)
    // if (quantity) {
    //     const newQuantity = parseInt(quantity) + 1;
    //     localStorage.setItem(id, newQuantity)
    // }
    // else {
    //     localStorage.setItem(id, 1)
    // }

    let shoppingCart;
    //get the stored cart
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    else {
        shoppingCart = {}
    }


    //add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

        }
    }
}



export {
    localStrorageDb,
    removeFromDb

}
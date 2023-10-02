export const subTotal = (product) => {
    let ans=0;
    product.map((product) => {
        ans=ans+product.quantity * product.price;
        return ans;
    })
    return ans;
}

export const productCount = (product) => {
    let ans=0;
    product.map((product) => {
        ans=ans+product.quantity;
        return ans;
    })
    return ans;
}

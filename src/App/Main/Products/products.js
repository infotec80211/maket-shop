const products = [
    {
        id:1,
        name:"iPhone 7",
        description:"This is iPhone 7",
        type:"phone",
        capacity:64,
        price:1500,
        image:"/images/products/ipad.png"
    },
    {
        id:2,
        name:"iPhone 8",
        // description:"This is iPhone 8",
        type:"phone",
        capacity:256,
        price:1000,
        image:"/images/products/iphone.png"
    },
    {
        id:3,
        name:"iPhone X",
        description:"This is iPhone X",
        type:"phone",
        capacity:128,
        price:1000,
        image:"../images/products/ipad.png"
    },
    {
        id:4,
        name:"iPhone 7 plus",
        description:"This is iPhone 7 plus",
        type:"phone",
        capacity:64,
        price:500,
        image:"/images/products/iphone.png"
    },
    

]

export const getProductsMap = (array) => {
    return (
        array.reduce((accObj,product)=>({
            ...accObj,
            [product.id]:product
        }),{})
    )
}



export default products

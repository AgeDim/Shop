import {$host} from "../axiosAPI";
export const getProductByType = (product, name) => {
    $host.get("/product/" + name).then(res => {
        if (res.status === 200) {
            console.log(res)
            console.log("done /product")
            product.setProduct(res.data)
        }
    }).catch((e) => {
        console.log(e)
        console.log("error with post /product")
    })
}
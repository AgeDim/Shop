import AdminPanel from "./pages/AdminPanel";
import {ADMIN_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REG_ROUTE, SHOP_ROUTE} from "./utils/const";
import Auth from "./pages/Auth";
import shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";

export const authRoutes=[
    // this array routes for admin
    {
        path:ADMIN_ROUTE,
        Component: AdminPanel
    }
]

export const publicRoutes=[
    // this array routes for user who not authenticate in web-site
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REG_ROUTE,
        Component: Auth
    },
    {
        path: SHOP_ROUTE,
        Component: shop
    },
    {
        path: PRODUCT_ROUTE,
        Component: ProductPage
    },
]
export const loginRoutes=[
    {}
    // this array routes for user who authenticate in web-site
]
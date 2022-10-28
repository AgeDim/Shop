import {
    BASKET_ROUTE, CONTACTS_ROUTE,
    DELIVERY_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PRODUCT_ROUTE,
    REG_ROUTE,
    SERVICES_ROUTE,
    SHOP_ROUTE
} from "./utils/const";
import Auth from "./pages/Auth";
import shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import MainPage from "./pages/MainPage";
import ServicesPage from "./pages/ServicesPage";
import DeliveryPage from "./pages/DeliveryPage";
import BasketPage from "./pages/BasketPage";
import ContactPage from "./pages/ContactPage";
import RegPage from "./pages/RegPage";


export const publicRoutes = [
    // this array routes for user who not authenticate in web-site
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: SERVICES_ROUTE,
        Component: ServicesPage
    },
    {
        path: REG_ROUTE,
        Component: RegPage
    },
    {
        path: SHOP_ROUTE,
        Component: shop
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: DELIVERY_ROUTE,
        Component: DeliveryPage
    },
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
    {
        path: CONTACTS_ROUTE,
        Component: ContactPage
    },
]

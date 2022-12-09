import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    CONTACTS_ROUTE,
    DELIVERY_ROUTE, FAVORITE_ROUTE, FISH_ROUTE,
    LOGIN_ROUTE,
    ORDER_ROUTE,
    PRODUCT_ROUTE,
    REG_ROUTE,
    SHOP_ROUTE
} from "./utils/const";
import AuthPage from "./pages/AuthPage";
import ProductPage from "./pages/ProductPage";
import DeliveryPage from "./pages/DeliveryPage";
import BasketPage from "./pages/BasketPage";
import ContactPage from "./pages/ContactPage";
import RegPage from "./pages/RegPage";
import shopPage from "./pages/ShopPage";
import AdminPannel from "./pages/AdminPannel";
import OrderPage from "./pages/OrderPage";
import FavoritePage from "./pages/FavoritePage";
import FishPage from "./pages/FishPage";


export const publicRoutes = [// this array routes for user who not authenticate in web-site
    {
        path: LOGIN_ROUTE, Component: AuthPage
    }, {
        path: REG_ROUTE, Component: RegPage
    }, {
        path: SHOP_ROUTE, Component: shopPage
    }, {
        path: PRODUCT_ROUTE + '/:id', Component: ProductPage
    }, {
        path: DELIVERY_ROUTE, Component: DeliveryPage
    }, {
        path: BASKET_ROUTE, Component: BasketPage
    }, {
        path: CONTACTS_ROUTE, Component: ContactPage
    }, {
        path: ORDER_ROUTE, Component: OrderPage
    }, {
        path: FAVORITE_ROUTE, Component: FavoritePage
    }, {
        path: FISH_ROUTE, Component: FishPage
    }]
export const adminRoutes = [{
    path: LOGIN_ROUTE, Component: AuthPage
}, {
    path: REG_ROUTE, Component: RegPage
}, {
    path: SHOP_ROUTE, Component: shopPage
}, {
    path: PRODUCT_ROUTE + '/:id', Component: ProductPage
}, {
    path: DELIVERY_ROUTE, Component: DeliveryPage
}, {
    path: BASKET_ROUTE, Component: BasketPage
}, {
    path: CONTACTS_ROUTE, Component: ContactPage
}, {
    path: ADMIN_ROUTE, Component: AdminPannel
}, {
    path: ORDER_ROUTE, Component: OrderPage
}, {
    path: FAVORITE_ROUTE, Component: FavoritePage
}, {
    path: FISH_ROUTE, Component: FishPage
}]
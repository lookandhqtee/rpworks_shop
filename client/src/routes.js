import Admin from "./pages/Admin"
import Shop from "./pages/Shop"
import Auth from "./pages/Auth"
import Request from "./pages/Request"
import { ADMIN_ROUTE, BOOKS_ROUTE, DELIVERIES_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, REQUESTS_ROUTE, SHOP_ROUTE } from "./utils/consts"


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: REQUESTS_ROUTE,
        Component: Request
    },
    {
        path: BOOKS_ROUTE,
        Component: Admin
    },
    {
        path: DELIVERIES_ROUTE,
        Component: Admin
    }
    
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
]
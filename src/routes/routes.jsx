
import Home from "../pages/home/Home";
import Login from "../pages/auth/login/Login";
const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    }, {
        path: "/login",
        exact: true,
        component: Login
    },
];
export default routes;
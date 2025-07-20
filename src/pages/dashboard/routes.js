import Default from "./components/Default";
import OrderList from "./components/OrderList";
export const routesConfig = [
  { index: true, component: Default },
  { path: "ecommerce", component: OrderList },
];

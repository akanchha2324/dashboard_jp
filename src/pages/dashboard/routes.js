import Default from "./components/Default";
import OrderList from "./components/OrderList";
export const routesConfig = [
  { index: true, component: Default },
  { path: "order-list", component: OrderList },
];

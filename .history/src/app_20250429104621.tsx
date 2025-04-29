import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-circular-progressbar/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

const queryClient = new QueryClient();

const jsxWrapper = (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </Provider>
);

const container = document.getElementById("app");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(jsxWrapper);
} else {
  throw new Error('Root container with id "app" not found');
}

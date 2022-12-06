import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <ToastContainer
          autoClose={2000}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

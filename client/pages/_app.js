import { Provider } from "react-redux";
import RootLayout from "../components/RootLayout";
import '../styles/global.css'
import { store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootLayout>
                    <Component {...pageProps} />
                </RootLayout>
            </PersistGate>
        </Provider>
    )
}
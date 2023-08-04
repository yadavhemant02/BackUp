/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './redux/store';
//import persistStore from 'redux-persist/es/persistStore';
//import { PersistGate } from 'redux-persist/integration/react';

//const persistor = persistStore(store);

const AppProdider = () => {
    return (
        <Provider store={store}>

            <App />

        </Provider>

    )
}


AppRegistry.registerComponent(appName, () => AppProdider);

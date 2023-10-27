'use client'

import { persistStore } from 'redux-persist';
import { store } from './store';
import { Provider as ReactReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

interface IReduxProvider {
    children: React.ReactNode
}

const ReduxProvider = ({ children }: IReduxProvider) => {
    const persistor = persistStore(store);
    return (
        <ReactReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </ReactReduxProvider>
    )
}
export default ReduxProvider;
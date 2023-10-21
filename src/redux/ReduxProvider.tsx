'use client'

import { store } from './store';
import { Provider as ReactReduxProvider } from 'react-redux';

interface IReduxProvider {
    children: React.ReactNode
}

const ReduxProvider = ({ children }: IReduxProvider) => {
    return (
        <ReactReduxProvider store={store}>
            {children}
        </ReactReduxProvider>
    )
}
export default ReduxProvider;
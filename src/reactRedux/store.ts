/* eslint-disable no-undef */
import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { useDispatch as useReduxDispatch } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistConfig } from 'redux-persist/es/types';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { rootReducer, RootState } from './reducers';
import Reactotron from '../../ReactotronConfig';
import { Dispatcher } from './types';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['session', 'onBoarding', 'users'],
};

const enhancers: StoreEnhancer[] = [];
if (__DEV__) {
  // @ts-ignore
  enhancers.push(Reactotron?.createEnhancer());
}

const pReducer = persistReducer<RootState>(persistConfig, rootReducer);
export const store = configureStore({
  reducer: pReducer,
  enhancers,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
export const useDispatch: () => Dispatcher = useReduxDispatch as any;

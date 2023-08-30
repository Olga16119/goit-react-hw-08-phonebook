import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token']
}

const persistedReducer= persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({serializableCheck:{ignoreActions:[[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]]}})
  }
});

export const persistor=persistStore(store)
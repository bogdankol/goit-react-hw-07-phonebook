import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/contacts-reducer";
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";

const contactsConfig = {
  key: "contacts",
  storage,
  blacklist: "filter",
};

const store = configureStore({
  reducer: combineReducers({
    contacts: persistReducer(contactsConfig, contactsReducer),
  }),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;

// const persistor = persistStore(store)

// export default {store, persistor}

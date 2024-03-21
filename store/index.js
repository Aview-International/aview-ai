import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './reducers/user.reducer';
import aviewReducer from './reducers/aview.reducer';
import billingReducer from './reducers/billing.reducer';
import voicesReducer from './reducers/voices.reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    aview: aviewReducer,
    billing: billingReducer,
    voices: voicesReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({});
    if (process.env.NODE_ENV === 'development') middleware.push(logger);
    return middleware;
  },
});

export default store;

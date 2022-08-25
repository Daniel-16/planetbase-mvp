import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import eventReducer from '../redux/eventSlice';

export const store = configureStore({
    reducer: {
        events: eventReducer,
        auth: authReducer
    },
})


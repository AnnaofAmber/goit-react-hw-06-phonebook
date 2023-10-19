import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsReducer";


    const rootReducer = configureStore ({
      reducer: contactsReducer,
      // filter: filterReducer
      })


export const store = configureStore(rootReducer)
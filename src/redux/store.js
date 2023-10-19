import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsReducer";


    const rootReducer = combineReducers ({
      contacts: contactsReducer,
      filter:
      })


export const store = configureStore(rootReducer)
import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            id: nanoid(),
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.filter(contact => contact.id !== action.payload);
    },
  },
});

// const filterSlice = createSlice({
//     name: 'filter',
//     initialState: initialState.filter,
//     reducers:{
//         filterContact(state,action){
//             return(state = action.payload)
//         }
//     }
// })

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// export const {filterContact} = filterSlice.action
// export const filterReducer = filterSlice.reducer

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  filterContacts,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actions";

const doFilter = (array, id) => {
  const filteredArray = array.filter((el) => el.id !== id);
  return filteredArray;
};

const contacts = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) => doFilter(state, payload),
  default: (state) => state,
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [getContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  contacts,
  filter,
  error,
  isLoading,
});

export default contactsReducer;

// const contacts = (state = chooseData(contactsListBase, parsedContacts), {type, payload}) => {
//     switch(type){
//         case(ADD):
//         const includesContact = state.filter(el => el.name.toLowerCase() === payload.name.toLowerCase())
//         if(includesContact.length > 0) {
//             alert('You have already added this contact!')
//             return state;
//         } else {
//             localStorage.setItem('contacts', makeStringify([...state, payload]))
//             return [...state, payload];
//         }

//         case(DELETE):
//         return doFilter(state, payload);

//         default:
//             return state;
//     }
// }

// const filter = (state = '', {type, payload}) => {
//     switch(type){
//         case(FILTER):
//         return payload;

//         default:
//             return state;
//     }
// }

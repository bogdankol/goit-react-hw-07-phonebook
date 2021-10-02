import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("contacts/getContactsRequest");
export const getContactsSuccess = createAction("contacts/getContactsSuccess");
export const getContactsError = createAction("contacts/getContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const filterContacts = createAction("contacts/filter");

// const ADD = "contacts/add";
// const DELETE = "contacts/delete";
// const FILTER = "contacts/filter";

// export const addContact = createAction(ADD, ({ name, number }) => {
//   return {
//     payload: {
//       name,
//       number,
//       id: shortid.generate(),
//     },
//   };
// });

// export const deleteContact = createAction(DELETE);

// const addContact = ({name, number}) => ({
//     type: ADD,
//     payload: {
//         name,
//         number,
//         id: shortid.generate()
//     }
// })

// const deleteContact = id => ({
//     type: DELETE,
//     payload: id
// })

// const filterContacts = value => ({
//     type: FILTER,
//     payload: value
// })

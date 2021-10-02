import {
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
import fetches from "../../services/contacts-api";

const fetchContacts = () => async (dispatch) => {
  dispatch(getContactsRequest());
  try {
    const { data } = await fetches.fetchContacts();
    dispatch(getContactsSuccess(data));
  } catch (err) {
    dispatch(getContactsError(err));
  }
};

const addContact =
  ({ name, number }) =>
  async (dispatch) => {
    dispatch(addContactRequest());
    const obj = {
      name,
      number,
    };
    try {
      const { data } = await fetches.addContact(obj);
      dispatch(addContactSuccess(data));
    } catch (err) {
      dispatch(addContactError(err));
    }
  };

const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await fetches.deleteContact(id);
    dispatch(deleteContactSuccess(id));
  } catch (err) {
    dispatch(deleteContactError(err));
  }
};

export default { fetchContacts, addContact, deleteContact };

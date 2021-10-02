import axios from "axios";

axios.defaults.baseURL = "http://localhost:65432";

async function fetchContacts() {
  try {
    const response = await axios.get("/contacts");
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function addContact(obj) {
  try {
    const response = await axios.post("/contacts", obj);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function deleteContact(id) {
  try {
    await axios.delete(`/contacts/${id}`);
  } catch (err) {
    console.log(err);
  }
}
export default { fetchContacts, addContact, deleteContact };

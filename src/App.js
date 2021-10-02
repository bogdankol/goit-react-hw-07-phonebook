import "./App.css";
import Container from "./components/Container";
import Phonebook from "./components/Phonebook";
import contactsOperations from "./redux/contacts/contacts-operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Phonebook />
    </Container>
  );
}

export default App;

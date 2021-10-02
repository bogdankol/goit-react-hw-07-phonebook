import s from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../../redux/contacts/contacts-operations";
import contactsSelectors from "../../../redux/contacts/contacts-selectors";

function ContactList() {
  const dispatch = useDispatch();

  const listForRender = useSelector(contactsSelectors.getFilteredContacts);
  console.log(`qweqeqwe`);
  return (
    <ul className={s.list}>
      {listForRender.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              type="button"
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
              className={s.btn}
            >
              delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;

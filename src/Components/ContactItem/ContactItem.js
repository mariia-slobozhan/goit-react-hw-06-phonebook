import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";
import { getVisiableContacts } from "../../redux/contacts/contacts-selectors";
import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

export default function ContactItem() {
  const items = useSelector(getVisiableContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return items.map(({ contact, id }) => (
    <li className={s.item} key={id} id={id}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.tel}>{contact.number}</span>
      <button
        className={s.button}
        onClick={() => onDeleteContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
}

// const getVisiableContacts = (allContacts, filter) => {
//   const normalizedContacts = filter.toLowerCase();
//   return allContacts.filter(({ contact }) =>
//     contact.name.toLowerCase().includes(normalizedContacts)
//   );
// };

// const mapStateToProps = (state) => {
//   const {items, filter} = state.contacts
//   const visiableContacts =  getVisiableContacts(items, filter)
//   return {
//     items: visiableContacts
//   }
// }

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   items: getVisiableContacts(items, filter),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  items: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

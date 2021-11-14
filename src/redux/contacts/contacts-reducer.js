import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, changeFilter } from "./contacts-actions";
import { toast } from "react-toastify";

const checkContactName = (state, payload) => {
  const { contact } = payload;
  const normalizedContact = contact.name.toLowerCase();
  if (
    state.some(
      ({ contact }) => contact.name.toLowerCase() === normalizedContact
    )
  ) {
    toast.error(`${contact.name} is already in contact list`);
    return state;
  }
  return [...state, payload];
};

const items = createReducer([], {
  [addContact]: (state, { payload }) => checkContactName(state, payload),
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       const { contact } = payload;
//       const normalizedContact = contact.name.toLowerCase();
//       if (
//         state.some(
//           ({ contact }) => contact.name.toLowerCase() === normalizedContact
//         )
//       ) {
//         toast.error(`${contact.name} is already in contact list`);
//         return state;
//       }
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

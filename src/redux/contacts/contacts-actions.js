import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/add", (contact) => {
  return {
    payload: {
      contact,
      id: uuidv4(),
    },
  };
});

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contscts/changeFilter");

// const addContact = (contact) => ({
//   type: types.ADD,
//   payload: {
//     contact,
//     id: uuidv4(),
//   },
// });

// const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export { addContact, deleteContact, changeFilter };

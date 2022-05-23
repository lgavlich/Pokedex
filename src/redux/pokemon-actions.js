import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact", (data) => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

const changeFilter = createAction("filter/change");

export default {
  addContact,

  changeFilter,
};

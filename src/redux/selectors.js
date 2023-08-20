export const selectFilteredContact = state => {
  if (!state.contacts.filter) {
    return state.contacts.contacts;
  }
  return state.contacts.contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(state.contacts.filter.toLowerCase());
  });
};

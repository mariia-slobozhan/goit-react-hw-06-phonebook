export const filterValue = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisiableContacts = (state) => {
  const allContacts = getContacts(state);
  const filter = filterValue(state);

  const normalizedContacts = filter.toLowerCase();
  return allContacts.filter(({ contact }) =>
    contact.name.toLowerCase().includes(normalizedContacts)
  );
};

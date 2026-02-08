import { create } from "zustand";

export const useContactsStore = create((set) => ({
  contacts: [],

  addContact: (name) =>
    set((state) => ({
      contacts: [
        { id: Date.now(), name },
        ...state.contacts, 
      ],
    })),

  deleteContact: (id) =>
    set((state) => ({
      contacts: state.contacts.filter((c) => c.id !== id),
    })),
}));

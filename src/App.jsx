import { useState } from "react";
import { useContactsStore } from "./store/useContactsStore";

function App() {
  const [name, setName] = useState("");

  const contacts = useContactsStore((state) => state.contacts);
  const addContact = useContactsStore((state) => state.addContact);
  const deleteContact = useContactsStore((state) => state.deleteContact);

  const handleAdd = () => {
    if (!name.trim()) return;
    addContact(name);
    setName("");
  };

  return (
    <div>
        <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAdd}>Добавить</button>

        {contacts.map((contact) => (
          <div key={contact.id}>
           <h1>{contact.name}</h1>
            <button onClick={() => deleteContact(contact.id)}>Удалить</button>
          </div>
        ))}
    </div>
  );
}

export default App;

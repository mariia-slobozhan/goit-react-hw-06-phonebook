import "./App.css";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import PhonebookForm from "./Components/PhonebookForm/PhonebookForm";
import ContactList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ToastContainer />
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

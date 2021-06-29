import ContactForm from './components/ContactForm';

import 'modern-normalize/modern-normalize.css';

function App() {
  const addContact = ({ name, number }) => {
    console.log(name, number);
  };
  return <ContactForm onSubmit={addContact} />;
}

export default App;

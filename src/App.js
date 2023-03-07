import ImagenContacto from "./ListaContactos.jpg";
import "./App.css";
import ListContact from "./components/container/contact_list.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ImagenContacto} className="App-logo" alt="logo" />
        <p>
          <ListContact></ListContact>
        </p>
      </header>
    </div>
  );
}

export default App;

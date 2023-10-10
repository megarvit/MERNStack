import './App.css';

import { Footer } from "./components/Header";
import Head from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Head name="ethnus" />
      <Nav age="10" />
      <Nav age="20" />
      <Nav age="30" />
      <Nav age="40" />
      <Nav age="50" />
      <Nav age="60" />
      <Footer brand="facebook" />
    </div>
  );
}

export default App;

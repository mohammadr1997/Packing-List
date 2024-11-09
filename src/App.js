import { useState } from "react";
import Logo from "./Components/logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  function addItems(items) {
    setItems((prev) => [...prev, items]);
  }
  function deleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }
  function toggleItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItems() {
    setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={addItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}

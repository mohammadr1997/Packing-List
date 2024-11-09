import { useState } from "react";
function Form(props) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItems = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    setDescription("");
    setQuantity(1);
    console.log(newItems);
    props.onAddItems(newItems);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h4 style={{ paddingLeft: "6px ", fontSize: "20px" }}>
        What do you need for your trip 😍 ?
      </h4>
      <select
        value={quantity}
        onChange={(event) => setQuantity(+event.target.value)}
      >
        {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button type="'submit">Add</button>
    </form>
  );
}
export default Form;

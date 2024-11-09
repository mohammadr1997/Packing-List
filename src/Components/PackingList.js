import { useState } from "react";
import Item from "./Item";

function PackingList(props) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;
  if (sortBy === "input") sortedItem = props.items;
  if (sortBy === "description")
    sortedItem = props.items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItem = props.items.slice().sort((a, b) => {
      if (a.packed && !b.packed) return -1;
      else if (!a.packed && b.packed) return 1;
      else {
        return 0;
      }
    });

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            obj={item}
            deleteItem={props.onDeleteItem}
            onToggleItem={props.onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="input">Sorted by Input Order</option>
          <option value="description">Sorted by Description</option>
          <option value="packed">Sorted by Packed Order</option>
        </select>
        <button onClick={() => props.clearItems()}>Clear List</button>
      </div>
    </div>
  );
}
export default PackingList;

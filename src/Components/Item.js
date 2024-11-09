function Item({ obj, deleteItem, onToggleItem }) {
  return (
    <li>
      <input
        checked={obj.packed}
        type="checkbox"
        onChange={() => onToggleItem(obj.id)}
      />
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.quantity} {obj.description}
      </span>
      <button onClick={() => deleteItem(obj.id)}>❌</button>
    </li>
  );
}
export default Item;

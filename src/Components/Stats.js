function Stats(props) {
  if (!props.items.length)
    return (
      <p className="stats">please add some items on your packing list 🚀</p>
    );
  const numItems = props.items.length;
  const numPackedItems = props.items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          <p className="stats">
            {" "}
            You Have Already Packed Everything, Ready to Go ✈
          </p>
        ) : (
          <p className="stats">
            you have {numItems} items on your list, and you already packed{" "}
            {numPackedItems} ({percentage}%)
          </p>
        )}
      </em>
    </footer>
  );
}
export default Stats;

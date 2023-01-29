import "./style.css";

export default function ItemList({ items }) {
  return (
    <div className="items-list">
      {items.map((item) => (
        <div key={item.id} className="item-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>
            {item.price}
            {item.currency}
          </p>
        </div>
      ))}
    </div>
  );
}

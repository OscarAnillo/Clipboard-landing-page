import data from "../Data/product-data.json";

export default function ProductComponent() {
  return (
    <section className="product-section">
      <div className="product-row">
        {data.map((item) => (
          <div key={item.id} className="map-div">
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HeaderComponent({
  className,
  image,
  title,
  paragraph,
  btnTxtOne,
  btnTxtTwo,
}) {
  return (
    <section className={className}>
      <div className="header-div">
        <img src={image} alt="" />
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <button className="green-btn">{btnTxtOne}</button>
        <button className="blue-btn">{btnTxtTwo}</button>
      </div>
    </section>
  );
}

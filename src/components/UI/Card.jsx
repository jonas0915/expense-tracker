import "./Card.css";

function Card(props) {
  // containing a constant that will render the original css or props.children
  const classes = " card " + props.className;
  return (
    <>
      <div className={classes}>{props.children}</div>
    </>
  );
}

export default Card;

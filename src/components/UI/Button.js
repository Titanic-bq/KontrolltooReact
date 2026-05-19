function Button(props) {
  if (props.textonly) {
    return (
      <>
        <button className="text-button" onClick={console.log("button")}>
          {props.text}
        </button>
      </>
    );
  } else {
    return <button className="button">{props.text}</button>;
  }
}
export default Button;
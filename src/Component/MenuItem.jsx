function MenuItem(props) {
  return (
    <li
      className={`row ${props.selected ? "selected" : ""}`}
      onClick={props.onClick}
    >
      <div className="icon">{props.icon}</div>
      <div className="title">{props.text}</div>
      {!!props.badge && props.badge}
    </li>
  );
}
export default MenuItem;

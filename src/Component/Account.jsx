function Account(props) {
  return (
    <li className="row">
      <div className="username">{props.username}</div>
      <div className="images">{props.image}</div>
      <div className="displayName">{props.displayName}</div>
    </li>
  );
}
export default Account;

function Header(props) {
  return (
    <div style={{ background: "red" }}>
      <h1>Header</h1>
      <h1>My name is {props.name}</h1>
      <p>This is header for learning purpose</p>
    </div>
  );
}

export default Header;

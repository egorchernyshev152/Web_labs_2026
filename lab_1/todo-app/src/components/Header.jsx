// components/Header.jsx
function Header({ title, activeCount }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="counter">Активных задач: {activeCount}</div>
    </div>
  );
}

export default Header;

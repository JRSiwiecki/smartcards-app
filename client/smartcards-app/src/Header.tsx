import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-container">
        <div>
          <a href="/">Smartcards</a>
        </div>

        <div>
          <a href="/">Decks</a>
        </div>

        <div>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

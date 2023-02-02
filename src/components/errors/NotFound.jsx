import { Link } from "react-router-dom";
import "./notFound.css";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1 className="error-header">Oops! You seem to be lost.</h1>
      <p className="error-message">Here are some helpful links:</p>
      <div className="link-group">
        <Link className="error-link" to="/">
          Home
        </Link>
        <Link className="error-link" to="/collection">
          Work Collection
        </Link>
        <Link className="error-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

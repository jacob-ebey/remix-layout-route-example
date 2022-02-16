import { Link } from "remix";

export default function ProductIndex() {
  return (
    <ul style={{ border: "1px solid green" }}>
      <li>
        <Link to="overview">Overview</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
  );
}

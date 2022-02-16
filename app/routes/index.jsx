import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="product/1">Product #1</Link>
        </li>
        <li>
          <Link to="product/2">Product #2</Link>
        </li>
      </ul>
    </div>
  );
}

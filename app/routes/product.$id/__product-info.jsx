import { Outlet } from "remix";

export default function ProductInfo() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid red" }}>
        <h2>Info...</h2>
      </div>
      <Outlet />
    </div>
  );
}

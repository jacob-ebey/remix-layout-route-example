import { Outlet, useLoaderData } from "remix";

export function loader({ params: { id } }) {
  return `Info for product ${id}`;
}

export default function ProductInfo() {
  let info = useLoaderData();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid red" }}>
        <h2>{info}</h2>
      </div>
      <Outlet />
    </div>
  );
}

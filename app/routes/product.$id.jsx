import { Outlet, useLoaderData } from "remix";

export function loader({ params: { id } }) {
  return {
    name: `Product ${id}`,
  };
}

export default function ProductLayout() {
  let { name } = useLoaderData();

  return (
    <div style={{ border: "1px solid yellow" }}>
      <h1>{name}</h1>

      <Outlet />
    </div>
  );
}

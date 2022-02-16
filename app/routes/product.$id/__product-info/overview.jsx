import { useLoaderData } from "remix";

export function loader({ params: { id } }) {
  return `Overview for Product ${id}.`;
}

export default function Reviews() {
  let overview = useLoaderData();

  return (
    <ul style={{ border: "1px solid green" }}>
      <h3>{overview}</h3>
    </ul>
  );
}

import { useLoaderData } from "remix";

export function loader({ params: { id } }) {
  return [`Product ${id} review 1`, `Product ${id} review 2`];
}

export default function Reviews() {
  let reviews = useLoaderData();

  return (
    <ul style={{ border: "1px solid green" }}>
      {reviews.map((review) => (
        <li key={review}>{review}</li>
      ))}
    </ul>
  );
}

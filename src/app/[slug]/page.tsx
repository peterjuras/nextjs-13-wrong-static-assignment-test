import { cookies } from "next/headers";

export default function SlugPage() {
  const value = cookies().get("someCookie")?.value;
  return <div>{value}</div>;
}

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div>This is single Viedo page</div>
      <Link href={"/login"}>Go to Auth</Link>
    </div>
  );
}

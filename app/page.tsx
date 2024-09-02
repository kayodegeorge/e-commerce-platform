import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <Link className="underline" href="/products">
        Go to All Products
      </Link>
    </main>
  );
}

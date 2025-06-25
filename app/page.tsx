import Link from "next/link";
import ProductCard from "./users/components/ProductCard";

export default function Home() {
  return (
    <>
      <p>helooooooo</p>

      <Link href="/users">Usres link</Link>
      <ProductCard/>
    </>
  );
}

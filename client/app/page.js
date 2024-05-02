import Link from "next/link";

export default function Home() {
  return (
   <main className="flex flex-col items-center text-center">
   <h1 className="text-5xl m-10">Welcome To Home Page</h1>
   <Link href="/product-page" className="bg-slate-400 text-white rounded-md m-2 py-2 px-3 hover:py-2.5 hover:px-3.5 hover:m-1.5">Browse Products</Link>
   <Link href="/add-new-product" className="bg-slate-400 text-white rounded-md m-2 py-2 px-3 hover:py-2.5 hover:px-3.5 hover:m-1.5">Add New Product</Link>
   </main>
  );
}

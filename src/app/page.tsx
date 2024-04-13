import { getAllProducts } from "@/lib/data";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const products = await getAllProducts();
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 text-center">
        <Link href={"/create"}>
          <Button>Create a new Product</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={products!} />
    </div>
  );
}

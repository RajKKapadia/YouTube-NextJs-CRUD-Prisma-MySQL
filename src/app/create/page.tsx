import ProductForm from "@/components/product-form";
import { productSchema } from "@/lib/schemas"
import { z } from "zod";

export default function CreateProductPage() {
    const product: z.infer<typeof productSchema> = {
        name: '',
        description: '',
        price: 0,
        stock: 0
    }
    return (
        <ProductForm product={product} btnName="Submit" id={0} type="create" title="Create a new product."></ProductForm>
    );
};

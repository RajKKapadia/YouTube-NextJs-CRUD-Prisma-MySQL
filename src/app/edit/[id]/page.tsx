import ProductForm from "@/components/product-form";
import { getProductById } from "@/lib/data";

export default async function EditProductPage({ params }: { params: { id: string } }) {
    const product = await getProductById(Number(params.id));
    if (!product) {
        return (
            <div className="flex mt-4 text-center">
                There is no product with the id {params.id}.
            </div>
        );
    }
    return (
        <ProductForm product={product} btnName="Update" id={Number(params.id)} type="update" title={`Edit the product ${product.name}.`}></ProductForm>
    );
};

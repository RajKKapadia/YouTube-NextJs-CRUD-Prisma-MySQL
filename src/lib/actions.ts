"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prisma from "./db";

export const handleDeleteProductAction = async (id: number) => {
    await prisma.product.delete({
        where: {
            id: id
        }
    });
    revalidatePath('/');
    redirect('/');
};
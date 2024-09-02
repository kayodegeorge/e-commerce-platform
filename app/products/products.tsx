"use client";

import { PlusCircle } from "lucide-react";

import { useEffect, useState } from "react";

import { Product, columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddProductForm from "@/components/add-product-form";
import { dummyData } from "@/lib/data";

export default function Products() {
  const [dialog, setDialog] = useState(false);
  const [products, setProducts] = useState<Product[]>(dummyData);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(dummyData);
      localStorage.setItem("products", JSON.stringify(dummyData));
    }
  }, []);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <Dialog open={dialog} onOpenChange={setDialog}>
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Product
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add a Product</DialogTitle>
                <DialogDescription>
                  Add a product so it can be listed
                </DialogDescription>
              </DialogHeader>

              <AddProductForm
                handleSubmit={(product) => {
                  setProducts([...products, product]);
                  localStorage.setItem;
                  setDialog(false);
                }}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable data={products} columns={columns} />
        </CardContent>
      </Card>
    </main>
  );
}

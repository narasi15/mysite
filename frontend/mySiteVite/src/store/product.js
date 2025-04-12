import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "Please fill in all the fields" };
        }
    
        try {
            const res = await fetch("/api/products/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            });
    
            // Handle HTTP-level errors
            if (!res.ok) {
                const errData = await res.json();
                return { success: false, message: errData.message || "Failed to create product" };
            }
    
            const data = await res.json();
    
            if (!data?.data) {
                return { success: false, message: "No product data returned from server" };
            }
    
            set((state) => ({ products: [...state.products, data.data] }));
            return { success: true, message: "Product created successfully!" };
        } catch (error) {
            console.error("Error creating product:", error);
            return { success: false, message: "An error occurred while creating the product" };
        }
    },
    
    fetchProducts: async () => {
        try {
          const res = await fetch("/api/products/");
          const data = await res.json();
      
          if (!res.ok) {
            throw new Error(data.message || "Failed to fetch products");
          }
      
          set({ products: data.data });
        } catch (err) {
          console.error("Error fetching products:", err.message);
        }
      },
      
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/products/${pid}/`, {
            method: "DELETE"
        });
        const data = await res.json();
        console.log(data)
        if(!data.success) return { success: false, message: data.message };

        set(state => ({ products: state.products.filter(product => product._id !== pid)}));
        return { success: true, message: data.message};
    }
}))
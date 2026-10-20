import { useState, useEffect } from "react";

export interface SelectedShopProduct {
  id: string;
  title: string;
  price: string;
  cashback: string;
  seller?: string;
  url?: string;
  targetPath?: string;
  image?: string;
}

const STORAGE_KEY = "netfits_selected_shop_product";
let currentProduct: SelectedShopProduct | null = null;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

export const shopSelectionStore = {
  getProduct(): SelectedShopProduct | null {
    if (currentProduct) return currentProduct;
    if (typeof window !== "undefined") {
      try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (raw) {
          currentProduct = JSON.parse(raw);
          return currentProduct;
        }
      } catch {}
    }
    return null;
  },

  setProduct(product: SelectedShopProduct | null) {
    currentProduct = product;
    if (typeof window !== "undefined") {
      try {
        if (product) {
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(product));
        } else {
          sessionStorage.removeItem(STORAGE_KEY);
        }
      } catch {}
    }
    notify();
  },

  clear() {
    this.setProduct(null);
  },

  useSelectedProduct(): SelectedShopProduct | null {
    const [prod, setProd] = useState<SelectedShopProduct | null>(() => this.getProduct());

    useEffect(() => {
      const update = () => setProd(this.getProduct());
      listeners.add(update);
      return () => {
        listeners.delete(update);
      };
    }, []);

    return prod;
  },
};

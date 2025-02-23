import { TUploadSetItem } from "../UploadSetItem/types";
import { useState, useEffect } from "react";
import { randomKey } from "./randomKey";

export const useItems = (initialItems: TUploadSetItem[]) => {
    const [items, setItems] = useState(initialItems)
    const setCompleteItems = (items: TUploadSetItem[]) => setItems((prevItems) => {
        const uncompleteItems = prevItems.filter((i) => i.state !== "Complete")
        
        return [...items, ...uncompleteItems]
    })

    useEffect(() => setCompleteItems(initialItems), [initialItems])

    return {
        items,
        addItem: (item: Omit<TUploadSetItem, 'key'>) => {
            const newItem = { ...item, key: randomKey() }
            setItems((prevItems) => [...prevItems, newItem])
            return newItem
        },
        removeItem: (item: TUploadSetItem) => setItems((prevItems) => prevItems.filter((i) => i.key !== item.key)),
        updateItem: (item: TUploadSetItem) => setItems((prevItems) => prevItems.map((i) => i.key === item.key ? item : i)),
        setLoading: (item: TUploadSetItem, isLoading: boolean) => setItems((prevItems) => prevItems.map((i) => i.key === item.key ? { ...i, isLoading } : i)),
    }
}
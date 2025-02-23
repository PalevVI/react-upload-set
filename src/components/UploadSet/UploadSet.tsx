import { Box } from "@mui/material";
import { UploadSetProps } from "./types";
import { TUploadSetItem } from "../UploadSetItem/types";
import { UploadSetItem } from "../UploadSetItem/UploadSetItem";
import { useItems } from "./useItems";

export const UploadSet = <T extends TUploadSetItem,>({
    items: initialItems,
    onAbort,
    onDownload,
    onEdit = async () => {},
    onOpen,
    onRemove = async () => { },
    onUpload = async () => { },
}: UploadSetProps<T>) => {
    const { items, addItem, removeItem, updateItem, setLoading } = useItems(initialItems)


    const handleRemove = async (item: TUploadSetItem) => {
        if (item.state === "Complete") {
            try {
                setLoading(item, true)
                await onRemove(item as T)
                removeItem(item)
            } finally {
                setLoading(item, false)
            }
        } else {
            removeItem(item)
        }
    }

    const uploadFile = async (file: File) => {
        const newItem = addItem({
            state: 'Uploading',
            fileName: file.name,
        })
        await onUpload(file)
        updateItem({
            ...newItem,
            state: 'Complete',
        })
    }

    const handleEdit = async (item: TUploadSetItem) => {
        try {
            setLoading(item, true)
            await onEdit(item as T)
        } finally {
            setLoading(item, false)
        }
    }

    const handleUpload = (files: FileList) => {
        Array.from(files).forEach(file => uploadFile(file))
    }

    return (
        <Box display="flex" flexDirection="column" gap={2} sx={{ overflow: 'auto' }}>
            {items.map((item) => <UploadSetItem
                {...item}
                key={item.key}
                onAbort={() => onAbort && onAbort(item)}
                //onCancelEdited={() => onCancelEdited && onCancelEdited(item)}
                onDownload={() => onDownload && onDownload(item)}
                onEdit={() => handleEdit(item)}
                onOpen={() => onOpen && onOpen(item)}
                onRemove={() => handleRemove(item)}
            //onSaveEdited={() => onSaveEdited && onSaveEdited(item)}
            />)}
            <input type="file" multiple onChange={(e) => e.target.files && handleUpload(e.target.files)} />
        </Box>
    )
}

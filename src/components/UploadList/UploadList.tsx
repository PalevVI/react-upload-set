import { Box } from "@mui/material";
import { UploadListItem as type } from "../UploadListItem/types";
import { UploadListItemKey, UploadListProps } from "./types";
import { UploadListItem } from "../UploadListItem/UploadListItem";

export const UploadList = <TUploadListItem extends type & UploadListItemKey,>({
    items,
    onAbort,
    onCancelEdited,
    onDownload,
    onEdit,
    onOpen,
    onRemove,
    onSaveEdited,
}: UploadListProps<TUploadListItem>) => {
    return (
        <Box display="flex" flexDirection="column" gap={2} sx={{ overflow: 'auto' }}>
            {items.map((item) => <UploadListItem
                {...item}
                key={item.key}
                onAbort={() => onAbort && onAbort(item)}
                onCancelEdited={() => onCancelEdited && onCancelEdited(item)}
                onDownload={() => onDownload && onDownload(item)}
                onEdit={() => onEdit && onEdit(item)}
                onOpen={() => onOpen && onOpen(item)}
                onRemove={() => onRemove && onRemove(item)}
                onSaveEdited={() => onSaveEdited && onSaveEdited(item)}
            />)}
        </Box>
    )
}
import { UploadListItem } from "../UploadListItem/types";

export type UploadListItemKey = {
    key: React.Key;
}

type EventHandler<TUploadListItem extends UploadListItem & UploadListItemKey> = (item: TUploadListItem) => void;

type Events<TUploadListItem extends UploadListItem & UploadListItemKey> = {
    onEdit?: EventHandler<TUploadListItem>;
    onSaveEdited?: EventHandler<TUploadListItem>;
    onCancelEdited?: EventHandler<TUploadListItem>;
    onRemove?: EventHandler<TUploadListItem>;
    onAbort?: EventHandler<TUploadListItem>;
    onDownload?: EventHandler<TUploadListItem>;
    onOpen?: EventHandler<TUploadListItem>;
};

export type UploadListProps<TUploadListItem extends UploadListItem & UploadListItemKey> = {
    items: TUploadListItem[];
} & Events<TUploadListItem>;
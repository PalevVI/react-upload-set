import { TUploadSetItem } from "../UploadSetItem/types";

type EventHandler<T extends TUploadSetItem> = (item: T) => Promise<void>;

type Events<T extends TUploadSetItem> = {
    onEdit?: EventHandler<T>;
    onRemove?: EventHandler<T>;
    onAbort?: EventHandler<T>;
    onDownload?: EventHandler<T>;
    onOpen?: EventHandler<T>;
    onUpload?: (file: File) => Promise<void>;
};

export type UploadSetProps<T extends TUploadSetItem> = {
    items: T[];
} & Events<T>;
type Marker = {
    label: string;
    text: string;
};

type FileMeta = {
    fileName?: string;
    fileExtension?: string;
    markers?: Marker[];
    isEditing?: boolean;
    isLoading?: boolean;
};

export type ButtonVisibleState = {
    visibleEdit?: boolean;
    visibleRemove?: boolean;
    visibleAbort?: boolean;
    visibleDownload?: boolean;
    visibleOpen?: boolean;
};

type ButtonDisabledState = { 
    disabledEdit?: boolean;
    disabledRemove?: boolean;
    disabledAbort?: boolean;
    disabledDownload?: boolean;
    disabledOpen?: boolean; 
}

type ButtonState = ButtonVisibleState & ButtonDisabledState;

type EventHandler = () => void;

type Events = {
    onEdit?: (item: UploadListItem) => void;
    onRemove?: EventHandler;
    onAbort?: EventHandler;
    onDownload?: EventHandler;
    onOpen?: EventHandler;
};

export type UploadListItem = FileMeta & ButtonState

export type UploadListItemProps = UploadListItem & Events;
import { UploadListItemProps } from "../UploadListItem/types";

export type UploadState = "Complete" | "Error" | "Ready" | "Uploading";

export type TUploadSetItem = {
    key: React.Key;
    state?: UploadState;
} & Pick<
UploadListItemProps,
| "fileName"
| "fileExtension"
| "markers"
| "disabledDownload"
| "disabledEdit"
| "disabledRemove"
| "disabledOpen"
| "visibleDownload"
| "visibleEdit"
| "visibleRemove"
| "visibleOpen"
>;

export type UploadSetItemProps = {
  state: UploadState;
} & UploadListItemProps;

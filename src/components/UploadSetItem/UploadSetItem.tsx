import { UploadListItem } from "../UploadListItem/UploadListItem";
import { UploadSetItemProps, UploadState } from "./types";

const buttonStates = {
    Complete: { visibleAbort: false, visibleEdit: true, visibleRemove: true, visibleDownload: true, visibleOpen: true },
    Uploading: { visibleAbort: true, visibleEdit: false, visibleRemove: false, visibleDownload: false, visibleOpen: false },
    Error: { visibleAbort: false, visibleEdit: false, visibleRemove: true, visibleDownload: false, visibleOpen: false },
    Ready: { visibleAbort: false, visibleEdit: false, visibleRemove: true, visibleDownload: false, visibleOpen: false },
};

const getButtonState = (state: UploadState) => buttonStates[state] || buttonStates.Error;

export const UploadSetItem = ({ state = "Complete", ...props }: UploadSetItemProps) => (
    <UploadListItem {...getButtonState(state)} {...props} />
);
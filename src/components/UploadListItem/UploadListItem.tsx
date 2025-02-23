import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { UploadListItemProps } from "./types";
import { useState } from "react";

export const UploadListItem = ({
    fileName: initialFileName,
    markers,
    isLoading = false,
    isEditing: initialIsEditing = false,
    disabledAbort = false,
    disabledDownload = false,
    disabledEdit = false,
    disabledOpen = false,
    disabledRemove = false,
    visibleAbort = true,
    visibleDownload = true,
    visibleEdit = true,
    visibleOpen = true,
    visibleRemove = true,
    onAbort,
    onDownload,
    onEdit,
    onOpen,
    onRemove,
}: UploadListItemProps) => {
    const [isEditing, setIsEditing] = useState(initialIsEditing)
    const [fileName, setFileName] = useState(initialFileName)

    return (
        <Paper>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box display="flex" flexDirection="column" gap={2}>
                    {!isEditing && <Typography>{fileName}</Typography>}
                    {isEditing && <TextField value={fileName} onChange={(e) => setFileName(e.target.value)} />}
                    <Box display="flex" gap={2}>
                        {markers?.map(({ label, text }, index) => (
                            <Box key={index}>
                                <Typography variant="caption">{label}: </Typography>
                                <Typography variant="caption">{text}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box display="flex" gap={2} sx={{maxHeight: 24}}>
                        {visibleDownload && (
                            <Button
                                disabled={disabledDownload}
                                variant="contained"
                                size="small"
                                onClick={onDownload}
                            >
                                Скачать
                            </Button>
                        )}
                        {visibleOpen && (
                            <Button
                                disabled={disabledOpen}
                                variant="contained"
                                size="small"
                                onClick={onOpen}
                            >
                                Посмотреть
                            </Button>
                        )}
                    </Box>
                </Box>
                <Box display="flex" sx={{ maxHeight: 24 }}>
                    <Box display="flex" gap={2}>
                        {visibleRemove && (
                            <Button
                                disabled={isLoading}
                                variant="contained"
                                size="small"
                                onClick={onRemove}
                            >
                                Удалить
                            </Button>
                        )}
                        {visibleAbort && (
                            <Button
                                disabled={disabledAbort}
                                variant="contained"
                                size="small"
                                onClick={onAbort}
                            >
                                Прервать
                            </Button>
                        )}
                        {visibleEdit && !isEditing && (
                            <Button
                                disabled={disabledEdit}
                                variant="contained"
                                size="small"
                                onClick={() => setIsEditing(true)}
                            >
                                Редактировать
                            </Button>
                        )}
                        {isEditing && (
                            <Button
                                disabled={isLoading}
                                variant="contained"
                                size="small"
                                onClick={() => {
                                    onEdit && onEdit({
                                        fileName
                                    })
                                    setIsEditing(false)
                                }}
                            >
                                Сохранить измененное
                            </Button>
                        )}
                        {isEditing && (
                            <Button
                                disabled={isLoading}
                                variant="contained"
                                size="small"
                                onClick={() => {
                                    setFileName(initialFileName)
                                    setIsEditing(false)
                                }}
                            >
                                Отменить измененное
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

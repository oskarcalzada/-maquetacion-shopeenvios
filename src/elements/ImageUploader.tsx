import React, { useState } from 'react';
import { Button } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

interface ImageUploaderProps {
    image: string;
    setImage: (image: string) => void;
    setFiles: (file: any) => void;
    className?: string;
    disabled?: boolean;
}

export default function ImageUploader({ image, setImage, setFiles, className, disabled }: ImageUploaderProps) {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setFiles(files[0]);
            const fileArray = Array.from(files).map((file: any) => URL.createObjectURL(file));
            setImage(fileArray[0]);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files && files[0]) {
            setFiles(files[0]);
            const fileArray = Array.from(files).map((file: any) => URL.createObjectURL(file));
            setImage(fileArray[0]);
        }
        e.currentTarget.classList.remove("dropzone_active");
    };

    return (
        <div className={`drawerImagesContainerDiv ${className}`}
            onDrop={handleDrop}
            onDragOver={(e) => {
                e.preventDefault();
                e.currentTarget.classList.add("dropzone_active");
            }}
            onDragLeave={(e) => {
                e.preventDefault();
                e.currentTarget.classList.remove("dropzone_active");
            }}
        >
            {image && <img src={image} alt="Company Logo" />}
            <label id="dropFileDiv" className={image ? 'showOnlyOnHover' : ''} style={disabled ? { display: 'none' } : {}}>
                <Button
                    aria-label="delete"
                    size="small"
                    className="addFile_button"
                    component="span"
                    startIcon={<CameraAltIcon />}
                >
                    <div className='imageUploader_label'>Upload Company Logo</div>
                    <input
                        type="file"
                        multiple
                        hidden
                        onChange={handleFileChange}
                    />
                </Button>
            </label>
        </div>
    );
}

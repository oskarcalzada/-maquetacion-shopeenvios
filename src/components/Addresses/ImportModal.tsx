import React, { useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownloadIcon from '@mui/icons-material/Download';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { LiaFileUploadSolid } from "react-icons/lia";
import { LiaPaperclipSolid } from "react-icons/lia";

export default function ImportModal({ open, handleClose }: { open: boolean; handleClose: () => void }) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            processFile(files[0]);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            processFile(event.dataTransfer.files[0]);
            event.dataTransfer.clearData();
        }
    };

    const processFile = (file: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleClickUploadArea = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleRemovePreview = () => {
        setPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };


    const handleImport = () => {
        handleClose();
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogContent>

                <div className="flex_column">
                    <div className="dialog_header">
                        <h2 className="dialog_title">Carga Masiva de Direcciones</h2>
                        <Button variant="contained" color="secondary" startIcon={<DownloadIcon />}>
                            Descargar Formato
                        </Button>
                    </div>
                    <div 
                        className='upload_area'
                        onClick={handleClickUploadArea}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                    >
                        
                        <div className='upload_label'><LiaPaperclipSolid size={24}/>Arrastra o has click para subir un archivo</div>
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            style={{ display: 'none' }} 
                            onChange={handleFileUpload} 
                            accept="image/*"
                        />
                    </div>
                    {preview && (
                        <div style={{ textAlign: 'center', marginTop: '20px', position: 'relative' }}>
                            <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                            <IconButton 
                                onClick={handleRemovePreview} 
                                style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    )}

                     <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        startIcon={<LiaFileUploadSolid />}
                        onClick={handleImport}
                    >
                        IMPORTAR
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

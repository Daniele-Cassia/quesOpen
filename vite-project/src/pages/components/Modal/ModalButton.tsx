import React from 'react'
import Button from '@mui/material/Button';

const ModalButton = ({ children, color, disabled, size, sx, variant, onClick }) => {
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            sx={sx}
            variant={variant}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default ModalButton

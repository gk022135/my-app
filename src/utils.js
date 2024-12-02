import { toast } from 'react-toastify';

// Show success toast message
export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: 'top-right',
        autoClose: 5000, // Time in ms to automatically close
    });
}

// Show error toast message
export const handleError = (msg) => {
    toast.error(msg, {
        position: 'top-right',
        autoClose: 5000, // Time in ms to automatically close
    });
}

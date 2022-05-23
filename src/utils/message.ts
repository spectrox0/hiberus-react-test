import { toast } from 'react-toastify'

export const showError = (error = 'Error', id?: string) => {
  toast.error(error, {
    type: 'error',
    autoClose: 7000,
    toastId: id || error,
  })
}

export const showAlert = (alert = 'Alert', id: string) => {
  toast.warning(alert, {
    type: 'warning',
    toastId: id,
  })
}

export const showSuccess = (success = 'Success', id?: string) => {
  toast.success(success, {
    toastId: id || success,
    autoClose: 7000,
  })
}

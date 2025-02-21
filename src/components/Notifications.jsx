import { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import useStore from '../store'

export default function Notifications() {
  const notifications = useStore((state) => state.notifications)
  const clearNotification = useStore((state) => state.clearNotification)

  useEffect(() => {
    notifications.forEach((notification) => {
      if (!notification.shown) {
        toast(notification.message, {
          duration: 3000,
          position: 'top-right',
          icon: notification.type === 'success' ? '✅' : notification.type === 'error' ? '❌' : 'ℹ️',
          onClose: () => clearNotification(notification.id)
        })
      }
    })
  }, [notifications, clearNotification])

  return <Toaster />
}
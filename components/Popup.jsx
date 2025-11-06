import React from 'react'
import styles from './Popup.module.css'

export default function Popup({
    open = false,
    onClose = () => {},
    title = '',
    message = '',
    onConfirm = () => {},
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    children = null,
    className = '',
}) {
    if (!open) return null

    return (
        <div className={styles.overlay} role="dialog" aria-modal="true">
            <div className={`${styles.modal} ${className}`}>
                {title && <div className={styles.header}><h3 className={styles.title}>{title}</h3></div>}

                <div className={styles.body}>
                    {message ? <p className={styles.message}>{message}</p> : children}
                </div>

                <div className={styles.footer}>
                    <button
                        className={styles.btnSecondary}
                        onClick={onClose}
                        type="button"
                    >
                        {cancelText}
                    </button>

                    <button
                        className={styles.btnPrimary}
                        onClick={onConfirm}
                        type="button"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export { default as PopupDemo } from './PopupDemo'
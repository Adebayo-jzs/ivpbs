"use client"
import React, { useState } from 'react'
import Popup from './Popup'

export default function PopupDemo() {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    // handle confirm action
    setOpen(false)
    // example: show a toast or call an API
    console.log('Confirmed')
  }

  return (
    <div>
    <p>gijfkvovgo</p>
      <button onClick={() => setOpen(true)} style={{ padding: '8px 12px', borderRadius: 6 }}>
        Open confirmation
      </button>

      <Popup
        open={open}
        title="Confirm action"
        message="Are you sure you want to proceed? This action cannot be undone."
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
        confirmText="Yes, proceed"
        cancelText="Cancel"
      />
    </div>
  )
}

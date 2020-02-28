import React, { useState, useEffect } from 'react'
import { Fade } from './styles'
export default function FadeAlert({ notice }) {
    const [message, setMessage] = useState('')
    const [showAlert, setShowAlert] = useState('')
    useEffect(() => {
        if (notice.message) {
            setShowAlert('show')
            setMessage(notice.message)
            setTimeout(() => {
                setShowAlert('')
                setTimeout(() => {
                    setMessage('')
                }, 300);
            }, 5000);
        }
    }, [notice])
    return (
        <Fade
            out={showAlert}
            description={message}
            type="error"
            showIcon
        />
    )
}

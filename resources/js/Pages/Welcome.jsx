import React, { useEffect, useState } from 'react'

export default function Welcome() {
    const [modal, setModal] = useState(true)
    const renderModal = () => {
        if (modal == true) {
            return (
                <>
                    <div className="card shadow-lg absolute">
                        <div className="card-body flex justify-center items-center">
                            modal
                        </div>
                    </div>
                </>
            )
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setModal(false)
        }, 5000)
    }, [])
    return (
        <div className='container p-3'>
            <img className='h-20' src="/assets/img/logo.png" alt="" />
            {renderModal()}
        </div>
    )
}

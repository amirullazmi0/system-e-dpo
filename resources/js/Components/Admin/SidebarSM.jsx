import { Link } from '@inertiajs/react'
import React from 'react'

const SidebarSM = ({ handle, on, active }) => {
    const handleSidebar = () => {
        handle(false)
    }
    return (
        <div className={on == true ? 'sidebar-sm-on' : 'sidebar-sm-off'}>
            <div className="flex justify-end">
                <button onClick={() => handleSidebar()} className='btn btn-ghost'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
            </div>
            <div className="head-sidebar">
                <img className='h-20' src="/assets/img/logo.png" alt="" />
                <div className="head-text">
                    <h1>Kejaksaan</h1>
                    <h1>tinggi</h1>
                    <h1>kalimantan barat</h1>
                </div>
            </div>
            <div className="body-sidebar grid">
                <Link
                    className={active == 'edpo' ? 'item-active' : 'item'}
                    method='get'
                    href={route('admin-edpo')}
                >
                    E-DPO
                </Link>
                <Link
                    className={active == 'tertangkap' ? 'item-active' : 'item'}
                    method='get'
                    href={route('admin-tertangkap')}
                >
                    Tertangkap
                </Link>
            </div>
        </div>
    )
}

export default SidebarSM
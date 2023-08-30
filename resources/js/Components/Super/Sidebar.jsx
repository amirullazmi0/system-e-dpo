import { Link } from '@inertiajs/react'
import React from 'react'

const Sidebar = ({ active }) => {
    return (
        <div className='sidebar'>
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
                    className={active == 'admin' ? 'item-active' : 'item'}
                    method='get'
                    href={route('superdashboard')}
                >
                    Admin
                </Link>
                <Link
                    className={active == 'edpo' ? 'item-active' : 'item'}
                    method='get'
                    href={route('superedpo')}
                >
                    E-DPO
                </Link>
                <Link
                    className={active == 'tertangkap' ? 'item-active' : 'item'}
                    method='get'
                    href={route('supertertangkap')}
                >
                    Tertangkap
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
import { Link } from '@inertiajs/react'
import React from 'react'


const Navbar = ({ active }) => {
    const data = {
        id: 0,
        wilayah: 'Semua'
    }
    return (
        <>
            <div className='nav'>
                <Link method='get' href={route('home')} className={active == 'home' ? "nav-item-active" : "nav-item"}>
                    <p>
                        Tentang E-DPO
                    </p>

                </Link>
                <Link method='get' href={"/edpo"} data={data} className={active == 'edpo' ? "nav-item-active" : "nav-item"} >

                    <p>
                        E-DPO
                    </p>

                </Link >
                <Link method='get' href={"/tertangkap"} data={data} className={active == 'tertangkap' ? "nav-item-active" : "nav-item"}>

                    <p>
                        Tertangkap
                    </p>
                </Link >
            </div >
        </>
    )
}

export default Navbar
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='header'>
                <img className='h-28  border-r-4 border-slate-950 pr-3' src="/assets/img/logo.png" alt="" />
                <div className="grid">
                    <h4 className='font-bold uppercase text-slate-950 text-4xl'>E-DPO</h4>
                    <p className='font-bold uppercase text-slate-950 text-2xl'>Kejaksaan tinggi kalimantan barat</p>
                    {/* <p className='font-bold uppercase text-slate-950 text-xl'>Tinggi</p>
                    <p className='font-bold uppercase text-slate-950 text-xl'>Kalimantan Barat</p> */}
                </div>
            </div>
        </>
    )
}

export default Header
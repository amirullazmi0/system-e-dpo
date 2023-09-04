import React from 'react'

const Header = () => {
    return (
        <>
            <div className='header'>
                <img className='lg:h-24 h-10 ' src="/assets/img/logo.png" alt="" />
                <div className="grid">
                    <h4 className='font-bold uppercase text-slate-950 text-sm lg:text-4xl '>E-DPO</h4>
                    <p className='font-bold uppercase text-slate-950 text-sm lg:text-2xl'>Kejaksaan tinggi kalimantan barat</p>
                    <span className='text-xs'>Jl. Jenderal Ahmad Yani, Benua Melayu Darat, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78113</span>
                    {/* <p className='font-bold uppercase text-slate-950 text-xl'>Tinggi</p>
                    <p className='font-bold uppercase text-slate-950 text-xl'>Kalimantan Barat</p> */}
                </div>
            </div>
        </>
    )
}

export default Header
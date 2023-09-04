import { router } from '@inertiajs/react'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Section2Tertangkap = ({ active }) => {
    const [nav, setNav] = useState()
    const kejari = [
        { id: 0, name: "Semua" },
        { id: 14, name: "Kejati Kalimantan Barat" },
        { id: 1, name: "Kejari Pontianak" },
        { id: 2, name: "Kejari Singkawang" },
        { id: 3, name: "Kejari Mempawah" },
        { id: 4, name: "Kejari Sambas" },
        { id: 5, name: "Kejari Bengkayang" },
        { id: 6, name: "Kejari Landak" },
        { id: 7, name: "Kejari Sanggau" },
        { id: 8, name: "Kejari Sekadau" },
        { id: 9, name: "Kejari Sintang" },
        { id: 10, name: "Kejari Kapuas Hulu" },
        { id: 11, name: "Kejari Ketapang" },
        { id: 12, name: "Cabjari Entikong" },
        { id: 13, name: "Cabjari Pemangkat" },
    ]

    const handleNav = (id, name) => {
        setNav(id)
        const data = {
            id: id,
            wilayah: name
        }
        router.get('/tertangkap', data)
    }

    useEffect(() => {
        setNav(active)
    }, [active])

    return (
        <>
            <div className="lg:block hidden bg-white card-section2 ">
                {/* <div className="header-section2">
                    Wilayah
                </div> */}
                <div className="body-section2 p-3">
                    {kejari.map((kk) => (
                        <button onClick={() => handleNav(kk.id, kk.name)} key={kk.id} className={nav == kk.id ? "btn btn-yellow-active w-full btn-md" : "btn btn-white w-full btn-md"}>
                            {kk.name}
                        </button>
                    ))}
                </div>
            </div>
            <div className="lg:hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-white m-1 text-md">Pilih Wilayah</label>
                    <ul tabIndex={0} className="border grid grid-cols-2 gap-2 border-zinc-950 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80">
                        {kejari.map((kk) => (
                            <button onClick={() => handleNav(kk.id, kk.name)} key={kk.id} className={nav == kk.id ? "btn btn-yellow-active w-full btn-sm first-letter text-xs h-12" : "btn btn-white w-full btn-sm text-xs h-12"}>
                                {kk.name}
                            </button>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Section2Tertangkap
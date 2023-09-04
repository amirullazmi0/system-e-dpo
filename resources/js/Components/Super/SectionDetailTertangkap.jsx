import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
const SectionDetailTertangkap = ({ edpo }) => {
    const [iniEdpo, setEdpo] = useState()
    const kejari = [
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
        { id: 14, name: "Kejati Kalimantan Barat" },
    ]

    useEffect(() => {
        setEdpo(edpo)
    }, [edpo])
    return (
        <>
            {iniEdpo &&
                <div className='section-super mb-7 lg:p-7 lg:m-0 m-3 p-3 lg:mr-6'>
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 mb-6">
                            <h1 className='uppercase text-3xl font-bold'>Detail E-dpo Tertangkap</h1>
                        </div>
                        <div className="lg:col-span-1 col-span-3 flex items-center">
                            <div className='flex justify-center w-full'>
                                <img src={"/assets/img/dpo/" + iniEdpo.foto} alt="" />
                            </div>
                        </div>
                        <div className="lg:col-span-2 col-span-3">
                            <div className="lg:grid grid-cols-5 mb-2">
                                <div className="col-span-1 font-bold">
                                    Nama
                                </div>
                                <div className="lg:col-span-1 lg:block hidden">
                                    :
                                </div>
                                <div className="col-span-3">
                                    {iniEdpo.nama}
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-5 mb-2">
                                <div className="col-span-1 font-bold">
                                    Tempat Lahir
                                </div>
                                <div className="lg:col-span-1 lg:block hidden">
                                    :
                                </div>
                                <div className="col-span-3">
                                    {iniEdpo.tempatLahir}
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-5 mb-2">
                                <div className="col-span-1 font-bold">
                                    Tanggal Lahir
                                </div>
                                <div className="lg:col-span-1 lg:block hidden">
                                    :
                                </div>
                                <div className="col-span-3">
                                    {iniEdpo.tanggalLahir}
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-5 mb-2">
                                <div className="col-span-1 font-bold">
                                    Usia
                                </div>
                                <div className="lg:col-span-1 lg:block hidden">
                                    :
                                </div>
                                <div className="col-span-3">
                                    {iniEdpo.umur}
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-5 mb-2">
                                <div className="col-span-1 font-bold">
                                    Agama
                                </div>
                                <div className="lg:col-span-1 lg:block hidden">
                                    :
                                </div>
                                <div className="col-span-3">
                                    {iniEdpo.agama}
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-5 mb-2">
                                <div className="col-span-1 font-bold">
                                    Jenis Kelamin
                                </div>
                                <div className="lg:col-span-1 lg:block hidden">
                                    :
                                </div>
                                <div className="col-span-3">
                                    {iniEdpo.jk}
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-5 mb-2">
                                <div className="col-span-1 font-bold">
                                    Profesi
                                </div>
                                <div className="lg:col-span-1 lg:block hidden">
                                    :
                                </div>
                                <div className="col-span-3">
                                    {iniEdpo.profesi}
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-5 mb-2">
                                <div className="col-span-1 font-bold">
                                    Pendidikan
                                </div>
                                <div className="lg:col-span-1 lg:block hidden">
                                    :
                                </div>
                                <div className="col-span-3">
                                    {iniEdpo.pendidikan}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 mb-3 mt-4">
                            <label className='font-bold' htmlFor="">Alamat</label>
                            <div className='min-h-16 border rounded-xl p-3 items-center'>
                                {iniEdpo.alamat ? iniEdpo.alamat :
                                    <>
                                        <div className="flex justify-center items-center">
                                            -
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-span-3 mb-3">
                            <label className='font-bold' htmlFor="">Kasus Posisi</label>
                            <div className='min-h-16 border rounded-xl p-3 items-center'>
                                {iniEdpo.kasusPosisi ? iniEdpo.kasusPosisi :
                                    <>
                                        <div className="flex justify-center items-center">
                                            -
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-span-3 mb-3">
                            <label className='font-bold' htmlFor="">Status Perkara</label>
                            <div className="grid grid-cols-2 min-h-16 border rounded-xl p-3 items-center">
                                <div className="col-span-1">
                                    <div>
                                        <label className='font-bold' htmlFor="">PIDUM : </label>
                                        {iniEdpo.pidum}
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <div>
                                        <label className='font-bold' htmlFor="">PIDSUS : </label>
                                        {iniEdpo.pidsus}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 mb-3">
                            <label className='font-bold' htmlFor="">Hukuman</label>
                            <div className='min-h-16 border rounded-xl p-3 items-center'>
                                {iniEdpo.hukuman ? iniEdpo.hukuman :
                                    <>
                                        <div className="flex justify-center items-center">
                                            -
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-span-3 mb-3">
                            <label className='font-bold' htmlFor="">Dasar Penetapan</label>
                            <div className='min-h-16 border rounded-xl p-3 items-center'>
                                {iniEdpo.dasarPenetapan ? iniEdpo.dasarPenetapan :
                                    <>
                                        <div className="flex justify-center items-center">
                                            -
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-span-3 mb-3">
                            <label className='font-bold' htmlFor="">Wilayah</label>
                            <div className='p-3 bg-yellow font-bold uppercase flex justify-center items-center'>
                                {kejari.map((item) => {
                                    if (item.id == iniEdpo.wilayah) {
                                        return item.name
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SectionDetailTertangkap
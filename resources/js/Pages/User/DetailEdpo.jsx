import Header from '@/Components/User/Header'
import Section1Edpo from '@/Components/User/Home/Section1Edpo'
import Section2Edpo from '@/Components/User/Home/Section2Edpo'
import Navbar from '@/Components/User/Navbar'
import { Head, router } from '@inertiajs/react'
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function DetailEdpo(props) {
    const [edpo, setEdpo] = useState()

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
        setEdpo(props.edpo[0])
    }, [props])

    const backEdpo = () => {
        const data = {
            id: 0,
            wilayah: "Semua"
        }
        router.get('/edpo', data)
    }
    return (
        <>
            <Head title='Detail E-DPO' />
            <Header />
            <Navbar active={'edpo'} />
            <div className='section-1'>
                <div className='flex justify-center items-center'>
                    <div className="card-section1 bg-white  w-8/12">
                        {edpo &&
                            <div className='p-4'>
                                <div className="grid grid-cols-3">
                                    <div className="col-span-3 mb-6 flex justify-between">
                                        <h1 className='uppercase text-3xl font-bold'>Detail E-dpo</h1>
                                        <button onClick={() => backEdpo()} className='btn btn-blue'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="col-span-1 flex items-center">
                                        <div className='flex justify-center w-full'>
                                            <img src={"/assets/img/dpo/" + edpo.foto} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="grid grid-cols-5 mb-2">
                                            <div className="col-span-1 font-bold">
                                                Nama
                                            </div>
                                            <div className="col-span-1 ">
                                                :
                                            </div>
                                            <div className="col-span-3">
                                                {edpo.nama}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5 mb-2">
                                            <div className="col-span-1 font-bold">
                                                Tempat Lahir
                                            </div>
                                            <div className="col-span-1">
                                                :
                                            </div>
                                            <div className="col-span-3">
                                                {edpo.tempatLahir}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5 mb-2">
                                            <div className="col-span-1 font-bold">
                                                Tanggal Lahir
                                            </div>
                                            <div className="col-span-1">
                                                :
                                            </div>
                                            <div className="col-span-3">
                                                {edpo.tanggalLahir}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5 mb-2">
                                            <div className="col-span-1 font-bold">
                                                Usia
                                            </div>
                                            <div className="col-span-1">
                                                :
                                            </div>
                                            <div className="col-span-3">
                                                {edpo.umur}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5 mb-2">
                                            <div className="col-span-1 font-bold">
                                                Agama
                                            </div>
                                            <div className="col-span-1">
                                                :
                                            </div>
                                            <div className="col-span-3">
                                                {edpo.agama}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5 mb-2">
                                            <div className="col-span-1 font-bold">
                                                Jenis Kelamin
                                            </div>
                                            <div className="col-span-1">
                                                :
                                            </div>
                                            <div className="col-span-3">
                                                {edpo.jk}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5 mb-2">
                                            <div className="col-span-1 font-bold">
                                                Profesi
                                            </div>
                                            <div className="col-span-1">
                                                :
                                            </div>
                                            <div className="col-span-3">
                                                {edpo.profesi}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5 mb-2">
                                            <div className="col-span-1 font-bold">
                                                Pendidikan
                                            </div>
                                            <div className="col-span-1">
                                                :
                                            </div>
                                            <div className="col-span-3">
                                                {edpo.pendidikan}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-3 mb-3 mt-4">
                                        <label className='font-bold' htmlFor="">Alamat</label>
                                        <div className='min-h-16 border rounded-xl p-3 items-center'>
                                            {edpo.alamat ? edpo.alamat :
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
                                            {edpo.kasusPosisi ? edpo.kasusPosisi :
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
                                                    {edpo.pidum}
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div>
                                                    <label className='font-bold' htmlFor="">PIDSUS : </label>
                                                    {edpo.pidsus}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-3 mb-3">
                                        <label className='font-bold' htmlFor="">Hukuman</label>
                                        <div className='min-h-16 border rounded-xl p-3 items-center'>
                                            {edpo.hukuman ? edpo.hukuman :
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
                                            {edpo.dasarPenetapan ? edpo.dasarPenetapan :
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
                                                if (item.id == edpo.wilayah) {
                                                    return item.name
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

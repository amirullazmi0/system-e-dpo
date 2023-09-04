import { Link, router } from '@inertiajs/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
const SectionEdpo = ({ auth, notif, edpo }) => {
    const [iniEdpo, setEdpo] = useState(edpo)
    const [iniNotif, setNotif] = useState(null)
    const [modal, setModal] = useState(false)
    const [id, setId] = useState('')

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


    const handleEdit = (e) => {
        const data = {
            id: e
        }

        router.get('/admin/edit-edpo/' + e, data)
    }

    const handleDelete = () => {
        const data = {
            id
        }
        router.post('/admin/edpo/' + id + '/delete', data)
        setId('')
        setModal(false)
    }
    const renderClose = () => {
        setId('')
        setModal(false)
    }

    const renderDelete = (i) => {
        if (i) {
            setModal(true)
            setId(i)
        }

        return (
            <>
                <div className={modal == true ? 'card-modal-on' : 'card-modal-off'}>
                    <div className="flex justify-between items-center">
                        <h1>Yakin untuk mengapus ?</h1>
                        <button onClick={() => renderClose()} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <button onClick={() => handleDelete()} className="btn btn-blue">
                        Yakin
                    </button>
                </div>
            </>
        )
    }

    const handleDetail = (id, nama) => {
        const data = {
            id: id,
            nama: nama
        }

        router.get('/admin/edpo/detail/' + id, data)
    }

    const handleTertangkap = (id) => {
        const data = {
            id: id,
            tertangkap: 1
        }

        router.post('/admin/add-tertangkap/' + id, data)
    }

    useEffect(() => {
        setEdpo(edpo)
        setNotif(notif)
    }, [edpo, notif])
    return (
        <div className='section-super mb-7 lg:p-7 lg:m-0 m-3 p-3 lg:mr-6'>
            {iniNotif !== null && iniNotif.success ?
                <div className="bg-grey absolute flex gap-1 capitalize items-center">
                    {iniNotif.success}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <button className="btn btn-sm btn-ghost ml-7" onClick={() => setNotif(null)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                : null
            }
            {iniNotif !== null && iniNotif.delete ?
                <div className="bg-grey absolute flex gap-1 capitalize items-center">
                    {iniNotif.delete}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <button className="btn btn-sm btn-ghost ml-7" onClick={() => setNotif(null)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                : null
            }
            <div className="flex justify-end">
                <Link
                    method='get'
                    href={route('admin-add-edpo')}
                    className='btn btn-blue'
                >
                    Tambah DPO
                </Link>
            </div>
            {renderDelete()}
            {iniEdpo.length >= 1 ?
                <div className="overflow-x-auto mt-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-center'>
                                <th></th>
                                <th>Foto</th>
                                <th>Nama</th>
                                <th>Wilayah</th>
                                <th>Status</th>
                                <th>Usia</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {iniEdpo.map((item, index) => {

                                return (

                                    <tr className='text-center' key={item.id}>
                                        <th>{index + 1}</th>
                                        <td className='flex items-center justify-center'>
                                            <button onClick={() => handleDetail(item.id, item.nama)} className="btn btn-ghost hover:bg-transparent p-3 h-max">
                                                <div className="w-32 flex justify-center items-center">
                                                    <img src={item.foto ? "/assets/img/dpo/" + item.foto : "/assets/img/user.png"} alt="" />
                                                </div>
                                            </button>
                                        </td>
                                        <td>
                                            <div className='w-48'>
                                                {item.nama}
                                            </div>
                                        </td>
                                        <td>
                                            <div className='w-48'>
                                                {item.wilayah ?
                                                    kejari.map((kk) => {
                                                        if (item.wilayah == kk.id) {
                                                            return kk.name
                                                        }
                                                    }
                                                    )
                                                    : '-'}
                                            </div>
                                        </td>
                                        <td >
                                            <div className='w-96 text-justify'>{item.kasusPosisi}</div>
                                        </td>
                                        <td>{item.umur}</td>
                                        <td >
                                            <div className="flex justify-center gap-1">
                                                <button onClick={() => handleDetail(item.id, item.nama)} className="btn btn-yellow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => handleEdit(item.id)} className="btn btn-blue">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => renderDelete(item.id)} className="btn btn-red">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => handleTertangkap(item.id)} className="btn btn-green">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                :
                <>
                    <div className="flex justify-center items-center uppercase font-bold mt-16 mb-16">
                        Tidak Ada Data E-DPO
                    </div>
                </>
            }
        </div>
    )
}

export default SectionEdpo
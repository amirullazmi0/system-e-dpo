import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
const Section = ({ notif, user }) => {
    const [modal, setModal] = useState(false)
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')

    const handleEdit = (e, i) => {
        const data = {
            id: e, email: i
        }

        router.get('/super/edit-admin/' + e, data)
    }

    const handleDelete = () => {
        const data = {
            email
        }
        router.post('/super/' + id + '/delete', data)
        setId('')
        setEmail('')
        setModal(false)
    }
    const renderClose = () => {
        setId('')
        setEmail('')
        setModal(false)
    }

    const renderDelete = (i, j) => {
        if (i && j) {
            setModal(true)
            setId(i)
            setEmail(j)
        }

        console.log('ax :', id, email);
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



    return (
        <div className='section-super mb-7 p-7 lg:mr-6'>
            {notif.success ?
                <div className="bg-green absolute flex gap-1 capitalize">
                    {notif.success}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                : null
            }
            {notif.delete ?
                <div className="bg-yellow absolute flex gap-1 capitalize">
                    {notif.delete}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                : null
            }
            <div className="flex justify-end">
                <Link
                    method='get'
                    href={route('superaddadmin')}
                    className='btn btn-blue'
                >
                    Tambah Admin
                </Link>
            </div>
            {renderDelete()}
            <div className="overflow-x-auto mt-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Akses</th>
                            <th>Wilayah</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {user.map((uu, index) => (
                            <tr key={uu.id}>
                                <th>{index + 1}</th>
                                <td>{uu.name}</td>
                                <td>{uu.email}</td>
                                <td>
                                    {uu.level == 1 ?
                                        <>Super Admin</> : <>Admin</>
                                    }
                                </td>
                                <td>{uu.area}</td>
                                <td className='flex gap-1'>
                                    {/* <button onClick={() => handleEdit(uu.id, uu.email)} className="btn btn-yellow">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                        </svg>
                                    </button> */}
                                    <button onClick={() => handleEdit(uu.id, uu.email)} className="btn btn-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                        </svg>
                                    </button>
                                    <button onClick={() => renderDelete(uu.id, uu.email)} className="btn btn-red">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center mt-4">
                <button className="btn btn-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    </svg>
                </button>
                <div className="p-3 text-2xl">1</div>
                <button className="btn btn-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Section
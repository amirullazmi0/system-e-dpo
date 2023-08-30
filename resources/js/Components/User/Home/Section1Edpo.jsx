import { router } from '@inertiajs/react'
import React from 'react'

const Section1Edpo = ({ edpo }) => {

    const handleDetail = (id, nama) => {
        const data = {
            id: id,
            nama: nama
        }

        router.get('/edpo/' + id, data)
    }
    return (
        <>
            <div className="card-section1 bg-white">
                <div className="header-section1">
                    E-DPO
                </div>
                <div className="body-section1">
                    {edpo.length > 0 ?
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className='text-center'>
                                        <th></th>
                                        <th>Foto</th>
                                        <th>Nama</th>
                                        <th>Kasus Posisi</th>
                                        <th>Usia</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {edpo.map((item, index) => (
                                        <tr key={item.id}>
                                            <th>{index + 1}</th>
                                            <td>
                                                <button onClick={() => handleDetail(item.id, item.nama)} className="btn btn-ghost hover:bg-transparent p-3 h-max">
                                                    <div className='w-28'>
                                                        <img src={item.foto ? "/assets/img/dpo/" + item.foto : "/assets/img/user.png"} alt="" />
                                                    </div>
                                                </button>
                                            </td>
                                            <td>
                                                <div className="w-40">
                                                    {item.nama}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='w-96 text-justify'>
                                                    {item.kasusPosisi}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="w-24 text-center">
                                                    {item.umur}
                                                </div>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDetail(item.id, item.nama)} className='btn btn-blue'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        :
                        <>
                            <div className="flex justify-center items-center font-bold uppercase mt-5 mb-5">
                                Tidak Ada Data E-DPO
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Section1Edpo
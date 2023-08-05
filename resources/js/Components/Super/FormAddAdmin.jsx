import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'

const FormAddAdmin = ({ error }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()
    const [level, setLevel] = useState()
    const [area, setArea] = useState()

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
    ]

    const handleSubmit = () => {
        const data = {
            name, email, password, password2, level, area
        }

        router.post('/super/add-admin', data);
    }

    return (
        <div className='section-super p-7 lg:mr-6'>
            <h1 className='font-bold text-xl'>
                Form Tambah Admin
            </h1>
            <div className="grid grid-cols-2">
                <div className="col-span-1 form-group grid p-3">
                    <label htmlFor="">Nama</label>
                    <input
                        className='form-input w-full'
                        type="text"
                        placeholder='Masukan nama'
                        onChange={(e) => setName(e.target.value)}
                    />
                    {error.name &&
                        <label className='text-red' htmlFor="">Periksa kembali Nama</label>
                    }
                </div>
                <div className="col-span-1 form-group grid p-3">
                    <label htmlFor="">Email</label>
                    <input
                        className='form-input w-full'
                        type="email"
                        placeholder='Masukan Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email &&
                        <label className='text-red' htmlFor="">Periksa kembali Email</label>
                    }
                </div>
                <div className="col-span-1 form-group grid p-3">
                    <label htmlFor="">Akses</label>
                    <select
                        className='form-input w-full'
                        type="select"
                        placeholder='Masukan Email'
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    >

                        <option value="" hidden>Pilih Akses</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                    </select>
                    {error.level &&
                        <label className='text-red' htmlFor="">Periksa kembali Akses</label>
                    }
                </div>
                <div className="col-span-1 form-group grid p-3">
                    <label htmlFor="">Wilayah</label>
                    <select
                        className='form-input w-full'
                        type="select"
                        disabled={level ? false : true}
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                    >
                        <option value="" hidden>Pilih Wilayah</option>
                        {level == 1 ?
                            <option value="pusat">pusat</option>
                            :
                            kejari.map((kk) => (
                                <option key={kk.id} value={kk.name}>{kk.name}</option>
                            ))
                        }
                    </select>
                    {error.area &&
                        <label className='text-red' htmlFor="">Periksa kembali Wilayah</label>
                    }
                </div>
                <div className="col-span-1 form-group grid p-3">
                    <label htmlFor="">Kata Sandi</label>
                    <input
                        className='form-input w-full'
                        type="password"
                        placeholder='Masukan Kata Sandi'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error.name &&
                        <label className='text-red' htmlFor="">Periksa kembali Kata Sandi</label>
                    }
                </div>
                <div className="col-span-1 form-group grid p-3">
                    <label htmlFor="">Konfirmasi Kata Sandi</label>
                    <input
                        className={password2 && password != password2 ? 'form-input-error w-full' : 'form-input w-full'}
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        placeholder='Masukan Konfirmasi Kata Sandi'
                    />
                    {password2 && password != password2 ?
                        <label className='text-red' htmlFor="">Konfirmasi kota sandi salah</label> : null
                    }
                    {error.name &&
                        <label className='text-red' htmlFor="">Periksa kembali Konfirmasi Kata Sandi</label>
                    }
                </div>
                <div className="col-span-1 p-3">
                    <span className='bg-red'>* semua data wajib di isi </span>
                </div>
                <div className="col-span-2 flex justify-center">
                    <button
                        className="btn btn-blue btn-wide"
                        onClick={() => handleSubmit()}
                    >
                        Tambah
                    </button>
                </div>
            </div>
        </div >
    )
}

export default FormAddAdmin
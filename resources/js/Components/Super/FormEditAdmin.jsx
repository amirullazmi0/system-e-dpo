import { Link, router } from '@inertiajs/react'
import React, { useState } from 'react'

const FormEditAdmin = ({ notif, user, error }) => {
    const [name, setName] = useState(user[0].name)
    const [email, setEmail] = useState(user[0].email)
    const [level, setLevel] = useState(user[0].level)
    const [area, setArea] = useState(user[0].area)
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    console.log('user', user);
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

    console.log('error', error);
    const handleSubmit = () => {
        const data = {
            name, email, level, area
        }
        router.post('/super/edit-admin/' + user[0].id, data);
        // router.post('/super/edit-admin', data);
        // console.log('data : ', data);
    }
    const handleSubmitPassword = () => {
        const data = {
            password, password2
        }
        router.post('/super/edit-admin/' + user[0].id + '/password', data);
        setPassword('')
        setPassword2('')
        // console.log('data : ', data);
    }
    return (
        <>
            <div className='section-super p-7 lg:mr-6'>
                <h1 className='font-bold text-xl flex items-center gap-2'>
                    Form Edit Admin <div className="bg-green">
                        <small>
                            {user[0].name}
                        </small>
                    </div>
                </h1>
                <div className="grid grid-cols-2">
                    <div className="col-span-1 form-group grid p-3">
                        <label htmlFor="">Nama</label>
                        <input
                            className='form-input w-full'
                            type="text"
                            value={name}
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
                            value={email}
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
                                <option value={14}>Kejati Kalimantan</option>
                                :
                                kejari.map((kk) => (
                                    <option key={kk.id} value={kk.id}>{kk.name}</option>
                                ))
                            }
                        </select>
                        {error.area &&
                            <label className='text-red' htmlFor="">Periksa kembali Wilayah</label>
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
                            Perbarui
                        </button>
                    </div>
                </div>
            </div >

            {/* form password */}
            <div className='section-super p-7 lg:mr-6 mt-5 mb-7'>
                <h1 className='font-bold text-xl flex items-center gap-2'>
                    Form Edit Kata Sandi
                </h1>
                <div className="grid grid-cols-2">
                    {notif.error ?
                        <div className="col-span-2 grid w-96 p-3">
                            <div className="bg-red flex justify-between">
                                {notif.error}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>
                            </div>

                        </div> : null
                    }
                    <div className="col-span-1 form-group grid p-3">
                        <label htmlFor="">Kata Sandi Baru</label>
                        <input
                            className='form-input w-full'
                            type="password"
                            placeholder='Masukan Kata Sandi Baru'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error.password &&
                            <label className='text-red' htmlFor="">Periksa kembali Kata Sandi</label>
                        }
                    </div>
                    <div className="col-span-1 form-group grid p-3">
                        <label htmlFor="">Konfirmasi Kata Sandi Baru</label>
                        <input
                            className={password2 && password != password2 ? 'form-input-error w-full' : 'form-input w-full'}
                            type="password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            placeholder='Masukan Konfirmasi Kata Sandi Baru'
                        />
                        {password2 && password != password2 ?
                            <label className='text-red' htmlFor="">Konfirmasi kota sandi salah</label> : null
                        }
                        {error.password2 &&
                            <label className='text-red' htmlFor="">Periksa kembali Konfirmasi Kata Sandi</label>
                        }
                    </div>
                    <div className="col-span-1 p-3">
                        <span className='bg-red'>* semua data wajib di isi </span>
                    </div>
                    <div className="col-span-2 flex justify-center">
                        <button
                            className="btn btn-blue btn-wide"
                            onClick={() => handleSubmitPassword()}
                        >
                            Perbarui Kata Sandi
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FormEditAdmin
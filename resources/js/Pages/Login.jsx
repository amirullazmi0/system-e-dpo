import React, { useState } from 'react'
import '../../css/item.css'
import { Head, Link, router } from '@inertiajs/react'

export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(props.errors)

    const handleLogin = () => {
        const data = {
            email, password
        }
        router.post('/login', data)
        setEmail("")
        setPassword("")
    }
    return (
        <>
            <Head title='Login' />
            <div className='grid lg:grid-cols-2'>
                <div className='col-span-1 login'>
                    <div className="card-login">
                        <div className="card-login-header flex justify-center gap-3">
                            <img className='h-24 pr-3 border-stone-950 border-r-4' src="assets/img/logo.png" alt="" />
                            <div className="grid text-lg uppercase font-bold">
                                <h1>kejaksaan</h1>
                                <h1>Tinggi</h1>
                                <h1>kalimantan Barat</h1>
                            </div>
                        </div>
                        {props.errors.email != null || props.errors.password != null ?
                            <>
                                <div className="card-errors flex justify-center">
                                    periksa kembali password dan email
                                </div>
                            </>
                            : null
                        }
                        <div className="form-card">
                            <label htmlFor="">Email</label>
                            <input
                                className='input-login w-full'
                                type="email"
                                placeholder='Masukan Email'
                                value={email}
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-card">
                            <label htmlFor="">Kata Sandi</label>
                            <input
                                className='input-login w-full'
                                type="password"
                                placeholder='Masukan Kata Sandi'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="btn btn-green"
                            onClick={() => handleLogin()}
                        >
                            Login
                        </button>
                        <span className='text-center'>kembali ke halaman utama
                            <Link method='get' href={route('home')} className='btn btn-sm btn-blue'>Disini</Link>
                        </span>
                    </div>
                </div>
                <div className='lg:col-span-1 lg:block hidden login-img'>
                    <img className='min-h-screen object-cover' src="https://i0.wp.com/kejati-kalbar.go.id/wp-content/uploads/2022/03/DJI_0162-scaled.jpg?fit=2560%2C1919&ssl=1" alt="" />
                </div>
            </div>
        </>
    )
}

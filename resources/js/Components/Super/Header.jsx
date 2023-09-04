import { Link } from '@inertiajs/react';
import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

const Header = ({ handle, login, auth }) => {
    const [notifLogin, setNotifLogin] = useState()
    const [iniNotif, setNotif] = useState(false)

    const handleNotif = () => {
        setNotif(false)
        // setNotifLogin(null)
    }

    const handleSidebar = () => {
        handle(true)
    }
    const renderNotif = useCallback(() => {
        // if (notifLogin) {
        return (
            <div className={iniNotif == true ? "card-alert-login flex items-center" : "card-alert-login-off flex items-center"}>
                {login}
                <button onClick={() => handleNotif()} className="ml-7 btn btn-sm btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

        )
        // }
        // return (
        //     notifLogin &&
        //     <>
        //         <div className="bg-white-off flex items-center">
        //             {login}
        //             <button onClick={() => setNotifLogin(null)} className="ml-7 btn btn-sm btn-ghost">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        //                 </svg>
        //             </button>
        //         </div>
        //     </>
        // )
    }, [iniNotif])

    console.log('iasd', iniNotif);
    useEffect(() => {
        setNotifLogin(login)
        setNotif(false)
        if (login) {
            setTimeout(() => {
                setNotif(true)
            }, 700);
        }
    }, [login])
    return (
        <div className='header-super flex justify-between items-center gap-1 lg:p-7'>
            <button onClick={() => handleSidebar()} className='btn lg:hidden block btn-sm btn-ghost ml-[-5]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </button>
            <div>
                {renderNotif()}
            </div>
            <div className='flex items-center'>
                {auth.level == 1 ?
                    <>
                        <div className="flex gap-2">

                            <div className="bg-blue">
                                {auth.name}
                            </div>
                            <div className="bg-yellow">
                                Super Admin
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="flex gap-2">

                            <div className="bg-blue">
                                {auth.name}
                            </div>
                            <div className="bg-yellow">
                                Admin
                            </div>
                        </div>
                    </>
                }
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost hover:bg-transparent btn-circle avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 bg-white shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44">
                        <Link method="post" href={route('logout')} as='button' className='btn btn-ghost'>
                            logout
                        </Link>
                    </ul>
                </div>
            </div>

        </div>

    )
}
export default Header


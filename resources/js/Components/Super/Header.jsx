import { Link } from '@inertiajs/react';
import React from 'react'

const Header = ({ login, auth }) => {
    console.log('auth', login);
    return (
        <div className='header-super flex justify-between items-center gap-1 p-7'>
            <div>
                {login &&
                    <>
                        <div className="card-alert-success">
                            {login}
                        </div>
                    </>
                }
            </div>
            <div className='flex items-center'>
                {auth.level == 1 ?
                    <>
                        <button className="btn btn-yellow btn-sm">
                            Super Admin
                        </button>
                    </>
                    :
                    <>
                        <button className="btn btn-sm">
                            Admin
                        </button>
                    </>
                }
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost hover:bg-transparent btn-circle avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44">
                        <button className="btn btn-ghost flex justify-center items-center">
                            Akun
                        </button>

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


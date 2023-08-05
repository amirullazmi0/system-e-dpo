import { Link } from '@inertiajs/react'
import React from 'react'
const Section = () => {
    return (
        <div className='section-super p-7 lg:mr-6'>
            <div className="flex justify-end">
                <Link
                    method='get'
                    href={route('superaddadmin')}
                    className='btn btn-blue'
                >
                    Tambah Admin
                </Link>
            </div>
            Section
        </div>
    )
}

export default Section
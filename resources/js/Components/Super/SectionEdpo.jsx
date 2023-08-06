import { Link, router } from '@inertiajs/react'
import React from 'react'
const SectionEdpo = ({ notif, user }) => {
    const handleEdit = (e, i) => {
        const data = {
            id: e, email: i
        }

        router.get('/super/edit-admin/' + e, data)
    }

    return (
        <div className='section-super mb-7 p-7 lg:mr-6'>
            edoiasd
        </div>
    )
}

export default SectionEdpo
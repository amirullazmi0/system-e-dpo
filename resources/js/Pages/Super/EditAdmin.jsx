import { Head, Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import FormEditAdmin from '@/Components/Super/FormEditAdmin';



export default function EditAdmin(props) {
    console.log('props', props);
    return (
        <>
            <Head title='Edit Admin' />
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'admin'} />
                </div>
                <div className="col-span-5 ">
                    <Header login={props.flash.login} auth={props.auth} />
                    <FormEditAdmin notif={props.flash} user={props.user} error={props.errors} />
                </div>
            </div>
        </>
    )
}

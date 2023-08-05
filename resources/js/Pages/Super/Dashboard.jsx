import { Link } from '@inertiajs/react'
import React from 'react'
import Sidebar from '@/Components/Super/Sidebar';
import Header from '@/Components/Super/Header';
import Section from '@/Components/Super/Section';

export default function Dashboard(props) {
    return (
        <>
            <div className="grid grid-cols-7">
                <div className="col-span-2">
                    <Sidebar active={'admin'} />
                </div>
                <div className="col-span-5 ">
                    <Header auth={props.auth} />
                    <Section />
                </div>
            </div>
        </>
    )
}

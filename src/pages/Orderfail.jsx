import React from 'react'
import { Link } from 'react-router-dom'

export default function Orderfail() {
    return (
        <div className='orderfail'>
            <div className="orderfailwrap">
                <h2>Sorry You Payment is failed. Go to home</h2>
                <button><Link className='link' to={'/'}>Returm to Home</Link></button>
            </div>
        </div>
    )
}
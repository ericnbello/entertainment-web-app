import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard () {    
    let navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/dashboard')
        }

        if (!authToken) {
            navigate('/login')
        }
        
    }, [])

    return (
        <div className='dashboard mx-auto'>
            <h1 className="heading text-xl text-white py-4">Dashboard</h1>
            <p className='py-6'>You are logged in! You may now access video pages to view content.</p>
            <button className="underline py-6" onClick={handleLogout}>Log Out</button>                
        </div>
    )
}
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
            
            {/* <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> */}
                
        </div>
    )
}
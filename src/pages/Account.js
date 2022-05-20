import React from "react";

export default function Account(){
    return(
        <div className="account flex flex-col mx-auto items-center py-12 gap-12">
            <div className="w-10 h-10">
                <img src="/assets/logo.svg" alt="logo"/>
            </div>
            <div className="flex flex-col bg-semiDarkBlue h-96 w-96 rounded-xl p-6">
                <h2 className="flex justify-start text-xl text-white py-4">Login</h2>
                <input placeholder="email" />
                <input placeholder="password" />
                <button>Login to your account</button>
            </div>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import AccountFormButton from "./AccountFormButton";

export default function AccountForm({title, setEmail, setPassword, buttonText, handleAction, formFooterText, formFooterLink, formFooterLinkText}) {
    return (
        <div className="account flex flex-col mx-auto items-center py-12 gap-12">
            <div className="w-10 h-10">
                <img src="/assets/logo.svg" alt="logo"/>
            </div>
            <form className="flex flex-col bg-semiDarkBlue h-1/3 w-3/4 md:w-1/2 lg:w-1/3 rounded-xl p-6 gap-8">
                <h2 className="flex justify-start text-xl text-white pt-4">{title}</h2>
                <input className="bg-transparent border-b-[1px] border-white pl-2 py-2" type="email" placeholder="Email address" name="email" 
                onChange={setEmail} required/>
                <input className="bg-transparent border-b-[1px] border-white pl-2 py-2" type="password" placeholder="Password" name="password" 
                onChange={setPassword} required/>
                
                <AccountFormButton buttonText={buttonText}
                handleAction={handleAction}/>

                <p className="flex justify-center gap-2 text-white">{formFooterText} 
                    <span>
                        <Link to={formFooterLink} className="text-red hover:text-white cursor-pointer">{formFooterLinkText}</Link>
                    </span>
                </p>
            </form>
        </div>
    )
}
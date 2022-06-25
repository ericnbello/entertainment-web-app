import TailwindLogo from './icons/TailwindLogo';
import ReactLogo from "./icons/ReactLogo";

function Footer() {
    return (
        <footer className="flex flex-col flex-grow md:flex-row bg-transparent mx-auto p-6 items-center md:justify-between border-t-2 border-lightGray font-outfit max-w-7xl xl:max-w-[150rem]">
            <div className="flex items-center">
                <p className="">Created by
                    <a className="text-lg text-yellow hover:text-2xl hover:font-bold px-2" href="https://github.com/ericnbello">ericnbello</a>
                        &copy; {new Date().getFullYear()}
                </p>
            </div>
            <div className="flex items-center">
                <p className="flex">Built with 
                    <a className="px-2" href="https://reactjs.org">
                        <ReactLogo />
                    </a>
                    
                    and

                    <a className="px-2" href="https://www.tailwindcss.com">
                        <TailwindLogo />
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;
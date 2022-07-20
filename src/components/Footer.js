import TailwindLogo from './icons/TailwindLogo';
import ReactLogo from "./icons/ReactLogo";
import TMDbLogo from "./icons/TMDbLogo"
import GithubLogo from './icons/GithubLogo';
import TwitterLogo from './icons/TwitterLogo';
import LinkedInLogo from './icons/LinkedInLogo';

function Footer() {
    return (
        <footer className="flex flex-col flex-grow md:flex-row bg-transparent mx-auto p-6 items-center md:justify-between border-t-2 border-lightGray font-outfit max-w-7xl xl:max-w-[150rem]">
            <div className="flex items-center">
            &copy; {new Date().getFullYear() + ' - '}
                <p className="flex"> Built with 
                    <a className="px-2" href="https://reactjs.org">
                        <ReactLogo />
                    </a>
                    ,
                    <a className="px-2" href="https://www.themoviedb.org/">
                        <TMDbLogo className="fill-gradient-to-r from-[#90cea1] to-[#01b4e4]" />
                    </a>
                    
                    and

                    <a className="px-2" href="https://www.tailwindcss.com">
                        <TailwindLogo />
                    </a>
                </p>
                by
                <a className="text-lg text-yellow hover:text-2xl hover:font-bold px-2" href="https://ericnbello.com">ericnbello</a>
            </div>
            <div className="flex items-center gap-x-2">
                <a href="https://github.com/ericnbello">
                    <GithubLogo className="fill-white" />
                </a>
                {/* <a href="https://linkedin.com/in/ericnbello">
                    <LinkedInLogo className="fill-white" />
                </a> */}
                <a href="https://twitter.com/ericnbello">
                    <TwitterLogo className="fill-white" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
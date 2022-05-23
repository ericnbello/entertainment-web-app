import React, {useState} from "react";
import { Link } from "react-router-dom";
import HomeNav from "./icons/HomeNav";
import MovieNav from "./icons/MovieNav";
import SeriesNav from "./icons/SeriesNav";
import BookmarkNav from "./icons/BookmarkNav";

export default function Nav({loggedIn}) {
    const [value, setValue] = useState(0)

    return (
        <nav className="flex flex-col lg:flex-row relative m-0 gap-y-6 justify-between bg-semiDarkBlue rounded-lg lg:h-[35rem] p-4 w-full lg:w-16">
			<div className="flex flex-row lg:flex-col gap-6 justify-between">
					<div className="flex justify-center items-center">
						<img className="h-6 w-6" src='../../assets/logo.svg' alt="logo" />
					</div>
					<div className="tabs flex flex-row lg:flex-col gap-4 justify-center items-center lg:h-full lg:justify-start">
						<Link 
							className={value===0 ? `flex justify-center fill-white hover:fill-red` : `flex justify-center fill-[#5A698F] hover:fill-red`} to="/">
							<button onClick={() => {setValue(0)}}>
								<HomeNav />
							</button>
						</Link>
					
						<Link
							className={(value===1 ? `flex justify-center fill-white hover:fill-red` : `flex justify-center fill-[#5A698F] hover:fill-red`)} to="/movies">
							<button onClick={() => {setValue(1)}}>
								<MovieNav />
							</button>
						</Link>

						<Link
							className={(value===2 ? `flex justify-center fill-white hover:fill-red` : `flex justify-center fill-[#5A698F] hover:fill-red`)} to="/series">
							<button onClick={() => {setValue(2)}}>
								<SeriesNav />
							</button>
						</Link>

						<Link
							className={(value===3 ? `flex justify-center fill-white hover:fill-red` : `flex justify-center fill-[#5A698F] hover:fill-red`)} to="/bookmarks">
							<button onClick={() => {setValue(3)}}>
								<BookmarkNav />
							</button>
						</Link>
					</div>
				<div className="avatar flex justify-end items-center">
					<Link className="flex justify-center w-8 h-8" to={(loggedIn===true ? "/dashboard" : "/login")}>
						<img className="border-2 border-white rounded-full" src="../../assets/image-avatar.png" alt="user avatar"/>
					</Link>
				</div>
			</div>
		</nav>
    )
}
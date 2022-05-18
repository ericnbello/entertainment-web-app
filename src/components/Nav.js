import React from "react";
import { Link } from "react-router-dom";
// import HomeNav from "./icons/HomeNav";
// import MovieNav from "./icons/MovieNav";
// import SeriesNav from "./icons/SeriesNav";

export default function Nav() {
    // const [value, setValue] = useState(0)

    return (
        <nav className="flex flex-col md:flex-row relative m-0 gap-y-6 justify-between bg-semiDarkBlue rounded-lg md:h-96 p-4 w-full md:w-14">
			<div className="flex flex-row md:flex-col gap-6 justify-between">
				<div className="flex justify-center">
					<img className="h-6 w-6" src='../../assets/logo.svg' alt="logo" />
				</div>
				<div className="flex flex-row md:flex-col gap-4 justify-center">
					<Link className="flex justify-center hover:fill-white" to="/">
                        <img className="h-5 w-5" src='../../assets/icon-nav-home.svg' alt="home navigation icon" />
					</Link>
				
					<Link className="flex justify-center" to="/movies">
                        <img className="h-5 w-5" src='../../assets/icon-nav-movies.svg' alt="movies navigation icon" />
					</Link>

					<Link className="flex justify-center" to="/series">
                        <img className="h-5 w-5" src='../../assets/icon-nav-tv-series.svg' alt="tv series navigation icon" />
					</Link>

					<Link className="flex justify-center" to="/bookmarks">
						<img className="h-5 w-5" src='../../assets/icon-nav-bookmark.svg' alt="bookmarks navigation icon" />
					</Link>
				</div>
				<div className="flex justify-end">
					<Link className="flex justify-center" to="/account">
						<img className="h-6 w-6" src="../../assets/image-avatar.png" alt="user avatar"/>
					</Link>
				</div>
			</div>
		</nav>
    )
}
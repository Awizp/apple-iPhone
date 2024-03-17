import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

const Navbar = () => {
    return (
        <header className="w-full px-5 sm:px-10 py-5 flex items-center justify-between">
            <nav className="flex w-full screen-max-width">
                <img src={appleImg} alt="apple-img" width={14} height={18} />

                <div className="flex flex-1 justify-center max-sm:hidden">
                    {
                        navLists.map((item, i) => (
                            <div key={i}
                                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
                            >
                                {item}
                            </div>
                        ))
                    }
                </div>

                <div className="flex items-baseline gap-7 max-sm:justify-menu max-sm:flex-1">
                    <img src={searchImg} alt="search-icon" width={18} height={18} />
                    <img src={bagImg} alt="bag" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
import { logo } from "../assets/assets"

const Header = () => {
  return (
    <header>
        <nav className="flex justify-center max-w-[1792px] mx-auto items-start">
            <ul className="py-10 text-white flex justify-center items-center mt-2 gap-x-10 max-xl:gap-x-3 max-lg:text-[.75rem] xl:text-lg">
                <li><a className="px-3 py-1 bg-[#E92229] rounded" href="">Home</a></li>
                <li><a className="px-3 py-1" href="">About us</a></li>
                <li><a className="px-3 py-1" href="">League</a></li>
            </ul>
            <ul className="bg-[#FFFFFF] px-64 max-md:px-32 max-lg:px-36 max-xl:px-52 xl:px-72 min-w-max py-3 logo-clip-path">
                <li><a href=""><img className="max-lg:w-[80px] xl:w-[110px]" src={logo} alt="" /></a></li>
            </ul>
            <ul className="py-10 text-white flex justify-center items-center mt-2 gap-x-10 max-lg:gap-x-1 max-xl:gap-x-3 max-lg:text-[.75rem] xl:text-lg">
                <li><a className="px-3 py-1" href="">Project game changer</a></li>
                <li><a className="px-3 py-1" href="">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
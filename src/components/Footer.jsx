import {fb, flogo1, flogo2, house, insta, mail, phone, x, yt} from "../assets/assets"

const Footer = () => {
  return (
    <footer className="bg-white py-16 max-w-[1920px] mx-auto">
        <div className=" grid xl:grid-cols-[300px,220px,220px,3fr] max-xl:grid-cols-[1fr,auto] justify-center items-start xl:gap-20 gap-14 max-lg:gap-7 px-72">
            <div className="text-black">
                <h1 className="text-2xl font-semibold mb-10 bg-gradient-to-b from-[#e92229d6] from-90% to-black bg-clip-text underline">Address</h1>
                <p className="flex gap-2"><img className="w-fit h-fit" src={house} alt="" /> Unifed Football Sports development private limited 38/3027, 2nd Floor NH Bypass, Edapally, Kochi, India 682024</p>
                <p className="flex gap-2 mt-14"><img className="w-fit h-fit" src={mail} alt="" /> info@superleaguekerala.com</p>
                <p className="flex gap-2 mt-16"><img className="w-fit h-fit" src={phone} alt="" /> 18002035633</p>
            </div>
            <div className="text-black">
                <h1 className="text-2xl font-semibold mb-10 bg-gradient-to-b from-[#f94349d6] from-90% to-black bg-clip-text underline">Quick Links</h1>
                <ul className="flex flex-col gap-y-5 font-bold text-black/80">
                    <li><a href="">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Project Game Changer</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Media</a></li>
                    <li><a href="">Contact US</a></li>
                </ul>
            </div>
            <div className="text-black">
                <h1 className="text-2xl font-semibold mb-10 bg-gradient-to-b from-[#e92229d6] from-90% to-black bg-clip-text underline">Useful links</h1>
                <ul className="flex flex-col gap-y-5 font-bold text-black/80">
                    <li><a href="">Private Policy</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Refund Policy</a></li>
                </ul>
            </div>
            <div className="flex flex-col gap-10 justify-start items-center">
                <img className="max-w-[320px] -ml-4" src={flogo1} alt="" />
                <img className="max-w-[320px]" src={flogo2} alt="" />
            </div>
        </div>
        <div className="w-fit mx-auto mt-20">
            <ul className="my-2 gap-x-3 flex justify-center items-center">
                <li><a href=""><img src={insta} alt="" /></a></li>
                <li><a href=""><img src={fb} alt="" /></a></li>
                <li><a href=""><img src={x} alt="" /></a></li>
                <li><a href=""><img src={yt} alt="" /></a></li>
            </ul>
            <p className="text-sm font-light">Copyright © 2024 <a className=" underline" href="">Super League Kerala</a>. All Right Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
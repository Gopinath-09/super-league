import { poster1, poster2, poster3 } from "../assets/assets"

const OurMedia = () => {
  return (
    <section className="relative w-[100%] -mt-3 py-56 max-w-[1792px] mx-auto">
        <div className="bg-[#202020] mx-56 py-14 px-8 scale-y-150 rounded-3xl">
            <h1 className="text-4xl -mt-5 font-bold text-white">Our <span className="text-transparent bg-gradient-to-b from-[#e92229d6] from-50% to-gray-300/50 bg-clip-text">Media</span></h1>
            <div className="flex gap-x-10 justify-center items-start mt-10">
                <div className="w-[33.3%] space-y-8 text-center">
                    <img className="w-full max-h-[190px]" src={poster1} alt="" />
                    <div className="px-5 text-gray-300">
                        <h1 className="text-2xl font-bold tracking-wider text-left">Project Game Changer.</h1>
                        <p className="text-gray-300/70 text-[.78rem] leading-6 text-left">Project Gamechanger” marks a pivotal moment in Kerala football as Super League Kerala, in association with the prestigious Andrés Iniesta Academy, undertakes a revolutionary mission to transform the regional game into a global spectacle. By breaking barriers and setting new standards.</p>
                    </div>
                    <button className="bg-[#E02B2A] text-white text-lg font-semibold py-3 px-9 w-fit mx-auto tracking-widest rounded-lg">Lean More</button>
                </div>
                <div className="w-[33.3%] space-y-8 text-center">
                    <img className="w-full max-h-[190px]" src={poster2} alt="" />
                    <div className="px-5 text-gray-300">
                        <h1 className="text-2xl font-bold tracking-wider text-left">Football Reimagined</h1>
                        <p className="text-gray-300/70 text-[.78rem] leading-6 text-left">Embark on a football odyssey with Super League Kerala, where local talent meets global horizons. In collaboration with the renowned Andrés Iniesta Academy, we craft a transformative narrative, turning the dreams of young football enthusiasts in Kerala into tangible career options.</p>
                    </div>
                    <button className="bg-[#E02B2A] text-white text-lg font-semibold py-3 px-9 w-fit mx-auto tracking-widest rounded-lg">Lean More</button>
                </div>
                <div className="w-[33.3%] space-y-8 text-center">
                    <img className="w-full max-h-[190px]" src={poster3} alt="" />
                    <div className="px-5 text-gray-300">
                        <h1 className="text-2xl font-bold tracking-wider text-left">Kerala's own football League</h1>
                        <p className="text-gray-300/70 text-[.78rem] leading-6 text-left">Super League Kerala, featuring six dynamic franchises, unfolds in an exhilarating league format. Our mission is to foster talent through community development, healthy competition, and engaging entertainment, all the while prioritizing the interests of league stakeholders.</p>
                    </div>
                    <button className="bg-[#E02B2A] text-white text-lg font-semibold py-3 px-9 w-fit mx-auto tracking-widest rounded-lg">Lean More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurMedia
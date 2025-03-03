import { banner, calender, venues } from "../assets/assets"

const Challanges = () => {
  return (
    <section className="w-[100%] mt-56 max-w-[1792px] mx-auto">
        <div className="absolute z-10 top-[650px] left-[50%] translate-x-[-50%] h-[1000px] w-[1600px] bg-radial-challanges"></div>
        <div className="z-20 pt-30 relative">
            <div className="clip-path-challanges w-fit mx-auto px-64 max-md:px-32 max-lg:px-36 max-xl:px-52 xl:px-52 min-w-max py-3 text-[2.1rem] scale-y-150 font-bold text-black bg-gradient-to-b from-[#999999] to-[#FFFFFF] tracking-wider text-center">CHALLANGES</div>
            <div className="bg-[#FFFFFF] mx-[10%] rounded-[1.5rem] pb-14">
                <h1 className="text-[2rem] pt-6 pb-6 scale-y-[1.6] text-center text-transparent font-bold bg-gradient-to-b from-[#E92229] to-[#1C1C1C] bg-clip-text">Super League Kerala Scouting Phase 2</h1>
                <img className="px-16 mt-3 py-0 w-full" src={banner} alt="" />
                <ul className="px-16 my-10 flex justify-center items-center gap-x-9">
                  {
                    venues.map((d,i)=>(
                      <li className="flex items-center gap-x-1 font-semibold" key={i}><img src={calender} alt="" />{d}</li>
                    ))
                  }
                </ul>
                <p className="px-16 text-center mt-8">The mission of Super League Kerala is to be a <b>professional, respectful</b> and <b>premium football league</b> providing the platform and the tools for everyone to succeed in the game through sustainable community building, healthy competition,youth development and wholesome entertainment.</p>
            </div>
        </div>
    </section>
  )
}

export default Challanges
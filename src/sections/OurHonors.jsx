import { banner, calender, endor1, endor2, venues } from "../assets/assets"

const OurHonors = () => {
  return (
    <section className="w-[100%] relative mt-36 max-w-[1792px] mx-auto">
        <div className="absolute z-10 top-[-400px] left-[50%] translate-x-[-50%] h-[1000px] w-[1300px] bg-radial-challanges"></div>
        <div className="absolute z-10 top-[-950px] left-[-20%] translate-x-[-50%] h-[1000px] w-[1300px] bg-radial-challanges2"></div>
        <div className="absolute z-10 top-[-1350px] right-[-90%] translate-x-[-50%] h-[1000px] w-[1300px] bg-radial-challanges2"></div>
        <div className="z-20 pt-30 relative">
            <div className="clip-path-challanges w-fit mx-auto px-64 max-md:px-32 max-lg:px-36 max-xl:px-52 xl:px-52 min-w-max py-3 text-[1.9rem] scale-y-150 font-bold text-black bg-[#FFFFFF] tracking-wider text-center underline">Our Honors</div>
            <div className="bg-[#FFFFFF] mx-[10%] rounded-[1.5rem] pb-14">
                <p className="text-lg text-center pt-20">Let us unite to celebrate the spirit of football and rally behind our teams.</p>
                <h1 className="text-[2rem] pt-3 pb-6 scale-y-[1.4] text-center text-transparent font-bold bg-gradient-to-r from-[#fd242bfd] from-25% to-[#1C1C1C] bg-clip-text tracking-wider">Special thanks to:</h1>
                <div className="flex justify-center items-center gap-x-36 max-lg:gap-x-10 mt-5 px-20">
                    <img className="max-lg:max-w-[200px]" src={endor1} alt="" />
                    <div>
                        <p className=" text-xl">“The Kerala Super League, a football league initiative by the Kerala Football Association, will showcase the talent and cultural diversity across the length and breadth of Kerala. The KSL will provide abundant employment opportunities for the youth in Kerala on an International platform. Let us unite to celebrate the spirit of Football and rally behind our teams.”</p>
                        <h1 className="text-[1.5rem] max-xl:text-[1.3rem] text-left pt-3 pb-0 scale-y-[1.3] max-xl:scale-100 text-transparent font-bold bg-gradient-to-r uppercase from-[#fd242bfd] mt-10 from-1% to-[#1C1C1C] bg-clip-text tracking-wider">shri pinarayi vijayan</h1>
                        <h1 className="text-[1.5rem] max-xl:text-[1.3rem] text-left pt-0 pb-6 scale-y-[1.3] max-xl:scale-100 font-bold text-black uppercase tracking-wider">HON’BLE CHIEF MINISTER OF KERALA</h1>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-row-reverse gap-x-36 max-lg:gap-x-10 mt-16 px-20">
                    <img className="max-lg:max-w-[200px]" src={endor2} alt="" />
                    <div>
                        <p className="text-right text-xl">“The Kerala Super League, a football league initiative by the Kerala Football Association, will showcase the talent and cultural diversity across the length and breadth of Kerala. The KSL will provide abundant employment opportunities for the youth in Kerala on an International platform. Let us unite to celebrate the spirit of Football and rally behind our teams.”</p>
                        <h1 className="text-[1.5rem] max-xl:text-[1.3rem] text-right pt-3 pb-0 scale-y-[1.3] max-xl:scale-100 text-transparent font-bold bg-gradient-to-r uppercase from-[#fd242bfd] mt-10 from-60% to-[#1C1C1C] bg-clip-text tracking-wider">SHRI P.A MUHAMMAD RIYAS</h1>
                        <h1 className="text-[1.5rem] max-xl:text-[1.3rem] text-right pt-0 pb-6 scale-y-[1.3] max-xl:scale-100 font-bold text-black uppercase tracking-wider">HON’BLE MINISTER FOR TOURISM</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurHonors
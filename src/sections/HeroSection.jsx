import { charu, imvijayan } from "../assets/assets"

const HeroSection = () => {
  return (
    <section className="h-full relative max-w-[1792px] mx-auto">
        <div className="text-gray-200/90 flex flex-col justify-center items-center pt-10">
            <div className="text-center space-y-1 mt-20">
                <p className="text-[.8rem] xl:text-sm text-gray-300/90 max-lg:text-[.75rem]">Kerala truly global with a commitment to grow all facets of the sport by</p>
                <h1 className="text-3xl xl:text-5xl font-semibold">Developing top-quality <span className="text-transparent bg-gradient-to-b from-[#e92229dc] from-30% to-[#737373] bg-clip-text">Football</span> talent</h1>
            </div>
            <div className="flex mt-32 gap-x-5 xl:gap-x-8 px-0 w-fit">
                <div className="flex gap-x-3">
                    <img className="w-full max-w-[350px] min-h-[270px] h-[400px] rounded-xl border-[2px] border-gray-400/50" src={charu} alt="" />
                    <div className="w-full max-w-[350px] flex flex-col justify-between p-5">
                        <p className="text-gray-400/80 pb-6 xl:pb-0 text-sm xl:text-[1.2rem] leading-8">The renowned sports personality with years of experience in promoting top leagues like Pro Kabaddi, RCB (IPL), joins Kerala Super League.</p>
                        <h1 className="border-t pt-2 pb-3 xl:pb-3 border-gray-500 text-[1.3rem] xl:text-4xl scale-y-110 xl:scale-y-125 leading-5 xl:leading-9 font-semibold">CHARU SHARMA<br />BOARD MEMBER<br /><span className="text-lg xl:text-2xl">(NON EXECUTIVE)</span></h1>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <img className="w-full max-w-[350px] min-h-[270px] xl:h-[400px] rounded-xl border-[2px] border-gray-400/50" src={imvijayan} alt="" />
                    <div className="w-full max-w-[350px] flex flex-col justify-between p-5">
                        <p className="text-gray-400/80 pb-6 text-sm xl:text-[1.2rem] leading-8">I. M. Vijayan, a legendary national and international football figure, has taken up the esteemed position of the Ambassador of Kerala Super League.</p>
                        <h1 className="border-t pt-2 xl:pb-6 pb-6 border-gray-500 text-[1.3rem] xl:text-4xl scale-y-110 xl:scale-y-125 leading-5 xl:leading-9 font-semibold">I. M. VIJAYAN<br />KERALA'S ICON</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
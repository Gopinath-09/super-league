import { player, trophy, won } from "../assets/assets"

const ArticleInfo = () => {
  return (
    <section className=" relative w-[100%] py-40 max-w-[1792px] mx-auto">
        <div className="absolute z-10 -top-[550px] left-[50%] translate-x-[-50%] h-[1000px] w-[1300px] bg-radial-challanges"></div>
        <img className=" absolute top-40 left-40" src={player} alt="" />
        <img className=" absolute top-[50%] translate-y-[-50%] right-40" src={trophy} alt="" />
        <img className=" absolute -bottom-20 left-40" src={won} alt="" />
        <article className="max-w-[800px] text-justify mx-auto text-gray-300 text-xl uppercase">
            Embark on a football odyssey with Super League Kerala, where local talent meets global horizons. In collaboration with the renowned Andrés Iniesta Academy, we craft a transformative narrative, turning the dreams of young football enthusiasts in Kerala into tangible career options. Group Meeran proudly spearheads this initiative, showcasing its dedication to enhancing the beautiful game in our beloved state. Since 2017, Scoreline Sports Pvt. Ltd. has specialized in discovering and nurturing rising prodigies through an elite sporting curriculum. <br /><br /><br />

            Super League Kerala, featuring six dynamic franchises, unfolds in an exhilarating league format. Our mission is to foster talent through community development, healthy competition, and engaging entertainment, all the while prioritizing the interests of league stakeholders. <br /> <br /><br />

            Committed to a seamless journey from the grassroots to the global stage, we emphasize extensive training and scouting, culminating in an elite academy synergizing the strengths of Super League Kerala and the Andrés Iniesta Academy. In our relentless pursuit, Super League Kerala provides year-round opportunities for supremely skilled individuals, carving out a unique pathway to coveted ISL qualifications and beyond. <br /><br /><br />
        
            Set to revolutionize football for Malayalees all over, Super League Kerala is not just a competition. It is a celebration of the beautiful game reimagined for a new generation. The transformative endeavour will herald a new era of the sport and unravel a legacy of transforming football into a viable career option. Super League Kerala will feature six dynamic franchisees competing in a thrilling head-to-head showdown. The football fiesta, unfurling in a league format, will officially kick off in August 2024 for a period of two months. Group Meeran proudly spearheads this initiative, showcasing its dedication to enhancing the beautiful game in our state. 
        </article>
    </section>
  )
}

export default ArticleInfo
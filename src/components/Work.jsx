import { groundlink, webchamp, co, chs1, footer } from "../assets";

const Work = () => {
  return (
    <div>
        <div className="pb-[200px]">
            <div className="flex justify-start">
                <h1 className="text-4xl flex font-semibold"><span className="mr-3">Experience</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-1" height="30" width="30" viewBox="0 0 640 512"><path fill="#ffffff" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 items-center">
                <div className="w-full md:w-1/2">
                    <div className="card bg-[#111418] shadow-xl my-5">
                        <div className="card-body">
                            <div className="flex items-center gap-1">
                                <figure className="rounded-3xl hover:scale-105 transition w-48">
                                    <img src={groundlink} width={100} height={200} />
                                </figure>
                                <div className="divider divider-horizontal divider-neutral"></div>
                                <div className="flex flex-col gap-y-2 items-start">
                                    <h1 className="text-[20px] font-semibold">Fullstack Developer</h1>
                                    <h6 className="text-[12px] font-extralight">at Groudlink</h6>
                                    <p className="text-[10px] font-extralight">July 2024 - Present ~ Full Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="card bg-[#111418] shadow-xl my-5">
                        <div className="card-body">
                            <div className="flex items-center gap-1">
                                <figure className="rounded-3xl hover:scale-105 transition w-48">
                                    <img src={webchamp} alt="" />
                                </figure>
                                <div className="divider divider-horizontal divider-neutral"></div>
                                <div className="flex flex-col gap-y-2 items-start">
                                    <h1 className="text-[20px] font-semibold">Fullstack Developer</h1>
                                    <h6 className="text-[12px] font-extralight">at WebChampIT</h6>
                                    <p className="text-[10px] font-extralight">February 2024 - August 2024 ~ Part-Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-x-2 items-center">
                <div className="w-full md:w-1/2">
                    <div className="card bg-[#111418] shadow-xl my-5">
                        <div className="card-body">
                            <div className="flex items-center gap-1">
                                <figure className="rounded-3xl hover:scale-105 transition w-48">
                                    <img src={chs1} alt="" />
                                </figure>
                                <div className="divider divider-horizontal divider-neutral"></div>
                                <div className="flex flex-col gap-y-2 items-start">
                                    <h1 className="text-[20px] font-semibold">Fullstack Developer</h1>
                                    <h6 className="text-[12px] font-extralight">at Comfort Group of Companies</h6>
                                    <p className="text-[10px] font-extralight">June 2023 - June 2024 ~ Full Time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="card bg-[#111418] shadow-xl my-5">
                        <div className="card-body">
                            <div className="flex items-center gap-1">
                                <figure className="rounded-3xl hover:scale-105 transition w-48">
                                    <img src={co} alt="" />
                                </figure>
                                <div className="divider divider-horizontal divider-neutral"></div>
                                <div className="flex flex-col gap-y-2 items-start">
                                    <h1 className="text-[20px] font-semibold">Information System Intern</h1>
                                    <h6 className="text-[12px] font-extralight">at Clark Outsourcing</h6>
                                    <p className="text-[10px] font-extralight">Jan 2023 - April 2023 ~ Internship</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-4xl">I&apos;m currently open to new opportunities, Feel free to reach out.</h1>
            <img src={footer} alt="" />
        </div>
    </div>
  )
}

export default Work;

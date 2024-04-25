const Skills = () => {
  return (
    <div>
        <div className="my-[200px]">
            <div className="flex justify-start">
                <h1 className="text-4xl flex font-semibold"><span className="mr-3">Technical Skills</span>
                    <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path fill="#ffffff" d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32.4 97.2c28-12.4 47.6-40.5 47.6-73.2c0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3V358.7C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48c44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                </h1>
            </div>

            <div className="mt-8">
                <div className="flex justify-center items-center">
                    <h1 className="text-2xl font-semibold">Frontend
                    </h1>
                </div>
                
                <div className="flex gap-3 md:justify-center items-center my-5">
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">ReactJs</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">VueJs</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Angular</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">MUI</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Tailwind</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Bootstrap</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Ajax</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">JQuery</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Mobile Responsive</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Git</button>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex justify-center items-center">
                    <h1 className="text-2xl font-semibold">Backend
                    </h1>
                </div>
                
                <div className="flex gap-3 justify-center items-center my-5">
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Laravel</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">PHP</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Node</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">DBMS</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Mysql</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">MongoDB</button>
                    <button className="border-2 py-[10px] px-[20px] rounded-[10px]">Git</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;

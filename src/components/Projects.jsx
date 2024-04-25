import { sari, timesheet, monitoring } from '../constants';
import { boot } from '../assets';
import { laravel,filament,jetstream, right} from '../assets';
import { livewire } from '../assets';
import { dojo } from '../assets';
import { paypal } from '../assets';
import { daisy } from '../assets';

const Projects = () => {
  return (
    <div>
        <div className="flex justify-start">
        <h1 className="text-4xl flex font-semibold"><span className="mr-3">Recent Projects </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></h1>

        </div>
        
        <div className="mt-10">
            <div className="flex flex-col">
                <div className="flex justify-center items-center w-full">
                    {sari.map((item) => (
                        <div key={item.id}>
                            <img src={item.imageUrl} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-start items-start w-full gap-y-6">
                    <h1 className="text-[35px] font-bold text-[#e4b95b] mt-[20px]">Sari-sari Store <span className="text-sm">S&R</span></h1>
                    <h1 className="text-[20px] tracking-wide font-thin">An ecommerce platform for Filipino products on UK mainland only. Our first ever big project with payment method.</h1>
                    <div className="flex gap-x-3">
                        <a href="https://store.spoonandrice.com/" target="_blank" className="flex gap-2 px-[20px] py-[10px] bg-[#fff] text-black rounded-[20px]">Visit <img src={right} width={24} height={24} /></a>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#6610f2] rounded-[20px]">Bootstrap <img src={boot} width={20} height={20} className="mt-1" /></button>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#dc2626] rounded-[20px]">Laravel <img src={laravel} width={20} height={20} /></button>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#FB71A9] rounded-[20px]">Livewire <img src={livewire} width={20} height={20} /></button>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#e9e5f4] rounded-[20px]"><img src={dojo} width={40} height={20} className="mt-1" /></button>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#0070ba] rounded-[20px]">Paypal <img src={paypal} width={20} height={20} /></button>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-[100px]">
            <div className="flex flex-col">
                <div className="flex justify-center items-center w-full">
                    {timesheet.map((sheet) => (
                        <div key={sheet.id}>
                            <img src={sheet.imageUrl} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-start items-start w-full gap-y-4">
                    <h1 className="text-[35px] font-bold text-[#4299e1] mt-[20px]">eTimesheet <span className="text-sm">CHSI</span></h1>
                    <h1 className="text-[20px] tracking-wide font-thin">Timesheet for nurses attendance weekly.</h1>
                    <div className="flex gap-3">
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#333] rounded-[20px]">DaisyUI <img src={daisy} width={15} height={15} className="mt-1" /></button>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#dc2626] rounded-[20px]">Laravel <img src={laravel} width={20} height={20} /></button>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#FB71A9] rounded-[20px]">Livewire <img src={livewire} width={20} height={20} /></button>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-[100px] mb-[100px]">
            <div className="flex flex-col">
                <div className="flex justify-center items-center w-full">
                    {monitoring.map((item) => (
                        <div key={item.id}>
                            <img src={item.imageUrl} />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-start items-start w-full gap-y-4">
                    <h1 className="text-[35px] font-bold text-[#ffc107] mt-[20px]">Monitoring <span className="text-sm">S&R</span></h1>
                    <h1 className="text-[20px] tracking-wide font-thin">Monitoring attendance for company staffs.</h1>
                    <div className="flex gap-3">
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#333] rounded-[20px]">DaisyUI <img src={daisy} width={15} height={15} className="mt-1" /></button>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#dc2626] rounded-[20px]">Laravel <img src={laravel} width={20} height={20} /></button>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#fdae4b] rounded-[20px]">Filament <img src={filament} width={20} height={20} /></button>
                        <button className="flex gap-2 px-[20px] py-[10px] bg-[#6875f5] rounded-[20px]">Jetstream <img src={jetstream} width={18} height={18} className="mt-1" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;

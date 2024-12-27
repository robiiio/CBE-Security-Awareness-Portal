import { useState} from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const data = [
  { 
    notation: "ISE",
    image: "Ise.jpg",
    title: "Idenity Service Engine",
    description:
      "Is used to manage and secure access to the network and resources.It is a policy-based platform that allows the bank to enforce access policies and control who can access which systems and data within the bank.",
  },
  {
    notation: "WSA",
    image: "wsa.png",
    title: "Web Security Appliance",
    description:
      "Is a software solution used to protect against web-based threats and ensure secure web browsing for employees and customers.WSA is implemented to prevent unauthorized access to sensitive financial information, protect against malware.",
  },
  {
    notation: "FTP",
    image: "ftp.png",
    title: "FirePower Threat Prevention",
    description:
      "Is a security solution offered by Cisco, commonly used in information system security sections of banks and other organizations. It is designed to provide advanced protection against various types of threats and attacks.",
  },
];
function Service() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = data[currentIndex];
  function handleClick(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="flex justify-center flex-col">
    {data.length &&
     <div className="mx-auto flex lg:flex-row flex-col text-center py-5 m-6 w-[70%] p-6 rounded-3xl bg-purple-100">
        <div className="m-6">
        <img className="rounded-3xl w-auto lg:w-[2000px] h-auto " src={current.image}/>
        </div>
        <div >
        <h1 className="text-3xl font-bold tracking-tight overflow-hidden text-black sm:text-4xl">{current.notation}</h1>
        <h2 className="text-3xl">{current.title}</h2>
        <p className="mt-6 text-lg leading-8 text-black">{current.description}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 ">
                <button
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-purple-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </button>
              </div>
      </div> 
      </div>
    }
    <div className="flex flex-row mt-4 justify-center">
      <div className="pr-6 cursor-pointer"  onClick={()=>handleClick(
                    currentIndex === data.length - 1
                      ? 0
                      : currentIndex + 1
                  )}>
        <HiChevronLeft className="h-[40px] w-[40px] "/>
      </div>
      <div className="cursor-pointer" 
                onClick={() =>
                  handleClick(
                    currentIndex === data.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
              >
                <HiChevronRight className="h-[40px] w-[40px]"/>
              </div>
    </div>
    </div>
  );
}

export default Service;

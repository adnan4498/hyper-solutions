import Image from "next/image";
import hStronglogo from "../../public/images/h-strong-logo.webp";
import jinzenLogo from "../../public/images/jinzen-logo.jpg";
import heidelberglogo from "../../public/images/heidelberg-logo.png";
import shandonglogo from "../../public/images/shandong-logo.jpg";
import horkiLogo from "../../public/images/horki-logo.jpg";
import guangdongLogo from "../../public/images/guangdong-logo.png";

export default function Marquee() {
  const logos = [
    {
      name: "",
      url: hStronglogo,
    },
    {
      name:"",
      url: jinzenLogo,
    },
    {
      name:"",
      url: heidelberglogo,
    },
    {
      name:"",
      url: shandonglogo,
    },
    {
      name:"",
      url: horkiLogo,
    },
    {
      name:"",
      url: guangdongLogo,
    },
  ];

  const renderCards = () =>
    Array.from({ length: 3 }).flatMap(() =>
      logos.map((brand, idx) => (
        <div
          key={`${brand.name}-${idx}`}
          className="bg-white rounded-xl p-5 mr-6 min-w-[200px] text-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
        >
          <Image
            src={brand.url}
            alt={`${brand.name} Logo`}
            width={200}
            height={100}
            className="w-full h-14 lg:h-24 object-contain rounded-lg"
          />
          <p className="text-black text-sm mt-2">{brand.name}</p>
        </div>
      ))
    );

  return (
    <div className="w-full min-h-screen bg-[#c4cfde] text-white">
      <div className="flex flex-col gap-10 overflow-hidden py-10">
        <div className="flex w-fit animate-marquee-left">{renderCards()}</div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }

        .flex:hover .animate-marquee-left {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

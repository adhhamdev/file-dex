import Image from "next/image";
import Link from 'next/link';

const Card = ({ card }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 bg-opacity-20 filter bg-gradient-to-b from-white to-slate-200 border border-gray-300 pt-10 hover:-translate-y-2 hover:shadow-xl focus-within:-translate-y-2 focus-within:shadow-xl transition duration-200">
      <Image
        src={card.image}
        alt={card.description}
        className="w-32 object-contain rounded-lg mx-auto"
        width={512}
        height={512}
        placeholder="blur"
      />
      <h2 className="text-xl mt-8 font-bold">{card.title}</h2>
      <p title={card.description} className="overflow-hidden overflow-ellipsis h-12">{card.description}</p>
      <div className="flex justify-between mt-4">
        <Link href={card.href} className="text-center hover:bg-slate-900 hover:text-white font-bold py-2 px-4 rounded-full border-2 border-slate-900 w-full">
          {card.title.split(" ")[0]}
        </Link>
      </div>
    </div>
  );
};

export default Card;

import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 bg-opacity-20 filter bg-gradient-to-b from-white to-slate-200 border border-gray-300 pt-10 hover:-translate-y-2 hover:shadow-xl transition duration-300">
      <Image
        src={image}
        alt={description}
        className="w-32 object-contain rounded-lg mx-auto"
        width={512}
        height={512}
      />
      <h2 className="text-xl mt-8">{title}</h2>
      <p className="overflow-hidden overflow-ellipsis h-12">{description}</p>
      <div className="flex justify-between mt-4">
        <button className="hover:bg-slate-900 hover:text-white font-bold py-2 px-4 rounded-full border-2 border-slate-900 w-full">
          {title.split(" ")[0]}
        </button>
      </div>
    </div>
  );
};

export default Card;

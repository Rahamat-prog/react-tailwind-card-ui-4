function Card({ username, btn = "visit me" }) {

  return (
    <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-95">
      <img
        src="https://images.pexels.com/photos/30700800/pexels-photo-30700800/free-photo-of-traditional-balinese-wedding-attire-in-scenic-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Profile"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent pl-5 font-serif">
        Responsive Card
      </div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
          architecto.
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-700">
          {btn}
        </button>
      </div>
    </div>
  );
}

export default Card;

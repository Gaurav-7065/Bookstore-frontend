const Cards = ({ item }) => {
  return (
    <div className="px-2">
      <div className="card w-full bg-base-100 shadow-lg hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">

        <figure>
          <img
            className="w-full h-48 object-cover"
            src={item.image}
            alt={item.name}
          />
        </figure>

        <div className="card-body p-4">
          <h2 className="card-title flex justify-between items-center">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <p>{item.title}</p>

          <div className="card-actions flex justify-between">
            <div className="badge badge-outline cursor-pointer p-4 hover:bg-pink-500 duration-200 hover:text-white">
              ${item.price}
            </div>

            <div className="badge badge-outline cursor-pointer p-4 hover:bg-pink-500 duration-200 hover:text-white">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
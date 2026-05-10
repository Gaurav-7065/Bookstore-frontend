const Cards = ({item}) => {
    return (<>
        <div className=" mb-8 md:m-4" >
            <div className="card bg-base-100  shadow-lg hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border ">
                <figure >
                    <img
                        className="w-92"
                        src={item.image}
                        alt="Shoes" />
                </figure >
                <div className="card-body p-4">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions  flex justify-between">
                        <div className="badge badge-outline cursor-pointer p-4   hover:bg-pink-500 duration-200 hover:text-white">${item.price}</div>
                        <div className="badge badge-outline cursor-pointer p-4   hover:bg-pink-500 duration-200 hover:text-white">BuyNow</div>
                    </div>
                </div>
            </div>
        </div>
    </>)

}
export default Cards;
import Card from './Card';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Course = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("https://book-store-backend-sigma.vercel.app/book");
            setBook(res.data);
        }
        getData();

    }, [])

    return (<>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="pt-24 md:pt-28  text-center" >
                <h1 className="text-2xl md:text-4xl ">Hello We Welcome You <span className="text-pink-500">Here:)</span></h1>
                <p className="mt-4 md:mt-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi odit, perferendis saepe distinctio obcaecati animi aspernatur eum qui dignissimos reiciendis facere praesentium molestiae adipisci nisi veniam! Nobis, placeat. Vitae, amet, officia quisquam, molestiae neque laborum fugit doloribus impedit accusantium ratione nulla ducimus eaque quo!</p>
                <Link to="/">
                    <button className="bg-pink-500 px-4 py-2 rounded text-white mt-8 text-center cursor-pointer hover:bg-pink-700 duration-300 mb-2">Back</button>
                </Link>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-4'>
                {
                    book.map((item) => {
                        return <Card key={item.id} item={item} />
                    })
                }
            </div>

        </div>
    </>)
}
export default Course;
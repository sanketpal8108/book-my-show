import React from 'react'
import { FaHeart } from "react-icons/fa";
import { BiChevronRight,BiShareAlt } from "react-icons/bi";
function MoviehHero() {
    return (
        <>
        <div className="md:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt= "poster" />
        </div>
        <div className="hidden md:block lg:hidden">
        <img
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            />
        </div>
        <div className="relative hidden lg:block" style={{height: "40rem"}}>
            <div className="font-sans absolute flex flex-col z-30 w-1/2 top-24 ml-80   left-52 text-white">
                <h2 className=" text-4xl font-bold w-2/3 mb-8">Shang-Chi and the Legend of the Ten Rings</h2>
                    <div className="flex gap-5 cursor-pointer">
                    <FaHeart className="text-red-500 text-4xl"/>
                    <p className=" font-bold text-2xl">91%</p>
                    <p className="mt-1 text-lg flex">32.3K ratings<BiChevronRight className="mt-2 text-2xl " /></p>

                    </div>
                    <div className="bg-navCol-700 my-8 w-1/2 rounded-lg py-4 px-6 flex justify-between cursor-pointer">
                        <div className="font-semibold ">
                            <h3 className="text-white text-lg ">Add your rating & review</h3>
                            <p className="text-gray-400 my-1">Your Ratings matter
                            </p>
                        </div>

                        <button className="bg-white text-black px-2 font-bold  text-xl rounded-lg my-2 " >Rate Now</button>
                    </div>

                    <div className="bg-white text-black w-1/3 font-semibold px-4 my-2 py-1 rounded">

                        <h3 >2D, 3D, IMAX 2D, MX4D, 4DX</h3>


                    </div>
                    <div className="bg-white text-black w-1/2 font-semibold rounded px-2 py-1">
                       <h3>English, Kannada, Tamil, Hindi, Telugu, Malayalam</h3>
                    </div>

                    <div className="text-white w-full font-normal my-4 tracking-wider">
                       <h3>2h 12m  •  Action,Adventure,Fantasy  •  UA  •  3 Sep, 2021</h3>
                    </div>

                    <button className="bg-red-500 w-1/4 rounded-md font-bold py-4">Book tickets</button>

            </div>

            <div className="absolute w-40 text-white bg-black top-20 bg-opacity-50 right-20 z-40  py-2 flex justify-center gap-4 rounded-md cursor-pointer" >
                <BiShareAlt className=" text-4xl" />
                <h3 className="font-semibold text-xl opacity-80 mt-1">Share</h3>
            </div>
            <div className="absolute h-full w-full z-10"
            style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
            />
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg" className="absolute z-10 h-96 left-48 top-28 rounded-t-3xl" />
           <div className="absolute w-1/6 text-center bg-black text-white bottom-28 left-40 ml-8 z-40 rounded-b-3xl py-1">
                <h4 >In Cinemas</h4>
           </div>
            <img
                src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="poster"
                className="w-full h-full"
                />

   </div>

        </>
    )
}

export default MoviehHero

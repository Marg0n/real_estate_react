import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import Tag from "./Tag";


const EstateDetail = () => {

    const estates = useLoaderData()
    const { uid } = useParams();



    // console.log(estates)
    // console.log(uid)

    const [realEstate, setRealEstate] = useState({});

    const {
        // id, 
        segment_name, estate_title, image,
        description,
        price, status, area,
        location,
        facilities } = realEstate;

    useEffect(() => {
        const estate = estates.find(e => e.id == uid);
        // console.log(estate)
        setRealEstate(estate);
    }, []);

    const notify = () => toast.info(
        `Thanks! We have confirmed your ${status == 'sale' ? 'Buy' : status}!`,
        { theme: "colored" }
    );

    // console.log(facilities);

    return (
        <div className="card lg:card-side bg-base-100 shadow-2xl border-2 ">
            <figure className="object-cover w-1/2"><img src={image} /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-2xl font-bold font-serif">{estate_title}</h2>
                <p className="text-base font-serif">{description}</p>
                <div className="h-40 w-full space-y-2 mt-4">
                    <div className='w-full space-x-2 '>
                        <>Facilities: </>
                        {
                            facilities?.map((facility, idx) => <Tag key={idx} facility={facility} />)
                        }
                    </div>
                    <p className="text-base">Location : <span className='font-semibold'> {location}</span></p>
                    <p className="text-base">Segment : <span className='font-semibold'> {segment_name}</span></p>
                    <p className="text-base">For : <span className='font-semibold'> {status}</span></p>
                    <p className="text-base">Area : <span className='font-semibold'> {area}</span></p>
                    <p className="text-base">Price : <span className='font-semibold'> {price}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-circle border-blue-400 hover:bg-blue-500 hover:border-blue-500 uppercase" onClick={notify}>
                        {
                            status == 'sale' ? 'Buy' : status
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EstateDetail;
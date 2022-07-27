import { Link } from "react-router-dom"

export function Explore(){
    const Background ='https://64.media.tumblr.com/998b664cb9fd89a155b3b105dbdc9a09/808262fefad64e38-9c/s500x750/5f09d008c448b11092d119bf69d0751e08d79631.gifv'
    const Background2 ='dsa'
    return( 
        <>  
        <div className='bg-cover h-screen' style={{backgroundImage: `url(${Background})`}}>
            <h1 className="text-8xl text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">WORKING</h1>
             <p className="text-white mt-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem delectus laborum tenetur iusto enim perspiciatis, quaerat, earum eveniet animi architecto fugiat saepe natus veritatis molestiae nisi. Porro, rem minima?</p>   
            
        </div>
          
        <div className=' h-screen bg-gradient-to-r from-cyan-500 to-indigo-900'>
            <div>

            </div>
            <Link to='/'>Go Home</Link>
        </div>
        </>       
    );
   
}
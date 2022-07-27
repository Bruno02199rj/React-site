import Header from "../components/Header";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export const Home = () =>{
    const Background = 'https://images.unsplash.com/photo-1643101810111-d364a77127b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80https://images.unsplash.com/photo-1643101810111-d364a77127b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    return (
        <>
     
          <div className='bg-cover h-screen' style={{backgroundImage: `url(${Background})`}}>
            <Header/>
            <Nav/>
        </div>


        
        </>
    );
}


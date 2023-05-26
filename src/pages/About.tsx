import Background from '../assets/videos/mixkit-red-sports-car-74-medium.mp4'
import { Link } from 'react-router-dom';

function About() {
    return (
      <>
      <div 
      style={{ backgroundImage: `url(${Background})`}} 
      className="flex justify-items-center divide-y mx-auto bg-contain  "
      >
        <div className="grid grid-cols-1  place-items-center h-screen">
          <h3 className="p-5 bg-slate-300 bg-opacity-50 text-white text-3xl rounded">About Page</h3>
          <p className="p-5 m-3 bg-slate-300 bg-opacity-50 text-black rounded">This is the Car Inventory Site. You are able to enter cars and search for them on the site. Head over to the <Link to="/dashboard">Dashboard</Link> and get started creating your Cars.</p>
        </div>
        
      </div>
      </>
    )
  }
  
  export default About
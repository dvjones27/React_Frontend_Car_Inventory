import Background from '../assets/images/ivana-cajina-WPVtT0MEM00-unsplash.jpg';
import '../assets/static/styles.css';


function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center mx-auto bg-cover bg-fixed"
      >
        <div className="flex place-items-center h-screen">
          <h3 className="flex justify-items-center w-auto h-auto items-center text-5xl p-3 bg-opacity-15 text-gray-50 rounded">
            Cars and More!!!!!
          </h3>
        </div>
      </div>
  )
}

export default Home


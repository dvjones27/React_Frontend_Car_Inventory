import DataTable from '../components/DataTable'
// import Background from '../assets/images/';

function Dashboard() {
  return (
   
    
    <div 
      // style={{ backgroundImage: `url(${Background})`}}
      className="flex flex-row justify-center mx-auto bg-fixed bg-opacity-50 bg-cover"
      >
        <div className="flex place-items-center h-screen" >
          <h2 className="p-5 bg-slate-300 bg-opacity-70 text-black rounded">
            <DataTable/>
          </h2>
        </div>
      </div>
  )
}

export default Dashboard
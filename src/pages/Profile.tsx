// import Background from '../assets/images/amir-hanna-sweUF7FcyP4-unsplash.jpg'
// import Modal from '../components/Modal.tsx';
import  React, { useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { server_calls } from '../api/server';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField'
// import { profileData } from '../custom-hooks/FetchData'

import { useGetData } from '../custom-hooks/FetchData';
import { ReactNode } from 'react';

// const [data, setData] = useState([{}])

// useEffect(() => {
//   fetch("/connect").then(
//     res=> res.json()
//   ).then(
//     data=>{
//       setData(data)
//       console.log(data)
//     }
//   )

// }, [])

function Profile() {
  // last_name: ReactNode;
  // email: ReactNode;
  // username: ReactNode;
  // token: ReactNode; path: string; component: () => JSX.Element; first_name: string; protected: true; 
// }) {

  return (
    <div className="flex text-4xl">
      <div>
        <h3>React and Flask Profile Data</h3>
              <p>Test</p>
            
      
      {/* {(typeof data.connect ==='undefined') ?(
        <p>Member Profile Info</p>
      ) :(
        data.connect.map((last_name, i) => (
          <p key={i}>(last_name)</p>
        ))
      )} */}
          
      </div>

    </div>
  );
 
}
  
export default Profile

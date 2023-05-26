import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithPopup  } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

// createUserWithEmailAndPassword() {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(this.email, this.password)
//     .then((user) => {
//       console.log(user);
//     })
//     .catch((error) => {
//       console.log('Error signing user up with email and password! ' 
//       +  error.code + ': ' + error.message);
//     });
// }

const AuthChecker = ({ children}: Props) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!auth.currentUser) {
        navigate("../")
        signInWithPopup(auth, Providers.google)
        
    }
  }, [])
  
  return (
    <>{children}</>
  )
}

export default AuthChecker
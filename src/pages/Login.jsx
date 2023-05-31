
import { FcGoogle } from 'react-icons/fc';
import { signInWithGoogle } from '../helper/Firebase';

export const Login = () => {
  return (
    < div className='login'>
        <h1>Welcome to TRELLO </h1>
        <button onClick={signInWithGoogle} className='login-btn'>Login with google <FcGoogle /></button>    
    </div>
  )
}

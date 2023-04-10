import React ,{useState,useRef,useEffect}from 'react';
// import AuthContext from './context/AuthProvider';

import { Box,Flex,Text,Input,Button } from '@chakra-ui/react';
import "./login.css";
import App from './App';

// import axios from './Api/axios';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    // const {setAuth} = useContext(AuthContext);


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(()=>{
        userRef.current.focus();
    },[])

    // This useEffect removes the error message when the user clicks or changes the username or password field.
    useEffect(()=>{
        setErrMsg('');
    },[user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
       if(user==="admin" && pwd ==="admin"){
            console.log(user,pwd);
            setUser('');
            setPwd('');
            setSuccess(true);
       }else{
            setErrMsg('Wrong Credentials!');
       } 
        
    }



  return (

    <>
    {success ? (
        <App/>
    ): (
        <Flex justifyContent="center" alignContent="center" height="100vh" className='body' >
            <Flex justifyContent="center" alignItems="center">
                <Box backgroundColor="#d9d9d9" padding="2rem" borderRadius={10} border="1px solid #ffffff" boxShadow="0px 3px 4px 0px rgba(4, 199, 4,0.2)">
                <p  ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <Text fontSize="2rem" fontWeight="bold">Sign In</Text>
                    <Flex flexDirection="column">
                        <label htmlFor='username' fontSize="1rem">Username</label>
                        <Input
                        placeholder='Username/Email'
                        variant="flushed"
                        size="md"
                        id='username'
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e)=> setUser(e.target.value)}
                        value={user}
                        required
                        
                        />
                        <label htmlFor='password'>Password</label>
                        <Input
                        type='password'
                        id='password'
                        onChange={(e)=> setPwd(e.target.value)}
                        value={pwd}
                        variant="flushed"
                        required
                        />
                        <Button onClick={handleSubmit} marginTop="1rem">Sign In</Button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>

    )}
        </>
  )
}

export default Login

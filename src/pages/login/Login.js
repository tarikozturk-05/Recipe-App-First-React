import React from 'react'
import { useState } from 'react'
import PrivateRouter from '../../router/PrivateRouter'
import LoginDiv ,{LoginLabel,LoginButton} from './Login.style'

const Login = () => {

 const [loginOn, setLoginOn] = useState(false);

  const onSubmitLogin=(e)=>{
e.preventDefault() ;
console.log("aaaaaaaaaaaaaaaaaaa")
console.log(loginOn);


  }

  return (
   <LoginDiv>
        <form onSubmit={onSubmitLogin} action="" >
          <h1>Login</h1>

            <LoginLabel htmlFor="isimfor">İsminizi Giriniz</LoginLabel>
            <br />
            <input style={{border:"2px solid #00CCC0" , borderRadius:"5px",marginTop:"1rem",padding:"0.3rem"}} type="text" id='isimfor' required />
            <br />
<br />
            <LoginLabel htmlFor="sifrefor">Şifrenizi Giriniz</LoginLabel>
            <br />
            <input   style={{border:"2px solid #00CCC0" , borderRadius:"5px",marginTop:"1rem",padding:"0.3rem"}} type="password" id='sifrefor' required />
            <br /><br />
          <LoginButton type="submit"onClick={()=> setLoginOn(true)}>Submit</LoginButton>
          
            
        </form>

    {loginOn && <PrivateRouter setLoginOn={setLoginOn} loginOn={loginOn} /> }

   </LoginDiv>

  )
}

export default Login
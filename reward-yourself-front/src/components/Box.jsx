import React from 'react'
import woman from '../assets/woman.svg'
import '../styles/main.scss'

export  const LoginBox =()=>{
  return(
  <>
   <section className='container'>    
     <div className='left'>
       <img src={woman}/>
       <div className='overlay'>Reward Yourself</div>
     </div>
     
    <div className='right'>
     
        <h1>Fazer login</h1>
      <form>
        <div className='input-block'>
          <label for="email">E-mail</label>
          <input type="email" />
        </div>
         
         <div className='input-block'>
          <label for="senha">Senha</label>
          <input type="password" />
         </div>
         
          <div className='check'> 
            <input type="checkbox" id="lembrar-se" name="lembrar-se" />
            <label for="lembrar-se">Lembrar-me</label>
            <a>Esqueci minha senha</a>
          </div>
            
        <input type='submit' value='Entrar'/>
        <span >Não possui conta ? <a className='link'> Registre-se</a></span>
        <div className="social-box"> 
        <div className='logo'><span className='google'></span></div>
        <div className='logo'><span className='facebook'></span></div>
        </div>
     </form>
    </div> 
        
</section>
</>
  );
} 
export default LoginBox
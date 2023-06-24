import woman from '../assets/woman.png'
import icon from '../assets/icon.png'
import '../styles/login.scss'

const SignUp = () => {
  return (
    <>
    <main className="login-layout">
    <section className='container-login'>    
    
     <div className='right'>
       <form>
       <h1>Cadastre-se</h1>
         <div className='input-block'>
           <label htmlFor="email">Usuário</label>
           <input type="text" />
         </div>
         <div className='input-block'>
           <label htmlFor="email">E-mail</label>
           <input type="email" />
         </div>
    
          <div className='input-block'>
           <label htmlFor="senha">Senha</label>
           <input type="password" />
          </div>
          <div className='input-block last'>
           <label htmlFor="confirmar-senha">Confirmar Senha</label>
           <input type="password" />
          </div>
    
    
         <input  className='m'type='submit' value='Cadastrar'/>
         <div className="social-box">
         <div className='logo'><span className='google'></span></div>
         <div className='logo'><span className='facebook'></span></div>
         </div>
      </form>
     </div>

     <div className='left'>
        <img src={woman}/>
        <div className='overlay'>
         <h2><span><img src={icon} alt="icon" /></span>Reward <span>Yourself</span></h2>
        </div>
      </div>
    </section>
  </main>
  </>
  )
}

export default SignUp
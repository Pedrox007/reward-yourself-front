import woman from '../assets/woman.png';
import icon from '../assets/icon.png';
import '../styles/login.scss';

const LoginBox = () => {
  return (
    <>
      <main className="login-layout">
        <section className="container-login">
          <div className="left">
            <img src={woman} />
            <div className="overlay">
              <h2>
                <span>
                  <img src={icon} alt="icon" />
                </span>
                Reward <span>Yourself</span>
              </h2>
            </div>
          </div>

          <div className="right">
            <form>
              <h1>Fazer login</h1>
              <div className="input-block">
                <label htmlFor="email">E-mail</label>
                <input type="email" />
              </div>

              <div className="input-block last">
                <label htmlFor="senha">Senha</label>
                <input type="password" />
              </div>

              <div className="check">
                <input type="checkbox" name="lembrar-me" />
                <label htmlFor="lembrar-se">
                  Lembrar-me <a>Esqueci minha senha</a>
                </label>
              </div>

              <input type="submit" value="Entrar" />
              <span>
                Não possui conta ? <a className="link"> Registre-se</a>
              </span>
              <div className="social-box">
                <div className="logo">
                  <span className="google"></span>
                </div>
                <div className="logo">
                  <span className="facebook"></span>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
export default LoginBox;

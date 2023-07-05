import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthService } from '../service/Auth.service';
import { useAuth } from '../context/AuthContext';

import '../styles/login.scss';

import woman from '../assets/woman.png';
import icon from '../assets/icon.png';

const LoginBox = () => {
  const { loginResponse, setLoginResponse } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);

  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await AuthService().login(login, password);
      if (response.data?.access) {
        setLoginResponse(response.data);
      }
    } catch (error) {
      alert(error?.response?.data?.detail || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (loginResponse?.access) {
      navigate('/tarefas');
    }
  }, [loginResponse]);

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
            <form onSubmit={handleSubmit}>
              <h1>Fazer login</h1>
              <div className="input-block">
                <label htmlFor="login">Usuário</label>
                <input
                  type="login"
                  value={login}
                  onChange={(e) => setLogin(e.currentTarget.value)}
                />
              </div>

              <div className="input-block last">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </div>

              <div className="check">
                <input type="checkbox" name="lembrar-me" />
                <label htmlFor="lembrar-se">
                  Lembrar-me <a>Esqueci minha senha</a>
                </label>
              </div>

              <button type="submit">
                {loading ? (
                  <div className="spin-container">
                    <div className="spin">
                      <i className="bi bi-arrow-clockwise " />
                    </div>
                  </div>
                ) : (
                  'Entrar'
                )}
              </button>

              <span>
                Não possui conta ?{' '}
                <a className="link" href="/cadastro">
                  {' '}
                  Registre-se
                </a>
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

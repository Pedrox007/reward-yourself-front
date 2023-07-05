import React from 'react';
import { useNavigate } from 'react-router-dom';

import woman from '../assets/woman.png';
import icon from '../assets/icon.png';

import '../styles/login.scss';
import { AuthService } from '../service/Auth.service';

const SignUp = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);

  const [username, setUsername] = React.useState('');
  const [first_name, setFirst_name] = React.useState('');
  const [last_name, setLast_name] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password_confirmation, setPassword_confirmation] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await AuthService.signin(
        username,
        first_name,
        last_name,
        email,
        password,
        password_confirmation
      );

      if (response.data) {
        alert('Usuário criado!');
        navigate('/login');
      }
    } catch (error) {
      alert(error?.response?.data?.detail || 'Erro ao fazer cadastro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="login-layout">
        <section className="container-login">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <h1>Crie sua conta</h1>
              <div className="input-block first">
                <label htmlFor="email">Usuário</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>

              <div className="grup">
                <div className="input-block half-size group-item">
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </div>
                <div className="input-block half-size group-item">
                  <label htmlFor="sobrenome">Sobrenome</label>
                  <input
                    type="text"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-block">
                <label htmlFor="email">E-mail</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="input-block">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-block last">
                <label htmlFor="confirmar-senha">Confirmar Senha</label>
                <input
                  type="password"
                  value={password_confirmation}
                  onChange={(e) => setPassword_confirmation(e.target.value)}
                />
              </div>

              <button type="submit" className="m">
                {loading ? (
                  <div className="spin">
                    <i className="bi bi-arrow-clockwise " />
                  </div>
                ) : (
                  'Cadastrar'
                )}
              </button>

              <span>
                Já possui conta ?{' '}
                <a className="link" href="/login">
                  {' '}
                  Login
                </a>
              </span>
            </form>
          </div>

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
        </section>
      </main>
    </>
  );
};

export default SignUp;

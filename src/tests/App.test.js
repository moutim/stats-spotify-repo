import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando as rotas definidas no component App', () => {
  it('Verifica se a rota "/" renderiza o componente correto', () => {
    const { history } = renderWithRouter(<App />);

    expect(history.location.pathname).toBe('/');

    const buttonLogin = screen.getByRole('button', { name: /entrar/i });
    const titleLogin = screen.getByRole('heading', { name: /entre com sua conta spotify/i });
    expect(buttonLogin).toBeInTheDocument();
    expect(titleLogin).toBeInTheDocument();
  });

  it('Verifica se a rota "/profile" renderiza o componente correto', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/profile');
    expect(history.location.pathname).toBe('/profile');
    const titleProfile = screen.getByRole('heading', { level: 1, name: /profile/i});
    expect(titleProfile).toBeInTheDocument();
  });

  it('Verifica se a rota "/redirect" renderiza o componente correto', () => {
    const { history} = renderWithRouter(<App />);

    history.push('/redirect');

    const img = screen.getByRole('img', { name: /loading\.\.\./i });
    expect(img).toBeInTheDocument();
  });

  it('Verifica se as rotas inexistentes renderizam o componente correto', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/nao-existe');
    expect(history.location.pathname).toBe('/nao-existe');
    const message = screen.getByRole('heading', { level: 1, name: '404. Page Not Found'});
    expect(message).toBeInTheDocument();
  })
});

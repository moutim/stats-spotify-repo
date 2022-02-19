import { screen } from '@testing-library/react';
import RedirectPage from '../pages/RedirectPage';
import { getAcessToken, redirectAcessURL } from '../service/getAcessToken';
import renderWithRouter from './renderWithRouter';

describe('Testa as funções que buscam o acess_token', () => {
    it('Verifica se a função "redirectAcessURL" retorna a URL esperada', () => {
        const expectURL = `https://accounts.spotify.com/authorize?client_id=e4da37b2e8234531907e229e1d346b7a&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&scope=user-top-read%2Cuser-read-recently-played%2Cuser-read-currently-playing%2Cuser-read-playback-state%2Cuser-top-read%2Cuser-read-private%2Cuser-read-email%2Cuser-read-recently-played%2Cplaylist-read-collaborative%2Cplaylist-read-private%2Cplaylist-modify-private%2Cplaylist-modify-public&response_type=token`;

        const URLFunc = redirectAcessURL();
        expect(expectURL).toBe(URLFunc);
    });

    it('Testa se a função "getAcessToken" insere o acess_token no localStorage', () => {
        const { history } = renderWithRouter(<RedirectPage />);
    });
});
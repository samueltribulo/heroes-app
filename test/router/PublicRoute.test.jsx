import { render } from "@testing-library/react"
import {AuthContext} from "../../src/auth/context/AuthContext"
import {PublicRoute} from "../../src/router/PublicRoute"
import {screen} from "@testing-library/react"
import {MemoryRouter, Route, Routes} from "react-router-dom"

describe('Pruebas en PublicRoute', () =>{

    test('Debe de mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta publica')).toBeTruthy();

    });

    test('Debe de navegar si no esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Samuel',
                id: 'A'
            }
        };

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={
                            <h1>Pagina de Marvel</h1>
                        } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
    });

    expect(screen.getByText('Pagina de Marvel')).toBeTruthy()

})
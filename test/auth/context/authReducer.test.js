import { useContext } from "react";
import { authReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

 

describe('Pruebas en el authReducer', () => {

    test('Debe retornar el estado por defecto.', () => {
        const state = authReducer({logged: false}, {});

        expect(state).toEqual({logged: false});
    })

    test('Debe de (login) llamar al login y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Samuel',
                id: 'A'
            }
        }

        const state = authReducer({logged: false}, action);

        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })

    })

    test('Debe de (logout) borrar el name del usuario y logged en false', () => {
        const actualState = {
            logged: true,
            user: {
                name: 'Samuel',
                id: 'A'
            }
        };

        const action = {
            type: types.logout
        };

        const newState = authReducer(actualState, action);

        expect( newState ).toEqual({
            logged: false
        })
        
    })


})
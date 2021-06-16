import React from 'react'
import {Route, Redirect} from 'react-router-dom'


export const PrivateRoute = ({ component: Component}, ...rest) => (
    <Route 
    
        {...rest} render={props => (
            localStorage.getItem('user') && localStorage.getItem('token') 
            ? <Component {...props} />
            : <Redirect to={{pathname: '/auth/login'}}/>
        )}
    />
)
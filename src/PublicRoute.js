import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"

function PublicRoute({ component: Component,restricted, ...rest }) {

    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser && restricted ? <Redirect to="/login" /> : <Component {...props} />
            }}
        />
    )
}

export default PublicRoute

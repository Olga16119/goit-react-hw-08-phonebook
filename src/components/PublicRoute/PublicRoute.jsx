import { Route } from "react-router-dom"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "redux/selectors"

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
        const isLoggedIn=useSelector(getIsLoggedIn)
const shouldRedirect= isLoggedIn && restricted 
    return <Route {...routeProps}>{shouldRedirect? <redirect to='/'/> :children}</Route>
}

export default PublicRoute
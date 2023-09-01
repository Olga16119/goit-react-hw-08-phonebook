import { useSelector } from "react-redux"
import { getIsLoggedIn } from "redux/selectors"
import { Route } from "react-router-dom"


const PrivateRoute = ({ children,redirectTo='/', ...routeProps }) => {
    const isLoggedIn=useSelector(getIsLoggedIn)
    return <Route {...routeProps} >{isLoggedIn ? children : <redirect to={ redirectTo} />}</Route>
}

export default PrivateRoute
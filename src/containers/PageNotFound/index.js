import { Link } from "react-router-dom";


function PageNotFound(){

   
    return(
        <div className="page-not-found">
            <h1><span>Error 404!</span> Page Not Found</h1>
            <p className="mt-3">Go back to <Link className="home-link" to="/">Home Page</Link></p>
        </div>
    )
}

export default PageNotFound;
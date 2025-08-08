import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
    return (

        <div className='container mt-5 p-5'>
            <div className="row text-center">

                <h1 className=' text-muted'> 404 Page Not Found</h1>
                <h5 className=' text-muted'>We couldn't find the page you were looking <br />

                    <Link style={{color:'#387ed1' , textAlign:'center'}} class="nav-link active" to="/">
                        Visit Zerodha’s home page
                    </Link></h5>
            </div>

        </div>

    );
}

export default NotFound;
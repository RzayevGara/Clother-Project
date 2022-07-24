import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import Menu from '../../components/profile/menu/Menu'
import NewCustomers from '../../components/profile/content/home/new-customers/NewCustomers'
import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import { Helmet } from 'react-helmet'

function Profile (){
    const location = useLocation();
    const navigate = useNavigate()
    let url = location.pathname.split('/').pop();

    const token = useSelector((state)=>state.auth.token)

    useEffect(() =>{
        if(!token){
            navigate("/login", { replace: true });
        }
    }, [token, navigate])

    useEffect(() => {
        const changePage = () => {
          window.scrollTo({top: 0});
        };
        changePage()
      }, []);

    return (
        <main id="profile">
            <Helmet>
                <title>Profile | Clother</title>
            </Helmet>
            <div className="profile-container">
                <Menu/>
                <Outlet/>
            </div>
            {
                url ==="profile" &&
                <NewCustomers/>
            }
        </main>
    )
}

export default Profile
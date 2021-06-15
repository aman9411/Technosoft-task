import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap';


const Paging = () => {

    const [userData, setUserData] = useState([]);

    const fetchingApiFromUrl = async () => {
        const { data } = await Axios.get("https://reqres.in/api/users?page=2");  
        const userInfo= data;
        setUserData(userInfo.data);
        console.log(userInfo.data);
    };

    useEffect(() => {
        fetchingApiFromUrl();
    }, []);

    const [pageNumber, setPageNumber] = useState("");

    const getPageNumber = (e) => {
        console.log(e.target.value);
        setPageNumber(e.target.value);
        console.log(pageNumber);
    };
    

        return (

            <div className="container text-light">
                <div className="row">
                    <div className="col-md">
                        <h1 className="m-1 mt-5">User Profile</h1>
                        <hr />
                     <div className="text-center m-4">
                         <h5>Page No.</h5>
                        {userData.map((user) =>(
                            <Button className="m-2" key={user.id} value={user.id} outline onClick={(e) => {getPageNumber(e)}}>{user.id}</Button>
                         ))}
                     </ div>
                        {userData.filter((users) => users.id == pageNumber).map((user) =>(
                        <div className="col-md m-3" key={user.id}>
                            <div className="border border=light m-3 d-flex">
                                <div className="col-md-8 m-5">
                                <h1 className="m-4">Name:- {user.first_name} {user.last_name}</h1>
                                <h1 className="m-4">Email:- {user.email}</h1>
                                </div>
                                <img className="m-5" src={user.avatar} width="200px" height="200px"/>
                            </div>
                        </div>
                         ))}
                    </div>
                </div>
            </div>
        )
}

export default Paging;
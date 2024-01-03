import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Category from './Category'
import Endpoints from '../api/Endpoints'

export default function Categorylist() {
    const [categories, setCategories] = useState([])
    const fetchData = () => {
        axios.get(Endpoints.CATEGORY_URL)
            .then(response => {
                
                setCategories(response.data)
            })
            .catch(error => console.log(error))

    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="container">
            <h2 className="text-center">All Categories</h2>
            <div class="row">
                {categories.map((item, index) => (
                    <Category data={item} key={index} />))}
            </div>
        </div>
    );
};


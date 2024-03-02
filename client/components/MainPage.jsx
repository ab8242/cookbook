import React, { useState, useEffect } from 'react';
import axios from "axios";



const MainPage = (props) => {
    const { recipeList, setRecipeList } = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/allrecipes")
        .then((res) => {
            setRecipeList(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    
    
    return (
        <div>
            <h1>Cookbook</h1>
            <table>
                <thead>
                    <tr>
                        <th>Recipe Title</th>
                        <th>Total Time</th>
                        <th>Level</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipeList.map(())
                    }
                </tbody>
            </table>
        </div>
    );
};





export default MainPage;

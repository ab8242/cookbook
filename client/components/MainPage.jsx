import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
            <Link to="/recipe/create">Add Recipe</Link>
            <table>
                <thead>
                    <tr>
                        <th>Recipe Title</th>
                        <th>Total Time</th>
                        <th>Level</th>
                        <th>Author</th>
                    </tr>
                </thead>
                    {
                        recipeList.map((recipe) => (
                        <div key={ recipe._id }>
                        <tbody>
                            <tr>
                                <td>{ recipe.title }</td>
                                <td>{ recipe.totalTime }</td>
                                <td>{ recipe.level }</td>
                                <td>
                                    <Link to={`/view/${recipe.author}/author`}>{ recipe.author }</Link>
                                </td>
                            </tr>
                        </tbody>
                        </div>
                        ))
                    }            
            </table>
        </div>
    );
};

export default MainPage;

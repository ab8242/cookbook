import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const CreatePage = () => {
    const navigate = useNavigate();
    const [ title, setTitle ] = useState("");
    const [ totalTime, setTotalTime ] = useState("");
    const [ prepTime, setPrepTime ] = useState("");
    const [ cookTime, setCookTime ] = useState("");
    const [ servingSize, setServingSize ] = useState("");
    const [ level, setLevel ] = useState("Beginner");
    const [ ingredients, setIngredients ] = useState("");
    const [ directions, setDirections ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ error, setError] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newRecipe = { title, totalTime, prepTime, cookTime, servingSize, level, ingredients, directions, author };
        axios.post("http://localhost:8000/api/create/recipe", newRecipe)
            .then(res => {
                console.log(res.data);
                navigate("/")
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setError(err.response.data.errors)
            })
        }

    return (
        <div>
            <form onSubmit={ onSubmitHandler }>
                <p>
                    <label>Recipe Title: </label>
                    <input type='text' onChange={ (e) => setTitle(e.target.value) } value={ title }/> 
                    {
                        error.title?
                        <p>{error.title.message}</p>:
                        null
                    }
                </p>
                <p>
                    <label>Total Time: </label>
                    <input type="number" onChange={ (e) => setTotalTime(e.target.value) } value={ totalTime } />
                    {
                        error.totalTime?
                        <p>{error.totalTime.message}</p>:
                        null
                    }
                </p>
                <p>
                    <label>Prep Time: </label>
                    <input type="number" onChange={ (e) => setPrepTime(e.target.value) } value={ prepTime } />
                    {
                        error.prepTime?
                        <p>{error.prepTime.message}</p>:
                        null
                    }
                </p>
                <p>
                    <label>Cook Time: </label>
                    <input type="number" onChange={ (e) => setCookTime(e.target.value) } value={ cookTime } />
                    {
                        error.cookTime?
                        <p>{error.cookTime.message}</p>:
                        null
                    }
                </p>
                <p>
                    <label>Serving Size: </label>
                    <input type="number" onChange={ (e) => setServingSize(e.target.value) } value={ servingSize } />
                    {
                        error.servingSize?
                        <p>{error.servingSize.message}</p>:
                        null
                    }
                </p>
                <p>
                    <label>Level: </label>
                    <select onChange={ (e) => setLevel(e.target.value) } >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advance">Advance</option>
                        <option value="Expert">Expert</option>
                    </select>
                </p>
                <p>
                    <label>Author: </label>
                    <input type="text" onChange={ (e) => setAuthor(e.target.value) } value={ author } />
                    {
                        error.author?
                        <p>{error.author.message}</p>:
                        null
                    }
                </p>
                <p>
                    <label>Ingredients: </label>
                    <input type="text" onChange={ (e) => setIngredients(e.target.value) } value={ ingredients } />
                    {
                        error.ingredients?
                        <p>{error.ingredients.message}</p>:
                        null
                    }
                </p>
                <p>
                    <label>Directions: </label><br/>
                    <textarea cols="30" rows="10" onChange={ (e) => setDirections(e.target.value) } value={ directions }></textarea>
                    {
                        error.directions?
                        <p>{error.directions.message}</p>:
                        null
                    }
                </p>
                <button type='submit'>Create Recipe</button>
            </form>
        </div>
    );
}

export default CreatePage;

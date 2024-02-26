const CookBook = require("../models/cookBook.model");

module.exports = {
    
    findAllRecipes: (req, res) => {
        CookBook.find()
        .then((allRecipes) => {
            res.status(200).json(allRecipes)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    findOneRecipeById: (req, res) => {
        CookBook.findOne (
            {_id: req.params.id}
        )
        .then((oneRecipe) => {
            res.status(200).json(oneRecipe)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    findOneRecipeByAuthor: (req, res) => {
        CookBook.findOne(
            {author: req.params.author}
        )
        .then((oneRecipe) => {
            res.status(200).json(oneRecipe)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    createRecipe: (req, res) => {
        CookBook.create(req.body)
        .then((newRecipe) => {
            res.status(201).json(newRecipe)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    updateRecipeById: (req, res) => {
        CookBook.findOneAndUpdate (
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updateRecipe) => {
            res.status(201).json(updateRecipe)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

    deleteRecipeById: (req, res) => {
        CookBook.deleteOne(
            {_id: req.params.id}
        )
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }
}
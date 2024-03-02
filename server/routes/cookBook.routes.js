const CookBookController = require("../controllers/cookBook.controller");

module.exports = (app) => {

    app.get("/api/allrecipes", CookBookController.findAllRecipes)
    app.get("/api/view/:id/recipe", CookBookController.findOneRecipeById)
    app.get("/api/view/:author", CookBookController.findOneRecipeByAuthor)
    app.post("/api/create/recipe", CookBookController.createRecipe)
    app.put("/api/update/:id/recipe", CookBookController.updateRecipeById)
    app.delete("/api/delete/:id/recipe", CookBookController.deleteRecipeById)
}
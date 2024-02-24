const cookBookController = require("../controllers/cookBook.controller");
const CookBookController = require("../controllers/cookBook.controller");

module.exports = (app) => {

    app.get("/api/allrecipes", CookBookController.findAllRecipes)
    app.get("/api/find/:id/recipe", CookBookController.findOneRecipeById)
    app.post("/api/create/recipe", CookBookController.createRecipe)
    app.put("/api/update/:id/recipe", CookBookController.updateRecipeById)
    app.delete("/api/delete/:id/recipe", CookBookController.deleteRecipeById)
}
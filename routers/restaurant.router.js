const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controllers");
const {authJwt} = require("../middlewares");

//Create a restaurant
//POST http://localhost:500/api/v1/restaurant
router.post("/",[authJwt.verifyToken, authJwt.isModOrAdmin], restaurantController.create);

//Get All restaurant
router.get("/", restaurantController.getAll)

//Get a restaurant by Id
router.get("/:id", [authJwt.verifyToken], restaurantController.getByid);

//update a restaurant
router.put(
    "/:id",
    [authJwt.verifyToken, authJwt.isModOrAdmin],
    restaurantController.update
);

//delete a restaurant
router.delete(
    "/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    restaurantController.delete
);
module.exports = router;
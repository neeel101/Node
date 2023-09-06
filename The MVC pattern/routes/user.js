const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handledeletUserById,
  handleCreateNewUser,
} = require("../controllers/user");

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById())
  .delete(handledeletUserById);

module.exports = router;

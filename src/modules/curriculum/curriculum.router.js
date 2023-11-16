import { Router } from "express";
const router = Router({ mergeParams: true });
import * as curriculumController from "./curriculum.controller.js";
import { validation } from "../../middleware/validation.js";
import * as validators from "./curriculum.validation.js";
import isAuthenticated from "../../middleware/authntication.middleware.js";
import isAuthorized from "./curriculum.authorization.js";
import { fileUpload, customValidation } from "../../utils/multer.js";

// Create a new video in the curriculum
router.post(
  "/video",
  isAuthenticated, // Ensure user is authenticated
  isAuthorized, // Ensure user is authorized
  validation(validators.createVideoSchema), // Validate request payload
  fileUpload(customValidation.file.concat(customValidation.video)).fields([
    { name: "video", maxCount: 1 },
    { name: "resources", maxCount: 10 },
  ]), // Handle file uploads
  curriculumController.createVideo // Call the createVideo controller
);

// Create a new article in the curriculum
router.post(
  "/article",
  isAuthenticated, // Ensure user is authenticated
  isAuthorized, // Ensure user is authorized
  validation(validators.createArticleSchema), // Validate request payload
  fileUpload(customValidation.file.concat(customValidation.video)).fields([
    { name: "resources", maxCount: 10 },
  ]), // Handle file uploads
  curriculumController.createArticle // Call the createArticle controller
);

// Edit an existing video in the curriculum
router.patch(
  "/video/:videoId",
  isAuthenticated, // Ensure user is authenticated
  isAuthorized, // Ensure user is authorized
  validation(validators.editVideoSchema), // Validate request payload
  fileUpload(customValidation.file.concat(customValidation.video)).fields([
    { name: "video", maxCount: 1 },
    { name: "resources", maxCount: 10 },
  ]), // Handle file uploads
  curriculumController.editVideo // Call the editVideo controller
);

// Edit an existing article in the curriculum
router.patch(
  "/article/:articleId",
  isAuthenticated, // Ensure user is authenticated
  isAuthorized, // Ensure user is authorized
  validation(validators.editArticleSchema), // Validate request payload
  fileUpload(customValidation.file.concat(customValidation.video)).fields([
    { name: "resources", maxCount: 10 },
  ]), // Handle file uploads
  curriculumController.editArticle // Call the editArticle controller
);

// Delete an existing video from the curriculum
router.delete(
  "/video/:videoId",
  isAuthenticated, // Ensure user is authenticated
  isAuthorized, // Ensure user is authorized
  validation(validators.deleteVideoSchema), // Validate request payload
  curriculumController.deleteVideo // Call the deleteVideo controller
);

// Delete an existing article from the curriculum
router.delete(
  "/article/:articleId",
  isAuthenticated, // Ensure user is authenticated
  isAuthorized, // Ensure user is authorized
  validation(validators.deleteArticleSchema), // Validate request payload
  curriculumController.deleteArticle // Call the deleteArticle controller
);

// Get details of a specific video in the curriculum
router.get(
  "/video/:videoId",
  validation(validators.getVideoSchema), // Validate request parameters
  curriculumController.getVideo // Call the getVideo controller
);

// Get details of a specific article in the curriculum
router.get(
  "/article/:articleId",
  validation(validators.getArticleSchema), // Validate request parameters
  curriculumController.getArticle // Call the getArticle controller
);

// Get the entire curriculum for a specific chapter
router.get(
  "/",
  validation(validators.getCurriculumSchema), // Validate request parameters
  curriculumController.getCurriculum // Call the getCurriculum controller
);

export default router;

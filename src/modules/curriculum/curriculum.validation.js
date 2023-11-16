import joi from "joi";
import { isValidObjectId } from "../../middleware/validation.js";

export const createVideoSchema = joi
  .object({
    courseId: joi.string().custom(isValidObjectId).required(),
    chapterId: joi.string().custom(isValidObjectId).required(),
    title: joi.string().required(),
    describtion: joi.string(),
    order: joi.string(),
  })
  .unknown(true);

export const createArticleSchema = joi
  .object({
    courseId: joi.string().custom(isValidObjectId).required(),
    chapterId: joi.string().custom(isValidObjectId).required(),
    title: joi.string(),
    quillContent: joi.string(),
    order: joi.string(),
  })
  .unknown(true);

export const editVideoSchema = joi
  .object({
    courseId: joi.string().custom(isValidObjectId).required(),
    chapterId: joi.string().custom(isValidObjectId).required(),
    videoId: joi.string().custom(isValidObjectId).required(),
    title: joi.string(),
    describtion: joi.string(),
    startPosition: joi.string(),
    endPosition: joi.string(),
  })
  .unknown(true);

export const editArticleSchema = joi
  .object({
    courseId: joi.string().custom(isValidObjectId).required(),
    chapterId: joi.string().custom(isValidObjectId).required(),
    articleId: joi.string().custom(isValidObjectId).required(),
    title: joi.string(),
    quillContent: joi.string(),
    startPosition: joi.string(),
    endPosition: joi.string(),
  })
  .unknown(true);
export const deleteVideoSchema = joi
  .object({
    courseId: joi.string().custom(isValidObjectId).required(),
    chapterId: joi.string().custom(isValidObjectId).required(),
    videoId: joi.string().custom(isValidObjectId).required(),
  })
  .required();

export const deleteArticleSchema = joi
  .object({
    courseId: joi.string().custom(isValidObjectId).required(),
    chapterId: joi.string().custom(isValidObjectId).required(),
    articleId: joi.string().custom(isValidObjectId).required(),
  })
  .required();

export const getVideoSchema = joi
  .object({
    courseId: joi.string().custom(isValidObjectId).required(),
    chapterId: joi.string().custom(isValidObjectId).required(),
    videoId: joi.string().custom(isValidObjectId).required(),
  })
  .required();

export const getArticleSchema = joi
  .object({
    courseId: joi.string().custom(isValidObjectId).required(),
    chapterId: joi.string().custom(isValidObjectId).required(),
    videoId: joi.string().custom(isValidObjectId).required(),
  })
  .required();
export const getCurriculumSchema = joi
  .object({
    courseId: joi.string().custom(isValidObjectId).required(),
    chapterId: joi.string().custom(isValidObjectId).required(),
  })
  .required();

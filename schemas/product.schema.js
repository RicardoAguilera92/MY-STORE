const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductSchema = Join.object({
  name: name.required(),
  prince: price.required(),
});

const createProductSchema = Join.object({
  name: name,
  prince: price,
});

const createProductSchema = Join.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  createProductSchema,
  createProductSchema,
};

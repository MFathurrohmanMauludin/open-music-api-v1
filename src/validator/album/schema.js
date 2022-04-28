
const Joi = require('joi');

const AlbumPlayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = {AlbumPlayloadSchema};

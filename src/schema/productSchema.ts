import joi from 'joi';

export const productSchema = joi.object().keys({
    name: joi.string().required(),
    price: joi.number().required(),
    brand: joi.string().required()
});
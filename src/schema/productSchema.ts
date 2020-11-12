import joi from 'joi';

export const productSchema = joi.object().keys({
    name: joi.string().required(),
    price: joi.number().required(),
    brand: joi.string().required()
});

export const getAllProductsSchema = joi.object().keys({
    skip: joi.string(),
    limit: joi.string()
});

export const updateProductSchema = joi.object().keys({
    name: joi.string(),
    price: joi.number(),
    brand: joi.string()
});
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = void 0;
const productModel_1 = require("../../models/productModel");
const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = new ObjectID(req.body);
            const product = yield productModel_1.ProductModel.findOne({ _id: id });
            if (product) {
                res.status(200).json({
                    product: {
                        id: product === null || product === void 0 ? void 0 : product.id,
                        title: product === null || product === void 0 ? void 0 : product.title,
                        price: product === null || product === void 0 ? void 0 : product.price,
                    },
                });
            }
            else {
                res.status(404).json({ error: "Product not found" });
            }
        }
        catch (error) {
            console.log("fail");
            res.status(500).json({ error: "Failed to get the product." });
        }
    });
}
exports.getProduct = getProduct;

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
exports.createProduct = void 0;
const productModel_1 = require("../../models/productModel");
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = new productModel_1.ProductModel(req.body);
            const savedProduct = yield product.save();
            res.status(201).json(savedProduct);
            console.log("saved one product");
        }
        catch (error) {
            console.log("fail");
            res.status(500).json({ error: "Failed to save the product." });
        }
    });
}
exports.createProduct = createProduct;

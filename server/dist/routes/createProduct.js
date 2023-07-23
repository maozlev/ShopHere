"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createProduct_1 = require("../controllers/createProducts/createProduct");
const router = (0, express_1.Router)();
router.post('/', createProduct_1.createProduct);
exports.default = router;

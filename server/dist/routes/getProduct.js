"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getProduct_1 = require("../controllers/getProducts/getProduct");
const router = (0, express_1.Router)();
router.get('/', getProduct_1.getProduct);
exports.default = router;

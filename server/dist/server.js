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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const createProduct_1 = __importDefault(require("./routes/createProduct"));
const getProduct_1 = __importDefault(require("./routes/getProduct"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default
            .connect("mongodb+srv://maoz2001:maoz2001@cluster0.mrkk1.mongodb.net/")
            .then(() => {
            console.log("Connected to MongoDB");
        })
            .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });
    });
}
const app = (0, express_1.default)();
const port = 3000;
// Connect to MongoDB
main().catch((err) => console.log(err));
// Define routes and middleware
// Middleware
app.use(express_1.default.json());
// Routes
app.get("/", (req, res) => {
    res.send("welcom to the store!");
});
// Mount the product routes
app.use("/createProduct", createProduct_1.default);
app.use("/getProduct", getProduct_1.default);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

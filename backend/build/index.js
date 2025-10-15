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
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SIgnin_1 = __importDefault(require("./routes/SIgnin"));
const Signuproute_1 = __importDefault(require("./routes/Signuproute"));
const Studentlist_1 = __importDefault(require("./routes/Studentlist"));
const AddStudent_1 = __importDefault(require("./routes/AddStudent"));
const Checkstudent_1 = __importDefault(require("./routes/Checkstudent"));
const delete_1 = __importDefault(require("./routes/delete"));
const Edit_1 = __importDefault(require("./routes/Edit"));
const Heatmapdata_1 = __importDefault(require("./routes/Heatmapdata"));
const SetCronSchedule_1 = __importDefault(require("./routes/SetCronSchedule"));
const SyncContest_1 = __importDefault(require("./routes/SyncContest"));
const testMail_1 = __importDefault(require("./routes/testMail"));
const export_1 = __importDefault(require("./routes/export"));
const Feedback_1 = __importDefault(require("./routes/Feedback"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", SIgnin_1.default);
app.use("/api", Signuproute_1.default);
app.use("/api", Studentlist_1.default);
app.use("/api", AddStudent_1.default);
app.use("/api", Checkstudent_1.default);
app.use("/api", delete_1.default);
app.use("/api", Edit_1.default);
app.use("/api", Heatmapdata_1.default);
app.use("/api", SetCronSchedule_1.default);
app.use("/api", SyncContest_1.default);
app.use("/api", testMail_1.default);
app.use("/api", export_1.default);
app.use("/api", Feedback_1.default);
// console.log("MongoDB URI:", process.env.MONGODB_URI); // This will now match below
const MONGODB_URI = process.env.MONGODB_URI; // ✅ Correct variable name
const mongoconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB successfully!');
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
});
mongoconnect();
app.listen(3000, () => {
    console.log('🚀 Server started on http://localhost:3000');
});

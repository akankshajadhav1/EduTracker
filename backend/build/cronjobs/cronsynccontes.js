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
exports.buildCronExpression = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const StudentModel_1 = __importDefault(require("../models/StudentModel"));
const FetchContestdetail_1 = __importDefault(require("../helpers/FetchContestdetail"));
const buildCronExpression = (hour, minute, frequency) => {
    if (frequency === "daily")
        return `${minute} ${hour} * * *`;
    if (frequency === "weekly")
        return `${minute} ${hour} * * 0`; // Sunday
    throw new Error("Invalid frequency");
};
exports.buildCronExpression = buildCronExpression;
const Startsynccontesthandler = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Allstudents = yield StudentModel_1.default.find();
        for (const student of Allstudents) {
            if (student.cfhandle) {
                yield (0, FetchContestdetail_1.default)(student.id, student.cfhandle);
            }
        }
        console.log("Contest Sync Completed");
    }
    catch (e) {
        console.log("Error in Syncing Contest", e);
    }
});
//@ts-ignore
let currentContestJob = null;
const Startsynccontest = (schedule) => {
    if (currentContestJob)
        currentContestJob.stop();
    currentContestJob = node_cron_1.default.schedule(schedule, Startsynccontesthandler);
    console.log("Scheduled contest sync at:", schedule);
};
exports.default = Startsynccontest;

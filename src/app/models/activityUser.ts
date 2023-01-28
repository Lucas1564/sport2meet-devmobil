import { type } from "os";
import { Activity } from "src/app/models/activity";

export type activityUser = {
    _id: string;
    activity: Activity;
    user: string;
    inscription: Date;
}
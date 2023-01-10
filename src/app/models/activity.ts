import { type } from "os";

export type Activity = {
    sport: string;
    description: string;
    locality: string;
    address: string;
    datetime: string;
    location: {
        type: string;
        coordinates: number[];
    };
}
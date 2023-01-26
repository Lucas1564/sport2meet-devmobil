import { type } from "os";

export type Activity = {
    id: string;
    sport: string;
    description: string;
    locality: string;
    address: string;
    datetime: string;
    participants: string[];
    location: {
        type: string;
        coordinates: number[];
    };
}
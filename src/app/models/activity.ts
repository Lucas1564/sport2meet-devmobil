import { type } from "os";

export type Activity = {
    id: string;
    sport: string;
    description: string;
    locality: string;
    address: string;
    npa : number;
    datetime: string;
    players: number;
    type: string;
    location: {
        type: string;
        coordinates: number[];
    };
}
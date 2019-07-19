import { Condition } from './condition.model';

export class Strategy {
    id: string;
    title: string;
    status: string;
    date: Date;
    sentence: string;
    conditions: Condition[]
}
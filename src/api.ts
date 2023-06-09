export interface GetBalanceResponce<T> {
    $: T;
    ore: T;
    diamond: T;
    oil: T;
    uranium: T;
    sell: T;
}

export interface UserResponce {
    balance: GetBalanceResponce<number>;
    pfp: string;
    name: string;
}

export interface OfferResponce {
    id: number;
    user_id: string;
    type: 'ore' | 'uranium' | 'oil' | 'diamond'
    amount: string;
    price: number;
}

export class API {
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    async getBalance() {
        const responce = await fetch(`https://api.ryodan.dev/getBalance?type=all&id=${this.id}`);
        const data: GetBalanceResponce<number> = await responce.json()
        return data;
    }

    async getAllOffers() {
        const responce = await fetch('https://api.ryodan.dev/getOffers?type=all')
        const data: OfferResponce[] = await responce.json();
        return data;
    }

    async getUser() {
        const responce = await fetch(`https://api.ryodan.dev/getUser?id=${this.id}`)
        const data: UserResponce = await responce.json()
        return data;
    }
}
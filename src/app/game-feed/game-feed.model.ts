export interface IGame {
    categories: string[];
    name: string;
    image: string;
    id: string;
}

export interface IGameResult{
    games: IGame[];
}


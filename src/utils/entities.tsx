export interface Game {
    league: string;
    home_period_scores: number[];
    away_period_scores: number[];
    home_abb: string;
    away_abb: string;
    home_name: string;
    away_name: string;
    status: string
    home_total: number[];
    away_total: number[];
}
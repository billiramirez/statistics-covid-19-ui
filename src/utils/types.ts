export interface Statistic {
  country: string;
  cases: {
    total: number;
  };
  deaths: {
    total: number;
  };
  tests: {
    total: number;
  };
  _id: string;
  continent: string;
  population: number;
  day: string;
  time: string;
}

export interface IFormStatistic {
  newCases: number;
  activeCases: number;
  criticalCases: number;
  recoveredCases: number;
  tests: number;
  deaths: number;
}

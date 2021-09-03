import { IFormStatistic } from "./types";

export const getPayload = (data: IFormStatistic) => ({
  cases: {
    new: data.newCases,
    active: data.activeCases,
    critical: data.criticalCases,
    recovered: data.recoveredCases,
  },
  tests: data.tests,
  deaths: data.deaths,
});

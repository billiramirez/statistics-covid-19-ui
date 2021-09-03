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

/*
 * @params {request} extracted from request response
 * @return {object} object of parse jwt cookie decode object
 */
export function getAppCookies(req: any) {
  const parsedItems: { [key: string]: string } = {};
  if (req.headers.cookie) {
    const cookiesItems = req.headers.cookie.split("; ");
    cookiesItems.forEach((cookies: any) => {
      const parsedItem = cookies.split("=");
      parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
    });
  }
  return parsedItems;
}

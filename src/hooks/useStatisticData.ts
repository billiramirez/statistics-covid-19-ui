import { format, formatRelative, subDays } from "date-fns";
import { useEffect, useState } from "react";
import { Statistic } from "../utils/types";

export interface TableFormattedData {
  id: string;
  // key: string;
  country: string;
  continent: string;
  population: number;
  cases: number;
  deaths: number;
  tests: number;
  lastUpdate: string;
}

const useStatisticData = (data: Statistic[] = []) => {
  const [rawData, setRawData] = useState(data);
  const [tableData, setTableData] = useState<TableFormattedData[]>([]);

  const formatToTableData = (): TableFormattedData[] => {
    return !!rawData.length
      ? rawData.map((countryS: Statistic) => ({
          id: countryS._id,
          key: countryS._id,
          country: countryS.country,
          continent: countryS.continent,
          population: countryS.population,
          cases: countryS.cases.total,
          deaths: countryS.deaths.total,
          tests: countryS.tests.total,
          lastUpdate: formatRelative(
            subDays(new Date(countryS.time), 3),
            new Date()
          ),
        }))
      : [];
  };

  useEffect(() => {
    const fData = formatToTableData();
    setTableData(fData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawData]);

  return [tableData, setTableData, setRawData] as const;
};

export default useStatisticData;

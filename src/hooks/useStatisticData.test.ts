import { renderHook } from "@testing-library/react-hooks"
import rawStatistics from "../../__mocks__/rawStatistics"
import useStatisticData from "./useStatisticData"

describe("Use Statistic Hook", () => {
  it("should have formatted data table", () => {
    const { result } = renderHook(() => useStatisticData(rawStatistics))

    const [tableData, setTableData, setRawData] = result.current
    expect(tableData[0]).toMatchObject({
      id: "6131da1abaa8d8838de13aee",
      key: "6131da1abaa8d8838de13aee",
      country: "CAR",
      continent: "Africa",
      population: 4927564,
      cases: 11296,
      deaths: 100,
      tests: 60228,
      lastUpdate: "last Tuesday at 4:00 AM",
    })
    expect(setTableData).toBeInstanceOf(Function)
    expect(setRawData).toBeInstanceOf(Function)
  })

  it("should return empty array with no data passed", () => {
    const { result } = renderHook(() => useStatisticData())
    const [tableData] = result.current
    expect(tableData.length).toBe(0)
  })
})

import formDataMock from "../../__mocks__/formDataMock"
import { getPayload } from "./index"

test("Should return formatted data", () => {
  const payload = getPayload(formDataMock)
  expect(payload).toMatchObject({
    cases: {
      new: formDataMock.newCases,
      active: formDataMock.activeCases,
      critical: formDataMock.criticalCases,
      recovered: formDataMock.recoveredCases,
    },
    deaths: formDataMock.deaths,
    tests: formDataMock.tests,
  })
})

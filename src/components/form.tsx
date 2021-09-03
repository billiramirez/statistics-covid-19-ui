import { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";

import { FC } from "react";

const FormStatistics: FC<{
  values: {
    newCases: number;
    activeCases: number;
    criticalCases: number;
    recoveredCases: number;
    deaths: number;
    tests: number;
  };
  handleChangeValues: (e: any) => void;
}> = ({ values, handleChangeValues }) => {
  const [newValues, setNewValues] = useState(values);

  useEffect(() => {
    setNewValues(values);
  }, [values]);

  return (
    <Form
      name="statisticForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
    >
      <Form.Item
        label="New Cases"
        name="newCases"
        rules={[{ required: true, message: "Please add the new cases" }]}
      >
        <Input
          type="number"
          name="newCases"
          value={newValues.newCases}
          onChange={handleChangeValues}
        />
      </Form.Item>

      <Form.Item
        label="Active Cases"
        name="activeCases"
        rules={[{ required: true, message: "Please add active cases" }]}
      >
        <Input
          type="number"
          name="activeCases"
          value={newValues.activeCases}
          onChange={handleChangeValues}
        />
      </Form.Item>

      <Form.Item
        label="Critical Cases"
        name="criticalCases"
        rules={[{ required: true, message: "Please add critical cases" }]}
      >
        <Input
          name="criticalCases"
          type="number"
          value={newValues.criticalCases}
          onChange={handleChangeValues}
        />
      </Form.Item>

      <Form.Item
        label="Recovered Cases"
        name="recoveredCases"
        rules={[{ required: true, message: "Please add recovered cases" }]}
      >
        <Input
          type="number"
          name="recoveredCases"
          value={newValues.recoveredCases}
          onChange={handleChangeValues}
        />
      </Form.Item>
      <Form.Item
        label="Deaths"
        name="deaths"
        rules={[{ required: true, message: "Please add the number of deaths" }]}
      >
        <Input
          type="number"
          value={newValues.deaths}
          onChange={handleChangeValues}
          name="deaths"
        />
      </Form.Item>

      <Form.Item
        label="Tests"
        name="tests"
        rules={[{ required: true, message: "Please add the number of tests" }]}
      >
        <Input
          type="number"
          value={newValues.tests}
          onChange={handleChangeValues}
          name="tests"
        />
      </Form.Item>
    </Form>
  );
};

export default FormStatistics;

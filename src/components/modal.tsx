import React, { FC, useEffect, useReducer, useState } from "react";
import { Modal, Button } from "antd";
import FormStatistics from "./form";

const StatisticModal: FC<{
  isModalVisible: boolean;
  setIsModalVisible: (value: boolean) => void;
  currentCountry: string;
  handleCancel: () => void;
  handleOk: () => void;
  data: {
    newCases: number;
    activeCases: number;
    criticalCases: number;
    recoveredCases: number;
    deaths: number;
    tests: number;
  };
  handleChangeValues: (e: any) => void;
}> = ({
  isModalVisible,
  currentCountry,
  handleCancel,
  handleOk,
  data,
  handleChangeValues,
}) => {
  return (
    <div>
      <Modal
        title={`Add new values to ${currentCountry}`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormStatistics handleChangeValues={handleChangeValues} values={data} />
      </Modal>
    </div>
  );
};

export default StatisticModal;

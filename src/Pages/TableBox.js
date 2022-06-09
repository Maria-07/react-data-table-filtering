import React, { useEffect, useState } from "react";
import { columns } from "./Columns";
import { data } from "./Data";
import "antd/dist/antd.css";

import { Button, Table } from "antd";

const TableBox = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();
  const [nvalue, setnValue] = useState();
  const [svalue, setsValue] = useState();
  const [myData, setMyData] = useState(data);

  useEffect(() => {
    const filterName = data.filter((names) => {
      const filterData = names.name === value;
      // names.Provider === nvalue ||
      // names.pos === svalue;
      return filterData;
    });
    setMyData(filterName);
    // console.log("filter : ", filterName);
  }, [value]);

  useEffect(() => {
    const filterProvider = data.filter((names) => {
      const filterP = names.Provider === nvalue;
      return filterP;
    });
    setMyData(filterProvider);
    console.log("filter provider: ", filterProvider);
  }, [nvalue]);

  useEffect(() => {
    const filterStatus = data.filter((names) => {
      const filterS = names.pos === svalue;
      return filterS;
    });
    setMyData(filterStatus);
    // console.log("filter provider: ", filterStatus);
  }, [svalue]);

  // console.log("my data", myData);

  // console.log(columns);
  const onChange = (pagination, filters, extra) => {
    console.log("params", pagination, filters, extra);
  };

  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <div className=" bg-gray-200 p-10 rounded-md">
        <div className=" bg-white font-medium border-4 mb-5 p-5">
          Filter Box :<span className=" font-semibold p-5">{value}</span>
          <span className=" font-semibold p-5">{nvalue}</span>
          <span className=" font-semibold p-5">{svalue}</span>
        </div>
        <h2 className="mb-10 text-2xl font-medium text-orange-400">
          Manage Session
        </h2>
        <div className="flex my-5">
          <div className="mr-5">
            <p className="font-medium">Patient Name : </p>
            <div>
              <select
                id="values"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="py-3 px-2"
              >
                <option>All Selected {data.length}</option>
                <option value="SR Sr Tusher">SR Sr Tusher</option>
                <option value="Ms Nitu">Ms Nitu</option>
              </select>
            </div>
          </div>
          {/* provider  */}
          <div className="mr-5">
            <p className="font-medium">Provider : </p>
            <div>
              <select
                id="values"
                value={nvalue}
                onChange={(e) => setnValue(e.target.value)}
                className="py-3 px-2"
              >
                <option value={data}>All Selected {data.length}</option>
                <option value="staff1">staff1</option>
                <option value="staff2">staff2</option>
              </select>
            </div>
          </div>
          {/* Status  */}
          <div className="mr-5">
            <p className="font-medium">Status : </p>
            <div>
              <select
                id="values"
                value={svalue}
                onChange={(e) => setsValue(e.target.value)}
                className="py-3 px-2"
              >
                <option>Status(2)</option>
                <option value="School">School</option>
                <option value="Telehealth">Telehealth</option>
              </select>
            </div>
          </div>
        </div>

        {/* select part  */}
        <div className="flex">
          <div>
            <button
              className="bg-orange-400 mr-5 py-1 px-5 font-medium"
              onClick={refreshPage}
            >
              Reset
            </button>
          </div>
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <Button
              type="primary"
              onClick={start}
              disabled={!hasSelected}
              loading={loading}
            >
              Reload
            </Button>
            <span
              style={{
                marginLeft: 8,
              }}
            >
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
            </span>
          </div>
        </div>

        {value || nvalue || svalue ? (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={myData}
            onChange={onChange}
            sticky
          />
        ) : (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            onChange={onChange}
            sticky
          />
        )}

        {/* <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          onChange={onChange}
          sticky
        /> */}
      </div>
    </div>
  );
};

export default TableBox;

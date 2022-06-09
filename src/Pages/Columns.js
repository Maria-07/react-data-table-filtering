import { Tag } from "antd";

export const columns = [
  {
    title: "Patients",
    dataIndex: "name",
    filters: [
      {
        text: "Nitu",
        value: "Ms Nitu",
      },
      {
        text: "Mr Tusher",
        value: "SR",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: "Service & Hrs.",
    dataIndex: "service",
    filters: [
      {
        text: "Assessment a (BA) (0.25 Hrs)",
        value: "Assessment a (BA) (0.25 Hrs)",
      },
      {
        text: "Assessment a (BA/BCaBA)",
        value: "Assessment a (BA/BCaBA)",
      },
      {
        text: "Speech service 1 speech",
        value: "Speech service 1 speech",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.service.indexOf(value) === 0,
  },
  {
    title: "Provider",
    dataIndex: "Provider",
    filters: [
      {
        text: "staff1",
        value: "staff1",
      },
      {
        text: "staff2",
        value: "staff2",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.Provider.indexOf(value) === 0,
  },
  {
    title: "POS",
    dataIndex: "pos",
    filters: [
      {
        text: "Telehealth",
        value: "Telehealth",
      },
      {
        text: "School",
        value: "School",
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.pos.indexOf(value) === 0,
  },
  {
    title: "Age",
    dataIndex: "age",
    filters: [
      {
        text: "32",
        value: "32",
      },
      {
        text: "42",
        value: "42",
      },
    ],
    onFilter: (value, record) => record.age.indexOf(value) === 0,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
      {
        text: "Sidney",
        value: "Sidney",
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Date",
    dataIndex: "date",
    filters: [
      {
        text: "06/30/2022",
        value: "06/30/2022",
      },
      {
        text: "05/08/2022",
        value: "05/08/2022",
      },
      {
        text: "06/12/2022",
        value: "06/12/2022",
      },
    ],
    onFilter: (value, record) => record.date.indexOf(value) === 0,
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    filters: [
      {
        text: "Scheduled",
        value: "Scheduled",
      },
      {
        text: "rendered",
        value: "rendered",
      },
    ],
    onFilter: (value, record) => record.tags.indexOf(value) === 0,
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";

          if (tag === "Scheduled") {
            color = "volcano";
          }
          if (tag === "rendered") {
            color = "green";
          }

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => (
      <a onClick={() => alert("Your file is being uploaded!")}>Download</a>
    ),
  },
];

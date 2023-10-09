import * as React from "react";
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

const TableWithTotal: React.FC = () =>{ 

    const columns: ColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Chinese Score',
          dataIndex: 'chinese',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: 'Math Score',
          dataIndex: 'math',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: 'English Score',
          dataIndex: 'english',
          sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
          },
        },
      ];
    const data: DataType[] = [
        {
          key: '1',
          name: 'John Brown',
          chinese: 98,
          math: 60,
          english: 70,
        },
        {
          key: '2',
          name: 'Jim Green',
          chinese: 98,
          math: 66,
          english: 89,
        },
        {
          key: '3',
          name: 'Joe Black',
          chinese: 98,
          math: 90,
          english: 70,
        },
        {
          key: '4',
          name: 'Jim Red',
          chinese: 88,
          math: 99,
          english: 89,
        },
      ];
    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
      };
      

    const getTotalRow = (): any => {
        let chinese = 0;
        let math = 0;
        let english = 0;
        for (let row of data) {
            chinese += row.chinese;
          math += row.math;
          english += row.english;
        }
        return {
          key: 'total',
          name: 'Total (by Column)',
          chinese: chinese,
          math: math,
          english: english,
        };
      };
    
      const dataSourceWithTotal = [...data, getTotalRow()];

    return(
        <Table columns={columns} dataSource={dataSourceWithTotal} onChange={onChange} />
    )

};

export default TableWithTotal;
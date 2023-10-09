// declare global {
//   interface Window {
//     Xrm: any;
//   }
// }

// export {};

declare interface Window {
  Xrm: any;
}

interface RowData {
  name: string;
  // Other data properties...
}

interface SectionData {
  title: string;
  rows: RowData[];
  averageRow: RowData;
}

interface CustomTableProps {
  data: SectionData[];
}

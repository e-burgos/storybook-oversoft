import Datatable, { TableColumn, TableStyles, TableRow, IDataTableProps, TableProps } from 'react-data-table-component';
import { StyledTableContainer } from './DataTable.styles';
import colors from '../../color-palette';
import TablePagination from '../TablePagination';
import React from 'react';

const customDatatableStyles: TableStyles = {
  table: {
    style: {
      verflowX: 'auto',
      overflowY: 'auto',
      gap: '10px',
      background: 'transparent',
    },
  },
  tableWrapper: {
    style: {
      background: 'transparent',
    },
  },
  headRow: {
    style: {
      background: colors.neutrals.black,
      borderRadius: '8px',
      minHeight: '40px',
    },
  },
  headCells: {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: colors.neutrals.white,
      width: '100%',
      fontSize: '16px',
      fontFamily: 'Rubik-SemiBold',
      lineHeight: '20px',
      minHeight: '40px',
      borderRight: `1px solid ${colors.neutrals.greyTwo}`,
      '&:last-of-type': {
        borderRight: `1px solid transparent`,
      },
    },
  },
  cells: {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      fontFamily: 'Rubik-Regular',
      textAlign: 'center',
      paddingLeft: '15px',
      paddingRight: '15px',
      wordBreak: 'break-word',
    },
  },
  rows: {
    style: {
      border: `1px solid ${colors.neutrals.greyThree}`,
      '&:last-of-type': {
        borderRadius: '0px 0px 8px 8px',
      },
      '&:first-of-type': {
        borderRadius: '8px 8px 0px 0px',
      },
    },
  },
};

const DataTable: typeof Datatable = (props) => {
  return (
    <StyledTableContainer data-testid="table-container">
      <Datatable
        paginationComponent={TablePagination}
        {...props}
        // eslint-disable-next-line react/prop-types
        customStyles={{ ...customDatatableStyles, ...props.customStyles }}
      />
    </StyledTableContainer>
  );
};
export default DataTable;

export type { TableColumn, TableStyles, TableRow, TableProps, IDataTableProps };

import React from 'react';
import { PaginationComponentProps } from 'react-data-table-component';
import colors from '../../color-palette';
import BaseButton from '../../Buttons/BaseButton';
import { StyledContentPagination, StyledTablePagination } from './TablePagination.styles';

const TablePagination = ({ rowsPerPage, rowCount, currentPage, onChangePage }: PaginationComponentProps) => {
  const totalPages = Math.ceil(rowCount / rowsPerPage);
  const leftNumber = currentPage === 1 ? 1 : currentPage - 1;
  const rightNumber = currentPage === totalPages ? totalPages : currentPage + 1;
  const middleNumber = currentPage === 1 || currentPage === totalPages ? '' : currentPage;
  return (
    <StyledTablePagination
      $display="flex"
      $flexDirection="row"
      $justifyContent="flex-end"
      $alignItems="center"
      style={{ position: 'relative' }}
      data-testid="table-pagination"
    >
      <StyledContentPagination
        $display="flex"
        $flexDirection="row"
        $justifyContent="center"
        $alignItems="center"
        width="fit-content"
        height="20px"
        style={{ position: 'absolute', top: '10px' }}
      >
        {currentPage > 1 && (
          <BaseButton
            onClick={() => onChangePage(currentPage - 1, rowCount)}
            label={'❮'}
            textSize="12px"
            colorText={colors.neutrals.black}
            hoverColorText={colors.neutrals.white}
            width="50px"
            height="20px"
            padding="0px"
            border={`0.2px solid ${colors.neutrals.greyThree}`}
            borderColor={colors.neutrals.greyThree}
            backgroundColor={colors.neutrals.white}
            borderRadius={'5px 0px 0px 5px'}
            hoverBgColor={colors.primary.red}
            aria-label="Página Anterior"
          />
        )}
        <BaseButton
          onClick={() => onChangePage(leftNumber, rowCount)}
          label={`${leftNumber}`}
          aria-label={`Página ${leftNumber}`}
          colorText={currentPage === leftNumber ? colors.neutrals.white : colors.neutrals.black}
          hoverColorText={colors.neutrals.white}
          width="50px"
          height="20px"
          padding="0px"
          border={`0.2px solid ${colors.neutrals.greyThree}`}
          borderColor={colors.neutrals.greyThree}
          backgroundColor={currentPage === leftNumber ? colors.primary.red : colors.neutrals.white}
          hoverBgColor={colors.primary.red}
          borderRadius={currentPage === 1 ? '5px 0px 0px 5px' : '0px'}
          data-testid="left-page"
        />
        {middleNumber && (
          <BaseButton
            label={`${middleNumber}`}
            aria-label={`Página ${middleNumber}`}
            colorText={colors.neutrals.white}
            hoverColorText={colors.neutrals.white}
            width="50px"
            height="20px"
            padding="0px"
            border={`0.2px solid ${colors.neutrals.greyThree}`}
            borderColor={colors.neutrals.greyThree}
            backgroundColor={colors.primary.red}
            hoverBgColor={colors.primary.red}
            borderRadius={'0px'}
            data-testid="middle-page"
          />
        )}
        <BaseButton
          onClick={() => onChangePage(rightNumber, rowCount)}
          label={`${rightNumber}`}
          aria-label={`Página ${rightNumber}`}
          colorText={currentPage === rightNumber ? colors.neutrals.white : colors.neutrals.black}
          hoverColorText={colors.neutrals.white}
          width="50px"
          height="20px"
          padding="0px"
          border={`0.2px solid ${colors.neutrals.greyThree}`}
          borderColor={colors.neutrals.greyThree}
          backgroundColor={currentPage === rightNumber ? colors.primary.red : colors.neutrals.white}
          hoverBgColor={colors.primary.red}
          borderRadius={currentPage === totalPages ? '0px 5px 5px 0px' : '0px'}
          data-testid="right-page"
        />
        {currentPage < totalPages && (
          <BaseButton
            onClick={() => onChangePage(currentPage + 1, rowCount)}
            label={'❯'}
            textSize="12px"
            colorText={colors.neutrals.black}
            hoverColorText={colors.neutrals.white}
            width="50px"
            height="20px"
            padding="0px"
            border={`0.2px solid ${colors.neutrals.greyThree}`}
            borderColor={colors.neutrals.greyThree}
            backgroundColor={colors.neutrals.white}
            hoverBgColor={colors.primary.red}
            borderRadius={'0px 5px 5px 0px'}
            aria-label={'Página Siguiente'}
          />
        )}
      </StyledContentPagination>
    </StyledTablePagination>
  );
};

export default TablePagination;

export type { PaginationComponentProps };

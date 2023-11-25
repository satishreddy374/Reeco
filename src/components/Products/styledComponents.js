import styled from 'styled-components'

export const ProductsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #e0e1e5;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 84%;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 2px #bfbfbf;
  padding: 20px 12px 20px 12px;
`

export const SearchAndAddItemButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 2px solid #c4c6d0;
  border-radius: 10px;
  width: 50%;
`

export const SearchInput = styled.input`
  color: gray;
  font-size: 18px;
  border: none;
  width: 90%;
  font-size: 20px;
  font-family: 'Roboto';
  padding: 4px;
`

export const SearchIconButton = styled.button`
  border: none;
  background-color: transparent;
`

export const AddItemButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 22%;
  justify-content: space-around;
`

export const AddItemButton = styled.button`
  border: none;
  background-color: transparent;
  color: #28842d;
  border: 2px solid #28842d;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 10px 5px 10px;
`
export const PrinterIcon = styled.button`
  border: none;
  background-color: transparent;
`

export const TableHeadingsContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #c4c6d0;
  margin-top: 20px;
  width: 100%;
  padding: 0px 10px 0px 10px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`

export const ProductNameColumn = styled.p`
  color: gray;
  font-size: 18px;
  width: 30%;
`

export const BrandColumn = styled.p`
  color: gray;
  font-size: 18px;
  width: 10%;
`

export const PriceColumn = styled.p`
  color: gray;
  font-size: 18px;
  width: 10%;
`

export const QuantityColumn = styled.p`
  color: gray;
  font-size: 18px;
  width: 10%;
`

export const TotalPriceColumn = styled.p`
  color: gray;
  font-size: 18px;
  width: 10%;
`

export const StatusColumn = styled.p`
  color: gray;
  font-size: 18px;
  width: 30%;
`

export const AllProductsDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 50vh;
  width: 100%;
`

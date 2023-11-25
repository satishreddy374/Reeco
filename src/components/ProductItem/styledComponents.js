import styled from 'styled-components'

export const ProductDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #bfc9c9;
`

export const ProductNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 29%;
`

export const ProductImage = styled.img`
  height: 40px;
  width: 40px;
`

export const ProductNameText = styled.p`
  font-size: 15px;
`

export const BrandText = styled.p`
  font-size: 15px;
  width: 12%;
`

export const PriceText = styled.p`
  font-size: 16px;
  width: 10%;
`

export const QuantityText = styled.p`
  font-size: 16px;
  width: 10%;
  text-align: center;
`
export const TotalText = styled.p`
  font-size: 16px;
  width: 10%;
`
export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #e0e1e5;
  padding: 15px 10px 15px 10px;
  flex-grow: 1;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const ProductStatusButton = styled.button`
  background-color: ${props => props.bgColor};
  border: none;
  font-size: 15px;
  font-family: 'Roboto';
  padding: 6px 8px 6px 8px;
  border-radius: 8px;
  color: #ffffff;
`

export const CheckButton = styled.button`
  background-color: transparent;
  border: none;
`

export const CrossButton = styled.button`
  background-color: transparent;
  border: none;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
`

export const PopupHeadingAndCrossButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MissingProductHeading = styled.h1`
  font-size: 30px;
  color: #000000;
  font-family: 'Roboto';
  font-weight: 600;
`

export const YesAndNoButtonsContainer = styled.div`
  display: flex;
  align-items: right;
  width: 100%;
`

export const PopupButtons = styled.button`
  border: none;
  background-color: transparent;
  color: #464b46;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-right: 10px;
`

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  color: #879c9b;
  font-size: 18px;
  font-family: 'Roboto';
`

export const EditPopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
`

export const EditPopupCrossButton = styled.button`
  background-color: transparent;
  align-self: flex-end;
  border: none;
`

export const PriceAndQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const EditPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const EditPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #8c9192;
  width: 100px;
`

export const EditPriceValue = styled.input`
  font-size: 16px;
  font-weight: 500;
  width: 75px;
`

export const EditQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const EditQuantity = styled.p`
  font-size: 16px;
  color: #8c9192;
  font-weight: 600;
  width: 100px;
`

export const EditQuantityValue = styled.input`
  font-size: 18px;
  font-weight: 500;
  width: 75px;
`

export const EditTotalPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const EditTotalPrice = styled.p`
  font-size: 16px;
  color: #8c9192;
  font-weight: 600;
  width: 100px;
`

export const EditTotalPriceValue = styled.input`
  font-size: 18px;
  font-weight: 500;
  width: 75px;
`

export const ChooseReasonHeading = styled.p`
  font-size: 18px;
  color: #06181e;
  font-weight: 600;
  font-weight: 'Roboto';
`

export const OptionalText = styled.span`
  font-size: 16px;
  color: #b3b6b6;
  font-weight: 500;
  font-weight: 'Roboto';
`
export const EditProductStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PriceUpdatedButton = styled.button`
  background-color: transparent;
  border: 2px solid #d9dee0;
  padding: 6px 12px 6px 12px;
  border-radius: 14px;
  color: #3e4446;
  font-size: 16px;
  font-family: 'Roboto';
  margin: 6px;
`

export const QuantityUpdatedButton = styled.button`
  background-color: transparent;
  border: 2px solid #d9dee0;
  padding: 6px 12px 6px 12px;
  border-radius: 14px;
  color: #3e4446;
  font-size: 16px;
  font-family: 'Roboto';
  margin: 6px;
`

export const PriceAndQuantityUpdatedButton = styled.button`
  background-color: transparent;
  border: 2px solid #d9dee0;
  padding: 6px 12px 6px 12px;
  border-radius: 14px;
  color: #3e4446;
  font-size: 16px;
  font-family: 'Roboto';
  margin: 6px;
`

export const SendButton = styled.button`
  background-color: #3a8e5a;
  border: none;
  padding: 6px 20px 6px 20px;
  border-radius: 14px;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
  align-self: flex-end;
  margin-top: 14px;
  margin-bottom: 14px;
`

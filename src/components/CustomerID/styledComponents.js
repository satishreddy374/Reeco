import styled from 'styled-components'

export const CustomerIdContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
`

export const OrdersAndIdText = styled.p`
  color: gray;
  font-size: 16px;
  font-family: 'Roboto';
  padding-left: 140px;
`

export const OrderIdSpecialText = styled.span`
  text-decoration: underline;
`

export const OrderIdAndApprovedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 0px;
`

export const OrderId = styled.h1`
  color: #000000;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 600;
  width: 38%;
  padding-left: 16px;
`

export const BackAndOrderApprovedButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 22%;
`

export const BackButton = styled.button`
  font-size: 16px;
  margin-right: 20px;
  margin-left: 10px;
  background-color: transparent;
  border: 2px solid #459d71;
  color: #459d71;
  border-radius: 12px;
  padding: 5px 10px 5px 10px;
  font-weight: 600;
`

export const OrderApprovedButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  background-color: #459d71;
  font-weight: 600;
  padding: 6px 14px 6px 14px;
  border-radius: 15px;
  border: none;
`

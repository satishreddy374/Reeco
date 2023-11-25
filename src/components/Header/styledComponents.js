import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: #5b7339;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 4px 10px 4px;
  width: 100%;
`

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40%;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Arial';
  font-size: 32px;
  font-weight: 700;
`

export const StoreTab = styled.p`
  color: #ffffff;
  font-family: 'Arial';
  font-size: 16px;
`

export const OrdersTab = styled.button`
  color: #ffffff;
  font-family: 'Arial';
  font-size: 16px;
  background-color: transparent;
  border: none;
`

export const AnalyticsTab = styled.p`
  color: #ffffff;
  font-family: 'Arial';
  font-size: 16px;
`

export const CartAndCustomerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 22%;
`

export const CustomerName = styled.p`
  color: #ffffff;
  font-family: 'Arial';
  font-size: 16px;
`

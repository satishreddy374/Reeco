import {Component} from 'react'

import {BsCart3} from 'react-icons/bs'

import {
  HeaderContainer,
  TabsContainer,
  Heading,
  StoreTab,
  OrdersTab,
  AnalyticsTab,
  CartAndCustomerContainer,
  CustomerName,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <TabsContainer>
          <Heading>Reeco</Heading>
          <StoreTab>Store</StoreTab>
          <OrdersTab>Orders</OrdersTab>
          <AnalyticsTab>Analytics</AnalyticsTab>
        </TabsContainer>
        <CartAndCustomerContainer>
          <BsCart3 size={24} color="#ffffff" />
          <CustomerName>Hello, James </CustomerName>
        </CartAndCustomerContainer>
      </HeaderContainer>
    )
  }
}

export default Header

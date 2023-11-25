import {Component} from 'react'

import {
  CustomerIdContainer,
  OrdersAndIdText,
  OrderIdSpecialText,
  OrderIdAndApprovedContainer,
  OrderId,
  BackAndOrderApprovedButtonContainer,
  BackButton,
  OrderApprovedButton,
} from './styledComponents'

class CustomerID extends Component {
  render() {
    return (
      <CustomerIdContainer>
        <OrdersAndIdText>
          Orders : <OrderIdSpecialText>Order 32457ABC</OrderIdSpecialText>
        </OrdersAndIdText>
        <OrderIdAndApprovedContainer>
          <OrderId>Order 32457ABC</OrderId>
          <BackAndOrderApprovedButtonContainer>
            <BackButton>Back</BackButton>
            <OrderApprovedButton>Approve order</OrderApprovedButton>
          </BackAndOrderApprovedButtonContainer>
        </OrderIdAndApprovedContainer>
      </CustomerIdContainer>
    )
  }
}

export default CustomerID

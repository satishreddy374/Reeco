import {Component} from 'react'

import {MdCheck} from 'react-icons/md'

import {RxCross2} from 'react-icons/rx'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  ProductDetailsContainer,
  ProductNameContainer,
  ProductImage,
  ProductNameText,
  BrandText,
  PriceText,
  QuantityText,
  TotalText,
  StatusContainer,
  ProductStatusButton,
  CheckButton,
  CrossButton,
  PopupContainer,
  PopupHeadingAndCrossButtonContainer,
  MissingProductHeading,
  YesAndNoButtonsContainer,
  PopupButtons,
  EditButton,
  EditPopupContainer,
  EditPopupCrossButton,
  PriceAndQuantityContainer,
  EditPriceContainer,
  EditPrice,
  EditPriceValue,
  EditQuantityContainer,
  EditQuantity,
  EditQuantityValue,
  EditTotalPriceContainer,
  EditTotalPrice,
  EditTotalPriceValue,
  ChooseReasonHeading,
  OptionalText,
  EditProductStatusContainer,
  PriceUpdatedButton,
  QuantityUpdatedButton,
  PriceAndQuantityUpdatedButton,
  SendButton,
} from './styledComponents'

class ProductItem extends Component {
  state = {priceVal: 200, quantityVal: 3, totalVal: 600}

  onClickCheckedButton = () => {
    const {productDetails, onChangeCheckedProduct} = this.props
    const {id} = productDetails
    onChangeCheckedProduct(id)
  }

  onClickNoPopupButtons = () => {
    const {productDetails, onChangeCrossCheckedProductStatus} = this.props
    const {id} = productDetails
    onChangeCrossCheckedProductStatus(id, 'Missing')
  }

  onClickYesPopupButtons = () => {
    const {productDetails, onChangeCrossCheckedProductStatus} = this.props
    const {id} = productDetails
    onChangeCrossCheckedProductStatus(id, 'Missing-Urgent')
  }

  renderView = () => {
    const {productDetails} = this.props
    const {status} = productDetails
    return (
      <>
        {status === 'Approved' ||
        status === 'Price Updated' ||
        status === 'Quantity Updated' ||
        status === 'Price and Quantity Updated' ? (
          <ProductStatusButton bgColor="#1dfb06">{status}</ProductStatusButton>
        ) : (
          <ProductStatusButton bgColor="red">{status}</ProductStatusButton>
        )}
      </>
    )
  }

  onChangePriceValue = event => {
    this.setState({priceVal: event.target.value})
  }

  onChangeQuantityValue = event => {
    this.setState({quantityVal: event.target.value})
  }

  onChangeTotalPriceValue = event => {
    this.setState({totalVal: event.target.value})
  }

  onChangeProductValues = (price, quantity, total) => {
    this.setState({priceVal: price, quantityVal: quantity, totalVal: total})
  }

  onClickPriceUpdatedButton = () => {
    const {productDetails, onChangeProductStatus} = this.props
    const {id} = productDetails
    const {priceVal, quantityVal, totalVal} = this.state
    onChangeProductStatus(id, 'Price Updated', priceVal, quantityVal, totalVal)
  }

  onClickQuantityUpdatedButton = () => {
    const {productDetails, onChangeProductStatus} = this.props
    const {id} = productDetails
    const {priceVal, quantityVal, totalVal} = this.state
    onChangeProductStatus(
      id,
      'Quantity Updated',
      priceVal,
      quantityVal,
      totalVal,
    )
  }

  onClickPriceAndQuantityUpdatedButton = () => {
    const {productDetails, onChangeProductStatus} = this.props
    const {id} = productDetails
    const {priceVal, quantityVal, totalVal} = this.state
    onChangeProductStatus(
      id,
      'Price and Quantity Updated',
      priceVal,
      quantityVal,
      totalVal,
    )
  }

  render() {
    const {productDetails} = this.props
    const {
      imageUrl,
      productName,
      brand,
      price,
      quantity,
      total,
      isApproved,
      status,
    } = productDetails

    const {priceVal, quantityVal, totalVal} = this.state

    return (
      <ProductDetailsContainer>
        <ProductNameContainer>
          <ProductImage src={imageUrl} alt="product-image" />
          <ProductNameText>{productName}</ProductNameText>
        </ProductNameContainer>
        <BrandText>{brand}</BrandText>
        <PriceText>{price}</PriceText>
        <QuantityText>{quantity}</QuantityText>
        <TotalText>{total}</TotalText>
        <StatusContainer>
          {isApproved && this.renderView()}

          <CheckButton>
            <MdCheck
              onClick={this.onClickCheckedButton}
              size={isApproved ? 25 : 22}
              fontWeight={isApproved ? 600 : 500}
              color={
                isApproved &&
                (status === 'Approved' ||
                  status === 'Price Updated' ||
                  status === 'Quantity Updated' ||
                  status === 'Price and Quantity Updated')
                  ? '#1dfb06'
                  : '#879c9b'
              }
            />
          </CheckButton>

          <Popup
            modal
            trigger={
              <CrossButton>
                {isApproved &&
                (status === 'Missing' || status === 'Missing-Urgent') ? (
                  <RxCross2
                    size={22}
                    color={
                      isApproved && status === 'Missing' ? 'orange' : 'red'
                    }
                  />
                ) : (
                  <RxCross2 size={22} color="#879c9b" />
                )}
              </CrossButton>
            }
          >
            {close => (
              <>
                <PopupContainer>
                  <PopupHeadingAndCrossButtonContainer>
                    <MissingProductHeading>
                      Missing product
                    </MissingProductHeading>
                    <CrossButton onClick={() => close()}>
                      <RxCross2 size={22} color="#879c9b" />
                    </CrossButton>
                  </PopupHeadingAndCrossButtonContainer>
                  <YesAndNoButtonsContainer>
                    <PopupButtons onClick={this.onClickNoPopupButtons}>
                      No
                    </PopupButtons>
                    <PopupButtons onClick={this.onClickYesPopupButtons}>
                      Yes
                    </PopupButtons>
                  </YesAndNoButtonsContainer>
                </PopupContainer>
              </>
            )}
          </Popup>

          <Popup modal trigger={<EditButton>Edit</EditButton>}>
            {close => (
              <>
                <EditPopupContainer>
                  <EditPopupCrossButton onClick={() => close()}>
                    <RxCross2 size={22} color="#879c9b" />
                  </EditPopupCrossButton>
                  <PriceAndQuantityContainer>
                    <EditPriceContainer>
                      <EditPrice>Price : </EditPrice>
                      <EditPriceValue
                        value={priceVal}
                        onChange={this.onChangePriceValue}
                      />
                    </EditPriceContainer>
                    <EditQuantityContainer>
                      <EditQuantity>Quantity : </EditQuantity>
                      <EditQuantityValue
                        value={quantityVal}
                        onChange={this.onChangeQuantityValue}
                      />
                    </EditQuantityContainer>
                    <EditTotalPriceContainer>
                      <EditTotalPrice>Total Price : </EditTotalPrice>
                      <EditTotalPriceValue
                        value={totalVal}
                        onChange={this.onChangeTotalPriceValue}
                      />
                    </EditTotalPriceContainer>
                  </PriceAndQuantityContainer>

                  <ChooseReasonHeading>
                    Choose reason <OptionalText> (Optional)</OptionalText>
                  </ChooseReasonHeading>
                  <EditProductStatusContainer>
                    <PriceUpdatedButton
                      onClick={this.onClickPriceUpdatedButton}
                    >
                      Price updated
                    </PriceUpdatedButton>
                    <QuantityUpdatedButton
                      onClick={this.onClickQuantityUpdatedButton}
                    >
                      Quantity updated
                    </QuantityUpdatedButton>
                    <PriceAndQuantityUpdatedButton
                      onClick={this.onClickPriceAndQuantityUpdatedButton}
                    >
                      Price and Quantity Updated
                    </PriceAndQuantityUpdatedButton>
                  </EditProductStatusContainer>

                  <SendButton>Send</SendButton>
                </EditPopupContainer>
              </>
            )}
          </Popup>
        </StatusContainer>
      </ProductDetailsContainer>
    )
  }
}

export default ProductItem

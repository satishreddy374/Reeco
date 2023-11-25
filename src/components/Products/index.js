import {Component} from 'react'

import {FiSearch, FiPrinter} from 'react-icons/fi'

import ProductItem from '../ProductItem'

import {
  ProductsPageContainer,
  CardContainer,
  SearchAndAddItemButtonContainer,
  SearchBarContainer,
  SearchInput,
  SearchIconButton,
  AddItemButtonContainer,
  AddItemButton,
  PrinterIcon,
  TableHeadingsContainer,
  ProductNameColumn,
  BrandColumn,
  PriceColumn,
  QuantityColumn,
  TotalPriceColumn,
  StatusColumn,
  AllProductsDetailsContainer,
} from './styledComponents'

const productItemsList = [
  {
    id: 1,
    imageUrl: 'https://i.ibb.co/ssHmrj2/avocado-fruit.jpg',
    productName: 'Avocado Fruit',
    brand: 'Bacon',
    price: 250,
    quantity: 3,
    total: 700,
    isApproved: false,
    status: '',
  },
  {
    id: 2,
    imageUrl: 'https://i.ibb.co/vBSTjbh/apple-green.png',
    productName: 'Apple',
    brand: 'Ginger Gold',
    price: 230,
    quantity: 0,
    total: 0,
    isApproved: false,
    status: '',
  },
  {
    id: 3,
    imageUrl: 'https://i.ibb.co/T0kP1rZ/strawberry.jpg',
    productName: 'Strawberry Fruit',
    brand: 'Earthy Strawberry',
    price: 500,
    quantity: 3,
    total: 1500,
    isApproved: false,
    status: '',
  },
  {
    id: 4,
    imageUrl: 'https://i.ibb.co/TWPKjBG/orange.jpg',
    productName: 'Orange Fruit',
    brand: 'Apricots',
    price: 340,
    quantity: 0,
    total: 0,
    isApproved: false,
    status: '',
  },
  {
    id: 5,
    imageUrl: 'https://i.ibb.co/LntTtym/banana.gif',
    productName: 'Banana Fruit',
    brand: 'Chiquita',
    price: 120,
    quantity: 3,
    total: 360,
    isApproved: false,
    status: '',
  },
  {
    id: 6,
    imageUrl: 'https://i.ibb.co/52HdpVM/papaya.jpg',
    productName: 'Papaya Fruit',
    brand: 'Waimanolo',
    price: 270,
    quantity: 3,
    total: 810,
    isApproved: false,
    status: '',
  },
  {
    id: 7,
    imageUrl: 'https://i.ibb.co/ngy1GMY/guava.jpg',
    productName: 'Guava Fruit',
    brand: 'Allahabad Safeda',
    price: 80,
    quantity: 3,
    total: 240,
    isApproved: false,
    status: '',
  },
]

class Products extends Component {
  state = {
    productsLists: productItemsList,
    searchInput: '',
  }

  onChangeCheckedProduct = id => {
    this.setState(prevState => ({
      productsLists: prevState.productsLists.map(eachPro => {
        if (eachPro.id === id) {
          return {
            ...eachPro,
            isApproved: true,
            status: 'Approved',
          }
        }

        return eachPro
      }),
    }))
  }

  onChangeCrossCheckedProductStatus = (id, statusVal) => {
    this.setState(prevState => ({
      productsLists: prevState.productsLists.map(eachPro => {
        if (eachPro.id === id) {
          return {
            ...eachPro,
            isApproved: true,
            status: statusVal,
          }
        }
        return eachPro
      }),
    }))
  }

  onChangeSearchInput = event => {
    const searchValue = event.target.value
    this.setState({searchInput: searchValue})
  }

  onChangeProductStatus = (
    id,
    updatedStatus,
    priceVal,
    quantityVal,
    totalVal,
  ) => {
    this.setState(prevState => ({
      productsLists: prevState.productsLists.map(eachPro => {
        if (eachPro.id === id) {
          return {
            ...eachPro,
            isApproved: true,
            status: updatedStatus,
            price: priceVal,
            quantity: quantityVal,
            total: totalVal,
          }
        }
        return eachPro
      }),
    }))
  }

  render() {
    const {productsLists, searchInput} = this.state

    const updatedProductsLists = productsLists.filter(eachPro =>
      eachPro.productName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <ProductsPageContainer>
        <CardContainer>
          <SearchAndAddItemButtonContainer>
            <SearchBarContainer>
              <SearchInput
                type="text"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
              />
              <SearchIconButton>
                <FiSearch size={24} color="#9b9ea9" />
              </SearchIconButton>
            </SearchBarContainer>
            <AddItemButtonContainer>
              <AddItemButton>Add Item</AddItemButton>
              <PrinterIcon>
                <FiPrinter color="#28842d" size={24} />
              </PrinterIcon>
            </AddItemButtonContainer>
          </SearchAndAddItemButtonContainer>

          <TableHeadingsContainer>
            <ProductNameColumn>Product Name</ProductNameColumn>
            <BrandColumn>Brand</BrandColumn>
            <PriceColumn>Price</PriceColumn>
            <QuantityColumn>Quantity</QuantityColumn>
            <TotalPriceColumn>Total</TotalPriceColumn>
            <StatusColumn>Status</StatusColumn>
          </TableHeadingsContainer>

          <AllProductsDetailsContainer>
            {updatedProductsLists.map(eachProduct => (
              <ProductItem
                key={eachProduct.id}
                onChangeCheckedProduct={this.onChangeCheckedProduct}
                productDetails={eachProduct}
                onChangeCrossCheckedProductStatus={
                  this.onChangeCrossCheckedProductStatus
                }
                onChangeProductStatus={this.onChangeProductStatus}
              />
            ))}
          </AllProductsDetailsContainer>
        </CardContainer>
      </ProductsPageContainer>
    )
  }
}

export default Products

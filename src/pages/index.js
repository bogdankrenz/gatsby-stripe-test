import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Skus from '../components/Products/Skus'
import CartOverview from '../components/CartOverview'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe("pk_test_51J3bO6CMK4yYzSIaW9mGmPYB76xwrzw0HUS6DvNVxn6FwBwmWyBFdcx6RwRJi2GeKtzdK5xB1aS8jCYyglhqJrrk00Y5rk5THA")

const isBrowser = typeof window !== "undefined"
const CartExample = () => (
  <Layout>
    <SEO title="Cart Example" />
    <h1>Checkout with cart example</h1>
    <h2>
      With{' '}
      <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a>
    </h2>
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`https://localhost:8000/page-2/`}
      cancelUrl={`https://localhost:8000/`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
      <CartOverview />
      <Skus />
    </CartProvider>
  </Layout>
)

export default CartExample

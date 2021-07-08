import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'

const conatinerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query ProductPrices {
        prices: allSitePage(
          filter: {}
          sort: {}
        ) {
          edges {
            node {
              id
              #active
              #currency
              #product {
              #  id
              #  name
              #}
            }
          }
        }
      }
    `}
    render={({ prices }) => (
      <div style={conatinerStyles}>
        {prices.edges.map(({ node: price }) => {
          const newSku = {
            sku: price.id,
            name: price.product.name,
            price: price.unit_amount,
            currency: price.currency,
          }
          return <SkuCard key={price.id} sku={newSku} />
        })}
      </div>
    )}
  />
)

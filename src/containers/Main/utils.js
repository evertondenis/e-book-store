import Prod1 from 'core/assets/images/foto-do-produto.jpg'
import Prod2 from 'core/assets/images/foto-do-produto-2.jpg'
import Prod3 from 'core/assets/images/foto-do-produto-3.jpg'

export const listProducts = [
  {
    sku: '01',
    img: `${Prod1}`,
    name: 'Insights',
    description: 'The best ecommerce overview in Latin America',
    price: 89.90,
  }, {
    sku: '02',
    img: `${Prod2}`,
    name: 'Aliexpress',
    description: 'Pratical guide for to do excellent purchases in Aliexpress',
    price: 89.90,
  }, {
    sku: '03',
    img: `${Prod3}`,
    name: 'Clothes sizes',
    description: 'Complete guide about clothes sizes from China',
    price: 89.90,
  }
]

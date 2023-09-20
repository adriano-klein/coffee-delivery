// como formatar o valor do product.price em moeda brasileira?

export function FormatPrice(price: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}

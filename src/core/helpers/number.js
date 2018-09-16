const defaultValue = 0.00

export function formatPrice(value = defaultValue) {
  return parseFloat(value).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
}

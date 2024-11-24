export default function (amount: number, { currency } = { currency: 'USD' }) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

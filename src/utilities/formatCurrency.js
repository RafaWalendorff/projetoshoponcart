export const currencyFormatter = (number) => {
  const formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  
  return formatCurrency.format(number);
}
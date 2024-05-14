
{
  const numbers = [3, 21, 12, 5, 56, 21, 3, 4, 5, 8, 29, 19, 20]

  const greaterThanTwenty = numbers.filter(number => number > 20);
  
  console.log(greaterThanTwenty);
}


{
  const products = [
    { name: 'bottle', price: 20, color: 'blue' },
    { name: 'table', price: 230, color: 'dark' },
    { name: 'book', price: 120, color: 'blue' },
    { name: 'shirt', price: 200, color: 'green' },
  ]

  const productBlue = products.filter (product => product.color == 'blue');
  console.log(productBlue);
}
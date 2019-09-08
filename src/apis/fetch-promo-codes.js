export const fetchPromoCodes = () => {
   return Promise.resolve([
      {
         code: 'RRD4D32',
         description: '10% discount for orders above $1000 (pre-discount)',
         type: 'BULK_SPEND',
         minSpend: 1000,
         discountPercentage: 10,
      },
      {
         code: '44F4T11',
         description: '15% discount for orders above $1500 (pre-discount)',
         type: 'BULK_SPEND',
         minSpend: 1500,
         discountPercentage: 15,
      },
      {
         code: 'FF9543D1',
         description: 'Reduces the docgen price to $8.99 a unit when at least 10 documents are purchased',
         type: 'MULTI_BUY',
         requiredInBasket: [
            {
               productId: 'docgen',
               minItems: 10,
            },
         ],
         discounts: [
            {
               productId: 'docgen',
               price: 8.99,
            },
         ],
      },
      {
         code: 'YYGWKJD',
         description: 'Reduces the form price to $89.99 a unit when at least 1 wf is purchased',
         type: 'MULTI_BUY',
         minSpend: 1500,
         requiredInBasket: [
            {
               productId: 'wf',
               minItems: 1,
            },
            {
               productId: 'form',
               minItems: 1,
            },
         ],
         discounts: [
            {
               productId: 'form',
               price: 89.99,
            },
         ],
      },
   ]);
};

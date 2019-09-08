export const fetchProducts = async () => {
   return Promise.resolve([
      {
         productId: 'wf',
         name: 'Workflow',
         price: 199.99,
      },
      {
         productId: 'docgen',
         name: 'Document Generation',
         price: 9.99,
      },
      {
         productId: 'form',
         name: 'Form',
         price: 99.99,
      },
   ]);
};

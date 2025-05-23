let products = '';

export const mount = async (el) => {
  const faker = await import('faker'); 

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};


if(process.env.NODE_ENV == 'development'){
  const el = document.querySelector('#dev-products')
  if(el){
    mount(el);
  }
}



export const mount = async (el) => {
    const faker = await import('faker'); 
  
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  
    el.innerHTML = cartText
  };
  
  // renderCart();

  if(process.env.NODE_ENV == 'development'){
    const el = document.querySelector('#cart-dev')
    if(el){
      mount(el);
    }
  }
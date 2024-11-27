function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
 
 const cartButtons = document.querySelectorAll('.add-to-cart');
 const modal = document.getElementById('cartModal');
 const form = document.getElementById('cartForm');

 let currentProduct = {};

 
 cartButtons.forEach(button => {
     button.addEventListener('click', (e) => {
         const product = e.target.closest('.product');
         currentProduct = {
             name: product.dataset.name,
             price: product.dataset.price
         };
         modal.style.display = 'flex';
     });
 });

 
 form.addEventListener('submit', (e) => {
     e.preventDefault();

    
     const userName = document.getElementById('userName').value;
     const userLocation = document.getElementById('userLocation').value;
     const userPhone = document.getElementById('userPhone').value;
     const quantity = document.getElementById('quantity').value;

     
     const cartData = {
         product: currentProduct,
         user: {
             name: userName,
             location: userLocation,
             phone: userPhone,
         },
         quantity: quantity
     };

     
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
     cart.push(cartData);
     localStorage.setItem('cart', JSON.stringify(cart));

     
     modal.style.display = 'none';
     form.reset();

     alert('Product added to cart!');
 });

 
 window.addEventListener('click', (e) => {
     if (e.target === modal) {
         modal.style.display = 'none';
     }
 });
 document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    
    const contactMessage = {
        name,
        email,
        message,
        date: new Date().toLocaleString(),
    };


    let messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push(contactMessage);
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    
    document.getElementById('contactForm').reset();

    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});

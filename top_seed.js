const mongoose = require('mongoose');
const TopProduct = require('./models/top');

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
    .then(()=>console.log("DB Connected."))
    .catch((err)=>console.log("Something Went Wrong!!"))

const topProducts = [
    {
        name : 'Iphone 11',
        img : 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price : 300,
        wishlist : false,
        cart : false,
        desc1 : "",
        desc2 : ""
    },
    {
        name : 'Nike Shoes',
        img : 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        price : 100,
        wishlist : false,
        cart : false
    },
    {
        name : 'Titan Watch',
        img : 'https://images.unsplash.com/photo-1609587312208-cea54be969e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price : 150,
        wishlist : false,
        cart : false
    },
    {
        name : 'Macbook Pro',
        img : 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price : 250,
        wishlist : false,
        cart : false
    },
    {
        name : 'Drones',
        img : 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHJvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price : 200,
        wishlist : false,
        cart : false
    },
    {
        name: 'More Drones',
        img: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 350,
        wishlist : false,
        cart : false
    },
    {
        name: 'Bicycle',
        img: 'https://images.unsplash.com/photo-1484920274317-87885fcbc504?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnljaWNsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 350,
        wishlist : false,
        cart : false
    },
    {
        name : 'Racing Bike',
        img : 'https://images.unsplash.com/photo-1588627541420-fce3f661b779?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price : 360,
        wishlist : false,
        cart : false
    },
    {
        name : 'Racing Car',
        img : 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price : 430,
        wishlist : false,
        cart : false
    }
];

TopProduct.insertMany(topProducts)
    .then(()=>console.log('Product Seeded'))
    .catch((err)=>console.log('Something Went Wrong!!'));

// Product.deleteMany({})
//     .then(()=> console.log('Deleted everything in the collection!!'));

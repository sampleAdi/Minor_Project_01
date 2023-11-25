const express = require('express');
const app = express();
const path = require('path');
const port = 5555;
const mongoose = require('mongoose');
const Product = require('./models/product');
const TopProduct = require('./models/top');

mongoose.connect('mongodb://127.0.0.1:27017/E-commerce-GLA')
.then(()=>console.log("DB Connected."))
.catch((err)=>console.log("Something Went Wrong!!"))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public/css/')));
app.use('/src', express.static(path.join(__dirname, 'src'), { 'extensions': ['js'] }));

app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send("Hello...");
})
app.get('/products',async (req,res)=>{
    let products = await Product.find({});
    let topProducts = await TopProduct.find({});
    let no_Of_cart=await Product.find({cart:true});
    let cart_count=Object.keys(no_Of_cart).length;
    let no_Of_wishList=await Product.find({wishlist:true});
    let wish_count=Object.keys(no_Of_wishList).length;
    res.render('index',{products,topProducts,wish_count,cart_count});
})

app.get('/about',async (req,res)=>{
    let no_Of_cart=await Product.find({cart:true});
    let cart_count=Object.keys(no_Of_cart).length;
    let no_Of_wishList=await Product.find({wishlist:true});
    let wish_count=Object.keys(no_Of_wishList).length;
    res.render('about',{wish_count,cart_count});
})
app.get('/contact',async (req,res)=>{
    let no_Of_cart=await Product.find({cart:true});
    let cart_count=Object.keys(no_Of_cart).length;
    let no_Of_wishList=await Product.find({wishlist:true});
    let wish_count=Object.keys(no_Of_wishList).length;
    res.render('contact',{wish_count,cart_count});
})

app.get('/product/:id',async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('show',{ product });
})
app.get('/cart',async (req,res)=>{
    let products = await Product.find({ cart : true });
    let no_Of_cart=await Product.find({cart:true});
    let cart_count=Object.keys(no_Of_cart).length;
    let no_Of_wishList=await Product.find({wishlist:true});
    let wish_count=Object.keys(no_Of_wishList).length;
    res.render('cart',{ products,cart_count,wish_count });
});
app.get('/wish',async (req,res)=>{
    let products = await Product.find({ wishlist : true });
    res.render('wishlist',{ products });
})
app.get('/checkout',async (req,res)=>{
    let products = await Product.find({ wishlist : true });
    let no_Of_cart=await Product.find({cart:true});
    let cart_count=Object.keys(no_Of_cart).length;
    let no_Of_wishList=await Product.find({wishlist:true});
    let wish_count=Object.keys(no_Of_wishList).length;
    res.render('checkout',{ products,cart_count,wish_count });
})
app.get('/wish/:id',async(req,res)=>{
    const {id}=req.params;
    const product = await Product.findById(id);
    product.wishlist = false;
    await product.save(); 
    res.redirect('/wish');
})
app.get('/wish/:id/add2cart',async(req,res)=>{
    const { id } = req.params;
    const product = await Product.findById(id);
    product.cart = product.cart === true ? false : true;
    await product.save(); 
    res.redirect('/wish');
})
app.get('/wish/:id/cart2cart',async(req,res)=>{
    const { id } = req.params;
    const product = await Product.findById(id);
    product.cart = product.cart === true ? false : true;
    await product.save(); 
    res.redirect('/cart');
})

app.get('/product/:id/add2cart',async (req,res)=>{
    const { id } = req.params;
    const product = await Product.findById(id);
    product.cart = product.cart === true ? false : true;

    await product.save(); 
    res.redirect(`/product/${id}`);
});
app.get('/product/:id/add2wish',async (req,res)=>{
    const { id } = req.params;
    const top = await Product.findById(id);
    // console.log(top);
    top.wishlist = top.wishlist === true ? false : true;
    await top.save(); 
    res.redirect(`/product/${id}`);
});

app.get('*',(req,res)=>{
    res.send('<h1>So Sorry!!</h1><br><br><img src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="500" height="500" alt="Loading...">');
})

app.listen(port,()=>{
    console.log("Server is start working..");
})

const products = [];

exports.getAddProduct = (req, res, next)=>{

    res.sendFile(path.join(__dirname, '../', 'Views' ,'add-product.html'));
};


exports.postAdddProduct = (req,res,next) =>{
    console.log(req.body);
    res.redirect('/');
}

exports.getProducts = (req, res, next)=>{


    res.sendFile(path.join(__dirname,'../', 'Views', 'shop.html'));
};

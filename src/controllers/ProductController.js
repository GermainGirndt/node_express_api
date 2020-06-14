// The Controller makes essencial operations such as:
// listing, CRUD, etc..

// for db
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // all the registries
    async index(req, res) {
        // query the db for all products
        // const products = await Product.find();

        // destructures the request for getting the page item
        // default value = 1
        const { page = 1 } = req.query
        console.log(page)

        // paginate response
        // page: page (short syntax)
        // (before: await Product.find();)
        const products = await Product.paginate({}, {page, limit: 10});
        // return query results using the json format
        return res.json(products);
    },

    // like python's detail view
    async show(req, res) {
        // search the db
      const product = await Product.findById(req.params.id);
      
      return res.json(product)
    },

    async store(req, res) {

        // req.body contains the whole request body
        // it's usually the request json passed in with the request
        const product = await Product.create(req.body);
        // console.log(mongoose)

        console.log(Product)
        console.log('post request')
        console.log(product);

        return res.json(product);
    },

    // like show + store
    // stores the req.body
    // new for returning new product
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product)
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        // just return a success status
        return res.send();

    },

    async destroy_all(req, res) {

        const products = await Product.find()

        console.log(products)
        for (let product of products) {
            console.log(
            await Product.findByIdAndRemove(product._id))
        }
        return res.send();

    },
};
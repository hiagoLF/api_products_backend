const mongoose = require('mongoose')

const Product = mongoose.model('MainProduct')

module.exports = {
    async index(req, res) {
        const productReturn = await Product.find()
        return res.json(productReturn)
    },

    async store(req, res){        
        const stored = await Product.create(req.body)
        return res.json(stored)
    },

    async update(req, res){
        const {id, ...rest} = req.body

        const made = await Product.findByIdAndUpdate(id, rest)
    },

    async search(req, res){
        const productReturn = await Product.find()
        var productSearch = {}

        for(item of productReturn){
            if(req.params.titleProduct == item.title){
                productSearch = item
                break
            }
        }

        return res.json(productSearch)
    },

    async delete(req, res){
         await Product.findByIdAndDelete(req.body.id)
         return res.send('tudo ok')
    }
}
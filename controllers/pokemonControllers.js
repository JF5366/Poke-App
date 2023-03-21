const Pokemon = require('../models/pokemonModel')



module.exports.index = async(req, res) => {
    try {
        const pokemon = await Pokemon.find()
        res.render('Index', { pokemon: pokemon }) 
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        res.render('Show', { pokemon: pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.new = (req, res) => {
    res.render('New')

}

module.exports.create = async(req, res) => {
    try {
        await Pokemon.create(req.body)
        console.log(result)
        res.redirect('/pokemon')
    } catch(err) {
        console.log('error')
    }
    
}

module.exports.delete = async (req, res) => {
    try{
    await Pokemon.findByIdAndDelete(req.params.id)
    res.redirect('/pokemon')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}
module.exports.edit = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        res.render('Edit', { pokemon: pokemon })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }    
}

module.exports.update = async (req, res) => {
    try{
        await Pokemon.findByIdAndUpdate(req.params.id, req.body) /
        res.redirect(`/pokemon/${req.params.id}`) 

    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

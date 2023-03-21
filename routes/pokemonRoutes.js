const express = require('express')
const router = express.Router() 
const pokemonController = require('../controllers/pokemonControllers')


// //set up an index route for pokemon and attach
 router.get('/', pokemonController.index)
router.post('/', pokemonController.create)
router.get('/new', pokemonController.new)
router.delete('/:id', pokemonController.delete)
router.put('/:id', pokemonController.update)
router.get('/:id', pokemonController.show)
router.get('/:id/edit', pokemonController.edit)


module.exports = router



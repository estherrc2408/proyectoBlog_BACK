const express = require('express');
const router = express.Router();
const {getArticles, getArticle, getSearchedArticles, postArticle, putArticle, deleteArticle} = require('../controllers/apiControllers')

router.get('/', getArticles);      //* GET
router.get('/:id', getArticle);
router.get('/search/:search', getSearchedArticles)//query=lo que haya despues de la interrogacion


router.post('/', postArticle);

router.put('/:id', putArticle);

router.delete('/:id',deleteArticle);

module.exports=router;
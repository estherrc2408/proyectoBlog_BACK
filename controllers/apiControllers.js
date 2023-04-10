const Article = require("../models/articleModel");


const options = {
    page:1,
    limit:3
};

const getArticles = async (req, res) => {

    try {
        const articles = await Article.paginate({},options)
        // const data = articles.docs;

        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo todos los articulos',
            data:articles,
            page: articles.page,
            total: articles.total,
            pages:articles.pages

        })

    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Error al obtener '
        })
    }

}

const getArticle = async (req, res)=>{

    const id=req.params.id

    try{

    const oneArticle = await Article.findById(id);

    if(!oneArticle){
        return res.status(404).json({
            ok:false,
            msg:'article doesnt exist'
        })
    }else{
        return res.status(200).json({
            ok:true,
            msg:'getting one article by id',
            data:oneArticle
        })
    }

    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:'server error'
        })
    }

}

const getSearchedArticles =async (req,res)=>{

    const userSearch = new RegExp(`${req.params.search}`,'i');
    console.log(userSearch);

    try{
        const data = await Article.find({$or:[{title:userSearch},{description:userSearch}] })

        if(!data){
            return res.status(404).json({
                ok:false,
                msg:'search not found'
            })
        }else{
            return  res.status(200).json({
                ok:true,
                msg:'article found',
                data
            })
        }

    }catch(error){
        return res.status(500).json({
            ok:false,
            msg:'server error'
        })
    }
}


const postArticle = async (req, res)=>{

    const newArticle = new Article(req.body);

    try {

        const data = newArticle.save()
        if(!data){
            return res.status(404)
        }else{
            return res.status(201).json({
            ok:true,
            msg:"new article",
            data
        })
        }
        
    } catch (error) {
       
        return res.status(500).json({
            ok: false,
            msg: 'ERROR al crear el articulo.'
        });

    }

}


const putArticle = async(req,res) =>{

    try {  
        
        const id = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        const articleUpdated = await Article.findOneAndUpdate({_id:id},{$set:{title,description}},{new:true});
            return res.status(201).json({
                ok: true,
                msg:"article updated",
                data: articleUpdated
            })
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha encontrado el servicio que quiere actualizar.'
        });

    };

}


const deleteArticle = async(req,res)=>{

    const id=req.params.id

   try {

        await Article.findOneAndDelete({_id:id});

        return res.status(200).json({
            ok: true,
            msg: 'article deleted'
        });
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: la pelicula que quiere eliminar no existe.'
        });

    }
}

module.exports = {
    getArticles,
    getArticle,
    getSearchedArticles,
    postArticle,
    putArticle,
    deleteArticle
}
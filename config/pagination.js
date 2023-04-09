const config ={
    pagination:{
        limit:3,
        page:1
    }

}

const paginationParseParams = ({
    limit=pagination.limit,
    page=pagination.page,
})=>({
    limit:parseInt(limit,10),
    pagr:parseInt(page,10)
});

module.exports = {paginationParseParams}
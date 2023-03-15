const array = [{
    name: 'John',
},
{
    name: 'Jane',
},{
    name: 'Mary',
}]

const searchByName = (arr,query) => {
    return arr.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
}

export {searchByName};
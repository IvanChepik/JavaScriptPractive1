var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

function select()
{
    var fields = [].slice.call(arguments);

    return function(collection)
    {
        return collection.map(function(item, index)
        {
            return cloneItem(item, arguments)
        });

    }
}

function filterIn()
{

}

function cloneCollection(collection)
{
    var newCollection = [];

    collection.forEach(function(item, index) {
        var newKeys = Object.keys(item);
        newCollection.push(cloneItem(item, newKeys));
    })

    return newCollection;
}

function cloneItem(item, properties)
{
    var newItem = {};

    for (var i = 0; i<properties.length; i++)
    {
        newItem[properties[i]] = item[properties[i]]; 
    }

    return newItem;
}

function query(collection)
{
    var operation = select('name');
    var newCollection = operation(collection);
    return newCollection;
}

console.log(query(friends));



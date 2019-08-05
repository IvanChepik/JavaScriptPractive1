var priorities = 
{
    operationSelect:1,
    operationFilterIn: 0
}

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

    return operationSelect  = function(collection)
    {
        return collection.map(function(item, index)
        {
            return cloneItem(item, fields)
        });

    }
}

function filterIn(fieldName)
{
    var acceptedValues = [].slice.call(arguments, 1);

    return operationFilterIn = function(colllection)
    {
        newCollection = cloneCollection(colllection);

        return newCollection.filter(function(item)
        {
            return acceptedValues.indexOf(item[fieldName]) != -1;
        });
    }
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
    var operations = [].slice.call(arguments, 1);

    operations.sort(function(item, nextitem)
    {
        return priorities[item.name] - priorities[nextitem.name];
    });

    return operations.reduce(function(newCollection, operation)
    {
        return operation(newCollection);
    }, collection)

}

function displayCollection(collection)
{
    collection.forEach(function(item)
    {
        console.log(item);
    })
}


var bestFriends = query(friends, filterIn('gender', 'Мужской'), select('gender', 'name'));

displayCollection(bestFriends);
displayCollection(friends);


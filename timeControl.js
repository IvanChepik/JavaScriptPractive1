function editTime(date)
{
    return date.getFullYear() + '-' + AddNullToDate(date.getMonth()) + '-' + AddNullToDate(date.getDate()) + ' ' + AddNullToDate(date.getHours())+':' + AddNullToDate(date.getMinutes());
};

function AddNullToDate(date)
{
    return date<10? '0' + date: date;
}

var time = 
{
    _date : undefined,

    add: function()
    {

    },

    substract: function()
    {
        
    }
};

Object.defineProperty(time, 'date', {
    get: function()
    {
        return this._date;
    },

    set: function(value)
    {
        this._date = value;
        return this;
    }
});

time.date = new Date();
console.log(editTime(time.date));
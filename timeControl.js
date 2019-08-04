var time = 
{
    _date : undefined
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
console.log(time.date);
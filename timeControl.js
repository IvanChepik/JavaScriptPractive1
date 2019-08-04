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

    add: function(duration, typeTime)
    {
        switch (typeTime)
        {
            case 'minutes':
                this._date.setMinutes(this._date.getMinutes() + duration);
                break;
            case 'months':
                this._date.setMonth(this._date.getMonth() + duration);
                break;
            case 'days':
                this._date.setDate(this._date.getDate() + duration);
                break;
            case 'years':
                this._date.setFullYear(this._date.getFullYear() + duration);
                break;
            case 'hours':
                this._date.setHours(this._date.getHours() + duration);
                break;
        }
    },

    substract: function(duration, typeTime)
    {
        switch (typeTime)
        {
            case 'minutes':
                this._date.setMinutes(this._date.getMinutes() - duration);
                break;
            case 'months':
                this._date.setMonth(this._date.getMonth() - duration);
                break;
            case 'days':
                this._date.setDate(this._date.getDate() - duration);
                break;
            case 'years':
                this._date.setFullYear(this._date.getFullYear() - duration);
                break;
            case 'hours':
                this._date.setHours(this._date.getHours() - duration);
                break;
        }
    }
};

Object.defineProperty(time, 'date', {
    get: function()
    {
        return editTime(this._date);
    },

    set: function(value)
    {
        this._date = value;
        return this;
    }
});

time.date = new Date();
console.log(time.date);
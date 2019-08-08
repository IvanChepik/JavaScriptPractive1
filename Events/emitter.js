var events = [];

module.exports = 
{
    on:function(event, subscriber, handler)
    {
        events.push({
            event:event,
            subscriber:subscriber,
            handler:handler
        });
        return this;
    },

    off:function(event, subscriber)
    {
        events = events.filter(function(item)
        {
            return item.event !== event || item.subscriber !== subscriber;
        });

        return this;
    },

    emit:function(event)
    {
        events.forEach(function(item)
        {
            if (item.event === event)
            {
                item.handler.call(item.subscriber);
            }    
        });

        return this;
    }
}


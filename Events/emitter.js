var events = [];

module.exports = 
{
    on:function(event, subscriber, handler)
    {
        events.push({
            event:event,
            subscriber:subscriber,
            handler:handler
        })
        return this;
    },

    off:function(event, subscriber)
    {
        return this;
    },

    emit:function(event)
    {
        events.forEach(function(item, index)
        {
            if (item.event == event)
            {
                item.handler.call(item.subscriber);
            }    
        });

        return this;
    }
}


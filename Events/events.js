var emitter = require('./emitter.js');

var notifications = {
    counter: 0,
    count: function () {
        this.counter++;
    }
};

var logger = {
    logs: []
};

emitter
    .on('new_notification', notifications, notifications.count)
    .on('new_notification', logger, function () {
        this.logs.push('New event commited new_notification');
    })
    .on('new_notification', logger, function () {
        this.logs.push('New notification added. Count =  ' + notifications.counter);
    })
    .emit('new_notification');

console.log(logger.logs);

emitter
    .off('new_notification', logger)
    .emit('new_notification')
    .on('new_notification', logger, function () {
        this.logs.push('New events - new_notification!');
    })
    .emit('new_notification');

console.log(logger.logs);
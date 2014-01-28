var irc = require('irc');
var client = new irc.Client('irc.freenode.net', 'rocbot', {
    channels: ['###rochack'],
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

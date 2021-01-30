module.exports = {
    name: 'gaming',
    description: "this is a gaming command",
    execute(message, args){
        message.channel.send('gaming');
    }
}
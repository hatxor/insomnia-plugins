/**
 * Example template tag that generates a random number 
 * between a user-provided MIN and MAX
 */
module.exports.templateTags = [{
    name: 'oneof',
    displayName: 'OneOf',
    description: 'Returns one of the given values',
    args: [
        {
            displayName: 'Available Values',
            description: 'List of the available values, comma separated',
            type: 'string',
            defaultValue: ''
        }
    ],
    async run (context, values) {
        var items = values.split(',');
        return items[Math.floor(Math.random()*items.length)];
    }
}];

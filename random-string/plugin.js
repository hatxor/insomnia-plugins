/**
 * Example template tag that generates a random number 
 * between a user-provided MIN and MAX
 */
module.exports.templateTags = [{
    name: 'randomstring',
    displayName: 'Random String',
    description: 'Generate random strings',
    args: [
        {
            displayName: 'Length',
            description: 'Length of the value',
            type: 'number',
            defaultValue: 1
        }
    ],
    async run (context, length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzáéíóúñçàèìòù0123456789        ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}];
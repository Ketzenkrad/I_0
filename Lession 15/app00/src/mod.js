function myModule() {
    this.hello = function() {
        return 'test++';
    };
    this.goodbye = function() {
        return 'test--';
    };
}

module.exports = myModule;
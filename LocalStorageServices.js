const LocalStorageServices = {
    GET: function(key) {
        return localStorage[key]
    },
    SET: function(key, value) {
        localStorage[key] = value
    }
};
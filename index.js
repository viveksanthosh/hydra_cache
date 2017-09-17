const CacheFactory = ({ uniqueKey, refresh, }) => {
    if (!uniqueKey) {
        throw new Error('Unique key not defined in options')
    }

    if (typeof refresh! == "function") {
        throw new Error('Refresh in options is not a function')
    }

}
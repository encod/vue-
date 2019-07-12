window._cache_actions_ = [];
window.invokeJS = function (action) {
    _cache_actions_.push(action);
};

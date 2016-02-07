app.service("CurrencyService", function () {
    var _SelectedCurrency = '';
    return {
        getSelectedCurrency: function() {
            return _SelectedCurrency;
        },
        setSelectedCurrency: function(CurrencyCode) {
            _SelectedCurrency = CurrencyCode;
        }
    };
});
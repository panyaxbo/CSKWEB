app.service("LocaleService", function () {
    var _SelectedLocale = '';
    return {
        getSelectedCurrency: function() {
            return _SelectedLocale;
        },
        setSelectedCurrency: function(Locale) {
            _SelectedLocale = Locale;
        }
    };
});
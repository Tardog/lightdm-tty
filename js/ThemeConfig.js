class ThemeConfig {

    constructor() {
        this._config = settings;
    }

    get(option) {
        return this._config[option];
    }

    set(option, value) {
        this._config[option] = value;
    }

}

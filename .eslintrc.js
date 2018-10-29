module.exports = {
    "env": {
        "browser": true
    },
    "extends": ["eslint:recommended", "plugin:sonarjs/recommended"],
    "parserOptions": {
        "ecmaVersion": 5
    },
    "globals": {
        "document": false,
        "window": false,
        "Ext": false,
        "EAM": false,
        "infor": false,
        "gMenuJson": false,
        "gToolbarText": false,
        "gUserData": false,
        "gDebug": false,
        "gAppData": false,
        "gHyperlinkButtons": false,
        "CustomEvent": false,
        "vcei": false,
        "UTILITY": false
    },
    "plugins": ["sonarjs", "hms-plugins"],
    "rules": {
        "indent": "off",
        "linebreak-style": "off",
        "quotes": "off",
        "no-mixed-spaces-and-tabs": "off",
        "semi": ["error", "always"],
        "vars-on-top": "off", // "error",
        "one-var": ["warn", "always"],
        
        //SonarLint rules
        "sonarjs/no-duplicate-string": "off",
        "sonarjs/cognitive-complexity": "off",
        
        //HMS Plugin rules
        "hms-plugins/no-hms-ext-create-method": 2, //0=off, 1=warn, 2=error
        "hms-plugins/no-hms-fieldlabel-asterisk": 2,
        "hms-plugins/no-hms-ext-componentquery": 1,
        "hms-plugins/no-hms-ext-window-autoshow-show": 2,
        "hms-plugins/no-hms-servercall-async": 1,
        "hms-plugins/no-hms-null-undefined": 0,
        "hms-plugins/no-hms-lookup-start-LV": 1,
        "hms-plugins/no-hms-bad-variable-names": 0 // very noisy rule, disabled by default
        
    }
};
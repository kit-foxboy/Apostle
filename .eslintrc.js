module.exports = {

    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
          "createClass": "createReactClass",
          "pragma": "React",
          "version": "detect",
          "flowVersion": "0.53"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
          "Hyperlink",
          {"name": "Link", "linkAttribute": "to"}
        ]
    },
    "rules": {
        // overrides
    }
}
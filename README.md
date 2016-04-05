# angularjs-color-selectbox


AngularJS Color Selectbox Directive

## Installation

#### Bower

```shell
bower install angularjs-color-selectbox --save
```

#### Npm
```shell
npm install angularjs-color-selectbox --save
```

#### Usage

* Include files

    * Bower

    ```html
    <link rel="stylesheet" href="bower_components/angular-color-picker/dist/angularjs-color-picker.min.css" />
    <script src="bower_components/angular-color-picker/dist/angularjs-color-picker.min.js"></script>
    ```

    * Node

    ```html
    <link rel="stylesheet" href="node_modules/angularjs-color-picker/dist/angularjs-color-picker.min.css" />
    <script src="node_modules/angular-color-picker/dist/angularjs-color-picker.min.js"></script>
    ```


* Add the module to your app
```javascript
angular.module('app', ['color.selectbox']);
```

* Include in your view
```html
<color-selectbox onselect="vm.onSelectColor"></color-selectbox>
```

## Options

* onselect: function to be executed when color is chosen.
* item: data for use by controller for the directive
* position: put the menu to right or left of button, default is 'left'
* color: color of button
* size: 'small', 'medium' or 'large', 16, 25 or 36 dots, default is 25

```html
<color-selectbox
    onselect="vm.onSelectColor"
    item="myItem"
    position="'right'"
    color="myColor"
    size="'small'"
></color-picker>
```

## Requirements

* angularjs (v1.3 and higher)
* lodash
* jquery
* fontAwesome

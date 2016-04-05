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
<color-selectbox ng-model="myColor"></color-selectbox>
```

## Options

If a list is given then choose one of the items. The first item in the list will be the default. Only ```ng-model``` is required.
```html
<color-selectbox
    ng-model=""
    color-selectbox-on-change="onColorChange($event, color)"
></color-picker>
```

## Requirements

* angularjs (v1.3 and higher)

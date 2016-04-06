# angularjs-color-selectbox


AngularJS Color Selectbox Directive

## Installation

#### Bower

```shell
bower install angularjs-color-selectbox --save
```


#### Usage

* Include files

    * Bower

```html
<link rel="stylesheet" href="bower_components/angular-color-picker/dist/angularjs-color-picker.min.css" />
<script src="bower_components/angular-color-picker/dist/angularjs-color-picker.min.js"></script>
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


```html
<color-selectbox
    onselect="vm.onSelectColor"
    item="myItem"
    position="'right'"
    color="myColor"

></color-picker>
```

There is a global variable to set the size. This is set with a global
variable rather than a setting on the directive, because the menu
is created just once per page. Size should be 16, 25 (default) or 36.

```javascript
cpSize = 16;
```

The default pallette is a fairly random set of colors listed in
 src/scripts/color-selectbox.directive.js. You'll probably want to edit
the pallette list to suit your requirements. After editing, run

```javascript
grunt build
```

to regenerate the files in the /dist folder.

## Requirements

* angularjs (v1.3 and higher)
* lodash
* jquery
* fontAwesome

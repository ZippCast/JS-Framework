# ZippCast JS-Framework
[![Build Status: Linux](https://travis-ci.org/ZippCast/JS-Framework.svg?branch=master)](https://travis-ci.org/ZippCast/JS-Framework) 
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/o6h1hhr4ifog9dvk?svg=true)](https://ci.appveyor.com/project/LGprodigy/js-framework/branch/master)
[![devDependency Status](https://david-dm.org/ZippCast/JS-Framework/dev-status.svg)](https://david-dm.org/ZippCast/JS-Framework#info=devDependencies)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)


![Picture](https://zcstatic.global.ssl.fastly.net/img/logo-sm-transparent.png)


**ZCJ Library** is a mini javascript library that gets the job done. This library will allow you to extend the native DOM and OBJECT oriented functions.

Much of this project was aimed to create an extensive library similar to Jquery or Mootools with a much much smaller footprint. This library supports all major modern browsers and IE9+. It uses native JS api without any large intrusive methods for selectors. It is very easy to read and decipher exactly what is happening under the hood.

#### View Build Logs/Status
[Linux Build](https://travis-ci.org/ZippCast/JS-Framework)

[Windows Build](https://ci.appveyor.com/project/LGprodigy/js-framework/branch/master)

# How to use
Download a [release](https://github.com/ZippCast/JS-Framework/releases) and include it in your HTML just before the </body> tag.

```html
<script src="URL/Directory/ZCJ.min.js" type="text/javascript"></script>
```


#### How To Extend DOM.prototype
```javascript
ZCJ.mage.extend({});
```
#####e.g.
```javascript
ZCJ.mage.extend({
	hide: function() {
		this.forEach(function () {
			this.style.display = 'none';
		});
	}
});
```
It would be called like this
```javascript
ZCJ('.content').hide();
```

#### How To Add functions
```javascript
ZCJ.magic({});
```
#####e.g.
```javascript
ZCJ.magic({
	something: function(){
		return dostuff;
	}
});
```
It would be called like this
```javascript
ZCJ.something(config_or_whatever);
```


### You can build your own

You will need [NodeJS](https://nodejs.org/en/) installed.

With your command line of choice, enter the project directory, and install the dependencies:

`npm install`

Build your own version:

`grunt`

Check the results in `dist/` folder.




The Apache 2.0 License (Apache-2.0)
Copyright (c) 2017 ZippCast

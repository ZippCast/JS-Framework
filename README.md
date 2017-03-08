
**ZCJ Library** is a mini javascript library that gets the job done. This library will allow you to extend the native DOM and OBJECT oriented functions.

Much of this project was aimed to create an extensive library similar to Jquery or Mootools with a much much smaller footprint. This library supports all major modern browsers and IE9+. It uses native JS api without any large intrusive methods for selectors. It is very easy to read and decipher exactly what is happening under the hood.

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

Enter the project directory and install the dependencies:

`npm install`

Build your own version:

`grunt`

Check the result on `dist/` folder.




The Apache 2.0 License (Apache-2.0)
Copyright (c) 2017 ZippCast

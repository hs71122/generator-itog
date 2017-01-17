# generator-itog
Ionic 2 page and service generator
![](http://i.imgur.com/FAVK3wl.png)
# generator-itog [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![dependencies Status](https://david-dm.org/hs71122/generator-itog/status.svg)](https://david-dm.org/hs71122/generator-itog)
> ionic 2 pages and services generator

## Installation

First, install [Yeoman](http://yeoman.io) and generator-itog using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-itog
```
#How to work with I2G
You can use I2G to generate ionic 2 pages and services (providers). For that go to the root of your project.
 * To generate page 
```bash
yo itog page
```
#example
```bash
I:\webApp_workspace\my-app>yo itog page
Page Generator
? Page Name test
? Page path I:\webApp_workspace\my-app\src\pages
? Would you like to Generator scss file  Yes
   create src\pages\test\test.page.html
   create src\pages\test\test.page.scss
   create src\pages\test\test.page.ts
```
 * To generate service
```bash
yo itog service
```
#example
```bash
I:\webApp_workspace\my-app>yo itog service
Service Generator
? Service Name test
? Service Path I:\webApp_workspace\my-app\src\service
   create src\service\test.service.ts
```
## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

 © [Harshana](www.freethemalloc.com)


[npm-image]: https://badge.fury.io/js/generator-itog.svg
[npm-url]: https://npmjs.org/package/generator-itog
[travis-image]: https://travis-ci.org/hs71122/generator-itog.svg?branch=master
[travis-url]: https://travis-ci.org/hs71122/generator-itog
[daviddm-image]: https://david-dm.org/hs71122/generator-itog.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/hs71122/generator-itog
[coveralls-image]: https://coveralls.io/repos/hs71122/generator-itog/badge.svg
[coveralls-url]: https://coveralls.io/r/hs71122/generator-itog

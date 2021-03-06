# Angular2 Start

An [Angular 2][angular] starter project written in [Typescript 2][typescript] and featuring ([Ahead of Time Compile][aot], [Router][@angular/router], [Forms][@angular/forms], [Services][services], [Async/Lazy Routes][lazyload], [Directives][directives], [Unit tests][unittest] and [E2E tests][e2etest]), [Bootstrap 4][bootstrap], [Sass][sass] [Hot Module Replacement][HMR], [Prerendering][prerender], [Karma][karma], [Protractor][protractor], [Jasmine][jasmine], [Saucelabs][saucelabs], [CircleCI][circleci], [NodeJS][nodejs], [Istanbul][istanbul], [Codelyzer][codelyzer], [@types][types], [Tslint][tslint] and [Webpack 2][webpack].

[![Circle CI](https://circleci.com/gh/thisissoon/angular2-start.svg?style=shield)](https://circleci.com/gh/thisissoon/angular2-start)
[![Coverage Status](https://coveralls.io/repos/github/thisissoon/angular2-start/badge.svg?branch=master)](https://coveralls.io/github/thisissoon/angular2-start?branch=master)

[![Build Status](https://saucelabs.com/browser-matrix/angular2-start.svg)](https://saucelabs.com/beta/builds/7d4321eed40e4d44942db3944619e6fd)

If you're looking for Angular 1.x please use [angular-start][angularstart]

This project structure is heavily based on the [Angular 2 Webpack Starter][@angularclass/webpackstarter] skeleton for a typical [Angular 2][angular]/[Webpack 2][webpack] application.

This seed repo serves as an Angular 2 starter for anyone looking to get up and running with Angular 2 and TypeScript fast. Using a [Webpack 2](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using Protractor for our end-to-end story and Karma for our unit tests.
* Best practices in file and application organization for Angular 2.
* Ready to go build system using Webpack for working with TypeScript.
* Angular 2 examples that are ready to go when experimenting with Angular 2.
* A great Angular 2 seed repo for anyone who wants to start their project.
* Ahead of Time (AoT) compile for rapid page loads of your production builds.
* Tree shaking to automatically remove unused code from your production bundle.
* Testing Angular 2 code with Jasmine and Karma.
* Coverage with Istanbul and Karma
* End-to-end Angular 2 code using [Protractor][protractor] and [Saucelabs][saucelabs].
* Type manager with @types
* Hot Module Replacement with Webpack and [@angularclass/hmr][@angularclass/hmr] and [@angularclass/hmr-loader][@angularclass/hmrloader]
* Sass styling compilation
* Bootstrap 4
* Angular 4 support via changing package.json and any future Angular versions
* Prerendering of static site pages at build time. Useful for sites with static content and a low number of pages.

### Quick start
**Make sure you have Node version >= 5.0 and NPM >= 3**
> Clone/Download the repo then edit `app.ts` inside [`/src/app/app.ts`](/src/app/app.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
git clone --depth 1 https://github.com/thisissoon/angular2-start.git

# change directory to our repo
cd angular2-start

# install the repo with npm
npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
* [Configuration](#configuration)
* [Prerendering](#prerendering)
* [Contributing](#contributing)
* [TypeScript](#typescript)
* [@Types](#types)
* [Frequently asked questions](#frequently-asked-questions)
* [License](#license)


## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-start/
 ├──config/                    * our configuration
 |   ├──helpers.js             * helper functions for our configuration files
 |   ├──spec-bundle.js         * ignore this magic that sets up our angular 2 testing environment
 |   ├──karma.conf.js          * karma config for our unit tests
 |   ├──protractor.dev.conf.js * protractor config for our end-to-end tests when running locally
 |   ├──protractor.ci.conf.js  * protractor config for our end-to-end tests when running via saucelabs
 │   ├──webpack.dev.js         * our development webpack config
 │   ├──webpack.prod.js        * our production webpack config
 │   └──webpack.test.js        * our testing webpack config
 │
 ├──src/                       * our source files that will be compiled to javascript
 |   ├──main.browser.ts        * our entry file for our browser environment
 │   │
 |   ├──index.html             * Index.html: where we generate our index page
 │   │
 |   ├──polyfills.ts           * our polyfills file
 │   │
 |   ├──vendor.browser.ts      * our vendor file
 │   │
 │   ├──app/                   * WebApp: folder
 │   │   ├──app.spec.ts        * a simple test of components in app.ts
 │   │   ├──app.e2e.ts         * a simple end-to-end test for /
 │   │   └──app.ts             * App.ts: a simple version of our App component components
 │   │
 │   ├──assets/                * static assets are served here
 │   │   ├──icon/              * our list of icons from www.favicon-generator.org
 │   │   ├──service-worker.js  * ignore this. Web App service worker that's not complete yet
 │   │   ├──robots.txt         * for search engines to crawl your website
 │   │   └──humans.txt         * for humans to know who the developers are
 │   │
 │   └──scss/                  * Source code for sass global styles
 │       ├──[module].scss      * global styles for module for all devices
 │       └──main.scss          * entry file for all global sass styles
 │
 ├──tslint.json                * typescript lint config
 ├──typedoc.json               * typescript documentation generator
 ├──tsconfig.json              * config that webpack uses for typescript
 ├──package.json               * what npm uses to manage it's dependencies
 └──webpack.config.js          * webpack main configuration file

```

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Optionally you can use [yarn][yarn] (`brew install yarn`) to install node modules
* Ensure you're running the latest versions Node `v4.x.x`+ (or `v5.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `npm install` to install all dependencies or `yarn`
* `npm run server` to start the dev server in another tab

## Running the app
After you have installed all dependencies you can now run the app. Run `npm run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
npm run server
# production
npm run build:prod
npm run server:prod
```

## Other commands

### build files
```bash
# development
npm run build:dev
# production (jit)
npm run build:prod
# AoT
npm run build:aot
```

### hot module replacement
```bash
npm run server:dev:hmr
```

### watch and build files
```bash
npm run watch
```

### run unit tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```

### run end-to-end tests
```bash
# this will start a test server and launch Protractor
npm run test:e2e
```

### run webdriver (for end-to-end)
```bash
npm run ci
```

### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```

### build Docker
```bash
npm run build:docker
```

# Prerendering
Generating static site pages at build time can be enabled in `config/webpack.prod.ts` by uncommenting the [Prerender Spa Plugin][prerender] block in the plugins section and then adding all applicable routes to the array. This plugin will generate a static version of the sites pages at build time.

# Configuration
Configuration files live in `config/` we are currently using webpack, karma, and protractor for different stages of your application

# AoT Don'ts
The following are some things that will make AoT compile fail.

- Don’t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time.
- Don’t use default exports.
- Don’t use form.controls.controlName, use form.get(‘controlName’)
- Don’t use control.errors?.someError, use control.hasError(‘someError’)
- Don’t use functions in your providers, routes or declarations, export a function and then reference that function name
- Inputs, Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public

# Contributing
You can include more examples as components but they must introduce a new concept such as `Home` component (separate folders), and Todo (services). I'll accept pretty much everything so feel free to open a Pull-Request

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 2 includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Debugger for Chrome
> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome

The included `.vscode` automatically connects to the webpack development server on port `3000`.

# Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Definitions with @types

i.e, to have youtube api support, run this command in terminal:
```shell
npm i @types/youtube @types/gapi @types/gapi.youtube
```
In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, add these to **"src/custom-typings.d.ts"** to make peace with the compile check:
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```


# Frequently asked questions
* What's the current browser support for Angular 2?
  * Please view the updated list of [browser support for Angular 2](https://github.com/angularclass/awesome-angular2#current-browser-support-for-angular-2)
* Why is my service, aka provider, is not injecting parameter correctly?
  * Please use `@Injectable()` for your service for typescript to correctly attach the metadata (this is a TypeScript problem)
* How do I run protractor with node 0.12.x?
  * please check out this repo to use the old version of protractor [#146](https://github.com/AngularClass/angular2-webpack-starter/pull/146/files)
* Where do I write my tests?
  * You can write your tests next to your component files. See [`/src/app/+home/home.component.ts`](/src/app/+home/home.component.ts)
* How do I start the app when I get `EACCES` and `EADDRINUSE` errors?
  * The `EADDRINUSE` error means the port `3000` is currently being used and `EACCES` is lack of permission for webpack to build files to `./dist/`
* How to use `sass` for css?
 * `loaders: ['raw-loader','sass-loader']` and `@Component({ styleUrls: ['./filename.scss'] })` see issue [#136](https://github.com/AngularClass/angular2-webpack-starter/issues/136)
* How do I test a Service?
 * See issue [#130](https://github.com/AngularClass/angular2-webpack-starter/issues/130#issuecomment-158872648)
* How do I add `vscode-chrome-debug` support?
 * The VS Code chrome debug extension support can be done via `launch.json` see issue [#144](https://github.com/AngularClass/angular2-webpack-starter/issues/144#issuecomment-164063790)
* How do I make the repo work in a virtual machine?
 * You need to use `0.0.0.0` so revert these changes [#205](https://github.com/AngularClass/angular2-webpack-starter/pull/205/files)
* What are the naming conventions for Angular 2?
 * please see issue [#185](https://github.com/AngularClass/angular2-webpack-starter/issues/185) and PR [196](https://github.com/AngularClass/angular2-webpack-starter/pull/196)
* How do I include bootstrap or jQuery?
 * please see issue [#215](https://github.com/AngularClass/angular2-webpack-starter/issues/215) and [#214](https://github.com/AngularClass/angular2-webpack-starter/issues/214#event-511768416)
* How do I async load a component?
 * see wiki [How-do-I-async-load-a-component-with-AsyncRoute](https://github.com/AngularClass/angular2-webpack-starter/wiki/How-do-I-async-load-a-component-with-AsyncRoute)
* Error: Cannot find module 'tapable'
 * Remove `node_modules/` and run `npm cache clean` then `npm install`
* What about Webpack 2?
 * If you're looking for Webpack 2 version then see the [experimental version](https://github.com/gdi2290/angular2-webpack2-starter) that will be merged soon.
* How do I turn on Hot Module Replacement
 * Run `npm run server:dev:hmr`
* `RangeError: Maximum call stack size exceeded`
 * This is a problem with minifying Angular 2 and it's recent JIT templates. If you set `mangle` to `false` then you should be good.
* Why is the size of my app larger in development?
 * We are using inline source-maps and hot module replacement which will increase the bundle size.
* node-pre-gyp ERR in npm install (Windows)
 * install Python x86 version between 2.5 and 3.0 on windows see issue [#626](https://github.com/AngularClass/angular2-webpack-starter/issues/626)
* `Error:Error: Parse tsconfig error [{"messageText":"Unknown compiler option 'lib'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'strictNullChecks'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'baseUrl'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'paths'.","category":1,"code":5023},{"messageText":"Unknown compiler option 'types'.","category":1,"code":5023}]`
 * remove `node_modules/typescript` and run `npm install typescript@beta`. This repo now uses ts 2.0
* "There are multiple modules with names that only differ in casing"
 * change `c:\[path to angular2-webpack-starter]` to `C:\[path to angular2-webpack-starter]` see [926#issuecomment-245223547](https://github.com/AngularClass/angular2-webpack-starter/issues/926#issuecomment-245223547)


___

# License
 [MIT](/LICENSE)

[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://angular.github.io/protractor/#/
[jasmine]: http://pivotal.github.com/jasmine/
[karma]: https://karma-runner.github.io/
[typescript]: http://www.typescriptlang.org/
[circleci]: https://circleci.com/
[nodejs]: https://nodejs.org/en/
[istanbul]: https://github.com/gotwarlost/istanbul
[tslint]: https://palantir.github.io/tslint/
[webpack]: https://webpack.github.io/
[angular]: https://angular.io/
[nvm]: https://github.com/creationix/nvm
[yarn]: https://yarnpkg.com/
[saucelabs]: http://saucelabs.com/
[angularstart]: https://github.com/thisissoon/angular-start
[types]: https://www.npmjs.com/~types
[bootstrap]: http://getbootstrap.com/
[sass]: http://sass-lang.com/
[hmr]: https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
[codelyzer]: https://github.com/mgechev/codelyzer
[@angularclass/hmr]: [https://github.com/angularclass/angular2-hmr]
[@angularclass/hmrloader]: [https://github.com/angularclass/angular2-hmr-loader]
[@angularclass/webpackstarter]: https://github.com/AngularClass/angular2-webpack-starter
[aot]: https://angular.io/docs/ts/latest/cookbook/aot-compiler.html
[@angular/router]: https://angular.io/docs/ts/latest/guide/router.html
[@angular/forms]: https://angular.io/docs/ts/latest/guide/forms.html
[services]: https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
[lazyload]: https://angular.io/docs/ts/latest/guide/ngmodule.html#!#lazy-load
[directives]: https://angular.io/docs/ts/latest/guide/attribute-directives.html
[unittest]: https://angular.io/docs/ts/latest/guide/testing.html
[e2etest]: https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-
[prerender]: https://github.com/chrisvfritz/prerender-spa-plugin

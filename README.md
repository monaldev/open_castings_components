# Open Castings Components

## Open Castings Components
A component library for OpenCastings to be used by the main app.

## TOC

* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
* [Developing Your Component](#developing-your-component)
* [Testing](#testing)
* [Lint Rules](#lint-rules)
* [Publishing](#publishing)
* [Deploying Storybook](#deploying-storybook)
* [CSS and Styles](#css-and-styles)
* [Updating Your Component with React CDK](#updating-your-component-with-react-cdk)
* [Customizing the Component](#customizing-the-component)

## TODO
- [ ] Create a generator to scaffold new compopnents and modules
- [ ] Create a UMD build that will allow us to serve this library over a CDN

## Prerequisites
- Docker
- [Node.js, npm](https://nodejs.org/en/blog/release/v6.0.0/) (although we have Docker, we still need node on the main machine for linting)
- [Atom](https://atom.io/)
  - [Nuclide](https://nuclide.io/)
  - [linter-eslint](https://github.com/AtomLinter/linter-eslint) plugin
  - [eslint](https://atom.io/packages/eslint) plugin

## Getting Started

Run the following command at the root of the directory:

```
docker-compose build
```

## Developing Your Component
Now we need to work with the component. We have a few different choices when creating our component:

NOTE: I am planning to build a generator that will scaffold this for us, but for now, we just have to go through this manual process. Sorry! :b


### 1. Add a component to an existing module

#### create the component itself:
make a new file: `src/[module]/components/[your_component].js`
add the following line in `src/[module]/components/index.js`:
`export { default as [componentName] } from './[component_file]';` (no `.js` extension necessary)
#### create the story for the component
make a new file: `src/[module]/stories/[your_component].js`
add the following line in `src/[module]/stories/index.js`:
`require('./[component_file]');` (no `.js` extension necessary)

Your're ready to start building your new component!

### 2. Create a new module
create a new folder for the module: `src/[YourModule]`

* Add the following folders:

`components`:
- `index.js` file

`stories`:
- `index.js` file

* Reference the newly created module in the index of the src directory:

in `src/index.js`, add `export * from './[YourModule]/components';`
in `src/index.storybook.js`, add `require('./[YourModule]/stories');`

To make the new component itself, follow the steps from Step 1 above.


Your're ready to start building your new component!


Now, it’s time to start the Storybook so we can see what we are building:

```
docker-compose -f docker-compose.storybook.yaml up
```

The above command starts the Storybook console on [http://localhost:9010](http://localhost:9010/).

You can write your component in ES2015+ syntax. It supports `react` and `babel-stage2` presets.

## Testing

Currently, I am exploring [snapshot testing](https://github.com/kadirahq/storyshots) which may alleviate a lot of the burden of comprehensive tests.

## Lint Rules

Your project is configured with ESLint based on the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript) with some minor changes.

You can apply lint rules with the following commands:

* `npm run lint` (apply lint rules)
* `npm run lintfix` (apply lint rules and fix some common issues)

## Publishing

Before you publish, make sure you’ve customized the following files as necessary:

* package.json (increase the `version` number by 1)

If everything is okay, simply publish your component to NPM with the following command:

```
npm publish
```

This command will transpile your component for ES5 before publishing it to NPM. Your component will work on any JavaScript environment.

## Deploying Storybook

You will usually write your stories while you are developing your component. That allows you to use your storybook as a living document. You could show what your component looks like and different ways to use it.

Then you can simply deploy it to GitHub Pages with the following command:

```
npm run publish-storybook
```

You can link your Storybook URL inside the README file.

Here’s a [sample component](https://github.com/kadira-samples/react-button) listing a Storybook URL.


> You can also publish your storybook automatically when you publish your component to NPM. To do that, simply add the following NPM script to your package.json file:

```js
{
  "scripts": {
    ...
    "postpublish": "npm run publish-storybook"
    ...
  }
}
```

## CSS and Styles

It’s common to include CSS and Styles with your component. There are many ways to do this. Some prefer to write CSS in JS, while some provide a CSS file that lives inside the repo.

### CSS in JS

With this approach, you don’t need to configure anything. You can just use it. However, you should make sure you accept some external styles, which allows the end user to change the look and feel of your component as needed.

### Plain old CSS files

If you are following this approach, make sure to place your CSS files inside the root of your component and not inside the src directory. Then, your end users can import it like this:

```js
import 'my-comp/style.css'
```

You may also need to load this style sheet inside your stories. Simply import the above style sheet into src/stories/index.js with the following command:

```
import '../../style.css'
```

## Updating Your Component with React CDK

This is a plain NPM module without any magic. However, it’s written in a way that allows us to push updates to your repo.

You never need to worry about updating dependencies and build tools. React CDK will take care of that.

First, update React CDK with the following command:

```
npm install -g generator-react-cdk
```

Then, visit your project and apply the following command:

```
yo react-cdk:update
```

This will update the core build tools and the package.json file for dependencies.


> It won’t update dependencies you’ve added; it will only update the dependencies and NPM script React CDK has added.

## Customizing the Component

Since your component is a plain NPM module, you can customize it any way you want. Here are some ways to do so:

### Add dependencies

You can add dependencies to the `package.json` file as needed.

### Change the JavaScript environment

Sometimes you may want to use cutting-edge JavaScript features. You can simply add the necessary Babel preset and change the `.babelrc` file.

### Change other dotfiles

You can change any of the dotfiles, including `.gitignore` and `.npmignore`.

### Customize Storybook

Sometimes you may need to customize your React Storybook. If you do, you’ll usually customize the `.storybook/webpack.config.js` file. Go ahead and do it.

### Add some pre-publish code

React CDK already uses the NPM `pre-publish` hook, so you won’t be able to use it directly. Instead, you can use `.scripts/user/prepublish.sh` to add your own code.

### Configure test utilities

We have included JSDOM(to support enzyme's [full DOM rendering](https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md)) and Babel configurations before running Mocha tests. If you want to add more stuff, simply use the `.scripts/user/pretest.js` file.

### Configure something else

You can configure this project in many ways. Give it a try, and I bet you can do it without our help. If you need help from the core React CDK tools, just create [an issue](https://github.com/kadirahq/react-cdk/issues).

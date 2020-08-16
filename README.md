# JSONPath Visualizer

It's based on create-react-app enhanced with:

- hooks examples
- components examples
- router routes examples
- routes guardians
- asynchronous calls with saga examples
- rootReducer, rootSaga examples
- ready requests library based on axios
- bootstrap and font awesome

Most useful features:

- React Component lifecycle: https://reactjs.org/docs/react-component.html#the-component-lifecycle
- Redux: http://redux.js.org/
- React Router: https://reacttraining.com/react-router/web/guides/quick-start

## Installation

**Download**

- zip

OR

```
git clone git@github.com:MichalOleszczuk/JSONPath_Visualizer.git
```

**Installation**

```
npm install
npm start
```

**Test**

To test in root dir of repository is sampleJson file that you can upload.
After upload you can query and see that given element will have flag "selected"

Example query: $..book[?(@.price<10)]

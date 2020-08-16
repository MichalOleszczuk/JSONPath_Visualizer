import JSONPath from 'jsonpath';
import _ from 'lodash';

export const prepareNewJson = ({ eventValue, currentJson, defaultJson }) => {
  let newJson = _.cloneDeep(currentJson);

  if (eventValue.length > 0) {
    // INFO: Cleanup selected.
    newJson = _.cloneDeep(defaultJson);
    try {
      JSONPath.apply(newJson, eventValue, function (value) {
        return { ...value, selected: true };
      });
    } catch (error) {
      newJson = _.cloneDeep(defaultJson);
    }
  }

  postMessage({ type: 'prepareNewJson', payload: newJson });
};

export const loadJsonFile = ({ file }) => {
  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    if (!!event.target) {
      postMessage({ type: 'loadJsonFile', payload: JSON.parse(event.target.result) });
    }
  };
  fileReader.readAsText(file);
};

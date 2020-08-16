import JSONPath from 'jsonpath';
import _ from 'lodash';
import { mockJson } from '../../../../views/Home/mock.ts';

export const prepareNewJson = ({ eventValue, currentJson, previousJsonQuery }) => {
  let newJson = _.cloneDeep(currentJson);

  if (eventValue.length > 0) {
    // INFO: Cleanup selected.
    newJson = _.cloneDeep(mockJson);
    try {
      JSONPath.apply(newJson, eventValue, function (value) {
        return { ...value, selected: true };
      });
    } catch (error) {
      newJson = _.cloneDeep(mockJson);
    }
  }

  postMessage({ type: 'prepareNewJson', payload: newJson, eventValue, currentJson, previousJsonQuery });
};

import JSONPath from 'jsonpath';
import { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setJsonAction } from '../../services/JSONService/redux/actions/jsonActions';
import { jsonSelector } from '../../services/JSONService/redux/selectors/jsonSelectors';
import { mockJson } from './mock';

export function useHome() {
  const dispatch = useDispatch();
  const [jsonQuery, setJsonQuery] = useState('');
  const { json } = useSelector(jsonSelector, shallowEqual);

  const changeJson = useCallback(
    ({ json }: { json: any }) => {
      dispatch(setJsonAction({ json }));
    },
    [dispatch],
  );

  const onChangeQuery = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length > 0) {
        try {
          // INFO: Cleanup selected.
          const currentJson = { ...json };
          JSONPath.apply(currentJson, jsonQuery, function (value) {
            delete value['selected'];
            return value;
          });
          changeJson({ json: currentJson });
        } catch (error) {
          changeJson({ json: mockJson });
        }
        setJsonQuery(event.target.value);
        try {
          const currentJson = { ...json };
          JSONPath.apply(currentJson, event.target.value, function (value) {
            return { ...value, selected: true };
          });
          changeJson({ json: currentJson });
        } catch (error) {
          changeJson({ json: mockJson });
        }
      }
    },
    [json, changeJson, jsonQuery],
  );

  useEffect(() => {
    changeJson({ json: mockJson });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { jsonQuery, json, changeJson, onChangeQuery };
}

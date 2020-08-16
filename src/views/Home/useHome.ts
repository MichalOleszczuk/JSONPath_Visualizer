import { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setJsonStartAction } from '../../services/JSONService/redux/actions/jsonActions';
import { jsonSelector } from '../../services/JSONService/redux/selectors/jsonSelectors';
import { mockJson } from './mock';

export function useHome() {
  const dispatch = useDispatch();
  const [jsonQuery, setJsonQuery] = useState('');
  const { json, inProgress, error } = useSelector(jsonSelector, shallowEqual);

  const onChangeQuery = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setJsonStartAction({ eventValue: event.target.value, currentJson: json, previousJsonQuery: jsonQuery }));
      setJsonQuery(event.target.value);
    },
    [dispatch, json, jsonQuery],
  );

  useEffect(() => {
    dispatch(setJsonStartAction({ eventValue: '', currentJson: mockJson, previousJsonQuery: jsonQuery }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { jsonQuery, json, inProgress, error, onChangeQuery };
}

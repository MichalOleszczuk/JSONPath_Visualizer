import { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setJsonDefaultAction, setJsonStartAction } from '../../services/JSONService/redux/actions/jsonActions';
import { jsonSelector } from '../../services/JSONService/redux/selectors/jsonSelectors';

export function useHome() {
  const dispatch = useDispatch();
  const [jsonQuery, setJsonQuery] = useState('');
  const { json, inProgress, error, fileLoadInProgress, defaultJson } = useSelector(jsonSelector, shallowEqual);

  const onChangeQuery = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setJsonStartAction({ eventValue: event.target.value, currentJson: json, defaultJson }));
      setJsonQuery(event.target.value);
    },
    [dispatch, json, defaultJson],
  );

  const onUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!!event.target.files && !!event.target.files.length && event.target.files[0].type === 'application/json') {
        dispatch(setJsonDefaultAction({ file: event.target.files[0] }));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    setJsonQuery('');
  }, [fileLoadInProgress]);

  return { jsonQuery, json, inProgress, error, fileLoadInProgress, defaultJson, onChangeQuery, onUpload };
}

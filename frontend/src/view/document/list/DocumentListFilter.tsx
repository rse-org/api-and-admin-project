import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from 'src/modules/document/list/documentListActions';

const DocumentListFilter = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default DocumentListFilter;
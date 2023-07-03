import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useHttp = (apiFn, params) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    apiFn(params)
      .then(res => setData(res))
      .catch(() => toast.error('Smth went wrong!!'));
  }, [apiFn, params]);
  return [data, setData];
};

import { useState, useEffect } from 'react';

export function useResetState(val) {
  const [value, setValue] = useState(val);
  const resetValue = () => {
    setValue(val);
    return val;
  };
  return [value, setValue, resetValue];
}

// 自定义翻页请求hooks
export function useList({ api, initialParams }) {
  // 接口参数
  //const [params, setParams] = useState(initialParams);
  const [params, setParams, resetParams] = useResetState(initialParams);
  // 数据
  //const [list, setList] = useState([]);
  const [list, setList, resetList] = useResetState([]);
  // 总数
  //const [total, setTotal] = useState(0);
  const [total, setTotal, resetTotal] = useResetState(0);
  // 是否还有更多数据
  const [hasMore, setHasMore] = useState(true);
  // 是叠加还是翻页
  const [add, setAdd] = useState(false);
  // hooks自身第一次useEffect不执行，需要外部调用getList触发useEffect
  const [key, setKey] = useState(false);

  //重置状态
  const reset = () => {
    const resetMethods = [resetParams, resetList, resetTotal];
    resetMethods.forEach((method) => method());
  };

  // 采用参数合并的方式
  const getList = (param, option = {}) => {
    const { isAdd = false } = option;
    setParams({ ...params, ...param });
    setAdd(isAdd);
    setKey(true);
  };

  useEffect(() => {
    if (!key || !api) {
      return;
    }
    api(params).then((res) => {
      if (!res) {
        return;
      }
      const { pageSize, pageNo, items } = res;
      setHasMore(pageSize * pageNo < res.total);
      setTotal(res.total);
      setList(!add ? items : [...list, ...items]);
    });
  }, [params, add, key]);
  return { getList, list, hasMore, total, params, reset };
}

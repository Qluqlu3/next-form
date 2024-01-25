import { CHECK_BOX_LIST } from '@/constants';
import React, { useCallback, useState } from 'react';

export const Checkbox = React.memo(() => {
  const [checkedList, setCheckedList] = useState<typeof CHECK_BOX_LIST>(CHECK_BOX_LIST);

  const checkAll = useCallback(() => {
    setCheckedList(checkedList.map((list) => ({ ...list, checked: true })));
  }, []);

  const checkAllOff = useCallback(() => {
    setCheckedList(checkedList.map((list) => ({ ...list, checked: false })));
  }, []);

  const handleClickChecked = useCallback(({ id }: { id: number }) => {
    setCheckedList((prevList) => prevList.map((list) => (list.id === id ? { ...list, checked: !list.checked } : list)));
  }, []);

  return (
    <>
      <div className='flex gap-x-5'>
        <button
          onClick={checkAll}
          className='border py-2 px-3 rounded-lg bg-blue-500 border-blue-500 hover:border-blue-400 hover:bg-blue-400'
        >
          すべてチェック
        </button>
        <button
          onClick={checkAllOff}
          className='border py-2 px-3 rounded-lg bg-blue-500 border-blue-500 hover:border-blue-400 hover:bg-blue-400'
        >
          すべてチェックOFF
        </button>
      </div>
      <div className='flex gap-2 flex-wrap'>
        {checkedList.map((list) => (
          <></>
          // <Checkbox id={list.id} label={list.label} checked={list.checked} onClick={handleClickChecked} />
        ))}
      </div>
    </>
  );
});

import React, { useCallback, useState } from 'react';

import Menu from '@/app/components/Layouts/Menu';
import { Checkbox } from '@/app/components/Checkbox';
import { CHECK_BOX_LIST } from '@/constants';

interface Props {
	temp: string;
}

export const Home: React.FC<Props> = ({ temp }) => {
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
		<div className='flex flex-col gap-y-8 bg-gray-300 h-screen p-5'>
			<h1 className='text-5xl font-bold'>Home</h1>
			<Menu />
			<div className='flex gap-x-3 items-center'>
				<div>気温：</div>
				<span className='block font-semibold text-3xl text-red-600'>{temp}</span>
				<span>°C</span>
			</div>
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
					<Checkbox id={list.id} label={list.label} checked={list.checked} onClick={handleClickChecked} />
				))}
			</div>
		</div>
	);
};

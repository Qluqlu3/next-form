import React from 'react';

interface Props {
	id: number;
	label: string;
	checked: boolean;
	onClick: ({ id }: { id: number }) => void;
	children?: React.ReactNode;
}
export const Checkbox: React.FC<Props> = ({ id, label, checked, onClick }: Props) => {
	return (
		<div className='flex w-[130px] items-center hover:[&>label]:text-gray-600'>
			<input
				id={label}
				type='checkbox'
				checked={checked}
				value={label}
				name={label}
				onChange={() => onClick({ id })}
				className='w-5 h-5 rounded-3xl hover:cursor-pointer mr-1'
			/>
			<label htmlFor={label} className='flex hover:cursor-pointer items-center text-md'>
				{label}
			</label>
		</div>
	);
};

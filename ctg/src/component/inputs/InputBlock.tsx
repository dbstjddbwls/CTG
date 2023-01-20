import React from 'react'

interface Iprops {
    className?: string
    placeholder: string
}

const InputBlock: React.FC<Iprops> = ({className, placeholder}) => {
    return (
        <div className={`${className}`}>
            <label className={'flex justify-center'}>
                <input placeholder={`${placeholder}`} className={'border-b-[2px] w-[300px] px-[10px] py-[5px]'} />
            </label>
        </div>
    )
}

export default InputBlock

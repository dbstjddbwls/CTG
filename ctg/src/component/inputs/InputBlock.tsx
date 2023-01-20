import React, {useEffect, useRef, useState} from 'react'

interface Iprops {
    className?: string
    placeholder: string
}

const InputBlock: React.FC<Iprops> = ({className, placeholder}) => {
    const [isValue, setIsValue] = useState(false)

    const initialRef: any = null
    const inputRef = useRef(initialRef)

    const checkInputValue = (e: any) => {
        const value = inputRef.current.value.replace(/ /g, '')

        if (value) {
            setIsValue(true)
        } else {
            setIsValue(false)
        }
    }

    return (
        <div className={`${className}`}>
            <label className={'flex justify-center'}>
                <input
                    ref={inputRef}
                    placeholder={`${placeholder}`}
                    className={`border-b-[2px] text-[16px] w-full px-[10px] py-[5px] ${
                        isValue ? 'border-[#4bdca3]' : 'border-[#c9c9c9]'
                    }`}
                    onBlur={e => checkInputValue(e.target)}
                />
            </label>
        </div>
    )
}

export default InputBlock

import React, {useEffect, useRef, useState} from 'react'

interface Iprops {
    className?: string
    placeholder: string
}

const InputBlock: React.FC<Iprops> = ({className, placeholder}) => {
    const [isValue, setIsValue] = useState(false)

    const initialRef: any = null
    const TextareaRef = useRef(initialRef)

    const checkTextareaValue = (e: any) => {
        const value = TextareaRef.current.value.replace(/ /g, '')

        if (value) {
            setIsValue(true)
        } else {
            setIsValue(false)
        }
    }

    return (
        <div className={`${className}`}>
            <textarea
                ref={TextareaRef}
                placeholder={`${placeholder}`}
                onBlur={e => checkTextareaValue(e.target)}
                className={`w-full min-h-[100px] p-[10px] resize-none text-[14px] border rounded-[5px] : +
                    ${isValue ? 'border-main' : 'border-[#c9c9c9]'}`}
            />
        </div>
    )
}

export default InputBlock

import React, {useEffect, useRef, useState} from 'react'

interface Iprops {
    className?: string
}

const ImageUploadBlock: React.FC<Iprops> = ({className}) => {
    const [images, setImages] = useState('')
    const FuncA = (e: any) => {
        const uploadImage = e.target?.files[0]?.name
        if (uploadImage) {
            setImages(e.target?.files[0].name)
        } else {
            setImages('')
        }
    }

    return (
        <div className={`${className} mt-[12px]`}>
            <label>
                <div className={'flex justify-end'}>
                    <p className={'text-[14px] py-[7px] mr-[10px]'}>{images}</p>
                    <p
                        className={
                            'w-[80px] text-center cursor-pointer bg-main text-[14px] py-[7px] rounded-[5px] text-[#ffffff] font-bold'
                        }>
                        밈 올리기
                    </p>
                </div>
                <input
                    onChange={e => {
                        FuncA(e)
                    }}
                    type={'file'}
                    className={'hidden'}
                />
            </label>
        </div>
    )
}

export default ImageUploadBlock

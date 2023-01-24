import React, {useEffect, useRef, useState} from 'react'

interface Iprops {
    className?: string
}

const ImageUploadBlock: React.FC<Iprops> = ({className}) => {
    const [images, setImages] = useState('')
    const [previewImage, setPreviewImage]: any = useState()
    const FuncA = (e: any) => {
        const uploadImage = e.target?.files[0]
        if (uploadImage) {
            setImages(uploadImage?.name)
            const reader = new FileReader()
            reader.readAsDataURL(uploadImage)
            reader.onloadend = () => {
                setPreviewImage(reader.result)
            }
        } else {
            setImages('')
        }
    }

    return (
        <div className={`${className} mt-[12px]`}>
            <label>
                <div className={'flex justify-end'}>
                    <p className={'text-[14px] py-[7px] mr-[10px] max-w-[200px] truncate'}>{images}</p>
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
                    accept={'image/*'}
                    className={'hidden'}
                />

                <div className={'mt-[24px]'}>
                    {images && <img src={previewImage && previewImage} className={'m-auto'} />}
                </div>
            </label>
        </div>
    )
}

export default ImageUploadBlock

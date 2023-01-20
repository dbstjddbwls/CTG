import InputBlock from '@/src/component/inputs/InputBlock'
import TextareaBlock from '@/src/component/inputs/TextareaBlock'

const HomeUploadForm = () => {
    return (
        <>
            <div className={'mt-[60px] w-[320px] mx-auto'}>
                <InputBlock placeholder={'Title'} />
                <InputBlock placeholder={'Date'} className={'mt-[24px]'} />
                <TextareaBlock placeholder={'Description'} className={'mt-[32px]'} />
            </div>
        </>
    )
}

export default HomeUploadForm

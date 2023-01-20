import InputBlock from '@/src/component/inputs/InputBlock'

const HomeUploadForm = () => {
    return (
        <>
            <div className={'mt-[60px]'}>
                <InputBlock placeholder={'Title'} />
                <InputBlock placeholder={'Date'} className={'mt-[36px]'} />
            </div>
        </>
    )
}

export default HomeUploadForm

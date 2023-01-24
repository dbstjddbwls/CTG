import Head from 'next/head'
import HomeTitle from '@/src/features/HomeUploadComponent/HomeTitle'
import HomeLayout from '@/src/component/layout/HomeLayout'
import HomeUploadForm from '@/src/features/HomeUploadComponent/HomeUploadForm'

export default function Home() {
    return (
        <>
            <Head>
                <title>2023 올해의 밈</title>
            </Head>
            <HomeLayout>
                <HomeTitle />
                <HomeUploadForm />
            </HomeLayout>
        </>
    )
}

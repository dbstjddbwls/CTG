interface IProps {
    children?: React.ReactNode
}

const HomeLayout = ({children}: IProps) => {
    return (
        <div className={'max-w-[768px] mx-auto py-[60px]'}>
            <main className={''}>{children}</main>
        </div>
    )
}

export default HomeLayout

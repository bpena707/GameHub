import {Logo} from "@/app/_components/logo";

const ClerkLayout = (
    {
        children
    }: {
        children: React.ReactNode
    }) => {
    return (
        <div className='flex flex-col h-full justify-center items-center space-y-6'>
            <Logo />
            {children}
        </div>
    )
}

export default ClerkLayout
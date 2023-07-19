import SocialsList from './SocialsList'

const Footer = () => {
    return (
            <div className="flex flex-row items-center justify-center gap-4 p-6">
                <p className="font-light text-sm"> © 2023 Laura Pham </p>
                <SocialsList />
            </div>
    )
}

export default Footer

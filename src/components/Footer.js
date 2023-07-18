import SocialsList from './SocialsList'

const Footer = () => {
    return (
            <div className="flex flex-row items-center justify-center gap-4 p-4">
                <p className="font-light text-sm">Copyright © 2023 Laura Pham - All Rights Reserved</p>
                <SocialsList />
            </div>
    )
}

export default Footer

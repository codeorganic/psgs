import Link from 'next/link'
import { SocialIcon } from 'react-social-icons';

type Props = {
    pageName: string,
}


const navItems = [
    {
        name: 'About',
        link: '/'
    },
    {
        name: 'Membership',
        link: '/Membership',
    },
    {
        name: 'Events',
        link: '/Events'
    },
    {
        name: 'By Laws',
        link: '/ByLaws'
    },
];

export default function Footer() {

    return (
            <footer className="footer mt-auto py-3 text-center">
                <div className="container">
                    <a className="text-info" href="email:example@example.com">Contact Us</a> 
                    <SocialIcon url="https://facebook.com/example" style={{ height: 20, width: 20, marginLeft: 10 }} />
                    <div className="mb-2"></div>
                    <span className="text-muted">&copy; Copyright 2020, Puget Sound Gesneriad Society</span>
                </div>
            </footer>
    );
}
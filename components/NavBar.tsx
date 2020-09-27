import Link from 'next/link'

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
        name: 'Gallery',
        link: '/Gallery',
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

export default function NavBar({pageName = ''} : Props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        navItems.map((value) => getNavItems(value, pageName))
                    }
                </ul>
            </div>
        </nav>
    );
}

function getNavItems(value, pageName) {

        if (value.name == pageName) {
            return (
                <li className='nav-item active'>
                    <Link href={value.link}>
                        <a className="nav-link">{value.name}
                        <span className="sr-only">(current)</span>
                        </a>
                    </Link>
                </li>
            );
        } else {
            return (
                <li className='nav-item'>
                    <Link href={value.link}>
                        <a className="nav-link">{value.name}</a>
                    </Link>
                </li>
            );
        }
}
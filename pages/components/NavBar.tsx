import Link from 'next/link'

type Props = {
    pageName: string,
}

export default function NavBar({pageName = ''} : Props) {

    const navItems = [
        {
            name: 'About',
            link: '/About'
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

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {
                        navItems.map((value) => {
                            if (value.name == pageName) {
                                <li className='nav-item active'>
                                    <Link href={value.link}>
                                        <a className="nav-link">{value.name}
                                        <span className="sr-only">(current)</span>
                                        </a>
                                    </Link>
                                </li>
                            } else {
                                <li className='nav-item'>
                                    <Link href={value.link}>
                                        <a className="nav-link">{value.name}</a>
                                    </Link>
                                </li>
                            }
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}
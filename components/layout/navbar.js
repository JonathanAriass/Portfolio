import styles from "./navbar.module.css"

export default function Navbar() {

    const navbarLinks = {
        "links": [
            {
                "label": "home",
                "route": "/"
            },
            {
                "label": "projects",
                "route": "/projects"
            },
            {
                "label": "about",
                "route": "/about"
            },
            {
                "label": "resume",
                "route": "/resume"
            }
        ]
    }

    return (
        <header >
            <div className="px-3 py-4">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a className={`d-flex align-items-center my-2 my-lg-0 me-lg-auto ${styles.logo}`} href="/">Ariass</a>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            {navbarLinks.links.map(link => (
                                <li>
                                    <a className={`nav-link text-secondary ${styles.link}`} href={link.route}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );

}
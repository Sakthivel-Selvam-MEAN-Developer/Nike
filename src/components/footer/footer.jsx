import './footer.css'

const Footer = () => {
    return (
        <>
            <footer className='ps-5 pe-5 bg-black mt-5 pt-3 pb-3' id='contact'>
                <div className='d-flex align-items-center'>
                    <div className="brand">
                        <img src="./nike-2-logo-svgrepo-com.svg" alt="" width={80} />
                    </div>
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 text-white d-flex">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#featured">New & Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#running-shoes">Running Shoes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#essentials">Essentials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 text-white d-flex flex-row">
                        <li className="nav-item ms-2 me-2">
                            <a className="nav-link active" aria-current="page" href="#featured">
                                <img src="./facebook.svg" alt="facebook" width={35} />
                            </a>
                        </li>
                        <li className="nav-item ms-2 me-2">
                            <a className="nav-link active" aria-current="page" href="#running-shoes">
                                <img src="./twitter.svg" alt="twitter" width={35} />
                            </a>
                        </li>
                        <li className="nav-item ms-2 me-2">
                            <a className="nav-link active" aria-current="page" href="#essentials">
                                <img src="./youtube.svg" alt="youtube" width={35} />
                            </a>
                        </li>
                        <li className="nav-item ms-2 me-2">
                            <a className="nav-link active" aria-current="page" href="#contact">
                                <img src="./instagram.svg" alt="instagram" width={35} />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export { Footer }
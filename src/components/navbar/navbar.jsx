import './navbar.css'

const NavBar = () => {
    return (
        <>
            <nav className="navbar rounded navbar-expand-lg navbar-light sticky-top bg-white p-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="./nike-4-logo-svgrepo-com.svg" alt="nike-logo" width={70} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
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
                        <ul className='search list-unstyled d-flex align-items-center m-0'>
                            <li className='search-box'>
                                <input type="text" placeholder='Search' className='search-input'/>
                                <span ><img src="./search-alt-svgrepo-com.svg" alt="search" width={25} className='search-icon' /></span>
                            </li>
                            <li>
                                <img src="./heart-svgrepo-com.svg" width={25} alt="heart" />
                            </li>
                            <li>
                                <img src="./bag-svgrepo-com.svg" width={25} alt="heart" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { NavBar }
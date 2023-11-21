import './carousel.css'

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./nike-1.webp" className="d-block w-100" alt="nike" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Gifts that move you</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./nike-2.jpg" className="d-block w-100" alt="nike" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>nike pegasus trail gore-text</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./nick-3.webp" className="d-block w-100" alt="nike" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>only in your city</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./nick-4.webp" className="d-block w-100" alt="nike" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>speed beyond your wildest dream</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./nick-5.webp" className="d-block w-100" alt="nike" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>flights essentials</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export { Carousel }
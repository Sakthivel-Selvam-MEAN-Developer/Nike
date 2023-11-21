import './featured.css'

const Featured = () => {
    return (
        <div className="featured container-fluid d-flex flex-column p-3 mt-5">
            <h3 className='text-center mb-4'>Featured</h3>
            <div className="body d-flex justify-content-between align-items-center overflow-x-scroll ">
                <div className="featured-1 d-flex flex-column align-items-center m-2">
                    <img src="./public/featured-1.webp" alt="" />
                    <p className='m-2'>Most-Wanted Styles</p>
                </div>
                <div className="featured-2 d-flex flex-column align-items-center m-2">
                    <img src="./public/featured-2.webp" alt="" />
                    <p className='m-2'>Asscessories</p>
                </div>
                <div className="featured-3 d-flex flex-column align-items-center m-2">
                    <img src="./public/featured-3.webp" alt="" />
                    <p className='m-2'>Matching Sets</p>
                </div>
            </div>
        </div>
    )
}

export { Featured }
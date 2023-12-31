import './essentials.css'

const Essentials = () => {
    return (
        <div className="container-fluid mt-5" id='essentials'>
            <h3 className='text-center mb-4'>The Essentials</h3>
            <div className="varaity d-md-flex">
                <div className="men m-2 position-relative">
                    <img src="./men-nick.webp" alt="men" />
                    <button className='position-absolute'>Men's</button>
                </div>
                <div className="women m-2 position-relative">
                    <img src="./women-nike.webp" alt="women" />
                    <button className='position-absolute'>Women's</button>
                </div>
                <div className="kids m-2 position-relative">
                    <img src="./kids-nike.webp" alt="kids" />
                    <button className='position-absolute'>Kid's</button>
                </div>
            </div>
        </div>
    )
}

export { Essentials }
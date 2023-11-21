import './running-shoe.css'

const Running_Shoe = () => {
    return (
        <div className="container-fluid running-shoe mt-2 pt-3">
            <h3 className='text-center mb-4'>More Running Shoes</h3>
            <div className="shoes d-flex overflow-x-scroll">
                <div className="shoe ms-2 me-2">
                    <img src="./public/running-shoe-1.jfif" alt="shoe" />
                    <p className="shoe-name m-0">Nike Invinsible 3</p>
                    <p className="for-shoe m-0">Women's Road Running Shoe</p>
                    <p className="MRP m-0"> MRP: 16 995</p>
                </div>
                <div className="shoe ms-2 me-2">
                    <img src="./public/running-shoe-2.jfif" alt="shoe" />
                    <p className="shoe-name m-0">Nike InfinityRN 4 GORE-TEX</p>
                    <p className="for-shoe m-0">Women's Waterproof Road Running Shoe</p>
                    <p className="MRP m-0"> MRP: 16 995</p>
                </div>
                <div className="shoe ms-2 me-2">
                    <img src="./public/running-shoe-3.webp" alt="shoe" />
                    <p className="shoe-name m-0">Nike Structure 25</p>
                    <p className="for-shoe m-0">Men's Road Running Shoe</p>
                    <p className="MRP m-0"> MRP: 11 895</p>
                </div>
                <div className="shoe ms-2 me-2">
                    <img src="./public/running-shoe-4.webp" alt="shoe" />
                    <p className="shoe-name m-0">Nike Structure 25</p>
                    <p className="for-shoe m-0">Women's Road Running Shoe</p>
                    <p className="MRP m-0"> MRP: 11 895</p>
                </div>
                <div className="shoe ms-2 me-2">
                    <img src="./public/running-shoe-5.webp" alt="shoe" />
                    <p className="shoe-name m-0">Nike Structure 25</p>
                    <p className="for-shoe m-0">Women's Road Running Shoe (wide)</p>
                    <p className="MRP m-0"> MRP: 16 995</p>
                </div>
                <div className="shoe ms-2 me-2">
                    <img src="./public/running-shoe-6.webp" alt="shoe" />
                    <p className='member-product m-0'>
                        <small>Member Product</small>
                    </p>
                    <p className="shoe-name m-0">Nike Alfhafly 2</p>
                    <p className="for-shoe m-0">Men's Road Racing Shoe (wide)</p>
                    <p className="MRP m-0"> MRP: 22 795</p>
                </div>
                <div className="shoe ms-2 me-2">
                    <img src="./public/running-shoe-7.jfif" alt="shoe" />
                    <p className="shoe-name m-0">Nike Pegasus 40</p>
                    <p className="for-shoe m-0">Women's Road Running Shoe (wide)</p>
                    <p className="MRP m-0"> MRP: 11 895</p>
                </div>
            </div>
        </div>
    )
}

export { Running_Shoe }
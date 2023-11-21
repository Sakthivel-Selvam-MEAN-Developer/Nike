import { Carousel } from '../carousel/carousel';
import { Essentials } from '../essentials/essentials';
import { Featured } from '../featured/featured';
import { Running_Shoe } from '../running-shoes/running-shoe';
import './main.css';

const Main = () => {

    return (
        <div className="container-fluid mb-2">
            <Carousel />
            <Featured />
            <Running_Shoe />
            <Essentials />
        </div>
    )
}

export { Main }

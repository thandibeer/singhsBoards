import { Carousel } from "react-bootstrap";

const DetailImagesSlider = ({images=[]}) => {
    return ( <Carousel 
                interval={null}>

        {images.map((img,index)=>(
            <Carousel.Item
            interval={5000} key={index}>
                <img src={require(`../images/${img}`)}/>
            </Carousel.Item>
        ))}
    </Carousel> );
}
 
export default DetailImagesSlider;
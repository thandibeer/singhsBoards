import FeaturedProducts from "./featuredProducts";
import VideoSlider from "./videoSlider";

const Home = ({boardsdata=[]}) => {
  let fProducts = boardsdata.filter(p=>p.featured===true);
    return ( <>
    <VideoSlider/>
      <h2 style={{marginLeft:'5%',marginTop:'2rem'}}>Featured</h2>
      <FeaturedProducts products={fProducts}/>
    </> );
}
 
export default Home;
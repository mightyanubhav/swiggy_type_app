const Tiles = ({id, image}) =>{
    const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
    // console.log(image);
    // console.log(id);
    return(
        <li className="tiles">
            <img className="tile-images" src={`${url}${image}`} alt="tile" />
        </li>
    );
}

export default Tiles;
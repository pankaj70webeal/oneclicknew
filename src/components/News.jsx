import image from "../images/Group 604.png"
import image1 from "../images/Group 606.png"

function News() {
  return (
    <>
      <div className="container">
        <div className="image1">
            <img src={image} alt="" />
        </div>
        <div className="image2">
            <img src={image1} alt="" />
        </div>
      </div>
    </>
  )
}

export default News

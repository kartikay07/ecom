import {Link} from "react-router-dom"
const Product = (props) => {
    const { id, title, price, images } = props.data;
    return(
        <div class="col-sm-3">
          <div class="card">
            <img src={images} alt="" className="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{ title }</h5>
              <h1>
                <span>&#8377;</span>
                {price}</h1>
              
              <Link to={'/products/detail/'+ id} class="btn btn-primary btn-block">
                Show Detail
              </Link>
            </div>
          </div>
        </div>
    )  
}
export default Product;
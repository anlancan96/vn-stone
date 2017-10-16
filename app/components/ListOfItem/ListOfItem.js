import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ListOfItem.css';

class ListOfItem extends Component {
    render(){
        return (
            <div className="main main-raised">
                <div className="blog-post">
                    <div className="container">
                        <article id="post-224" className="section section-text">
                            <div className="row">
                                <div className="content-full col-md-12">
                                    <ul className="products">
                                        {this.props.item.map(s=>(
                                            <li className="product type-product">
                                                <div className="card card-product">
                                                    <div className="card-image">
                                                        <a>
                                                        <img style={{width:'230px',height:'350px'}} src={s.src} className="attachment-hestia-shop size-hestia-show"/>
                                                        </a>
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="category"><a>Granite</a></h6>
                                                        <h4 className="card-title">
                                                            <a className="shop-item-title-link">{s.description}</a>
                                                        </h4>
                                                        <div className="card-description">
                                                            <p>Đá tự nhiên </p>
                                                        </div>
                                                        <div className="footer">
                                                            <div className="price">
                                                                <h4>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <span className="woocommerce-Price-currencySymbol">$</span>
                                                                        119.0
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div className="stats">
                                                                <a className="button product_type_simple add_to_cart_button ajax_add_to_cart btn btn-just-icon btn-simple btn-default" title="Contact"><i rel="tooltip" data-original-title="Contact" className="fa fa-address-card"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}     
                                    </ul>               
                                </div>
                            </div>
                        </article>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default ListOfItem;
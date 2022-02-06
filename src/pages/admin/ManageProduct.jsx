/* eslint-disable jsx-a11y/role-supports-aria-props */
export default function ManageProduct() {
  return (
    <div className="container">
      <div className="row">
        {/* start .col-md-4 */}
        <div className="col-lg-4 col-md-6">
          {/* start .single-product */}
          <div className="product product--card">
            <div className="product__thumbnail">
              <img src="images/p1.jpg" alt="Product Images" />
              <div className="prod_option">
                <a
                  href="#test"
                  id="drop2"
                  className="dropdown-trigger"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true">
                  <span className="lnr lnr-cog setting-icon" />
                </a>
                <div className="options dropdown-menu" aria-labelledby="drop2">
                  <ul>
                    <li>
                      <a href="edit-item.html">
                        <span className="lnr lnr-pencil" />
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#test">
                        <span className="lnr lnr-eye" />
                        Hide
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        data-toggle="modal"
                        data-target="#myModal2"
                        className="delete">
                        <span className="lnr lnr-trash" />
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end /.product__thumbnail */}
            <div className="product-desc">
              <a href="#test" className="product_title">
                <h4>MartPlace Extension Bundle</h4>
              </a>
              <ul className="titlebtm">
                <li>
                  <img className="auth-img" src="images/auth.jpg" alt="author images" />
                  <p>
                    <a href="#test">AazzTech</a>
                  </p>
                </li>
                <li className="product_cat">
                  <a href="#test">
                    <span className="lnr lnr-book" />
                    Plugin
                  </a>
                </li>
              </ul>
              <p>
                Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque
                the mattis, leo quam aliquet congue.
              </p>
            </div>
            {/* end /.product-desc */}
            <div className="product-purchase">
              <div className="price_love">
                <span>$10 - $50</span>
                <p>
                  <span className="lnr lnr-heart" /> 90
                </p>
              </div>
              <div className="sell">
                <p>
                  <span className="lnr lnr-cart" />
                  <span>16</span>
                </p>
              </div>
            </div>
            {/* end /.product-purchase */}
          </div>
          {/* end /.single-product */}
        </div>
        {/* end /.col-md-4 */}
        {/* start .col-md-4 */}
        <div className="col-lg-4 col-md-6">
          {/* start .single-product */}
          <div className="product product--card">
            <div className="product__thumbnail">
              <img src="images/p2.jpg" alt="Product Images" />
              <div className="prod_option">
                <a
                  href="#test"
                  id="drop1"
                  className="dropdown-trigger"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true">
                  <span className="lnr lnr-cog setting-icon" />
                </a>
                <div className="options dropdown-menu" aria-labelledby="drop1">
                  <ul>
                    <li>
                      <a href="edit-item.html">
                        <span className="lnr lnr-pencil" />
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#test">
                        <span className="lnr lnr-eye" />
                        Hide
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        data-toggle="modal"
                        data-target="#myModal2"
                        className="delete">
                        <span className="lnr lnr-trash" />
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end /.product__thumbnail */}
            <div className="product-desc">
              <a href="#test" className="product_title">
                <h4>Mccarther Coffee Shop</h4>
              </a>
              <ul className="titlebtm">
                <li>
                  <img className="auth-img" src="images/auth2.jpg" alt="author images" />
                  <p>
                    <a href="#test">AazzTech</a>
                  </p>
                </li>
                <li className="product_cat">
                  <a href="#test">
                    <span className="lnr lnr-book" />
                    Plugin
                  </a>
                </li>
              </ul>
              <p>
                Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque
                the mattis, leo quam aliquet congue.
              </p>
            </div>
            {/* end /.product-desc */}
            <div className="product-purchase">
              <div className="price_love">
                <span>$10</span>
                <p>
                  <span className="lnr lnr-heart" /> 48
                </p>
              </div>
              <div className="rating product--rating">
                <ul>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star-half-o" />
                  </li>
                </ul>
              </div>
              <div className="sell">
                <p>
                  <span className="lnr lnr-cart" />
                  <span>50</span>
                </p>
              </div>
            </div>
            {/* end /.product-purchase */}
          </div>
          {/* end /.single-product */}
        </div>
        {/* end /.col-md-4 */}
        {/* start .col-md-4 */}
        <div className="col-lg-4 col-md-6">
          {/* start .single-product */}
          <div className="product product--card">
            <div className="product__thumbnail">
              <img src="images/p3.jpg" alt="Product Images" />
              <div className="prod_option">
                <a
                  href="#test"
                  id="drop4"
                  className="dropdown-trigger"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true">
                  <span className="lnr lnr-cog setting-icon" />
                </a>
                <div className="options dropdown-menu" aria-labelledby="drop4">
                  <ul>
                    <li>
                      <a href="edit-item.html">
                        <span className="lnr lnr-pencil" />
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#test">
                        <span className="lnr lnr-eye" />
                        Hide
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        data-toggle="modal"
                        data-target="#myModal2"
                        className="delete">
                        <span className="lnr lnr-trash" />
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end /.product__thumbnail */}
            <div className="product-desc">
              <a href="#test" className="product_title">
                <h4>Visibility Manager Subscriptions</h4>
              </a>
              <ul className="titlebtm">
                <li>
                  <img className="auth-img" src="images/auth3.jpg" alt="author images" />
                  <p>
                    <a href="#test">AazzTech</a>
                  </p>
                </li>
                <li className="product_cat">
                  <a href="#test">
                    <span className="lnr lnr-book" />
                    Plugin
                  </a>
                </li>
              </ul>
              <p>
                Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque
                the mattis, leo quam aliquet congue.
              </p>
            </div>
            {/* end /.product-desc */}
            <div className="product-purchase">
              <div className="price_love">
                <span>Free</span>
                <p>
                  <span className="lnr lnr-heart" /> 24
                </p>
              </div>
              <div className="rating product--rating">
                <ul>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star-half-o" />
                  </li>
                </ul>
              </div>
              <div className="sell">
                <p>
                  <span className="lnr lnr-cart" />
                  <span>27</span>
                </p>
              </div>
            </div>
            {/* end /.product-purchase */}
          </div>
          {/* end /.single-product */}
        </div>
        {/* end /.col-md-4 */}
        {/* start .col-md-4 */}
        <div className="col-lg-4 col-md-6">
          {/* start .single-product */}
          <div className="product product--card">
            <div className="product__thumbnail">
              <img src="images/p4.jpg" alt="Product Images" />
              <div className="prod_option">
                <a
                  href="#test"
                  id="drop5"
                  className="dropdown-trigger"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true">
                  <span className="lnr lnr-cog setting-icon" />
                </a>
                <div className="options dropdown-menu" aria-labelledby="drop5">
                  <ul>
                    <li>
                      <a href="edit-item.html">
                        <span className="lnr lnr-pencil" />
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#test">
                        <span className="lnr lnr-eye" />
                        Hide
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        data-toggle="modal"
                        data-target="#myModal2"
                        className="delete">
                        <span className="lnr lnr-trash" />
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end /.product__thumbnail */}
            <div className="product-desc">
              <a href="#test" className="product_title">
                <h4>Ajax Live Search</h4>
              </a>
              <ul className="titlebtm">
                <li>
                  <img className="auth-img" src="images/auth.jpg" alt="author images" />
                  <p>
                    <a href="#test">AazzTech</a>
                  </p>
                </li>
                <li className="product_cat">
                  <a href="#test">
                    <span className="lnr lnr-book" />
                    Plugin
                  </a>
                </li>
              </ul>
              <p>
                Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque
                the mattis, leo quam aliquet congue.
              </p>
            </div>
            {/* end /.product-desc */}
            <div className="product-purchase">
              <div className="price_love">
                <span>$10 - $50</span>
                <p>
                  <span className="lnr lnr-heart" /> 90
                </p>
              </div>
              <div className="rating product--rating">
                <ul>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star-half-o" />
                  </li>
                </ul>
              </div>
              <div className="sell">
                <p>
                  <span className="lnr lnr-cart" />
                  <span>16</span>
                </p>
              </div>
            </div>
            {/* end /.product-purchase */}
          </div>
          {/* end /.single-product */}
        </div>
        {/* end /.col-md-4 */}
        {/* start .col-md-4 */}
        <div className="col-lg-4 col-md-6">
          {/* start .single-product */}
          <div className="product product--card">
            <div className="product__thumbnail">
              <img src="images/p5.jpg" alt="Product Images" />
              <div className="prod_option">
                <a
                  href="#test"
                  id="drop6"
                  className="dropdown-trigger"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true">
                  <span className="lnr lnr-cog setting-icon" />
                </a>
                <div className="options dropdown-menu" aria-labelledby="drop6">
                  <ul>
                    <li>
                      <a href="edit-item.html">
                        <span className="lnr lnr-pencil" />
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#test">
                        <span className="lnr lnr-eye" />
                        Hide
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        data-toggle="modal"
                        data-target="#myModal2"
                        className="delete">
                        <span className="lnr lnr-trash" />
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end /.product__thumbnail */}
            <div className="product-desc">
              <a href="#test" className="product_title">
                <h4>Mccarther Coffee Shop</h4>
              </a>
              <ul className="titlebtm">
                <li>
                  <img className="auth-img" src="images/auth2.jpg" alt="author images" />
                  <p>
                    <a href="#test">AazzTech</a>
                  </p>
                </li>
                <li className="product_cat">
                  <a href="#test">
                    <span className="lnr lnr-book" />
                    Plugin
                  </a>
                </li>
              </ul>
              <p>
                Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque
                the mattis, leo quam aliquet congue.
              </p>
            </div>
            {/* end /.product-desc */}
            <div className="product-purchase">
              <div className="price_love">
                <span>$10</span>
                <p>
                  <span className="lnr lnr-heart" /> 48
                </p>
              </div>
              <div className="sell">
                <p>
                  <span className="lnr lnr-cart" />
                  <span>50</span>
                </p>
              </div>
            </div>
            {/* end /.product-purchase */}
          </div>
          {/* end /.single-product */}
        </div>
        {/* end /.col-md-4 */}
        {/* start .col-md-4 */}
        <div className="col-lg-4 col-md-6">
          {/* start .single-product */}
          <div className="product product--card">
            <div className="product__thumbnail">
              <img src="images/p6.jpg" alt="Product Images" />
              <div className="prod_option">
                <a
                  href="#test"
                  id="drop7"
                  className="dropdown-trigger"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true">
                  <span className="lnr lnr-cog setting-icon" />
                </a>
                <div className="options dropdown-menu" aria-labelledby="drop7">
                  <ul>
                    <li>
                      <a href="edit-item.html">
                        <span className="lnr lnr-pencil" />
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#test">
                        <span className="lnr lnr-eye" />
                        Hide
                      </a>
                    </li>
                    <li>
                      <a
                        href="#test"
                        data-toggle="modal"
                        data-target="#myModal2"
                        className="delete">
                        <span className="lnr lnr-trash" />
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* end /.product__thumbnail */}
            <div className="product-desc">
              <a href="#test" className="product_title">
                <h4>Visibility Manager Subscriptions</h4>
              </a>
              <ul className="titlebtm">
                <li>
                  <img className="auth-img" src="images/auth3.jpg" alt="author images" />
                  <p>
                    <a href="#test">AazzTech</a>
                  </p>
                </li>
                <li className="product_cat">
                  <a href="#test">
                    <span className="lnr lnr-book" />
                    WordPress
                  </a>
                </li>
              </ul>
              <p>
                Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque
                the mattis, leo quam aliquet congue.
              </p>
            </div>
            {/* end /.product-desc */}
            <div className="product-purchase">
              <div className="price_love">
                <span>Free</span>
                <p>
                  <span className="lnr lnr-heart" /> 24
                </p>
              </div>
              <div className="rating product--rating">
                <ul>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star" />
                  </li>
                  <li>
                    <span className="fa fa-star-half-o" />
                  </li>
                </ul>
              </div>
              <div className="sell">
                <p>
                  <span className="lnr lnr-cart" />
                  <span>27</span>
                </p>
              </div>
            </div>
            {/* end /.product-purchase */}
          </div>
          {/* end /.single-product */}
        </div>
        {/* end /.col-md-4 */}
      </div>
    </div>
  );
}

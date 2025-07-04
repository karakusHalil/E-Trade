import "./Reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="tab-panel-reviews content active" id="reviews">
        <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
        <div className="comments">
          <ol className="comment-list">
            <li className="comment-item">
              <div className="comment-avatar">
                <img src="img/avatars/avatar1.jpg" alt />
              </div>
              <div className="comment-text">
                <ul className="comment-star">
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                </ul>
                <div className="comment-meta">
                  <strong>admin</strong>
                  <span>-</span>
                  <time>April 23, 2022</time>
                </div>
                <div className="comment-description">
                  <p>
                    Sed perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
            </li>
            <li className="comment-item">
              <div className="comment-avatar">
                <img src="img/avatars/avatar1.jpg" alt />
              </div>
              <div className="comment-text">
                <ul className="comment-star">
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                  <li>
                    <i className="bi bi-star-fill" />
                  </li>
                </ul>
                <div className="comment-meta">
                  <strong>admin</strong>
                  <span>-</span>
                  <time>April 23, 2022</time>
                </div>
                <div className="comment-description">
                  <p>
                    Sed perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>
        {/* comment form start */}
        <div className="review-form-wrapper">
          <h2>Add a review</h2>
          <form className="comment-form">
            <p className="comment-notes">
              Your email address will not be published. Required fields are
              marked
              <span className="required">*</span>
            </p>
            <div className="comment-form-rating">
              <label>
                Your rating
                <span className="required">*</span>
              </label>
              <div className="stars">
                <a href="#" className="star">
                  <i className="bi bi-star-fill" />
                </a>
                <a href="#" className="star">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </a>
                <a href="#" className="star">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </a>
                <a href="#" className="star">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </a>
                <a href="#" className="star">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </a>
              </div>
            </div>
            <div className="comment-form-comment form-comment">
              <label htmlFor="comment">
                Your review
                <span className="required">*</span>
              </label>
              <textarea
                id="comment-text"
                cols={50}
                rows={10}
                required
                defaultValue={""}
              />
            </div>
            <div className="comment-form-author form-comment">
              <label htmlFor="name">
                Name
                <span className="required">*</span>
              </label>
              <input id="comment-name" type="text" required />
            </div>
            <div className="comment-form-email form-comment">
              <label htmlFor="email">
                Email
                <span className="required">*</span>
              </label>
              <input id="email" type="email" />
            </div>
            <div className="comment-form-cookies">
              <input id="cookies" name="cookies" type="checkbox" />
              <label htmlFor="cookies">
                Save my name, email, and website in this browser for the next
                time I comment.
                <span className="required">*</span>
              </label>
            </div>
            <div className="form-submit">
              <input type="submit" className="btn submit" />
            </div>
          </form>
        </div>
        {/* comment form end */}
      </div>
    </>
  );
};

export default Reviews;

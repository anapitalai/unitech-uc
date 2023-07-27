import React from 'react'
import logo from '../images/download-ebook.png'

const Details = () => {
    return (
        <>
        <section id="details" className="details my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="text-container d-flex flex-column justify-content-center h-100"
              >
                <h2 className="display-6">Unlock Your Blogging Potential</h2>
                <p>
                  Are you ready to unleash your true blogging potential? Our
                  ebook, "Blog Mastery," provides you with the tools and knowledge
                  to take your blog to the next level.
                </p>
                <ul className="list-group list-group-flush lh-lg">
                  <li className="list-group-item">
                    <i className="fas fa-square text-primary"></i>
                    <strong>Unleash Your Creativity:</strong> Our ebook empowers
                    you to unleash your creativity and express your unique voice
                    through your blog.
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-square text-primary"></i>
                    <strong>Maximize Your Reach:</strong> Learn how to optimize
                    your blog for search engines.
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-square text-primary"></i>
                    <strong>Monetization Strategies:</strong> Discover various
                    monetization strategies, such as sponsored content & affiliate
                    marketing.
                  </li>
                </ul>
                <a
                  className="btn btn-primary text-white mt-4 align-self-start"
                  data-bs-toggle="modal"
                  data-bs-target="#modal1"
                  >Get Your Copy Now</a
                >
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container p-5">
                  <img src={ logo } alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
  

      <div id="modal1" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content p-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-container">
                  <img src="images/description.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-container">
                  <h2 className="display-6">Unlock Your Blogging Potential</h2>
                  <p>
                    Are you ready to unleash your true blogging potential? Our
                    ebook, "Blog Mastery," provides you with the tools and
                    knowledge to take your blog to the next level.
                  </p>
                  <ul className="list-group list-group-flush lh-lg">
                    <li className="list-group-item">
                      <i className="fas fa-square text-primary"></i>
                      <strong>Unleash Your Creativity:</strong> Our ebook empowers
                      you to unleash your creativity and express your unique voice
                      through your blog.
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-square text-primary"></i>
                      <strong>Maximize Your Reach:</strong> Learn how to optimize
                      your blog for search engines.
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-square text-primary"></i>
                      <strong>Monetization Strategies:</strong> Discover various
                      monetization strategies, such as sponsored content &
                      affiliate marketing.
                    </li>
                  </ul>
                  <a href="" className="btn btn-primary text-white">Free Download</a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
      <section className="statement mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-container bg-light p-5 rounded-5">
                <h2>Master the Art of Blogging Excellence</h2>
                <p>
                  Transform your blog from a mere hobby to a thriving online
                  business with our ebook, "Blog Mastery: Monetize Your Passion."
                  This invaluable resource is your roadmap to turning your blog
                  into a profitable venture. Learn how to monetize your content
                  through various strategies such as sponsored posts, affiliate
                  marketing, and product creation. Gain insights into building a
                  strong brand, attracting lucrative partnerships, and maximizing
                  your earning potential. Take the leap and unlock the financial
                  rewards of your blogging journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
    
      <section className="details my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container p-5">
                <img src="images/author.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-container d-flex flex-column justify-content-center h-100"
              >
                <h2 className="display-6">Craft Remarkable Content</h2>
                <p>
                  Discover techniques for effective storytelling, engaging
                  visuals, and compelling calls-to-action. Unlock the secrets of
                  creating a consistent and authentic brand voice that sets you
                  apart from the competition.
                </p>
                <ul className="list-group list-group-flush lh-lg">
                  <li className="list-group-item">
                    <i className="fas fa-square text-primary"></i>
                    <strong>Embrace Your Unique Voice:</strong> Learn how to
                    harness the power of your unique voice.
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-square text-primary"></i>
                    <strong>Spark Creativity:</strong> Explore techniques to spark
                    creativity and overcome writer's block.
                  </li>
                  <li className="list-group-item">
                    <i className="fas fa-square text-primary"></i>
                    <strong>Engage Your Readers:</strong> Discover strategies for
                    creating content that engages your readers on a deeper level.
                  </li>
                </ul>
                <a
                  className="btn btn-primary text-white mt-4 align-self-start"
                  data-bs-toggle="modal"
                  data-bs-target="#modal2"
                  >Learn More</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
  
   
      <div id="modal2" className="modal fade">
        <div className="modal-dialog modal-lg mt-7">
          <div className="modal-content p-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-container">
                  <img src="images/author.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-container">
                  <h3 className="display-6">Craft Remarkable Content</h3>
  
                  <p>
                    Discover techniques for effective storytelling, engaging
                    visuals, and compelling calls-to-action. Unlock the secrets of
                    creating a consistent and authentic brand voice that sets you
                    apart from the competition.
                  </p>
                  <ul className="list-group list-group-flush lh-lg mb-3">
                    <li className="list-group-item">
                      <i className="fas fa-square text-primary"></i>
                      <strong>Embrace Your Unique Voice:</strong> Learn how to
                      harness the power of your unique voice.
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-square text-primary"></i>
                      <strong>Spark Creativity:</strong> Explore techniques to
                      spark creativity and overcome writer's block.
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-square text-primary"></i>
                      <strong>Engage Your Readers:</strong> Discover strategies
                      for creating content that engages your readers on a deeper
                      level.
                    </li>
                  </ul>
                  <a href="" className="btn btn-primary text-white">Free Download</a>
                  <button className="btn btn-light" data-bs-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
     
      <section className="testimonials mb-8">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
                className="rounded-circle mb-3"
              />
              <p className="lead fst-italic">
                "This ebook completely transformed my blogging journey. The
                practical strategies and valuable insights helped me take my blog
                to new heights. I highly recommend it!"
              </p>
              <p className="fw-bold">Kenny Smith - Portland, ME</p>
            </div>
  
            <div className="col-md-4 text-center">
              <img
                src="https://randomuser.me/api/portraits/women/32.jpg"
                alt=""
                className="rounded-circle mb-3"
              />
              <p className="lead fst-italic">
                "I'm so grateful for this ebook! It provided me with the guidance
                and inspiration I needed to create engaging content and build a
                loyal readership. It's a game-changer!"
              </p>
              <p className="fw-bold">Laurie Mitchell - Miami, FL</p>
            </div>
  
            <div className="col-md-4 text-center">
              <img
                src="https://randomuser.me/api/portraits/men/31.jpg"
                alt=""
                className="rounded-circle mb-3"
              />
              <p className="lead fst-italic">
                "I can't recommend this ebook enough. It's a treasure of blogging
                wisdom. It helped me unlock my creativity, connect with my
                audience, and achieve remarkable results."
              </p>
              <p className="fw-bold">Henry White - Boston, MA</p>
            </div>
          </div>
        </div>
      </section>
  
  
      <section className="download">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="image-container mt-n6 mb-5">
                <img src="images/download-ebook.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="text-container text-white d-flex flex-column justify-content-center h-100 mb-5"
              >
                <h2 className="fw-bold">Get Your Free Ebook Now</h2>
                <p>
                  Unlock the power of knowledge and take your blogging journey to
                  the next level. Our ebook, "Blog Mastery: The Ultimate Guide to
                  Blogging Success," is your key to success.
                </p>
  
                <form>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <button className="btn btn-primary text-white rounded-end">
                      Download
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  
     
      <section className="social text-bg-dark py-6 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center fs-4">
              <p>
                Stay connected and join our vibrant community. For any inquiries
                or assistance, feel free to reach out to us
              </p>
              <div className="social-icons d-flex justify-content-center gap-4">
                <i className="fab fa-facebook fa-2x"></i>
                <i className="fab fa-twitter fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
                <i className="fab fa-linkedin fa-2x"></i>
                <i className="fab fa-pinterest fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
    )
}

export default Details

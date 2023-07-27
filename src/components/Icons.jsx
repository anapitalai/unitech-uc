import React from 'react'

const Icons = () => {
    return (
   
        <section className="icons bg-light pb-5">
          <div className="container-xl">
            <div className="row hstack g-4">
              <div className="col-md-4 d-flex gap-4">
                <i className="fas fa-user fa-3x text-primary"></i>
                <div>
                  <h5 className="fw-bold">Unlock Your Blogging Potential</h5>
                  <p className="text-muted">
                    Discover the key to unleashing your true blogging potential. Our
                    ebook provides expert guidance on creating compelling content
                  </p>
                </div>
              </div>
    
              <div className="col-md-4 d-flex gap-4">
                <i className="fas fa-rocket fa-3x text-secondary"></i>
                <div>
                  <h5 className="fw-bold">Skyrocket Your Blog's Success</h5>
                  <p className="text-muted">
                    Take your blog to new heights with our proven strategies for
                    driving traffic and increasing your blog's visibility.
                  </p>
                </div>
              </div>
    
              <div className="col-md-4 d-flex gap-4">
                <i className="fas fa-dollar fa-3x text-primary"></i>
                <div>
                  <h5 className="fw-bold">Monetize Your Blog</h5>
                  <p className="text-muted">
                    Turn your passion for blogging into a profitable venture. Our
                    ebook reveals tried-and-tested monetization strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    )
}

export default Icons

import React from 'react'

const Icons = () => {
    return (
   
        <section className="icons bg-light pb-5">
          <div className="container-xl">
            <div className="row hstack g-4">
              <div className="col-md-4 d-flex gap-4">
                <i className="fas fa-church fa-3x text-primary"></i>
                <div>
                  <h5 className="fw-bold">Church Service Times</h5>
                  <p className="text-muted">
                  Services start at 8 AM every Sunday and anyone can come and join the
                  service.
                  </p>
                </div>
              </div>
    
              <div className="col-md-4 d-flex gap-4">
                <i className="fas fa-music fa-3x text-secondary"></i>
                <div>
                  <h5 className="fw-bold">Music Practice</h5>
                  <p className="text-muted">
                    Music practice is every Wednesdays.
                  </p>
                </div>
              </div>
    
              <div className="col-md-4 d-flex gap-4">
                <i className="fas fa-book-bible fa-3x text-primary"></i>
                <div>
                  <h5 className="fw-bold">Weekly Programs</h5>
                  <p className="text-muted">
                  There are weekly programs that are set and anyone is free during
                  those allocated days can come and join us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    )
}

export default Icons

export default function HomeSlider () {
  return (
    <>
      <section>
        <div className='w-100 position-relative'>
          <div className='feat-wrap3 position-relative overflow-hidden w-100'>
            <div className='feat-img-caro w-100'>
              <div className='d-block w-100'>
                <div
                  className='feat-img position-relative d-block w-100'
                  style={{
                    backgroundImage:
                      'url(assets/images/resources/feat-img2.jpg)'
                  }}
                />
              </div>
              <div className='d-block w-100'>
                <div
                  className='feat-img position-relative d-block w-100'
                  style={{
                    backgroundImage:
                      'url(assets/images/resources/feat-img3.jpg)'
                  }}
                />
              </div>
              <div className='d-block w-100'>
                <div
                  className='feat-img position-relative d-block w-100'
                  style={{
                    backgroundImage:
                      'url(assets/images/resources/feat-img4.jpg)'
                  }}
                />
              </div>
            </div>
            <div className='feat-cap3-wrap z1 position-absolute w-100'>
              <div className='feat-cap3 d-inline-block w-100'>
                <span className='d-block position-relative thm-clr'>
                  Are You Looking for a Change?
                </span>
                <h2 className='mb-0'>
                  Create positive change and achieve extraordinary results.
                </h2>
                <p className='mb-0'>
                  Let the International Coach Federation help you begin your
                  journey as a coach.
                </p>
                <div className='feat-serv-wrap text-center position-relative w-100'>
                  <div className='row mrg30'>
                    <div className='col-md-4 col-sm-4 col-lg-4'>
                      <div className='feat-serv-box w-100'>
                        <i className='flaticon-schizophrenia thm-clr d-inline-block' />
                        <h3 className='mb-0'>
                          <a href='service-detail.html' title=''>
                            Troubling Emotions
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-4 col-lg-4'>
                      <div className='feat-serv-box w-100'>
                        <i className='flaticon-individual thm-clr d-inline-block' />
                        <h3 className='mb-0'>
                          <a href='service-detail.html' title=''>
                            Individual Counselling
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className='col-md-4 col-sm-4 col-lg-4'>
                      <div className='feat-serv-box w-100'>
                        <i className='flaticon-bipolar-1 thm-clr d-inline-block' />
                        <h3 className='mb-0'>
                          <a href='service-detail.html' title=''>
                            Child Counselling
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Featured Wrap 2 */}
        </div>
      </section>
    </>
  )
}

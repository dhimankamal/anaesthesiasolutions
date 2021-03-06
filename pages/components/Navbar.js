import Link from 'next/link'





export default function Navbar (props) {


  return (
    <>
      <header className='style3 w-100'>
        <div className='topbar bg-color11 w-100'>
          <div className='container'>
            <div className='topbar-inner d-flex flex-wrap align-items-center justify-content-between w-100'>
              <div className='header-contact position-relative'>
                <i className='flaticon-telephone position-absolute' />
               {props.number}
              </div>
              <div className='topbar-right d-inline-flex align-items-center flex-wrap'>
                <ul className='top-links mb-0 list-unstyled d-inline-flex align-items-center flex-wrap'>
                  <li>
                    <a href='blog3.html' title=''>
                      News
                    </a>
                  </li>
                  <li>
                    <a href='about.html' title=''>
                      Carrers
                    </a>
                  </li>
                  <li>
                    <a href='services.html' title=''>
                      Services
                    </a>
                  </li>
                </ul>
                <div className='social-links d-inline-flex'>
                  <a
                    href='https://twitter.com/'
                    title='Twtiiter'
                    target='_blank'
                  >
                    <i className='fab fa-twitter' />
                  </a>
                  <a
                    href='https://www.facebook.com/'
                    title='Facebook'
                    target='_blank'
                  >
                    <i className='fab fa-facebook-f' />
                  </a>
                  <a
                    href='https://www.youtube.com/'
                    title='Youtube'
                    target='_blank'
                  >
                    <i className='fab fa-youtube' />
                  </a>
                  <a
                    href='https://www.linkedin.com/'
                    title='Linkedin'
                    target='_blank'
                  >
                    <i className='fab fa-linkedin-in' />
                  </a>
                </div>
                <a
                  className='search-btn d-inline-block position-relative'
                  href='javascript:void(0);'
                  title=''
                >
                  <i className='flaticon-magnifying-glass' />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar */}
        <div className='logo-menu-wrap position-relative w-100'>
          <div className='container'>
            <div className='logo-menu-inner d-flex flex-wrap align-items-center justify-content-between position-relative w-100'>
              <div className='logo v2 z1 bg-color10 position-absolute text-center'>
                <h1 className='mb-0'>
                  <a className='d-block' href='index.html' title='Home'>
                    <img
                      className='img-fluid'
                      src='assets/images/logo4.png'
                      alt='Logo'
                      srcSet='assets/images/retina-logo4.png'
                    />
                  </a>
                </h1>
              </div>
              {/* Logo */}
              <nav className='d-flex flex-wrap align-items-center justify-content-between w-100'>
                <div className='header-left'>
                  <ul className='mb-0 list-unstyled d-inline-flex'>
                    <li>
                      <Link href='/'>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className='menu-item-has-children'>
                      <a href='javascript:void(0);' title=''>
                        Blog
                      </a>
                      <ul className='mb-0 list-unstyled'>
                        <li>
                          <a href='blog.html' title=''>
                            Blog Style 1
                          </a>
                        </li>
                        <li>
                          <a href='blog2.html' title=''>
                            Blog Style 2
                          </a>
                        </li>
                        <li>
                          <a href='blog3.html' title=''>
                            Blog Style 3
                          </a>
                        </li>
                        <li>
                          <a href='blog-detail.html' title=''>
                            Blog Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <a href='javascript:void(0);' title=''>
                        Pages
                      </a>
                      <ul className='mb-0 list-unstyled'>
                        <li className='menu-item-has-children'>
                          <a href='javascript:void(0);' title=''>
                            Our Gallery
                          </a>
                          <ul className='mb-0 list-unstyled'>
                            <li>
                              <a href='gallery.html' title=''>
                                Gallery Style 1
                              </a>
                            </li>
                            <li>
                              <a href='gallery2.html' title=''>
                                Gallery Style 2
                              </a>
                            </li>
                            <li>
                              <a href='gallery3.html' title=''>
                                Gallery Style 3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='menu-item-has-children'>
                          <a href='javascript:void(0);' title=''>
                            Our Services
                          </a>
                          <ul className='mb-0 list-unstyled'>
                            <li>
                              <a href='services.html' title=''>
                                Services
                              </a>
                            </li>
                            <li>
                              <a href='service-detail.html' title=''>
                                Service Detail
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='menu-item-has-children'>
                          <a href='javascript:void(0);' title=''>
                            Our Stories
                          </a>
                          <ul className='mb-0 list-unstyled'>
                            <li>
                              <a href='stories.html' title=''>
                                Success Stories
                              </a>
                            </li>
                            <li>
                              <a href='storie-detail.html' title=''>
                                Story Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='menu-item-has-children'>
                          <a href='javascript:void(0);' title=''>
                            Our Team
                          </a>
                          <ul className='mb-0 list-unstyled'>
                            <li>
                              <a href='team.html' title=''>
                                Team
                              </a>
                            </li>
                            <li>
                              <a href='team-detail.html' title=''>
                                Team Detail
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className='menu-item-has-children'>
                          <a href='javascript:void(0);' title=''>
                            Our Courses
                          </a>
                          <ul className='mb-0 list-unstyled'>
                            <li>
                              <a href='courses.html' title=''>
                                Courses
                              </a>
                            </li>
                            <li>
                              <a href='course-detail.html' title=''>
                                Course Detail
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='appointment.html' title=''>
                            Appointment
                          </a>
                        </li>
                        <li>
                          <a href='archive.html' title=''>
                            Archive Page
                          </a>
                        </li>
                        <li>
                          <a href='counselling.html' title=''>
                            Counselling
                          </a>
                        </li>
                        <li>
                          <a href='search-found.html' title=''>
                            Search Found
                          </a>
                        </li>
                        <li>
                          <a href='404.html' title=''>
                            404 Error Page
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className='menu-item-has-children'>
                      <a href='javascript:void(0);' title=''>
                        Products
                      </a>
                      <ul className='mb-0 list-unstyled'>
                        <li>
                          <a href='products.html' title=''>
                            Products
                          </a>
                        </li>
                        <li>
                          <a href='product-detail.html' title=''>
                            Product Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href='aboutus'>
                        <a title=''>About</a>
                      </Link>
                    </li>
                    <li>
                      <a href='contact.html' title=''>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='header-right d-inline-flex flex-wrap align-items-center'>
                  <a
                    className='thm-btn v2 scndry-bg brd-rd5 d-inline-block position-relative overflow-hidden'
                    href='appointment.html'
                    title=''
                  >
                    Join Free Coaching
                  </a>
                </div>
              </nav>
              {/* Navigation */}
            </div>
          </div>
        </div>
        {/* Logo & Menu Wrap */}
      </header>

      <div className='sticky-menu'>
        <div className='container'>
          <div className='sticky-menu-inner d-flex flex-wrap align-items-center justify-content-between w-100'>
            <div className='logo'>
              <h1 className='mb-0'>
                <a className='d-block' href='index.html' title='Home'>
                  <img
                    className='img-fluid'
                    src='assets/images/logo6.png'
                    alt='Logo'
                    srcSet='assets/images/retina-logo6.png'
                  />
                </a>
              </h1>
            </div>
            {/* Logo */}
            <nav className='d-flex flex-wrap align-items-center justify-content-between'>
              <div className='header-left'>
                <ul className='mb-0 list-unstyled d-inline-flex'>
                  <li className='menu-item-has-children'>
                    <a href='javascript:void(0);' title=''>
                      Home
                    </a>
                    <ul className='mb-0 list-unstyled'>
                      <li>
                        <a href='index.html' title=''>
                          Homepage 1
                        </a>
                      </li>
                      <li>
                        <a href='index2.html' title=''>
                          Homepage 2
                        </a>
                      </li>
                      <li>
                        <a href='index3.html' title=''>
                          Homepage 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a href='javascript:void(0);' title=''>
                      Blog
                    </a>
                    <ul className='mb-0 list-unstyled'>
                      <li>
                        <a href='blog.html' title=''>
                          Blog Style 1
                        </a>
                      </li>
                      <li>
                        <a href='blog2.html' title=''>
                          Blog Style 2
                        </a>
                      </li>
                      <li>
                        <a href='blog3.html' title=''>
                          Blog Style 3
                        </a>
                      </li>
                      <li>
                        <a href='blog-detail.html' title=''>
                          Blog Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a href='javascript:void(0);' title=''>
                      Pages
                    </a>
                    <ul className='mb-0 list-unstyled'>
                      <li className='menu-item-has-children'>
                        <a href='javascript:void(0);' title=''>
                          Our Gallery
                        </a>
                        <ul className='mb-0 list-unstyled'>
                          <li>
                            <a href='gallery.html' title=''>
                              Gallery Style 1
                            </a>
                          </li>
                          <li>
                            <a href='gallery2.html' title=''>
                              Gallery Style 2
                            </a>
                          </li>
                          <li>
                            <a href='gallery3.html' title=''>
                              Gallery Style 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='javascript:void(0);' title=''>
                          Our Services
                        </a>
                        <ul className='mb-0 list-unstyled'>
                          <li>
                            <a href='services.html' title=''>
                              Services
                            </a>
                          </li>
                          <li>
                            <a href='service-detail.html' title=''>
                              Service Detail
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='javascript:void(0);' title=''>
                          Our Stories
                        </a>
                        <ul className='mb-0 list-unstyled'>
                          <li>
                            <a href='stories.html' title=''>
                              Success Stories
                            </a>
                          </li>
                          <li>
                            <a href='storie-detail.html' title=''>
                              Story Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='javascript:void(0);' title=''>
                          Our Team
                        </a>
                        <ul className='mb-0 list-unstyled'>
                          <li>
                            <a href='team.html' title=''>
                              Team
                            </a>
                          </li>
                          <li>
                            <a href='team-detail.html' title=''>
                              Team Detail
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='menu-item-has-children'>
                        <a href='javascript:void(0);' title=''>
                          Our Courses
                        </a>
                        <ul className='mb-0 list-unstyled'>
                          <li>
                            <a href='courses.html' title=''>
                              Courses
                            </a>
                          </li>
                          <li>
                            <a href='course-detail.html' title=''>
                              Course Detail
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='appointment.html' title=''>
                          Appointment
                        </a>
                      </li>
                      <li>
                        <a href='archive.html' title=''>
                          Archive Page
                        </a>
                      </li>
                      <li>
                        <a href='counselling.html' title=''>
                          Counselling
                        </a>
                      </li>
                      <li>
                        <a href='search-found.html' title=''>
                          Search Found
                        </a>
                      </li>
                      <li>
                        <a href='404.html' title=''>
                          404 Error Page
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='menu-item-has-children'>
                    <a href='javascript:void(0);' title=''>
                      Products
                    </a>
                    <ul className='mb-0 list-unstyled'>
                      <li>
                        <a href='products.html' title=''>
                          Products
                        </a>
                      </li>
                      <li>
                        <a href='product-detail.html' title=''>
                          Product Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='about.html' title=''>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='contact.html' title=''>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className='rspn-hdr'>
        <div className='rspn-mdbr'>
          <div className='rspn-scil d-inline-flex flex-wrap'>
            <a
              className='twitter-hvr'
              href='https://twitter.com/'
              title='Twtiiter'
              target='_blank'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              className='facebook-hvr'
              href='https://www.facebook.com/'
              title='Facebook'
              target='_blank'
            >
              <i className='fab fa-facebook-f' />
            </a>
            <a
              className='youtube-hvr'
              href='https://www.youtube.com/'
              title='Youtube'
              target='_blank'
            >
              <i className='fab fa-youtube' />
            </a>
            <a
              className='linkedin-hvr'
              href='https://www.linkedin.com/'
              title='Linkedin'
              target='_blank'
            >
              <i className='fab fa-linkedin-in' />
            </a>
          </div>
          <form className='rspn-srch'>
            <input type='text' placeholder='Enter Your Keyword' />
            <button type='submit'>
              <i className='fa fa-search' />
            </button>
          </form>
        </div>
        <div className='lg-mn'>
          <div className='logo'>
            <h1 className='mb-0 d-block'>
              <a href='index.html' title='Home'>
                <img src='assets/images/logo6.png' alt='Logo' />
              </a>
            </h1>
          </div>
          <div className='rspn-cnt'>
            <span>
              <i className='thm-clr far fa-envelope' />
              <a href='mailto:info@youremailid.com' title=''>
                info@youremailid.com
              </a>
            </span>
            <span>
              <i className='thm-clr fas fa-phone-alt' />
              +96 125 554 24 5
            </span>
          </div>
          <span className='rspn-mnu-btn'>
            <i className='fa fa-list-ul' />
          </span>
        </div>
        <div className='rsnp-mnu'>
          <span className='rspn-mnu-cls'>
            <i className='fa fa-times' />
          </span>
          <ul className='mb-0 list-unstyled w-100'>
            <li className='menu-item-has-children'>
              <a href='javascript:void(0);' title=''>
                Home
              </a>
              <ul className='mb-0 list-unstyled'>
                <li>
                  <a href='index.html' title=''>
                    Homepage 1
                  </a>
                </li>
                <li>
                  <a href='index2.html' title=''>
                    Homepage 2
                  </a>
                </li>
                <li>
                  <a href='index3.html' title=''>
                    Homepage 3
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-item-has-children'>
              <a href='javascript:void(0);' title=''>
                Blog
              </a>
              <ul className='mb-0 list-unstyled'>
                <li>
                  <a href='blog.html' title=''>
                    Blog Style 1
                  </a>
                </li>
                <li>
                  <a href='blog2.html' title=''>
                    Blog Style 2
                  </a>
                </li>
                <li>
                  <a href='blog3.html' title=''>
                    Blog Style 3
                  </a>
                </li>
                <li>
                  <a href='blog-detail.html' title=''>
                    Blog Detail
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-item-has-children'>
              <a href='javascript:void(0);' title=''>
                Pages
              </a>
              <ul className='mb-0 list-unstyled'>
                <li className='menu-item-has-children'>
                  <a href='javascript:void(0);' title=''>
                    Our Gallery
                  </a>
                  <ul className='mb-0 list-unstyled'>
                    <li>
                      <a href='gallery.html' title=''>
                        Gallery Style 1
                      </a>
                    </li>
                    <li>
                      <a href='gallery2.html' title=''>
                        Gallery Style 2
                      </a>
                    </li>
                    <li>
                      <a href='gallery3.html' title=''>
                        Gallery Style 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='javascript:void(0);' title=''>
                    Our Services
                  </a>
                  <ul className='mb-0 list-unstyled'>
                    <li>
                      <a href='services.html' title=''>
                        Services
                      </a>
                    </li>
                    <li>
                      <a href='service-detail.html' title=''>
                        Service Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='javascript:void(0);' title=''>
                    Our Stories
                  </a>
                  <ul className='mb-0 list-unstyled'>
                    <li>
                      <a href='stories.html' title=''>
                        Success Stories
                      </a>
                    </li>
                    <li>
                      <a href='storie-detail.html' title=''>
                        Story Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='javascript:void(0);' title=''>
                    Our Team
                  </a>
                  <ul className='mb-0 list-unstyled'>
                    <li>
                      <a href='team.html' title=''>
                        Team
                      </a>
                    </li>
                    <li>
                      <a href='team-detail.html' title=''>
                        Team Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <a href='javascript:void(0);' title=''>
                    Our Courses
                  </a>
                  <ul className='mb-0 list-unstyled'>
                    <li>
                      <a href='courses.html' title=''>
                        Courses
                      </a>
                    </li>
                    <li>
                      <a href='course-detail.html' title=''>
                        Course Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='appointment.html' title=''>
                    Appointment
                  </a>
                </li>
                <li>
                  <a href='archive.html' title=''>
                    Archive Page
                  </a>
                </li>
                <li>
                  <a href='counselling.html' title=''>
                    Counselling
                  </a>
                </li>
                <li>
                  <a href='search-found.html' title=''>
                    Search Found
                  </a>
                </li>
                <li>
                  <a href='404.html' title=''>
                    404 Error Page
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-item-has-children'>
              <a href='javascript:void(0);' title=''>
                Products
              </a>
              <ul className='mb-0 list-unstyled'>
                <li>
                  <a href='products.html' title=''>
                    Products
                  </a>
                </li>
                <li>
                  <a href='product-detail.html' title=''>
                    Product Detail
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href='about.html' title=''>
                About
              </a>
            </li>
            <li>
              <a href='contact.html' title=''>
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Responsive Menu */}
      </div>
      {/* Responsive Header */}
    </>
  )
}

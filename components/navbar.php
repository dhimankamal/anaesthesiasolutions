   <?php include('./components/common.php');  ?> 
<header class="style2 w-100">
            <div class="topbar scndry-bg w-100">
                <div class="container">
                    <div class="topbar-inner d-flex flex-wrap align-items-center justify-content-between w-100">
                        <p class="mb-0">Visit Us Daily from <?php echo $Time?> </p>
                        <div class="topbar-right d-inline-flex align-items-center flex-wrap">
                            <div class="social-links d-inline-flex">
                                <span class="d-inline-block">Follow Us:</span>
                                <a href="https://twitter.com/" title="Twtiiter" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.youtube.com/" title="Youtube" target="_blank"><i class="fab fa-youtube"></i></a>
                                <a href="https://www.linkedin.com/" title="Linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                            <a class="search-btn d-inline-block position-relative" href="javascript:void(0);" title=""><i class="flaticon-magnifying-glass"></i></a>
                        </div>
                    </div>
                </div>
            </div><!-- Topbar -->
            <div class="logo-contact-menu-wrap v2 position-relative w-100">
                <div class="container">
                    <div class="logo-contact-menu-inner d-flex flex-wrap align-items-center justify-content-between position-relative w-100">
                        <div class="logo v2 z1 scndry-bg position-absolute text-center">
                            <h1 class="mb-0"><a class="d-block" href="index.php" title="Home"><img class="img-fluid" src="assets/images/logo3.png" alt="Logo" srcset="assets/images/retina-logo3.png"></a></h1>
                        </div><!-- Logo -->
                        <nav class="d-flex flex-wrap align-items-center justify-content-between w-100">
                            <div class="header-left">
                                <ul class="mb-0 list-unstyled d-inline-flex">
                                    <?php include('./components/navlinks.php') ?>
                                </ul>
                            </div>
                            <div class="header-right d-inline-flex flex-wrap align-items-center">
                                <div class="header-contact position-relative text-color1"><i class="flaticon-telephone thm-clr position-absolute"></i><?php echo $Phone ; ?></div>
                                <a class="thm-btn v2 thm-bg brd-rd5 d-inline-block position-relative overflow-hidden" href="appointment.php" title=""><i class="flaticon-calendar"></i>Make An Appointment</a>
                            </div>
                        </nav><!-- Navigation -->
                    </div>
                </div>
            </div><!-- Logo Contact & Menu Wrap -->
        </header><!-- Header -->
        <div class="header-search d-flex flex-wrap align-items-center position-fixed w-100">
            <span class="search-close-btn position-absolute"><i class="fas fa-times"></i></span>
            <form class="w-100 position-relative">
                <button type="submit"><i class="flaticon-magnifying-glass"></i></button>
                <input type="text" placeholder="Search">
            </form>
        </div><!-- Header Search -->
        <div class="sticky-menu v2">
            <div class="container">
                <div class="sticky-menu-inner d-flex flex-wrap align-items-center justify-content-between w-100">
                    <div class="logo">
                        <h1 class="mb-0"><a class="d-block" href="index.php" title="Home"><img class="img-fluid" src="assets/images/logo.png" alt="Logo" srcset="assets/images/retina-logo.png"></a></h1>
                    </div><!-- Logo -->
                    <nav class="d-flex flex-wrap align-items-center justify-content-between">
                        <div class="header-left">
                            <ul class="mb-0 list-unstyled d-inline-flex">
                            <?php include('./components/navlinks.php') ?>
                               
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div><!-- Sticky Menu -->
        <div class="rspn-hdr">
            <div class="rspn-mdbr">
                <div class="rspn-scil d-inline-flex flex-wrap">
                    <a class="twitter-hvr" href="https://twitter.com/" title="Twtiiter" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a class="facebook-hvr" href="https://www.facebook.com/" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a class="youtube-hvr" href="https://www.youtube.com/" title="Youtube" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a class="linkedin-hvr" href="https://www.linkedin.com/" title="Linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <form class="rspn-srch">
                    <input type="text" placeholder="Enter Your Keyword">
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <div class="lg-mn">
                <div class="logo">
                    <h1 class="mb-0 d-block"><a href="index.php" title="Home"><img src="assets/images/logo.png" alt="Logo"></a></h1>
                </div>
                <div class="rspn-cnt">
                    <span><i class="thm-clr far fa-envelope"></i><a href="mailto:info@youremailid.com" title="">info@youremailid.com</a></span>
                    <span><i class="thm-clr fas fa-phone-alt"></i>+96 125 554 24 5</span>
                </div>
                <span class="rspn-mnu-btn"><i class="fa fa-list-ul"></i></span>
            </div>
            <div class="rsnp-mnu">
                <span class="rspn-mnu-cls"><i class="fa fa-times"></i></span>
                <ul class="mb-0 list-unstyled w-100">
                <?php include('./components/navlinks.php') ?>
                </ul>
            </div><!-- Responsive Menu -->
        </div><!-- Responsive Header -->
<?php include('./components/common.php');  ?> 
<footer>
    <div class="w-100 style2 pt-90 dark-layer opc9 pb-130 position-relative">
        <div class="fixed-bg" style="background-image: url(assets/images/parallax-bg9.jpg);"></div>
        <div class="container">
            <div class="footer-data w-100">
                <div class="row justify-content-between mrg30">
                    <div class="col-md-6 col-sm-6 col-lg-3">
                        <div class="widget-box v2 w-100">
                            <h4 class="widget-title2 position-relative"><i class="flaticon-idea thm-clr position-absolute"></i>Information</h4>
                            <ul class="contact-info-list mb-0 list-unstyled w-100">
                                <li><span>Phone:</span><?php echo $Phone ;?></li>
                                <li><span>Mail Id:</span><a href="mailto:<?php echo $email ;?>" title=""><?php echo $email ;?></a></li>
                                <li><?php echo $Address ;?></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-3">
                        <div class="widget-box v2 w-100">
                            <h4 class="widget-title2 position-relative"><i class="flaticon-idea thm-clr position-absolute"></i>Services</h4>
                            <ul class="mb-0 list-unstyled w-100">
                                <li><a href="service-detail.php" title="">Counseling</a></li>
                                <li><a href="service-detail.php" title="">Relationships</a></li>
                                <li><a href="service-detail.php" title="">Life coaching</a></li>
                            </ul>
                            <div class="social-links3 d-flex flex-wrap align-items-center w-100">
                                <a class="rounded-circle twitter-hvr" href="<?php echo $twitter ;?>" title="Twtiiter" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a class="rounded-circle facebook-hvr" href="<?php echo $facebook ;?>" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a class="rounded-circle youtube-hvr" href="<?php echo $youtube ;?>" title="Youtube" target="_blank"><i class="fab fa-youtube"></i></a>
                                <a class="rounded-circle linkedin-hvr" href="<?php echo $linkedin ;?>" title="Linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-3">
                        <div class="widget-box v2 w-100">
                            <h4 class="widget-title2 position-relative"><i class="flaticon-idea thm-clr position-absolute"></i>Working hours</h4>
                            <div class="working-hours w-100">
                                <span class="d-block w-100">Mon - Thu:<i class="d-block">09:00am - 05:00pm</i></span>
                                <span class="d-block w-100">Friday:<i class="d-block">01:00pm - 10:00pm</i></span>
                                <span class="d-block w-100">Sat - Sun:<i class="d-block">09:00am - 05:00pm</i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-lg-3">
                        <div class="widget-box v2 newsletter-widget w-100">
                            <h4 class="widget-title2 position-relative"><i class="flaticon-idea thm-clr position-absolute"></i>Newsletter</h4>
                            <p class="mb-0">Sign up to Receive Recent Updates.</p>
                            <form class="newsletter-form brd-rd5 overflow-hidden position-relative w-100">
                                <input type="email" placeholder="Enter your email...">
                                <button type="submit"><i class="flaticon-long-arrow-pointing-to-the-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div><!-- Footer Data -->
        </div>
    </div>
</footer><!-- Footer -->
<div class="bottom-bar v2 w-100">
    <div class="container">
        <div class="bottom-bar-inner d-flex flex-wrap align-items-center justify-content-between w-100">
            <div class="logo v2 z1 scndry-bg position-relative">
                <h1 class="mb-0"><a class="d-block" href="index.php" title="Home"><img class="img-fluid" src="assets/images/logo3.png" alt="Logo" srcset="assets/images/retina-logo3.png"></a></h1>
            </div><!-- Logo -->
            <div class="copyright-links d-inline-flex flex-wrap align-items-center justify-content-between">
                <p class="mb-0"><a href="index.php" title="Neurology">The Anaesthesia Solutions </a> - Copyright 2022. Design by Medicare </a></p>
                <ul class="bottom-links d-flex flex-wrap justify-content-end mb-0 list-unstyled">
                    <li><a href="about.php" title="">About Us</a></li>
                    <li><a href="services.php" title="">Services</a></li>
                    <li><a href="contact.php" title="">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
</div><!-- Bottom Bar -->
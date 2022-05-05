<?php include('./components/header.php');
class doctorDetails
{
    public $name;
    public $type;
}
$docter = array();

$docter[0] = new doctorDetails();
$docter[0]->name = 'Dr Guru Dutt Sharma';
$docter[0]->type = '---';

$docter[1] = new doctorDetails();
$docter[1]->name = 'Dr Ashootosh Sharma ';
$docter[1]->type = '---';

$docter[2] = new doctorDetails();
$docter[2]->name = 'Dr Mukta Singla';
$docter[2]->type = '---';

$docter[3] = new doctorDetails();
$docter[3]->name = 'Dr Navpreet Kaur ';
$docter[3]->type = '---';

$docter[4] = new doctorDetails();
$docter[4]->name = 'Dr Sonia Aneja';
$docter[4]->type = '---';

$docter[5] = new doctorDetails();
$docter[5]->name = 'Dr. Dinesh Sardana';
$docter[5]->type = '---';

$docter[6] = new doctorDetails();
$docter[6]->name = 'Dr. Ribhu Jindal ';
$docter[6]->type = '---';

$docter[7] = new doctorDetails();
$docter[7]->name = 'Dr Barinder Pal Singh';
$docter[7]->type = '---';

$docter[8] = new doctorDetails();
$docter[8]->name = 'Dr Sabeena Khan ';
$docter[8]->type = '---';

$docter[9] = new doctorDetails();
$docter[9]->name = 'Dr. Anie ';
$docter[9]->type = '---';

$docter[10] = new doctorDetails();
$docter[10]->name = 'Dr. Prudhvi Raj';
$docter[10]->type = '---';

$docter[11] = new doctorDetails();
$docter[11]->name = 'Dr. Sairam ';
$docter[11]->type = '---';

$docter[12] = new doctorDetails();
$docter[12]->name = 'Dr Hariharan A';
$docter[12]->type = '---';

$docter[13] = new doctorDetails();
$docter[13]->name = 'Dr Titiksha';
$docter[13]->type = '---';

?>
<pre><?php print_r($docter[0]->name); ?> </pre>

<body>
    <main>
        <?php include('./components/preloader.php');
        include('./components/navbar.php');
        ?>
        <section>
            <div class="w-100 pt-100 black-layer opc5 pb-80 position-relative">
                <div class="fixed-bg" style="background-image: url(assets/images/pag-top-bg.jpg);"></div>
                <div class="container">
                    <div class="page-title-wrap text-center w-100">
                        <div class="page-title-inner d-inline-block">
                            <h1 class="mb-0">Anesthesia Team</h1>
                            <ol class="breadcrumb mb-0 justify-content-center">
                                <li class="breadcrumb-item"><a href="index.php" title="">Home</a></li>
                                <li class="breadcrumb-item">Anesthesia Team</li>
                            </ol>
                        </div>
                    </div><!-- Page Title Wrap -->
                </div>
            </div>
        </section>
        <section>
            <div class="w-100 pt-100 pb-110 position-relative">
                <div class="container">
                    <div class="team-wrap position-relative w-100">
                        <div class="row mrg30">

                            <?php for ($x = 0; $x < count($docter); $x++) { ?>
                                <div class="col-md-4 col-sm-6 col-lg-3">
                                    <div class="team-box text-center position-relative w-100">
                                        <div class="team-img brd-rd5 overflow-hidden position-relative w-100">
                                            <img class="img-fluid w-100" src="assets/images/resources/team-img1-8.jpg" alt="Team Image 8">
                                            <div class="social-links2 z1 align-items-center justify-content-center position-absolute">
                                                <a class="brd-rd5 twitter-hvr" href="https://twitter.com/" title="Twtiiter" target="_blank"><i class="fab fa-twitter"></i></a>
                                                <a class="brd-rd5 facebook-hvr" href="https://www.facebook.com/" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                                <a class="brd-rd5 youtube-hvr" href="https://www.youtube.com/" title="Youtube" target="_blank"><i class="fab fa-youtube"></i></a>
                                                <a class="brd-rd5 linkedin-hvr" href="https://www.linkedin.com/" title="Linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                        <div class="team-info z1 bg-color5 position-relative w-100">
                                            <h3 class="mb-0"><a href="team-detail.php" title=""><?php echo $docter[$x]->name; ?></a></h3>
                                            <span class="d-block thm-clr"><?php echo $docter[$x]->type; ?></span>
                                        </div>
                                    </div>
                                </div>

                            <?php   }  ?>



                        </div>
                    </div><!-- Team Wrap -->
                    <!-- <div class="pagination-wrap mt-60 text-center w-100">
                        <div class="pagination-inner d-inline-block">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="javascript:void(0);" title="">01</a></li>
                                <li class="page-item active"><a class="page-link" href="javascript:void(0);" title="">02</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);" title="">03</a></li>
                                <li class="page-item next"><a class="page-link" href="javascript:void(0);" title="">Next Page<i class="flaticon-double-angle-pointing-to-right"></i></a></li>
                            </ul>
                        </div>
                    </div> -->
                    <!-- Pagination Wrap -->
                </div>
            </div>
        </section>
        <section>
            <div class="w-100 pt-65 scndry-layer opc98 pb-135 position-relative">
                <div class="fixed-bg patern-bg" style="background-image: url(assets/images/pattern-bg1.jpg);"></div>
                <div class="container">
                    <div class="request-consult-wrap d-flex flex-wrap align-items-center position-relative w-100">
                        <div class="request-consult-title">
                            <h3 class="mb-0">Request Expert Free Consultation</h3>
                        </div>
                        <div class="request-consult-form">
                            <p class="mb-0">Please feel welcome to contact our friendly reception staff with any general or medical enquiry.</p>
                            <form class="d-flex flex-wrap align-items-center">
                                <div class="field-box"><input class="brd-rd5" type="text" placeholder="Complete Name *"></div>
                                <div class="field-box"><input class="brd-rd5" type="email" placeholder="Email Address *"></div>
                                <div class="field-box"><input class="brd-rd5" type="tel" placeholder="Phone No *"></div>
                                <div class="btn-box"><button class="thm-btn bg-black brd-rd5 position-relative overflow-hidden" type="submit">Next Step</button></div>
                            </form>
                        </div>
                    </div><!-- Request Consultation Wrap -->
                </div>
            </div>
        </section>

        <?php include('./components/footer.php');  ?>

    </main><!-- Main Wrapper -->

    <?php include('./components/scripts.php') ?>
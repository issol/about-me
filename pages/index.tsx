import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className='deebo_fn_main'>
        <div className='deebo_fn_switcher_wrap'>
          <label>
            <span className='light'>Light</span>
            <span className='checkbox_wrap'>
              <input type='checkbox' id='skin_switcher' checked />
              <span className='slider round'></span>
            </span>
            <span className='dark'>Dark</span>
          </label>
        </div>

        <div className='right_bar_overlay'></div>

        <div className='deebo_fn_modalbox'>
          <a className='extra_closer' href='#'></a>
          <div className='box_inner'>
            <a className='closer' href='#'>
              <span></span>
            </a>
            <div className='modal_content'>
              <div className='modal_in'></div>

              <div className='fn__nav' data-from='' data-index=''>
                <a href='#' className='prev'>
                  <span className='text'>Prev</span>
                  <span className='arrow_wrapper'>
                    <span className='arrow'></span>
                  </span>
                </a>
                <a href='#' className='next'>
                  <span className='text'>Next</span>
                  <span className='arrow_wrapper'>
                    <span className='arrow'></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='right_bar_overlay'></div>

        <div className='deebo_fn_modalbox'>
          <a className='extra_closer' href='#'></a>
          <div className='box_inner'>
            <a className='closer' href='#'>
              <span></span>
            </a>
            <div className='modal_content'>
              <div className='modal_in'></div>

              <div className='fn__nav' data-from='' data-index=''>
                <a href='#' className='prev'>
                  <span className='text'>Prev</span>
                  <span className='arrow_wrapper'>
                    <span className='arrow'></span>
                  </span>
                </a>
                <a href='#' className='next'>
                  <span className='text'>Next</span>
                  <span className='arrow_wrapper'>
                    <span className='arrow'></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='deebo_fn_cv'>
          <div className='deebo_fn__cv'>
            <div className='cv__bg'></div>
            <div className='cv__bg2'></div>

            <div className='cv__header'>
              <div className='in'>
                <div className='avatar'>
                  <img src='img/header/1.jpg' alt='' />
                </div>
                <h3>
                  <span>Adam</span> Milner
                </h3>
                <p className='quote'>
                  I'm a passionate front-end web developer who excels at creating pixel-perfect web interfaces. I’m available for a freelance job.{' '}
                  <a href='#contact' className='anchor'>
                    Hire me
                  </a>
                </p>
                <ul className='contact_info'>
                  <li>
                    <span className='icon'>
                      <img src='svg/location.svg' alt='' className='fn__svg' />
                    </span>
                    <p>69 Queen St, Melbourne Australia</p>
                  </li>
                  <li>
                    <span className='icon'>
                      <img src='svg/call.svg' alt='' className='fn__svg' />
                    </span>
                    <p>(+706) 898-0751</p>
                  </li>
                  <li>
                    <span className='icon'>
                      <img src='svg/message.svg' alt='' className='fn__svg' />
                    </span>
                    <p>adam_milner@example.com</p>
                  </li>
                </ul>
                <ul className='social'>
                  <li>
                    <a href='#' target='_blank' title='twitter.com'>
                      <img className='fn__svg' src='svg/twitter.svg' alt='twitter.com' />
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' title='facebook.com'>
                      <img className='fn__svg' src='svg/facebook-logo.svg' alt='facebook.com' />
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' title='instagram.com'>
                      <img className='fn__svg' src='svg/instagram.svg' alt='instagram.com' />
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' title='printerest.com'>
                      <img className='fn__svg' src='svg/pinterest.svg' alt='printerest.com' />
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' title='youtube.com'>
                      <img className='fn__svg' src='svg/youtube.svg' alt='youtube.com' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='cv__content'>
              <section id='hero-header' className='section_header'>
                <div className='content'>
                  <div className='left_hero_header'>
                    <div className='circle'>
                      <div className='bg_img' data-bg-img='img/header/1.jpg'></div>
                      <img src='img/thumb/square.jpg' alt='' />
                      <div className='circle_holder_blue'>
                        <span></span>
                      </div>
                      <div className='circle_holder_orange'>
                        <span></span>
                      </div>
                      <div className='lines'>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className='right_hero_header'>
                    <div className='my_self'>
                      <h4>Hello! I'm a</h4>
                      <h2>
                        <span className='cd-headline clip'>
                          <span className='cd-words-wrapper'>
                            <b className='is-visible'>Designer</b>
                            <b>Developer</b>
                            <b>Freelancer</b>
                          </span>
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </section>

              <section id='cv_biography'>
                <div className='section_title'>
                  <h3>Biography</h3>
                </div>
                <p>
                  I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with
                  new people. New people are new experiences.
                </p>
                <div className='fn_cs_info_items'>
                  <ul>
                    <li>
                      <p>
                        Name: <span>Adam Milner</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Birthday: <span>June 14, 1992</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Languages: <span>English, Italian, Arabic</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Age: <span>29 Years</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Nationality: <span>American</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Adress: <span>London, UK</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Telegram: <span>Available</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Phone:{' '}
                        <span>
                          <a href='tel:+17785355344'>(+1) 7785 355 344</a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Skype: <span>Adam.M</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Email:{' '}
                        <span>
                          <a href='mailto:flabteam@gmail.com'>flabteam@gmail.com</a>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </section>

              <section id='cv_education'>
                <div className='section_title'>
                  <h3>Education</h3>
                </div>
                <div className='fn_cs_boxed_list'>
                  <ul>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Frenify University</h5>
                          <span>( 2014 — 2017 )</span>
                        </div>
                        <h3>Computer Science</h3>
                        <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Edu University</h5>
                          <span>( 2011 — 2014 )</span>
                        </div>
                        <h3>Master Degree</h3>
                        <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Clolumbia College</h5>
                          <span>( 2007 — 2011 )</span>
                        </div>
                        <h3>Bachelor Degree</h3>
                        <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section id='cv_experience'>
                <div className='section_title'>
                  <h3>Experience</h3>
                </div>
                <div className='fn_cs_boxed_list'>
                  <ul>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Frenify LLC</h5>
                          <span>( 2018 — Today )</span>
                        </div>
                        <h3>Sr. Front-end Engineer</h3>
                        <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Google LLC</h5>
                          <span>( 2016 — 2018 )</span>
                        </div>
                        <h3>Front-end Developer</h3>
                        <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Twitter LLC</h5>
                          <span>( 2016 — 2011 )</span>
                        </div>
                        <h3>Graphic Designer</h3>
                        <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section id='cv_skills'>
                <div className='section_title'>
                  <h3>Professionality</h3>
                </div>
                <div className='fn_cs_progress_bar'>
                  <div className='progress_item' data-value='90'>
                    <div className='item_in'>
                      <h3 className='progress_title'>Adobe Photoshop</h3>
                      <span className='progress_percent'></span>
                      <div className='progress_bg'></div>
                    </div>
                  </div>

                  <div className='progress_item' data-value='95'>
                    <div className='item_in'>
                      <h3 className='progress_title'>HTML5 &amp; CSS3</h3>
                      <span className='progress_percent'></span>
                      <div className='progress_bg'></div>
                    </div>
                  </div>

                  <div className='progress_item' data-value='80'>
                    <div className='item_in'>
                      <h3 className='progress_title'>WordPress</h3>
                      <span className='progress_percent'></span>
                      <div className='progress_bg'></div>
                    </div>
                  </div>

                  <div className='progress_item' data-value='85'>
                    <div className='item_in'>
                      <h3 className='progress_title'>Adobe Illustrator</h3>
                      <span className='progress_percent'></span>
                      <div className='progress_bg'></div>
                    </div>
                  </div>
                </div>
              </section>

              <section id='cv_services'>
                <div className='section_title'>
                  <h3>Services</h3>
                </div>
                <p>I help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers and growing overall sales.</p>
                <div className='fn_cs_service_list'>
                  <ul>
                    <li>
                      <div className='item'>
                        <div className='item_left'>
                          <h3>Websites &amp; platforms</h3>
                          <p>I build brands through cultural insights &amp; strategic vision. Custom crafted business solutions.</p>
                        </div>
                        <div className='item_right'>
                          <p>Starts from</p>
                          <h3>$500</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_left'>
                          <h3>Mobile applications</h3>
                          <p>Custom marketing solutions. Get your business on the next level. We provide worldwide marketing.</p>
                        </div>
                        <div className='item_right'>
                          <p>Starts from</p>
                          <h3>$450</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_left'>
                          <h3>Strategy &amp; branding</h3>
                          <p>Design direction for business. Get your business on the next level. We help to create great experiences.</p>
                        </div>
                        <div className='item_right'>
                          <p>Starts from</p>
                          <h3>$500</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_left'>
                          <h3>Design conspect</h3>
                          <p>Design direction for business. Get your business on the next level. We help to create great experiences.</p>
                        </div>
                        <div className='item_right'>
                          <p>Starts from</p>
                          <h3>$450</h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section id='cv_portfolio'>
                <div className='section_title'>
                  <h3>Portfolio</h3>
                </div>

                <div className='fn_cs_portfolio'>
                  <div className='portfolio_filter'>
                    <ul>
                      <li>
                        <a href='#' className='current' data-filter='*'>
                          All
                        </a>
                      </li>
                      <li>
                        <a href='#' data-filter='.youtube'>
                          Youtube
                        </a>
                      </li>
                      <li>
                        <a href='#' data-filter='.vimeo'>
                          Vimeo
                        </a>
                      </li>
                      <li>
                        <a href='#' data-filter='.soundcloud'>
                          Soundcloud
                        </a>
                      </li>
                      <li>
                        <a href='#' data-filter='.popup'>
                          Popup
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className='portfolio_list'>
                    <ul className='gallery_zoom grid'>
                      <li className='youtube grid-item'>
                        <div className='inner'>
                          <div className='entry'>
                            <a className='popup-youtube' href='https://www.youtube.com/watch?v=7e90gBu4pas'>
                              <img src='img/thumb/42-56.jpg' alt='' />
                              <div className='main' data-bg-img='img/portfolio/1.jpg'></div>
                              <div className='mobile_title'>
                                <h3>Mockup Shape</h3>
                                <span>Youtube</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className='vimeo grid-item'>
                        <div className='inner'>
                          <div className='entry'>
                            <a className='popup-vimeo' href='https://vimeo.com/337293658'>
                              <img src='img/thumb/42-34.jpg' alt='' />
                              <div className='main' data-bg-img='img/portfolio/2.jpg'></div>
                              <div className='mobile_title'>
                                <h3>Ave Bottle</h3>
                                <span>Vimeo</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className='soundcloud grid-item'>
                        <div className='inner'>
                          <div className='entry'>
                            <a
                              className='soundcloude_link mfp-iframe audio'
                              href='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
                            >
                              <img src='img/thumb/42-56.jpg' alt='' />
                              <div className='main' data-bg-img='img/portfolio/3.jpg'></div>
                              <div className='mobile_title'>
                                <h3>Magic Art</h3>
                                <span>Soundcloud</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className='popup grid-item'>
                        <div className='inner'>
                          <div className='entry'>
                            <a className='zoom' href='img/portfolio/5.jpg'>
                              <img src='img/thumb/42-56.jpg' alt='' />
                              <div className='main' data-bg-img='img/portfolio/5.jpg'></div>
                              <div className='mobile_title'>
                                <h3>Blue Lemon</h3>
                                <span>Popup</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className='popup grid-item'>
                        <div className='inner'>
                          <div className='entry'>
                            <a className='zoom' href='img/portfolio/4.jpg'>
                              <img src='img/thumb/42-34.jpg' alt='' />
                              <div className='main' data-bg-img='img/portfolio/4.jpg'></div>
                              <div className='mobile_title'>
                                <h3>Art Stone</h3>
                                <span>Popup</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className='popup grid-item'>
                        <div className='inner'>
                          <div className='entry'>
                            <a className='zoom' href='img/portfolio/6.jpg'>
                              <img src='img/thumb/42-34.jpg' alt='' />
                              <div className='main' data-bg-img='img/portfolio/6.jpg'></div>
                              <div className='mobile_title'>
                                <h3>Global Evolution</h3>
                                <span>Popup</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id='cv_testimonials'>
                <div className='section_title'>
                  <h3>References</h3>
                </div>
                <p>
                  A testimonial is effectively a review or recommendation from a client, letting other people know how your products or services benefitted them. We respect each client and help
                  everyone with all our might.
                </p>

                <div className='fn_cs_testimonials'>
                  <ul>
                    <li>
                      <div className='item'>
                        <div className='item_left'>
                          <p>
                            One of the best. It works quite well for software development also. The design and ease of installation and customizing is exceptional. Many plaudits to the developers!
                          </p>
                        </div>
                        <div className='item_right'>
                          <div className='t_ava'>
                            <div className='ava_in' data-bg-img='img/testimonials/1.jpg'></div>
                          </div>
                          <div className='t_name'>
                            <p>OldPhot</p>
                          </div>
                          <div className='t_rating' data-stars='5'>
                            <div className='rating_in'>
                              <div className='rating_active'>
                                <img src='svg/five-stars.svg' alt='' className='fn__svg' />
                              </div>
                              <div className='rating_regular'>
                                <img src='svg/five-stars.svg' alt='' className='fn__svg' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_left'>
                          <p>Very good design and code quality. The costumer support is excellent. They respond within minutes and solve problems on the fly. I sincerely recommend!</p>
                        </div>
                        <div className='item_right'>
                          <div className='t_ava'>
                            <div className='ava_in' data-bg-img='img/testimonials/2.jpg'></div>
                          </div>
                          <div className='t_name'>
                            <p>Wuoh</p>
                          </div>
                          <div className='t_rating' data-stars='5'>
                            <div className='rating_in'>
                              <div className='rating_active'>
                                <img src='svg/five-stars.svg' alt='' className='fn__svg' />
                              </div>
                              <div className='rating_regular'>
                                <img src='svg/five-stars.svg' alt='' className='fn__svg' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_left'>
                          <p>I Like the whole Theme, the design, customizability, features, etc. The support has been absolutely fantastic and friendly, helping me to solve any issue I was having.</p>
                        </div>
                        <div className='item_right'>
                          <div className='t_ava'>
                            <div className='ava_in' data-bg-img='img/testimonials/3.jpg'></div>
                          </div>
                          <div className='t_name'>
                            <p>Bartolo</p>
                          </div>
                          <div className='t_rating' data-stars='5'>
                            <div className='rating_in'>
                              <div className='rating_active'>
                                <img src='svg/five-stars.svg' alt='' className='fn__svg' />
                              </div>
                              <div className='rating_regular'>
                                <img src='svg/five-stars.svg' alt='' className='fn__svg' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_left'>
                          <p>
                            The best theme in the world ;) Really love it. Support is amazing, and they always help me with my problems. To be honest - I have earlier other theme, but this is so good,
                            that why I choose it
                          </p>
                        </div>
                        <div className='item_right'>
                          <div className='t_ava'>
                            <div className='ava_in' data-bg-img='img/testimonials/4.jpg'></div>
                          </div>
                          <div className='t_name'>
                            <p>Przemeknorek</p>
                          </div>
                          <div className='t_rating' data-stars='5'>
                            <div className='rating_in'>
                              <div className='rating_active'>
                                <img src='svg/five-stars.svg' alt='' className='fn__svg' />
                              </div>
                              <div className='rating_regular'>
                                <img src='svg/five-stars.svg' alt='' className='fn__svg' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              <section id='clients' className='section_clients'>
                <div className='section_title'>
                  <h3>Clients</h3>
                </div>
                <div className='clients_wrapper'>
                  <ul>
                    <li>
                      <a href='#'>
                        <img src='img/clients/1.png' alt='colorlib' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='img/clients/2.png' alt='envato' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='img/clients/3.png' alt='pingdom' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='img/clients/4.png' alt='magento' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='img/clients/5.png' alt='woocommerce' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='img/clients/6.png' alt='larevel' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='img/clients/7.png' alt='angular' />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <img src='img/clients/8.png' alt='google' />
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <section id='tips' className='section_tips'>
                <div className='section_title'>
                  <h3>Latest Articles</h3>
                </div>

                <div className='tips_content'>
                  <ul className='modal_items' data-from='blog' data-count='5'>
                    <li>
                      <div className='item modal_item' data-index='1'>
                        <div className='item_left'>
                          <p>November 18, 2021</p>
                          <h5>
                            <a href='#'>Emotional Slider Animation in After Effects</a>
                          </h5>
                          <a href='#' className='read_more'>
                            Read More
                          </a>
                          <div className='fn__hidden'>
                            <p className='fn__cat'>November 18, 2021</p>
                            <h3 className='fn__title'>Emotional Slider Animation in After Effects</h3>
                            <div className='img_holder'>
                              <img src='img/thumb/square.jpg' alt='' />
                              <div className='abs_img' data-bg-img='img/blog/1.jpg'></div>
                            </div>
                            <p className='fn__desc'>
                              Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. className aptent taciti sociosqu ad litora torquent per conubia nostra,
                              per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci.
                            </p>
                            <p className='fn__desc'>
                              Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit
                              amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus
                              viverra.
                            </p>
                            <p className='fn__desc'>
                              Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam
                              eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus.
                            </p>
                          </div>
                        </div>
                        <div className='item_right'>
                          <div className='abs_img' data-bg-img='img/blog/1.jpg'></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item modal_item' data-index='2'>
                        <div className='item_left'>
                          <p>September 15, 2021</p>
                          <h5>
                            <a href='#'>Principle Tutorial &amp; Onboarding Flow Animation</a>
                          </h5>
                          <a href='#' className='read_more'>
                            Read More
                          </a>
                          <div className='fn__hidden'>
                            <p className='fn__cat'>September 15, 2021</p>
                            <h3 className='fn__title'>Principle Tutorial &amp; Onboarding Flow Animation</h3>
                            <div className='img_holder'>
                              <img src='img/thumb/square.jpg' alt='' />
                              <div className='abs_img' data-bg-img='img/blog/2.jpg'></div>
                            </div>
                            <p className='fn__desc'>
                              Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. className aptent taciti sociosqu ad litora torquent per conubia nostra,
                              per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci.
                            </p>
                            <p className='fn__desc'>
                              Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit
                              amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus
                              viverra.
                            </p>
                            <p className='fn__desc'>
                              Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam
                              eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus.
                            </p>
                          </div>
                        </div>
                        <div className='item_right'>
                          <div className='abs_img' data-bg-img='img/blog/2.jpg'></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='item modal_item' data-index='3'>
                        <div className='item_left'>
                          <p>September 03, 2021</p>
                          <h5>
                            <a href='#'>Ordering Ballooon Bouquets UI Design and Animation</a>
                          </h5>
                          <a href='#' className='read_more'>
                            Read More
                          </a>
                          <div className='fn__hidden'>
                            <p className='fn__cat'>September 03, 2021</p>
                            <h3 className='fn__title'>Ordering Ballooon Bouquets UI Design and Animation</h3>
                            <div className='img_holder'>
                              <img src='img/thumb/square.jpg' alt='' />
                              <div className='abs_img' data-bg-img='img/blog/3.jpg'></div>
                            </div>
                            <p className='fn__desc'>
                              Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. className aptent taciti sociosqu ad litora torquent per conubia nostra,
                              per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci.
                            </p>
                            <p className='fn__desc'>
                              Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit
                              amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus
                              viverra.
                            </p>
                            <p className='fn__desc'>
                              Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam
                              eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus.
                            </p>
                          </div>
                        </div>
                        <div className='item_right'>
                          <div className='abs_img' data-bg-img='img/blog/3.jpg'></div>
                        </div>
                      </div>
                    </li>
                    <li className='be_animated'>
                      <div className='item modal_item' data-index='4'>
                        <div className='item_left'>
                          <p>August 20, 2021</p>
                          <h5>
                            <a href='#'>How to Prepare Your Design Portfolio</a>
                          </h5>
                          <a href='#' className='read_more'>
                            Read More
                          </a>
                          <div className='fn__hidden'>
                            <p className='fn__cat'>August 20, 2021</p>
                            <h3 className='fn__title'>How to Prepare Your Design Portfolio</h3>
                            <div className='img_holder'>
                              <img src='img/thumb/square.jpg' alt='' />
                              <div className='abs_img' data-bg-img='img/blog/4.jpg'></div>
                            </div>
                            <p className='fn__desc'>
                              Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. className aptent taciti sociosqu ad litora torquent per conubia nostra,
                              per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci.
                            </p>
                            <p className='fn__desc'>
                              Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit
                              amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus
                              viverra.
                            </p>
                            <p className='fn__desc'>
                              Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam
                              eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus.
                            </p>
                          </div>
                        </div>
                        <div className='item_right'>
                          <div className='abs_img' data-bg-img='img/blog/4.jpg'></div>
                        </div>
                      </div>
                    </li>
                    <li className='be_animated'>
                      <div className='item modal_item' data-index='5'>
                        <div className='item_left'>
                          <p>July 11, 2021</p>
                          <h5>
                            <a href='#'>Lottie Animation &amp; After Effects Tutorial</a>
                          </h5>
                          <a href='#' className='read_more'>
                            Read More
                          </a>
                          <div className='fn__hidden'>
                            <p className='fn__cat'>July 11, 2021</p>
                            <h3 className='fn__title'>Lottie Animation &amp; After Effects Tutorial</h3>
                            <div className='img_holder'>
                              <img src='img/thumb/square.jpg' alt='' />
                              <div className='abs_img' data-bg-img='img/blog/5.jpg'></div>
                            </div>
                            <p className='fn__desc'>
                              Sed ornare tellus a odio bibendum, at tristique sapien malesuada. Proin sagittis maximus accumsan. className aptent taciti sociosqu ad litora torquent per conubia nostra,
                              per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida quam sit amet elit varius tempor. Pellentesque purus eros, blandit eu
                              mollis vel, commodo eget orci.
                            </p>
                            <p className='fn__desc'>
                              Quisque dui metus, eleifend at enim ac, imperdiet sagittis dolor. Vestibulum ipsum quam, feugiat non velit sit amet, pulvinar varius nisl. Mauris tristique, ipsum sit
                              amet lacinia congue, mauris magna tempus nibh, in mollis eros enim a tortor. Morbi enim arcu, tristique vitae mi nec, hendrerit pharetra metus. Phasellus id feugiat
                              purus. In vel elit eu lacus ultrices feugiat. Etiam at aliquet mi. Nunc sit amet libero sit amet lectus pellentesque sagittis. Curabitur blandit ante quis erat dapibus
                              viverra.
                            </p>
                            <p className='fn__desc'>
                              Sed porttitor augue erat, vitae convallis odio viverra id. In nec finibus elit. Nullam ac sodales nunc, vel sagittis elit. Ut condimentum ex ipsum, eu ornare odio aliquam
                              eu. Ut iaculis eros quam, eu bibendum tellus convallis quis. Donec sapien risus, consequat ut magna nec, interdum porta nisl. Vivamus pulvinar hendrerit finibus.
                            </p>
                          </div>
                        </div>
                        <div className='item_right'>
                          <div className='abs_img' data-bg-img='img/blog/5.jpg'></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='load_more'>
                  <a href='#' data-done='Done' data-no='No more articles found'>
                    <span className='text'>Load More Articles</span>
                    <span className='fn__pulse'>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </a>
                </div>
              </section>

              <section id='contact' className='section_contact'>
                <div className='section_title'>
                  <h3>Contact Me</h3>
                </div>
                <form className='contact_form' action='/' method='post' autoComplete='off' data-email='frenifyteam@gmail.com'>
                  <div className='success' data-success='Your message has been received, we will contact you soon.'></div>
                  <div className='empty_notice'>
                    <span>Please Fill Required Fields!</span>
                  </div>

                  <div className='items_wrap'>
                    <div className='items'>
                      <div className='item half'>
                        <div className='input_wrapper'>
                          <input id='name' type='text' placeholder='Name *' />
                        </div>
                      </div>
                      <div className='item half'>
                        <div className='input_wrapper'>
                          <input id='email' type='email' placeholder='Email *' />
                        </div>
                      </div>
                      <div className='item'>
                        <div className='input_wrapper'>
                          <input id='phone' type='text' placeholder='Phone' />
                        </div>
                      </div>
                      <div className='item'>
                        <div className='input_wrapper'>
                          <textarea id='message' placeholder='Message'></textarea>
                        </div>
                      </div>
                      <div className='item'>
                        <a id='send_message' href='#'>
                          Send Message
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import { Footer } from '../Components/Footer'
import { Header } from '../Components/Header'
export const Blog = () => {
  return (
    <>
    <Header/>

    <main className="main-container">
  <div className="container mt-80">
    <div className="row">
      <div className="col-12 col-lg-8 col-xl-9 order-xs-2 order-lg-1">
        <div className="brs-posts-container brs-posts-container_right-divider">
          <div className="mb-60">
            <div className="brs-post brs-post_slider" data-brk-library="component__blog">
              <div className="brs-post__body">
                <div className="brs-post__slider-container">
                  <div className="brs-post__slider-item">
                    <img src="img/blog/slider-post.png" alt="girl-with-camera" className="brs-post__img" />
                    <div className="brs-post__overlay" />
                  </div>
                  <div className="brs-post__slider-item">
                    <img src="img/blog/hosted-video.png" alt="girl-with-camera" className="brs-post__img" />
                    <div className="brs-post__overlay" />
                  </div>
                </div>
                <div className="brs-post__info-wrapper brs-post__info-wrapper-bg">
                  <div className="brs-post__information font__family-montserrat font__weight-semibold font__size-13 line__height-14">
                    <a href="#" className="brs-post__date">
                      <i className="far fa-clock brs-post__date-icon" />Aug 12, 17
                    </a>
                    <a href="#" className="brs-post__comments">
                      <i className="far fa-comments brs-post__comments-icon" /> 12
                    </a>
                  </div>
                  <h2 className="brs-post__title font__family-montserrat font__size-24 font__weight-bold line__height-28 text-left">
                    Some large title of Slider Post</h2>
                </div>
              </div>
              <div className="brs-post__description">
                <p className="brs-post__description__paragraph text-left font__family-open-sans font__size-16 font__weight-normal line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, nsequ vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                  in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laeers. Quisque rutrum. Aenean imperdiet.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-60">
            <div className="brs-post brs-post_simple" data-brk-library="component__blog_css">
              <div className="brs-post__img-container">
                <img src="img/blog/simple-post.png" alt="alt" className="brs-post__img" />
              </div>
              <div className="brs-post__body">
                <div className="brs-post__information font__family-montserrat font__weight-semibold font__size-13 line__height-14">
                  <a href="#" className="brs-post__date">
                    <i className="far fa-clock brs-post__date-icon" />Aug 12, 17
                  </a>
                  <a href="#" className="brs-post__comments">
                    <i className="far fa-comments brs-post__comments-icon" /> 12
                  </a>
                </div>
                <h2 className="brs-post__title font__family-montserrat font__size-24 font__weight-bold line__height-28 text-left">
                  Some large title for simple post</h2>
                <p className="brs-post__paragraph text-left font__family-open-sans font__size-16 font__weight-normal line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, ttitor eu, nsequ vitae, eleifend ac, enim. Aliquam
                  lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laeers.
                  Quisque rutrum. Aenean imperdiet.
                </p>
                <a href="#" className="brs-post__more font__family-montserrat font__size-14 font__weight-normal line__height-26 text-left">Read
                  More</a>
              </div>
            </div>
          </div>
          <div className="mb-60">
            <div className="brk-hosted-video" data-brk-library="component__media_embeds,fancybox">
              <div className="brk-abs-bg-overlay brk-hosted-video__before brk-base-bg-gradient-50deg-opacity-28">
              </div>
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/hosted-video.png" alt="alt" className="brk-hosted-video__img lazyload" />
              <div className="brk-hosted-video__body">
                <a className="icon__btn icon__btn_reverse icon__btn-circled icon__btn-lg fancybox brk-hosted-video__btn" href="http://dev.nikadevs.com/berserk-data/Placeholder_Video.mp4" data-brk-library="component__button">
                  <span className="before" />
                  <i className="fa fa-play" aria-hidden="true" />
                  <span className="after" />
                </a>
                <div className="brk-hosted-video__description">
                  <div className="brk-hosted-video__about">
                    <div className="brk-hosted-video__information font__family-montserrat font__weight-semibold font__size-13 line__height-14">
                      <a href="#" className="brk-hosted-video__date brk-dark-font-color-3">
                        <i className="far fa-clock brk-hosted-video__date-icon" />Aug 12, 17
                      </a>
                      <a href="#" className="brk-hosted-video__comments brk-dark-font-color-3">
                        <i className="far fa-comments brk-hosted-video__comments-icon" /> 12
                      </a>
                    </div>
                    <h2 className="brk-hosted-video__title font__family-montserrat font__size-24 font__weight-bold line__height-28 text-lg-left text-center">Hosted Video</h2>
                  </div>
                  <p className="brk-hosted-video__paragraph text-left font__family-open-sans font__size-16 font__weight-normal line__height-26">Aenean vulputate eleifend tellus. Aenean leo ligula, ttitor eu, nsequ vitae, eleifend ac, enim. Aliquam lorem ante,
                    dapibus in, viverra.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-60">
            <div className="brs-post brs-post_map" data-brk-library="component__blog_css">
              <div className="brs-post__map-container">
                <div className="brk-map" data-height={520} data-brk-library="component__map">
                  <div className="brk-map__section">
                    <div className="brk-map__canvas" data-address="412 Throop Ave, Brooklyn, NY 11221, USA" data-zoom={13} data-type="roadmap" data-marker="img/gm-1.png" data-offset-lat="0.0047" data-style="silver" data-lat="40.6898297" data-lng="-73.94250620000003">
                    </div>
                  </div>
                  <div className="brk-map__infoicon brk-map__infoicon_layout-one text-center">
                    <span className="marker">
                      <img src="img/gm-1.png" alt="alt" />
                    </span>
                    <h4 className="font__family-montserrat font__weight-bold font__size-21 line__height-22">Chicago, USA</h4>
                    <div className="brk-map__infoicon--text">
                      <ul className="font__size-15 line__height-21">
                        <li className="brk-dark-font-color">
                          <i className="fas fa-phone brk-base-font-color font__size-13" />
                          <a href="tel:8800123456789">8 800 123 456 789</a>
                        </li>
                        <li className="brk-dark-font-color">
                          <i className="far fa-clock brk-base-font-color font__size-13" />
                          <span>Mon - Sat 8:00 - 18:00<br />Sunday CLOSED</span>
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn border-radius-25 font__family-open-sans font__weight-bold btn-inside-out" data-brk-library="component__button">
                      <span className="before">Get directions</span>
                      <span className="text">Get directions</span>
                      <span className="after">Get directions</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="brs-post__body">
                <div className="brs-post__about">
                  <div className="brs-post__information text-left font__family-montserrat font__weight-semibold font__size-13 line__height-14">
                    <a href="#" className="brs-post__date">
                      <i className="far fa-clock brs-post__date-icon" />Aug 12, 17
                    </a>
                    <a href="#" className="brs-post__comments">
                      <i className="far fa-comments brs-post__comments-icon" /> 12
                    </a>
                  </div>
                  <h2 className="brs-post__title font__family-montserrat font__size-24 font__weight-bold line__height-28 text-left">
                    Some large title for map post</h2>
                </div>
                <div className="brs-post__description">
                  <p className="brs-post__paragraph text-left font__family-open-sans font__size-16 font__weight-normal line__height-26">
                    Aenean vulputate eleifend tellus. Aenean leo ligula, ttitor eu, nsequ vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                    in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laeers. Quisque rutrum. Aenean imperdiet.
                  </p>
                  <a href="#" className="brs-post__more font__family-montserrat font__size-14 font__weight-normal line__height-26 text-left">Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-60">
            <div className="brs-post brs-post_video" data-brk-library="component__blog_css">
              <div className="brs-post__video-container">
                <iframe id="ytplayer" src="http://www.youtube.com/embed/AFtUpMTs4vI?autoplay=0&showinfo=0&origin=http://example.com" allowFullScreen className="brs-post__video">
                </iframe>
              </div>
              <div className="brs-post__about">
                <div className="brs-post__information font__family-montserrat font__weight-semibold font__size-13 line__height-14">
                  <a href="#" className="brs-post__date">
                    <i className="far fa-clock brs-post__date-icon" />Aug 12, 17</a>
                  <a href="#" className="brs-post__comments">
                    <i className="far fa-comments brs-post__comments-icon" /> 12</a>
                </div>
                <h2 className="brs-post__title font__family-montserrat font__size-24 font__weight-bold line__height-28 text-left">
                  Some large title of Slider Post</h2>
                <a href="#" className="brs-post__more font__family-montserrat font__size-14 font__weight-normal line__height-26 text-left">Read More
                </a>
              </div>
            </div>
          </div>
          <div className="mb-60">
            <div className="brs-post brs-post_quote" data-brk-library="component__blog_css">
              <img className="brs-post__img" alt="alt" src="img/blog/quote-post-1.png" />
              <div className="brs-post__body">
                <div className="brs-post__information">
                  <a href="#" className="brs-post__date font__family-montserrat font__weight-semibold font__size-13 line__height-14">
                    <i className="far fa-clock brs-post__date-icon" />Aug 12, 17</a>
                  <a href="#" className="brs-post__comments font__family-montserrat font__weight-semibold font__size-13 line__height-14">
                    <i className="far fa-comments brs-post__comments-icon" /> 12</a>
                </div>
                <p className="brs-post__paragraph text-left font__family-montserrat font__size-24 font__weight-normal line__height-32">
                  Quote post. Phasellus viverra nulla laeers.
                  <span className="line-through font__family-playfair font__style-italic line__height-28">
                    Quisque enean impe imperdiet</span> Poettitor (
                  <span className="font__family-open-sans font__weight-bold font__style-italic accent-1 letter-spacing--20">eu, nsequ vitae, eleifend ac </span>) enim. Aliquam lore ante,
                  <span className="accent-2">dapibus in</span>, viverra quis, feugiat a.</p>
                <a href="#" className="brs-post__more font__family-montserrat font__size-14 font__weight-normal line__height-26 text-left">Read More
                </a>
              </div>
              <a className="brs-post__link brk-base-bg-gradient-0deg-a" href="#">
                <i className="fal fa-paperclip brs-post__link-icon" />
              </a>
            </div>
          </div>
          <div className="mb-60">
            <div className="brs-post brs-post_video" data-brk-library="component__blog_css">
              <div className="brs-post__video-container">
                <iframe src="https://player.vimeo.com/video/49072365" className="brs-post__video" allowFullScreen>
                </iframe>
              </div>
              <div className="brs-post__about">
                <div className="brs-post__information font__family-montserrat font__weight-semibold font__size-13 line__height-14">
                  <a href="#" className="brs-post__date">
                    <i className="far fa-clock brs-post__date-icon" />Aug 12, 17</a>
                  <a href="#" className="brs-post__comments">
                    <i className="far fa-comments brs-post__comments-icon" /> 12</a>
                </div>
                <h2 className="brs-post__title font__family-montserrat font__size-24 font__weight-bold line__height-28 text-left">
                  Some large title of Slider Post</h2>
                <a href="#" className="brs-post__more font__family-montserrat font__size-14 font__weight-normal line__height-26 text-left">Read More
                </a>
              </div>
            </div>
          </div>
          <div className="mt-80 mb-50">
            <div className="brk-pagination brk-pagination-seven font__family-open-sans" data-brk-library="component__pagination">
              <nav className="navigation pagination" role="navigation">
                <h2 className="screen-reader-text">Навигация по записям</h2>
                <div className="nav-links">
                  <a className="prev page-numbers" href="#">Предыдущая страница</a>
                  <a className="page-numbers" href="javascript:void(0)"><span className="meta-nav screen-reader-text">Страница </span>1</a>
                  <span className="page-numbers current"><span className="meta-nav screen-reader-text">Страница </span>2</span>
                  <a className="page-numbers" href="javascript:void(0)"><span className="meta-nav screen-reader-text">Страница </span>3</a>
                  <a className="page-numbers" href="javascript:void(0)"><span className="meta-nav screen-reader-text">Страница </span>4</a>
                  <a className="page-numbers" href="javascript:void(0)"><span className="meta-nav screen-reader-text">Страница </span>5</a>
                  <a className="page-numbers" href="javascript:void(0)"><span className="meta-nav screen-reader-text">Страница </span>6</a>
                  <span className="page-numbers dots">…</span>
                  <a className="page-numbers" href="javascript:void(0)"><span className="meta-nav screen-reader-text">Страница </span>7</a>
                  <a className="next page-numbers" href="#">Следующая страница</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 col-xl-3 order-xs-1 order-lg-2">
        <div className="brs-sidebar brs-sidebar_right" data-brk-library="component__widgets">
          <div className="brs-sidebar__title">
            <h3 className="font__family-montserrat font__size-21 font__weight-bold line__height-22">Search</h3>
          </div>
          <form className="brk-sidebar-search" role="search" method="get" action>
            <input type="search" id className="brk-sidebar-search__input" name="s" maxLength={50} defaultValue placeholder="Search" />
            <button type="submit" className="brk-sidebar-search__submit">
              <i className="fas fa-search" />
            </button>
          </form>
          <div className="brs-sidebar__title">
            <i className="fab fa-hotjar brs-sidebar__title-icon" />
            <h3 className="font__family-montserrat font__size-21 font__weight-bold line__height-22">HOT News</h3>
          </div>
          <div className="brs-carousel brs-carousel_news" data-brk-library="slider__slick">
            <div className="brs-post brs-post_mini-vertical" data-brk-library="component__widgets">
              <a href="#" className="brs-post__img-container">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/news-img.png" alt="alt" className="brs-post__img lazyload" />
              </a>
              <div className="brs-post__about">
                <a href="#" className="brs-post__date">
                  <i className="far fa-clock brs-post__date-icon" />
                  <span className="font__family-montserrat font__size-13 line__height-14">Aug 12, 17</span>
                </a>
                <h2 className="brs-post__title font__family-montserrat font__size-16 font_weight-light line__height-18">
                  Some large title lorem ipsum
                </h2>
                <a href="#" className="brs-post__link">
                  <i className="fal fa-angle-right brs-post__link-icon" />
                </a>
              </div>
            </div>
            <div className="brs-post brs-post_mini-vertical" data-brk-library="component__widgets">
              <a href="#" className="brs-post__img-container">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/simple-post.png" alt="alt" className="brs-post__img lazyload" />
              </a>
              <div className="brs-post__about">
                <a href="#" className="brs-post__date">
                  <i className="far fa-clock brs-post__date-icon" />
                  <span className="font__family-montserrat font__size-13 line__height-14">Aug 12, 17</span>
                </a>
                <h2 className="brs-post__title font__family-montserrat font__size-16 font_weight-light line__height-18">
                  Some large title
                </h2>
                <a href="#" className="brs-post__link">
                  <i className="fal fa-angle-right brs-post__link-icon" />
                </a>
              </div>
            </div>
            <div className="brs-post brs-post_mini-vertical" data-brk-library="component__widgets">
              <a href="#" className="brs-post__img-container">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/quote-post-1.png" alt="alt" className="brs-post__img lazyload" />
              </a>
              <div className="brs-post__about">
                <a href="#" className="brs-post__date">
                  <i className="far fa-clock brs-post__date-icon" />
                  <span className="font__family-montserrat font__size-13 line__height-14">Aug 12, 17</span>
                </a>
                <h2 className="brs-post__title font__family-montserrat font__size-16 font_weight-light line__height-18">
                  Some large title
                </h2>
                <a href="#" className="brs-post__link">
                  <i className="fal fa-angle-right brs-post__link-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="brs-tab brs-tab_dual" data-brk-library="component__widgets">
            <ul className="nav nav-tabs brs-tab__header" id="news-tab" role="tablist">
              <li className="nav-item brs-tab__header-item">
                <a className="nav-link active brs-tab__header-title font__family-montserrat font__size-16 font__weight-bold line__height-18" id="popular-tab" data-toggle="tab" href="#popular" role="tab" aria-controls="popular" aria-selected="true">
                  <i className="fal fa-bolt brs-tab__header-title-icon" />Popular</a>
              </li>
              <li className="nav-item brs-tab__header-item">
                <a className="nav-link brs-tab__header-title font__family-montserrat font__size-16 font__weight-bold line__height-18" id="recent-tab" data-toggle="tab" href="#recent" role="tab" aria-controls="recent" aria-selected="false">
                  <i className="far fa-clock brs-tab__header-title-icon" />Recent</a>
              </li>
            </ul>
            <div className="tab-content brs-tab__body" id="news-tabContent">
              <div className="tab-pane brs-tab__body-item fade show active" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                <div className="brs-post brs-post_mini-horizontal" data-brk-library="component__widgets">
                  <div className="brs-post__img-container">
                    <a href="#">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/news-mini-1.png" alt="alt" className="brs-post__img lazyload" />
                    </a>
                  </div>
                  <div className="brs-post__about">
                    <a href="#" className="brs-post__date">
                      <i className="far fa-clock brs-post__date-icon" />
                      <span className="font__family-montserrat font__size-13 line__height-14 font__weight-normal">Aug 12, 17</span>
                    </a>
                    <a href="#">
                      <h3 className="brs-post__title font__family-montserrat font__size-15 font__weight-normal line__height-18">Some large title</h3>
                    </a>
                  </div>
                </div>
                <div className="brs-post brs-post_mini-horizontal" data-brk-library="component__widgets">
                  <div className="brs-post__img-container">
                    <a href="#">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/news-mini-2.png" alt="alt" className="brs-post__img lazyload" />
                    </a>
                  </div>
                  <div className="brs-post__about">
                    <a href="#" className="brs-post__date">
                      <i className="far fa-clock brs-post__date-icon" />
                      <span className="font__family-montserrat font__size-13 line__height-14 font__weight-normal">Aug 12, 17</span>
                    </a>
                    <a href="#">
                      <h3 className="brs-post__title font__family-montserrat font__size-15 font__weight-normal line__height-18">Some large title</h3>
                    </a>
                  </div>
                </div>
                <div className="brs-post brs-post_mini-horizontal" data-brk-library="component__widgets">
                  <div className="brs-post__img-container">
                    <a href="#">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/news-mini-3.png" alt="alt" className="brs-post__img lazyload" />
                    </a>
                  </div>
                  <div className="brs-post__about">
                    <a href="#" className="brs-post__date">
                      <i className="far fa-clock brs-post__date-icon" />
                      <span className="font__family-montserrat font__size-13 line__height-14 font__weight-normal">Aug 12, 17</span>
                    </a>
                    <a href="#">
                      <h3 className="brs-post__title font__family-montserrat font__size-15 font__weight-normal line__height-18">Some large title</h3>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade brs-tab__body-item" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                <div className="brs-post brs-post_mini-horizontal" data-brk-library="component__widgets">
                  <div className="brs-post__img-container">
                    <a href="#">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/news-mini-3.png" alt="alt" className="brs-post__img lazyload" />
                    </a>
                  </div>
                  <div className="brs-post__about">
                    <a href="#" className="brs-post__date">
                      <i className="far fa-clock brs-post__date-icon" />
                      <span className="font__family-montserrat font__size-13 line__height-14 font__weight-normal">Aug 12, 17</span>
                    </a>
                    <a href="#">
                      <h3 className="brs-post__title font__family-montserrat font__size-15 font__weight-normal line__height-18">Some large title</h3>
                    </a>
                  </div>
                </div>
                <div className="brs-post brs-post_mini-horizontal" data-brk-library="component__widgets">
                  <div className="brs-post__img-container">
                    <a href="#">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/news-mini-1.png" alt="alt" className="brs-post__img lazyload" />
                    </a>
                  </div>
                  <div className="brs-post__about">
                    <a href="#" className="brs-post__date">
                      <i className="far fa-clock brs-post__date-icon" />
                      <span className="font__family-montserrat font__size-13 line__height-14 font__weight-normal">Aug 12, 17</span>
                    </a>
                    <a href="#">
                      <h3 className="brs-post__title font__family-montserrat font__size-15 font__weight-normal line__height-18">Some large title</h3>
                    </a>
                  </div>
                </div>
                <div className="brs-post brs-post_mini-horizontal" data-brk-library="component__widgets">
                  <div className="brs-post__img-container">
                    <a href="#">
                      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blog/news-mini-2.png" alt="alt" className="brs-post__img lazyload" />
                    </a>
                  </div>
                  <div className="brs-post__about">
                    <a href="#" className="brs-post__date">
                      <i className="far fa-clock brs-post__date-icon" />
                      <span className="font__family-montserrat font__size-13 line__height-14 font__weight-normal">Aug 12, 17</span>
                    </a>
                    <a href="#">
                      <h3 className="brs-post__title font__family-montserrat font__size-15 font__weight-normal line__height-18">Some large title</h3>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="brs-sidebar__title">
            <h3 className="font__family-montserrat font__size-21 font__weight-bold line__height-22">Tags</h3>
          </div>
          <ul className="brk-tags brk-tags_solid font__family-montserrat" data-brk-library="component__tags">
            <li><a href="#" rel="tag">Network</a></li>
            <li><a href="#" rel="tag">Development</a></li>
            <li><a href="#" rel="tag">Bussines</a></li>
            <li><a href="#" rel="tag">Beauty</a></li>
            <li><a href="#" rel="tag">WordPress</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</main>



    <Footer/>
    
    </>


  )
}

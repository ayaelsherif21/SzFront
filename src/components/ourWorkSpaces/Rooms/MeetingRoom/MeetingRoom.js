import React from "react";
import {useOutletContext} from "react-router-dom";
import R2 from "../../../../images/10.jpg";
import R3 from "../../../../images/3.jpg";
import R4 from "../../../../images/4.jpg";
import R5 from "../../../../images/5.jpg";
import styles from "../../Workspace.module.css";
import {useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const images = [
    R2,
    R3,
    R4,
    R5,
];
export default function MeetingRoom() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };


    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: R2,
            caption: 'Slide 1'
        },
        {
            image: R3,
            caption: 'Slide 2'
        },
        {
            image: R4,
            caption: 'Slide 3'
        }
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    return (<>


        <div id="slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators gliders">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#slider"
                        data-bs-slide-to={index}
                        className={index === currentSlide ? 'active' : ''}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="coco">
                <button className="carousel-control-prev bb" type="button" onClick={prevSlide}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                            <img src={slide.image} className="d-block w-100" alt={`Slide ${index + 1}`}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{slide.caption}</h5>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-next bb" type="button" onClick={nextSlide}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>


        {/*ANOTHER GLIDER*/}

        {/*<div className="slider-container">*/}
        {/*    <div className="card-deck">*/}
        {/*        {images.map((image, index) => (*/}
        {/*            <div*/}
        {/*                className={`card ${index === currentIndex ? 'active' : ''}`}*/}
        {/*                key={index}*/}
        {/*            >*/}
        {/*                <img src={image} className="card-img-top" alt={`Image ${index}`} />*/}
        {/*            </div>*/}
        {/*        ))}*/}
        {/*    </div>*/}
        {/*    <div className="arrow-container">*/}
        {/*        <button className="btn btn-link arrow" onClick={goToPrevious}>*/}
        {/*            <i className="bi bi-chevron-left"></i>*/}
        {/*        </button>*/}
        {/*        <button className="btn btn-link arrow" onClick={goToNext}>*/}
        {/*            <i className="bi bi-chevron-right"></i>*/}
        {/*        </button>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className="coco" style={{padding: 50,
            margin: 50}}>
            <div className={`${styles.details} my-2`}>
                <h4>About the Room</h4>
                <div className={`${styles.icon}`}>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                    nostrum porro commodi quos iusto dolore debitis quia quidem
                    dignissimos ut. Nobis porro asperiores maxime voluptatem aliquid
                    autem placeat architecto quia!
                </p>
            </div>
            <br/>
            <div className={`${styles.details} my-2`}>
                <h4>Rules</h4>
                <div className={`${styles.icon}`}>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                    nostrum porro commodi quos iusto dolore debitis quia quidem
                    dignissimos ut. Nobis porro asperiores maxime voluptatem aliquid
                    autem placeat architecto quia!
                </p>
            </div>
        </div>



    </>);
}

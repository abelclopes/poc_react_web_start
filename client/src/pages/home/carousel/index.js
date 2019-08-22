import React,{ useState } from "react";
import { Carousel } from "react-bootstrap";

export default function HomeCarousel() {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("");

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://image.winudf.com/v2/image/Y29tLnZhZS5mcmFzZXNsaW5kYXNfc2NyZWVuc2hvdHNfMl8zOTBhNGY4Mw/screen-2.jpg?fakeurl=1&type=.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.alphacoders.com/301/301941.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.touron.com.br/blog/wp-content/uploads/2018/02/melhores-praias-de-santa-catarina-1280x640.jpeg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

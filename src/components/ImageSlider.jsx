import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Carousel from '@components/UI/Carousel'

import imgSlideOne from '@images/slides/imgslide-1.jpg'
import imgSlideTwo from '@images/slides/imgslide-2.jpg'
import imgSlideThree from '@images/slides/imgslide-3.jpg'
import imgSlideFour from '@images/slides/imgslide-4.jpg'

import overlayImgOne from '@images/overlays/imgslide-1-overlay.jpg'
import overlayImgTwo from '@images/overlays/imgslide-2-overlay.jpg'
import overlayImgThree from '@images/overlays/imgslide-3-overlay.jpg'
import overlayImgFour from '@images/overlays/imgslide-4-overlay.jpg'

import { MotionContainer } from '@components/UI/MotionContainer'
import ItemContainer from '@components/UI/ItemContainer'

const slideImages = [
	{ img: imgSlideOne, overlay: overlayImgOne, title: 'Home Alone 2: Lost in New York', path: 'movie', id: '772' },
	{ img: imgSlideTwo, overlay: overlayImgTwo, title: 'Doctor Who: The Giggle', path: 'series', id: '239770' },
	{ img: imgSlideThree, overlay: overlayImgThree, title: 'The Simpsons', path: 'series', id: '456' },
	{ img: imgSlideFour, overlay: overlayImgFour, title: 'Indiana Jones and the Dial of Destiny', path: 'movie', id: '335977' },
]

const ImageSlider = () => {
	const sliderSettings = {
		autoplay: true,
		slidesToShow: 1,
		dots: true,
	}

	return (
		<Wrapper>
			<MotionContainer>
				<StyledCarousel additionalSettings={sliderSettings}>
					{slideImages.map((image, index) => (
						<Link to={`/disney-plus-clone/${image.path}/${image.id}`} key={index}>
							<SlideContainer key={index}>
								<img src={image.img} alt={image.title} loading='lazy' />
								<OverlayImage overlay={image.overlay} />
							</SlideContainer>
						</Link>
					))}
				</StyledCarousel>
			</MotionContainer>
		</Wrapper>
	)
}

export default ImageSlider

const Wrapper = styled.section`
	margin-top: 10px;
`

const StyledCarousel = styled(Carousel)`
	.slick-track {
		padding: 20px 0 50px;
	}
`

const SlideContainer = styled(ItemContainer)`
	img {
		z-index: 0;
	}

	&:hover {
		box-shadow: 0px 25px 30px -10px rgba(0, 0, 0, 0.7);
		transform: scale(1.02);
	}
`

const OverlayImage = styled.div`
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: ${({ overlay }) => `url(${overlay})`};
	background-size: contain;
	background-position: center;
	opacity: 0;
	transition: opacity 2.5s ease, transform 2s ease;

	.slick-center & {
		opacity: 1;
		transform: translateX(-2%);
	}
`

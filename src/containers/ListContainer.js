import React, { Component } from 'react';
import {
  Button, 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Jumbotron,
  Row,
  Col,
  Card,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import ScrollableAnchor from 'react-scrollable-anchor'
import {style} from "../components/Style.css"
import 'font-awesome/css/font-awesome.min.css'
import birthdays from "../consts/birthdays";
import bridal from "../consts/bridal";

import parties from "../consts/parties";

import corporate from "../consts/corporate";
import CommentBox from "../components/CommentBox"
import axios from 'axios';






const divStyle1 = {
  backgroundImage: ['url(', './main3.jpg', ')'].join(' '),
  height: '600px'
};


export default class UploadFilesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0,  photoIndex: 0,
      isOpen: false, fadeIn: false, fadeIn1: false, openWork: false, images: [], lists: []};
    this.bridalNext = this.bridalNext.bind(this);
    this.bridalPrevious = this.bridalPrevious.bind(this);
    this.birthdayNext = this.birthdayNext.bind(this);
    this.birthdayPrevious = this.birthdayPrevious.bind(this);
    this.partyNext = this.partyNext.bind(this);
    this.partyPrevious = this.partyPrevious.bind(this);
    this.corporateNext = this.corporateNext.bind(this);
    this.corporatePrevious = this.corporatePrevious.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.listComments = this.listComments.bind(this);
   
  }


  componentDidMount(){
    this.listComments();
  }


  listComments() {
    var self = this
        axios.get('/api/v1/comments')
        .then(response => {
            debugger;
            console.log(response)
            self.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }



  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  bridalNext() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === bridal.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  bridalPrevious() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? bridal.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  birthdayNext() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === birthdays.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  birthdayPrevious() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? birthdays.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  partyNext() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === parties.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  partyPrevious() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? parties.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  corporateNext() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === corporate.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  corporatePrevious() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? corporate.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

   toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn,
            fadeIn1: false
        });
    }

     toggle1() {
        this.setState({
            fadeIn1: !this.state.fadeIn1,
            fadeIn: false
        });
    }






  render() {

    
    const { activeIndex } = this.state;

    const images = this.state.images

     const { photoIndex, isOpen } = this.state;
     var classN = 'fa fa-facebook fa-clickable'



    const bridalslides = bridal.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
          src={item.src}
        >


          <CarouselCaption className="text-default" captionText="" captionHeader="" />
        </CarouselItem>
      );
    });

    const partyslides = parties.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
          src={item.src}
        >


          <CarouselCaption className="text-default" captionText="" captionHeader=""  />
        </CarouselItem>
      );
    });
    
    const birthdayslides = birthdays.map((item) => {
      return (
        <CarouselItem
          className="bridal-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
          src={item.src}
        >


          <CarouselCaption className="text-default" captionText="" captionHeader="" />
        </CarouselItem>
      );
    });
        
    const corporateslides = corporate.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
          src={item.src}
        >


          <CarouselCaption className="text-default" captionText="" captionHeader="" />
        </CarouselItem>
      );
    });

    return (
      <div id= 'main'>
           <div>
           <Row>
           <Col>
           <div>
            <h1>Queena's Henna</h1>
           </div>
           </Col>
          <Col >
          <div id = 'about-contact'>
             <a href='#section1'> About </a> &nbsp;
             <a href='#section2'> Contact </a> &nbsp;
             <a href='#section3'> My Work </a> &nbsp;
             <a href='#section4'> What is Henna </a> &nbsp;
             <a href='#section5'> Reviews </a> &nbsp;
             <i className= {classN} title="Facebook"></i>
          </div>
          </Col>   
          </Row>

          </div>
            <br/><br/>
        <Jumbotron style={divStyle1}>
          <h1 id = 'hello-text'>Henna Artist</h1>        
        </Jumbotron>
    

      <br/><br/>
         {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

        <div>
        
        <ScrollableAnchor id={'section1'}>
            <div style={{height: '300px'}}>
              <br/>
                  <h2 id='line'><span>About</span></h2>
                  <br/>
                 <p id='about-text' className='text-center'> <font >"A recognized henna and facepainting artist"</font>  </p> 
                 <p id='about-text' className='text-center'> <font >"More to Come"</font>  </p>       
      
             </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div style={{height: '300px'}}>
          <br/>
                  <h2 id='line'><span>Contact</span></h2>
                  <br/>
                 <p id='about-text' className='text-center'> <font>"Email: rubyart31@gmail.com"</font>  </p>   
                 <p id='about-text' className='text-center'> <font>"Phone: 925-302-9107"</font>  </p>       
    
             </div>
        </ScrollableAnchor>
         <ScrollableAnchor id={'section3'}>
           <div>
           <br/>
              <h2 id='line'><span>My Work</span></h2>
             <br/>
             <Container>
              <Row>
                <Col sm="6">
                  <style>
                            {
                              `.custom-tag {
                                  max-width: 100%;
                                  padding-left: 100px;
                                  max-height: 500px;
                                }`
                            }
                          </style>
                          <Carousel
                            activeIndex={activeIndex}
                            next={this.bridalNext}
                            previous={this.bridalPrevious}
                          >
                            <CarouselIndicators items={bridal} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {bridalslides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.bridalPrevious} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.bridalNext} />
                    </Carousel>              
            <Card body>
                    <Button onClick={() => this.setState({ isOpen: true, images: bridal.map((s) => s.src) })}>Bridal</Button>
                  </Card>
                </Col>
                <Col sm="6">
                          <Carousel
                            activeIndex={activeIndex}
                            next={this.birthdayNext}
                            previous={this.birthdayPrevious}
                          >
                            <CarouselIndicators items={birthdays} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {birthdayslides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.birthdayPrevious} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.birthdayNext} />
                    </Carousel>                      <Card body>
                    <Button onClick={() => this.setState({ isOpen: true , images: birthdays.map((s)=> s.src)})}>Birthday</Button>
                  </Card>
                </Col>
                </Row>
                <br/>
                <Row>
                <Col sm="6">

                          <Carousel
                            activeIndex={activeIndex}
                            next={this.partyNext}
                            previous={this.partyPrevious}
                          >
                            <CarouselIndicators items={parties} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {partyslides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.partyPrevious} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.partyNext} />
                    </Carousel>                      <Card body>
                    <Button onClick={() => this.setState({ isOpen: true, images: parties.map((s) => s.src)})}>Parties</Button>
                  </Card>
                </Col>
                <Col sm="6">

                          <Carousel
                            activeIndex={activeIndex}
                            next={this.corporateNext}
                            previous={this.corporatePrevious}
                          >
                            <CarouselIndicators items={corporate} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {corporateslides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.corporatePrevious} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.corporateNext} />
                    </Carousel>                      <Card body>
                                       <Button  onClick={() => this.setState({ isOpen: true, images: corporate.map((s) => s.src) })}>Corporate Events</Button>

                  </Card>

                </Col>
              </Row>
              </Container>
          </div>

        </ScrollableAnchor>
        <br/><br/>

        <ScrollableAnchor id={'section4'}>
          <div style={{height: '300px'}}>
          <br/>
                  <h2 id='line'><span>What is Henna</span></h2>
                  <br/>
                 <p id='about-text' className='text-center'> <font >Henna is a small flowering shrub. Henna leaves are dried and turned into a fine powder. That powder can be used to dye hair or skin temporarily.

Henna body art has been used to adorn women's bodies in a variety of ceremonies for thousands of years. It's still used in many wedding ceremonies among various cultures. 

</font>  </p>   
    
             </div>
        </ScrollableAnchor>
      </div>

      <ScrollableAnchor id={'section5'}>
        <div>
          <br/>
        <CommentBox lists={this.state.lists}/>
        </div>
      </ScrollableAnchor>

       





                                          
      </div>
    );
  }
}
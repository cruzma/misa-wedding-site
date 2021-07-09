import React from 'react';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';
import './home-styling.css';

function Home(props){

return(
    <section className="wrapper wrapper-fix mainFlex fade-in">
        <ImageSlider slides={SliderData}></ImageSlider>
        <div class="pOneBox">
            <h1>Eco-planning</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis culpa deleniti fugit dolor sed laudantium deserunt, laboriosam, voluptates cum obcaecati fuga ratione nemo qui quia! Iusto debitis tempora nisi maiores odit eius ad obcaecati amet earum rem, perferendis ab impedit a error minus fugiat asperiores qui fuga possimus pariatur! Iure quae enim aliquam corrupti labore inventore dolore ut quis vitae nostrum fugiat totam vero officia eveniet, corporis aliquid accusantium, exercitationem sequi pariatur consequuntur reiciendis vel saepe. Corrupti iste id ab quas illum asperiores unde obcaecati nesciunt velit enim sequi assumenda quod tempora qui dolor magnam amet atque sunt veritatis, dicta consectetur sed neque. Quam natus odio omnis? Totam consequuntur quo magni facere. Reprehenderit sapiente quia at aperiam iusto cupiditate voluptatum qui enim odio maxime reiciendis in numquam minima sit nam incidunt explicabo voluptate beatae est fuga ipsum, sint quisquam autem iste. Similique quos necessitatibus nulla unde quas quis ipsam est recusandae enim sunt molestiae at doloremque facere quam placeat vero, non dignissimos esse nesciunt iure ab numquam aperiam eaque. Quae, quia ratione asperiores minima magni itaque inventore voluptatibus vero maxime sint eligendi deleniti numquam ipsa mollitia quis, voluptatem ducimus delectus illo aut ipsam recusandae, animi at atque fugit? Veritatis, iusto.</p>   
                
        </div>

        <div class="compliments">
            <div class="kindWordsSlideShow">
                <div class="kindWordsContainer">
                    <div>
                        <h4>Kind Words</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae quisquam iure a facere sint illo adipisci odio nihil, blanditiis asperiores dolores quae minima dolorum, qui accusantium pariatur tempora. Voluptas est esse, quos unde reiciendis placeat minima ducimus quisquam asperiores harum saepe deleniti commodi perspiciatis dolorum eum tempora id inventore.</p>
                    </div>
                </div>
                <div class="featurePhotoContainer">
                    <img src={require("../../assets/images/Styled-2.jpg").default} alt="bouquet of roses with engagement ring in the center"></img>
                </div>
            </div>
        </div>
    </section>
)

}

export default Home;
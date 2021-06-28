import React from 'react';
import './about-styling.css';

function About(props){
    return(
        <div className="wrapper fade-in">
            <section className="top-banner">
                <h1>About Me</h1>
               
            </section>
            <section className="mid-section">
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim incidunt laudantium qui minima quaerat esse, veritatis placeat. Error sunt adipisci hic odit facilis dolorem nulla recusandae id consequuntur iure tempora soluta aliquam atque reiciendis voluptate quo laborum ad, illum delectus magnam. Saepe iusto consequatur praesentium eum quia neque sapiente qui ab laborum, omnis quasi doloremque! Similique, excepturi ea! Rerum neque ad assumenda similique inventore alias corrupti, molestias ducimus natus! Veritatis eveniet, officia unde provident reiciendis quaerat tenetur similique ipsa, perspiciatis, sint laboriosam quod dolores. Voluptas ipsa nihil impedit atque nobis natus, tempore culpa incidunt optio. Vel hic quaerat architecto.</p></div>
                <div><img src={require("../../assets/images/Lorena16.jpg").default} alt="Wedding planner sitting on the floor by desk smiling at the camera"></img></div>
            </section>
            <section className="bottom-section">
                <div className="promise-box bottom-section-item">
                    <div><img src={require("../../assets/images/promise.png").default} alt="drawing of fingers crossed"></img></div>
                    <div>
                        <h2>Promises</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magnam. Maiores fugiat, accusantium tempore amet, excepturi cum deserunt architecto labore ratione repellat voluptates quo odit illum quam sunt dicta dolor reprehenderit est culpa provident. Odit iste maxime eveniet facere est, atque error, ducimus dolorum neque cupiditate asperiores placeat modi blanditiis!</p>
                    </div>
                </div>
                <div className="values-box bottom-section-item">
                    <div><img src={require("../../assets/images/values.png").default} alt="drawing of Stars shinning"></img></div>
                    <div>
                        <h2>Values</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae culpa eius alias libero, nemo rem veritatis quo, dolore eligendi ipsa corporis doloremque sit excepturi, quasi maiores totam illum. Dolore, nisi ab at adipisci sequi minima cum tenetur praesentium officia inventore id dignissimos deserunt quo delectus, repellat earum iusto animi consequatur.</p>
                    </div>
                </div>
                <div className="sustain-box bottom-section-item">
                    <div><img src={require("../../assets/images/sustainability.png").default} alt="drawing of hand holding a growing plant"></img></div>
                    <div>
                        <h2>Sustainability</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat velit esse, necessitatibus tempore quaerat quod laudantium et optio enim eius qui sed ipsa molestiae ratione consequuntur natus perspiciatis non sunt nobis ducimus? Quisquam, dignissimos enim quo hic quas aperiam maxime tempore excepturi laboriosam aspernatur atque animi voluptates maiores nihil!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
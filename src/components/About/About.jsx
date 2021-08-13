import React from 'react';
import './about-styling.css';

function About(props){
    return(
        <div className="wrapper about-wrapper-fix fade-in">
            <section className="top-banner">
                <h1>about me</h1>
               
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quia necessitatibus aliquam porro suscipit labore architecto hic earum molestias reprehenderit.</p>
                    </div>
                </div>
                <div className="values-box bottom-section-item">
                    <div><img src={require("../../assets/images/values.png").default} alt="drawing of Stars shinning"></img></div>
                    <div>
                        <h2>Values</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod cumque aspernatur praesentium iste fuga saepe illum ducimus.</p>
                    </div>
                </div>
                <div className="sustain-box bottom-section-item">
                    <div><img src={require("../../assets/images/sustainability.png").default} alt="drawing of hand holding a growing plant"></img></div>
                    <div>
                        <h2>Sustainability</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eum ad earum id neque, quam minus eaque dolor necessitatibus eligendi.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
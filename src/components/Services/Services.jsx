import React from 'react';

import './services-styling.css';

function Services(prop){
    return(
        <div className="wrapper">
            <section className="full-service-section">
                <div className="full-service-details-container">
                    <div>
                        <h1>full wedding planning</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id ratione officiis, cumque deleniti placeat rem sint repellendus veritatis. Praesentium optio ut at ullam porro animi consequatur facere voluptas reprehenderit magni. Consequatur deserunt provident nihil officiis magni, totam molestiae repellat soluta quod, perspiciatis illo. Hic dolores molestias animi laborum corporis!</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, deserunt!</p>
                            </li>
                            <li>
                                <p>Fuga, illum? Doloremque, fugiat praesentium fugit ad necessitatibus deleniti dolor.</p>
                            </li>
                            <li>
                                <p>Temporibus, facilis ut excepturi nobis nulla enim aliquam maxime nostrum.</p>
                            </li>
                            <li>
                                <p>Mollitia asperiores, tempore neque excepturi impedit inventore quod necessitatibus. Pariatur!</p>
                            </li>
                            <li>
                                <p>Dolores tempore natus corrupti quia mollitia officia esse illum dolor?</p>
                            </li>
                            <li>
                                <p>Accusamus nihil molestias tenetur nulla! Quam veritatis at numquam omnis!</p>
                            </li>
                            <li>
                                <p>Iusto facilis dolore excepturi? Error mollitia omnis inventore quia quae!</p>
                            </li>
                            <li>
                                <p>Accusantium velit vero labore voluptas ad repudiandae blanditiis iste dolorum?</p>
                            </li>
                            <li>
                                <p>Nisi aliquid eum blanditiis cumque consectetur labore veritatis nostrum nesciunt.</p>
                            </li>
                            <li>
                                <p>Exercitationem repellat aperiam expedita quas maiores sed corrupti vitae sit?</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="full-service-images-container">
                    <div><img src={require("../../assets/images/Styled-28.jpg").default} alt="plates and drinking glasses layed out nicely on the table for reception"></img></div>
                    <div><img src={require("../../assets/images/Styled-59.jpg").default} alt="bride cutting the wedding cake"></img></div>
                </div>
            </section>
            <div>
                <h2>book now</h2>
            </div>
        </div>
    )
}

export default Services;
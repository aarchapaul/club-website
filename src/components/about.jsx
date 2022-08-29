export const About = (props) => {
  return (
    <div id="about" >
      <div className="container">
        <div className="about-text">
          <h2 >About Us</h2>
          <p>For many, The Cheranalloor Club is a dream come true. It is the first charitable and leisure club (with own land and facilities) formed in the beautiful and silent village of Cheranalloor East.</p>
          <p>Our slogan is: <b>"We are one and together we win".</b></p>
          <p>The idea of forming a charitable and leisure Club originated in the minds of a few people of Cheranalloor during the year 2021. Later, to take this forward, a Formative Committee was formed comprising Mr. Joseph Uthup as Chairman, Adv. Polachan T.C. as Secretary and Mr. Jose Poonoly as Treasurer. By the end of 2021, around 30 highly enthusiastic people of Cheranalloor from different socio-economic background, got together and decided to form the club under the name “The Cheranalloor Club”.</p>
          <p>It was registered with the Registrar of Societies on 05/03/2022 and The Cheranalloor Club was officially inaugurated on 15/05/2022. The members in the club rose to 42 by this time. During the inauguration ceremony, the Club’s constitution and byelaws were unveiled and all founding members took oath to abide by the rules of constitution and byelaws of The Cheranalloor Club.</p>
          <p>We celebrate Onam, New Year and Club Anniversary with the members and family together every year.</p>
          <h3>Our Aims are:</h3>
              <div className="list-style">
                <ol>
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
                </ol>
              </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { Container } from "react-bootstrap";
import "./AboutDetails.css";

const AboutDetails = () => {
  return (
    <div>
      <Container className="about-details">
        <div>
          <h1>Why Zoom Academy</h1>
          <hr />
          <p>
            I chose West Connecticut Community College because of the financial
            benefits of staying local. I could continue to live at home, saving
            on rent and bills, and the cost of my education was 40% less
            expensive than attending the state university in my area.
            Additionally, I was able to take several courses online, which
            allowed me to work part-time throughout my time at school. I gained
            valuable professional skills at the same time I earned my degree.
          </p>
          <p>
            Saving money and avoiding debt were very important to me while
            pursuing my bachelor's degree because I wanted financial freedom to
            accept a position that I was passionate about, rather than taking a
            position because of the salary I might need to pay off student
            loans. Had I gone to a larger university, I wouldn't be able to
            apply for a job like this, which I'm very excited about, so I am
            very thankful that I made that decision
          </p>
        </div>
        <div>
          <h1>Our Mission</h1>
          <hr />
          <p style={{ fontWeight: "500" }}>
            Life is Good: To spread the power of optimism.
          </p>
          <p>
            The Life is Good brand is about more than spreading optimism —
            although, with uplifting T-shirt slogans like "Seas The Day" and
            "Forecast: Mostly Sunny," it's hard not to crack a smile.
          </p>
          <p>
            There are tons of T-shirt companies in the world, but Life is Good's
            mission sets itself apart with a mission statement that goes beyond
            fun clothing: to spread the power of optimism.
          </p>
          <p>
            This mission is perhaps a little unexpected if you're not familiar
            with the company's public charity: How will a T-shirt company help
            spread optimism? Life is Good answers that question below the fold,
            where the mission is explained in more detail using a video and with
            links to the company’s community and the Life is Good Kids
            Foundation page. We really like how lofty yet specific this mission
            statement is — it's a hard-to-balance combination.
          </p>
        </div>
        <div>
          <h1>Our Vision</h1>
          <hr />
          <p>
            This ZOOM ACADEMY'S vision statement is broad. It helps overcome
            legal obstacles to share knowledge and creativity around the world.
            By working closely with major institutions, its vision is an
            innovative internet that isn’t barred by paywalls.
          </p>
        </div>
        <div>
          <h1>Our Research</h1>
          <hr />
          <p>
            ImpactStory is the first open source, web-based tool released by
            OurResearch. It provides altmetrics to help researchers measure the
            impacts of their research outputs including journal articles, blog
            posts, datasets, and software.[9] This aims to change the focus of
            the scholarly reward system to value and encourage web-native
            scholarship.
          </p>
          <p>
            It provides context to its metrics so that they are meaningful
            without knowledge of the specific dataset: for example, instead of
            letting the reader guess whether having five forks on GitHub is
            common, ImpactStory would tell that the repository is in the 95th
            percentile of all GitHub repositories created that year.The metrics
            provided by ImpactStory can be used by researchers who want to know
            how many times their work has been downloaded and shared,[11] and
            also research funders who are interested in the impact of research
            beyond only considering citations to journal articles.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutDetails;

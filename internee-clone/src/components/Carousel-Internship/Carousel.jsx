import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="carousel-slide">
          <div className="carousel-text">
            <h2 className="firsttext">
              Get Internship In Your Favourite Domain 👋.
            </h2>
            <h2>
              Almost 30+ <br />
              Internships Are Open,
              <br /> Go & Grab Your Seats Now and secure your future 👩‍💻
            </h2>
          </div>
          <div className="internships">
            <div className="internship-card">
              <img
                src=".\src\assets\images\FrontEnd.webp"
                alt="Frontend Internship"
              />
              <h3>Frontend Internship</h3>
              <p>
                Choosing Internee.pk means more than just learning to code. It's
                about career advancement and propelling your journey towards
                becoming a proficient frontend developer. We believe in
                sculpting future tech leaders, and with us.
              </p>
              <button>Apply Now</button>
            </div>
            <div className="internship-card">
              <img
                src=".\src\assets\images\cloud.webp"
                alt="Cloud Computing Internship"
              />
              <h3>Cloud Computing Internship</h3>
              <p>
                Internee.pk for your Cloud Computing journey? We offer a
                comprehensive curriculum crafted by industry experts, ensuring
                you grasp the intricacies of cloud platforms and services. We
                believe in sculpting future tech leaders, and with us.
              </p>
              <button>Apply Now</button>
            </div>
            <div className="internship-card">
              <img
                src=".\src\assets\images\logo-designer-working-computer-desktop.webp"
                alt="Graphic Designing Internship"
              />
              <h3>Graphic Designing Internship</h3>
              <p>
                What sets our Graphic Designing internship apart? It's the
                perfect blend of theory and hands-on practice. You'll not only
                grasp the principles of design but also dive into real-world
                projects that challenge and enhance your creative skills.
              </p>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="internships">
            <div className="internship-card">
              <img
                src=".\src\assets\images\BackendDevelopment.webp"
                alt="Backend Internship"
              />
              <h3>Backend Internship</h3>
              <p>
                Backend internship? It's not just about learning; it's about
                crafting scalable solutions that power the digital landscape.
                Throughout the internship, you'll engage in hands-on projects,
                tackling real-world challenges alongside seasoned developers who
                are passionate about mentoring the next generation.
              </p>
              <button>Apply Now</button>
            </div>
            <div className="internship-card">
              <img
                src=".\src\assets\images\video-editing.webp"
                alt="Video Editing Internship"
              />
              <h3>Video Editing Internship</h3>
              <p>
                It's not just about splicing clips; it's about understanding the
                nuances of pacing, rhythm, and visual aesthetics. Throughout the
                internship, you'll work on diverse projects, refining your
                skills under the guidance of experienced professionals
                passionate about visual storytelling.
              </p>
              <button>Apply Now</button>
            </div>
            <div className="internship-card">
              <img
                src=".\src\assets\images\Mobile App Developer.webp"
                alt="Mobile App Internship"
              />
              <h3> Mobile App Internship</h3>
              <p>
                Our internship goes beyond coding; it's about understanding user
                behavior, mastering UI/UX principles, and creating apps that
                leave a lasting impression. Whether you're a seasoned coder or a
                budding developer, our program is tailored to nurture your
                skills and broaden your understanding of app architecture.
              </p>
              <button>Apply Now</button>
            </div>
            <div className="internship-card">
              <img
                src=".\src\assets\images\chatbotDevelopment.webp"
                alt="Chatbot Development Internship"
              />
              <h3>Chatbot Development Internship</h3>
              <p>
                Our program is designed for enthusiasts eager to explore natural
                language processing, machine learning, and the art of crafting
                intelligent conversational agents. From understanding user
                intents to deploying chatbots in real-world scenarios, you'll
                gain hands-on experience with cutting-edge technologies.
              </p>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
        <div className="carousel-slide">
          <div className="internships">
            <div className="internship-card">
              <img
                src=".\src\assets\images\digital.webp"
                alt="Digital Marketing Internship"
              />
              <h3>Digital Marketing Internship</h3>
              <p>
                Internee.pk offers a comprehensive Digital Marketing internship
                that goes beyond textbooks. Gain practical experience in social
                media management, content creation, SEO optimization, and
                analytics. Work on real projects, refine your skills, and make a
                tangible impact.
              </p>
              <button>Apply Now</button>
            </div>
            <div className="internship-card">
              <img
                src=".\src\assets\images\cyber.webp"
                alt="Cyber Internship"
              />
              <h3>Cyber Security Internship</h3>
              <p>
                We believe in nurturing talent that can tackle evolving cyber
                threats. Our interns don't just learn; they engage with
                cutting-edge technologies, analyze vulnerabilities, and develop
                robust security strategies.
              </p>
              <button>Apply Now</button>
            </div>
            <div className="internship-card">
              <img
                src=".\src\assets\images\BackendDevelopment.webp"
                alt="Graphic Designing Internship"
              />
              <h3>Backend Internship</h3>
              <p>
                Backend internship? It's not just about learning; it's about
                crafting scalable solutions that power the digital landscape.
                Throughout the internship, you'll engage in hands-on projects,
                tackling real-world challenges alongside seasoned developers who
                are passionate about mentoring the next generation.
              </p>
              <button>Apply Now</button>
            </div>
            <div className="internship-card">
              <img
                src=".\src\assets\images\technical.webp"
                alt="Techhnical Writing Internship"
              />
              <h3>Technical Writing Internship</h3>
              <p>
                we understand the importance of effective communication in the
                tech world. Our Technical Writing Internship offers a unique
                blend of hands-on experience in translating technical jargon
                into clear, concise, and engaging content.
              </p>
              <button>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <div className="carousel-footer">
        <p>
          Learn skills, <span>Market will be yours.</span>
        </p>
      </div>
    </div>
  );
};

export default Carousel;

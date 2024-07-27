import React from "react";
import "./blog.css";

const BlogCards = () => {
  return (
    <section className="blogsection">
      <div className="blog-container container">
        <h3>Our Blog</h3>
        <h2>Recent Blog</h2>
        <div className="blog-card-grid">
          <div className="blog-card">
            <img
              src=".\src\assets\images\certificate-blog1.jpeg"
              alt="Didn't Got Certification Yet?"
              className="blog-card-image"
            />
            <h4>
              Complete all of the task but didn't get certification yet? 😟🤷‍♀️
            </h4>
            <p>
              📧 Drop us a quick email at issues@internee.pk with the subject
              "Didn't get certification yet." Our team will swiftly resolve the
              matter, ensuring you get your recognition promptly.
            </p>
          </div>
          <div className="blog-card">
            <img
              src=".\src\assets\images\mentor blog2.jpeg"
              alt="Call For The Mentors"
              className="blog-card-image"
            />
            <h4>
              🚀 Are you a tech expert looking to make a meaningful impact in
              the community? 🌟🎉
            </h4>
            <p>
              Our goal is to make Pakistan as an IT Hub. For this, we need more
              hands-on developers and tech enthusiast who will lift the
              Pakistan's IT export into the top👨‍💻. Your guidance and help may
              create a significant impact on some one's career. 🚀
            </p>
          </div>
          <div className="blog-card">
            <img
              src=".\src\assets\images\comunity blog3.jpeg"
              alt="Calling For Community Collaboration"
              className="blog-card-image"
            />
            <h4>
              🚀 Calling communities to Empower Students, Collaborate with
              Internee.pk! ✌️
            </h4>
            <p>
              We'd love to discuss how a collaboration with Internee.pk can
              benefit your universites , socities, institutes and educational
              institutions and specially with students.
            </p>
          </div>
          <div className="blog-card">
            <img
              src=".\src\assets\images\11 blog4.PNG"
              alt="How to Claim Your Certification"
              className="blog-card-image"
            />
            <h4>
              Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟
            </h4>
            <p>
              To complete the process, send us all the task details via email at
              careers@internee.pk. This ensures that we have all the necessary
              information to validate your certification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;

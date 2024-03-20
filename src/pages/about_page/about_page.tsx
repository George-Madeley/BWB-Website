import './about_page.css';

import TeamMember1 from '../../images/team-member-1.png';
import TeamMember2 from '../../images/team-member-2.png';
import TeamMember3 from '../../images/team-member-3.png';
import TeamMember4 from '../../images/team-member-4.png';
import TeamMember5 from '../../images/team-member-5.png';
import TeamMember6 from '../../images/team-member-6.png';

export default function AboutPage() {
  return (
    <div className="about-page">
      <div
        className="card-category"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundPosition: '20% 70%'
          }}
      >
        About Us
      </div>
      <div className="card-product">
        <div className="team-imgs">
          <div className="team-card">
            <img src={TeamMember1} alt="team member 1" />
            <h3>Dr. Despina Moschou</h3>
            <p>Academic Leader</p>
          </div>
          <div className="team-card">
            <img src={TeamMember2} alt="team member 2" />
            <h3>Alexz Farrall</h3>
            <p>Academic Leader</p>
          </div>
          <div className="team-card">
            <img src={TeamMember3} alt="team member 3" />
            <h3>Melissa Mitchell</h3>
            <p>Technical Director</p>
          </div>
          <div className="team-card">
            <img src={TeamMember4} alt="team member 4" />
            <h3>Pavlos Menelaou</h3>
            <p>Consultant</p>
          </div>
          <div className="team-card">
            <img src={TeamMember5} alt="team member 5" />
            <h3>Vrinda Raninga</h3>
            <p>Business Director</p>
          </div>
          <div className="team-card">
            <img src={TeamMember6} alt="team member 6" />
            <h3>Hannah Morales</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div className="card-product-infos">
          <h2>Our Story</h2>
          <br></br>
          <p>Team Bath Biodevices is a Vertically Integrated Project at the Univeristy of Bath formed by a diverse and
            multi-disciplinary team that aims to create
            <strong> portable</strong> and <strong>affordable</strong> electrochemical devices that enable fast and reliable water
            quality quantification.</p>
          <br></br>
          <p> At the core of our mission, we are dedicated to address a global challenge: the scarcity of reliable and clean water in
            Sub-Saharan Africa. We believe that access to clean water is a fundamental human right, and our team is driven to make this right a reality for communities facing water scarcity.
            Every step we take, every innovation we make, is fueled bythe desire to make a meaningful difference in the lives of those who lack reliable water supplies.
          </p>
          <br></br>
          <p>
            Join us on this incredible journey as we work towards a world
            where clean water is not a luxury but a basic necessity accessible to all.
            </p>
        </div>
      </div>
    </div>
  );
}

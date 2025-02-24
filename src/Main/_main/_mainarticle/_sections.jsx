import "./_sections.css";

import flaticonWelcomeImage from "../../../assets/images/flaticon-welcome-image.png";

function _sections() {
  return (
    <>
      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </>
  );
}

export default _sections;

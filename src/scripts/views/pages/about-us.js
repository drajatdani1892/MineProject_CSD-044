import { createAboutUsTemplate } from '../templates/template-creator';

const AboutUs = {
  async render() {
    return `
    <div class="container">
            <div class="title-page mb-5">
                <h2 id="textAboutUs" tabindex="0">About Us</h2>
            </div>
      <div class="aboutus-container"></div>
    </div>
    `;
  },
  async afterRender() {
    document.title = 'Mine APP | About Us';
    const aboutus = document.querySelector('.aboutus-container');
    aboutus.innerHTML = createAboutUsTemplate();
  },
};

export default AboutUs;

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closePopup = document.querySelector('.close-popup');
  
    const projectDetails = {
        'boardgame': {
            title: 'Boardgame Project',
            image: 'img/ww-project.png',
            description: 'This project is a digital solution for a boardgame, featuring an online card pull system. It allows players to enjoy the game with infinte amount of cards via online card pull without having to use physical cards.',
            extraContent: `
              <h3>Project Overview</h3>
              <p>Our Boardgame Project revolutionizes traditional tabletop gaming by bringing some of the elements of card-based games into the digital realm. This innovative platform allows players to pull the card online, enhancing the gaming experience and making it more environmental. The boardgame itself are played physically, because we didn't want to remove the social element from boardgames.</p>
              <div class="cardpull-system">
                <img src="img/boardgame-cardpull.png" alt="Online card pull system">
                <p>An online card pull system that allows the user to pull a random card from the deck</p>
              </div>
              
              <div class="image-gallery">
                <figure>
                  <img src="img/boardgame-easycard.png" alt="showcase of easy card">
                  <figcaption> Showcase of an easy card from our boardgame</figcaption>
                </figure>
                <figure>
                  <img src="img/boardgame-actioncard.png" alt="showcase of actioncard">
                  <figcaption> Showcase of actioncard from our boardgame</figcaption>
                </figure>
                <figure>
                  <img src="img/boardgame-hardcard.png" alt="showcase of hard card">
                  <figcaption>Showcase of hard card from our boardgame</figcaption>
                </figure>
              </div>
      
              <h3>Key Features</h3>
              <ul>
                <li><strong>Online Card Pull System:</strong> Our proprietary system simulates physical card drawing, ensuring fair and random card distribution.</li>
                <li><strong>Cross-platform Compatibility:</strong> Play on desktop, tablet, or mobile devices seamlessly.</li>
                <li><strong>Erases the clumsiness of physical cards:</strong> Our platform allows players to enjoy the game with infinite amount of cards, without having to restack them.</li>
              </ul>
      
              <h3>My Contributions in this team project</h3>
              <ul>
                <li>Front-end development using HTML, SCSS and JavaScript for creating the stringsystem, behind the card pull system.</li>
                <li>Idea generation for the boardgame project and the ruleset.</li>
                <li>Converting figmaframe design to a identical and functional website.</li>
              </ul>
            `
    

      },
      'web-availability': {
        title: 'Web Availability Project',
        image: 'img/ec-projekt.png',
        description: 'The Web Availability Project was my first individual project and the second coding project I have ever done, where i was not as advanced in web development. I learned a lot through this project, mainly the different display systems flex and grid and their importance for better accessibility. This project focuses on making digital content accessible to all users, including those with disabilities. It implements best practices in web design to ensure that websites are usable by people with various accessibility needs. This project was pimarily made using HTML, CSS and a small amount of JavaScript for a functional hamburger menu.',
      },
      'moonlight': {
        title: 'Moonlight Project',
        image: 'img/moonlight-projekt.png',
        description: 'Moonlight is a group project, where we had to build our own media bureau. Our solution for this project was to create a onestop company for all media-related needs. Everything from video production to web development was done by us, aswell as animation and design.',
        extraContent: `
        <h3>My involvement in the project</h3>
        <p>In the Moonlight project I was the creator for most of our animations using after effects, which is showcased below. I was also the leadcoder in the web development team, where we were using HTML, SCSS and JavaScript. Everything was designed in figma beforehand to give a collective overview of the websites design.</p>
        <div class="video-container">
          <div class="video-item">
          <h4>Halfpage advertisement banner</h4>
          <div class="halfpage-animation">
            <video id="halfpage-animation" loop controls muted>
              <source src="video/halfpage-ml-banner.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p>This animation was made as a halfpage advertisement banner, to be positioned on the side of the page. The design was made to look exclusive. Going in the depth of the design choices, we chose it to be a bit anonymous, as we only put our name on it, not showcasing anything else thats related to us, so it would appear mysterious and spark interest for better click rates.</p>
            </div>
          </div>
          <div class="video-item">
            <h4>Video overlay</h4>
            <video id="overlay-animation" loop controls muted>
              <source src="video/ml-overlay.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p>This overlay animation was made to be on top of our videos, that we produced. Its purpose was to show our identity and brand on everything we made or produced, as our personal signature. This was to increase our credibility and make sure that our signature was only associated with our brand and the quality we would deliver. </p>
          </div>
          <div class="video-item">
            <h4>Top or bottom page advertisement banner</h4>
            <video id="rolling-banner-animation" loop controls muted>
              <source src="video/ml-rolling-tryout.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p>This was one of our more informative banners that contains our unique selling points and our services for the potential customers/clients, to showcase that we were a onestop bureau, that would be the solution for all of our clients problems.</p>
          </div>
        </div>
        <h3>Highlights of the project</h3>
        <ul>
          <li>Responsive design ensuring seamless viewing across all devices.</li>
          <li>Custom animated advertisement banners for further exposure.</li>
          <li>Integration of video content for immersive storytelling.</li>
          <li>Optimized performance for fast loading times.</li>
          <li>Accessibility considerations for all content.</li>
        </ul>
      `
    }
  };
  
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const project = card.getAttribute('data-project');
        const details = projectDetails[project];
  
        document.getElementById('popup-title').textContent = details.title;
        document.getElementById('popup-image').src = details.image;
        document.getElementById('popup-image').alt = details.title;
        document.getElementById('popup-description').textContent = details.description;


      const extraContentContainer = document.getElementById('popup-extra-content');
      if (details.extraContent) {
        extraContentContainer.innerHTML = details.extraContent;
        extraContentContainer.style.display = 'block';
      } else {
        extraContentContainer.style.display = 'none';
      }
  
        popupOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });
  
    closePopup.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
      document.body.style.overflow = '';
      document.querySelectorAll('.popup-content video').forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
    });



      projectCards.forEach(card => {
        card.addEventListener('click', () => {
          const project = card.getAttribute('data-project');
          const details = projectDetails[project];
    
          document.getElementById('popup-title').textContent = details.title;
          document.getElementById('popup-image').src = details.image;
          document.getElementById('popup-image').alt = details.title;
          document.getElementById('popup-description').textContent = details.description;
          
          // Handle extra content for Moonlight project
          const extraContentContainer = document.getElementById('popup-extra-content');
          if (details.extraContent) {
            extraContentContainer.innerHTML = details.extraContent;
            extraContentContainer.style.display = 'block';
            // Attempt to autoplay videos after a short delay to ensure DOM is updated
            setTimeout(playVideos, 100);
          } else {
            extraContentContainer.style.display = 'none';
          }
        });
      });
  
    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
        document.body.style.overflow = '';

        document.querySelectorAll('.popup-content video').forEach(video => {
            video.pause();
            video.currentTime = 0;
          });
      }
    });
  });

  
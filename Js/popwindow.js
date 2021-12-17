const myProjects = [
    {
      id: 1,
      title: 'Multi Post Stories',
      titlelong: 'Keeping track of hundreds of components website',
      description: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/Placeholder.png',
      technologies: ['css', 'html', 'bootstrap', 'ruby'],
      live: '#',
      source: '#',
    },
    {
      id: 2,
      title: 'Profesional Art Printing Data',
      titlelong: 'Keeping track of hundreds of components website',
      description: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/holder-2.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      live: '#',
      source: '#',
    },
    {
      id: 3,
      title: 'Data Dashboard Healthcare',
      titlelong: 'Keeping track of hundreds of components website',
      description: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
      img: 'img/holder-2.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      live: '#',
      source: '#',
    },
    {
      id: 4,
      title: 'Profesional Art Printing Data',
      titlelong: 'Keeping track of hundreds of components website',
      description: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
      img: './img/holder-2.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      live: '#',
      source: '#',
    },
    {
      id: 5,
      title: 'Profesional Art Printing Data',
      titlelong: 'Keeping track of hundreds of components website',
      description: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
      img: './img/holder-2.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      live: '#',
      source: '#',
    },
    {
      id: 6,
      title: 'Profesional Art Printing Data',
      titlelong: 'Keeping track of hundreds of components website',
      description: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
      img: './img/holder-2.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      live: '#',
      source: '#',
    },
    {
      id: 7,
      title: 'Profesional Art Printing Data',
      titlelong: 'Keeping track of hundreds of components website',
      description: "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry's standard.",
      img: './img/holder-2.png',
      technologies: ['html', 'bootstrap', 'ruby'],
      live: '#',
      source: '#',
    }
    ];
  
    const projectSection = document.querySelector('.works');
  
    for (let i = 0; i < myProjects.length; i++) {
      const project = myProjects[i]
      projectSection.innerHTML += `
      
      <div class="project-template">
        <div id=${project.id} class='proj2'> 
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <ul class="tools2">
            <li>${project.technologies[0]}</li>
            <li>${project.technologies[1]}</li>
            <li>${project.technologies[2]}</li>
          </ul>
          <button id='${project.id}' class="Proj-button2 open-button">See Project</button>
        </div>
      </div>
      
      `
    }
  
    const openPop = document.querySelectorAll('.open-button')
    const popUp = document.querySelector('.pop-container')
  
    openPop.forEach(element => {
    element.addEventListener('click', () => {
      const id = Number(element.id)
      for (let i = 0; i < myProjects.length; i++) {
        const project = myProjects[i]
        if (id === project.id) {
          popUp.innerHTML = `
          
        <div class="pop-container">
          <div class="title">
            <h3 class="title-short">${project.title} </h3>
            <h3 class="title-long">${project.titlelong}/h3>
            <span class="title-x">&times;</span>
          </div>
          <ul class="tools">
          <li>${project.technologies[0]}</li>
          <li>${project.technologies[1]}</li>
          <li>${project.technologies[2]}</li>
          </ul>
          <div class="pop-flex">
              <img class="pop-img" src="${project.img}" alt="a visual for project">
            <div class="pop-txt">
              <p>${project.description}</p>
              <div class='pop-button'>
                <button class="Proj-button">See Source <i class="fas fa-external-link-alt"></i></button>
                <button class="Proj-button">See Live <i class="fab fa-github-square"></i></a></li></button>
              </div>
            </div>
          </div>
        </div>
      `
    }
  }
  
  popUp.classList.add('pop')
  
  const closePop = document.querySelector('.title-x')
  closePop.addEventListener('click', () => {
    popUp.classList.remove('pop')
    console.log('closePop:', closePop)
  })
  })
  })
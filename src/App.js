import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {  
  const [categories] = useState([
    {
      name: 'project 1',
      description: 'RUN BUDDY: (copy link-->) https://github.com/asiajcrew/run-buddy',
    },
    { name: 'project 2', description: 'BEARLY TOLERABLE JOKES: (copy link-->) https://github.com/asiajcrew/Group-Project' },
    { name: 'project 3', description: 'COMMUNITY FITNESS: (copy link-->) https://github.com/asiajcrew/community-fitness' },
    { name: 'project 4', description: 'REACT PORTFOLIO: (copy link-->) https://github.com/asiajcrew/React-portfolio' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;

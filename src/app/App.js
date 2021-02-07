import React from 'react';

import Navbar from './components/navbar.js';
import Intro from './components/intro.js';
import AboutPage from './components/about.js';
import Skills from './components/skills.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
import Testimonials from './components/testimonials.js';
import AppContext from './AppContext';

const App = () => {
	return (
		<AppContext.Provider>
		    <Navbar />
		    <Intro />
		    <AboutPage />		
			<Testimonials/>
		    <Portfolio />
			<Skills/>	
		    <Contact />
		    <Footer />	
	    </AppContext.Provider>
	);
};

export default App;

import React from 'react';

import Navbar from './components/navbar.js';
import Intro from './components/intro.js';
import AboutPage from './components/about.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
import AppContext from './AppContext';

const App = () => {
	return (
		<AppContext.Provider>
		    <Navbar />
		    <Intro />
		    <AboutPage />
		    <Portfolio />
		    <Contact />
		    <Footer />	
	    </AppContext.Provider>
	);
};

export default App;

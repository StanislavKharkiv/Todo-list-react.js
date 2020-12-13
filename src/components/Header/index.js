import React from 'react';
import Typography from '@material-ui/core/Typography';

import './header.css';

const Header = () => {

	return (
		<header className="header">
			<Typography variant="h3" component="h1">Task manager</Typography>
		</header>
	)
}

export default Header;
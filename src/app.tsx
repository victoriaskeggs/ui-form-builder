import { render } from 'react-dom';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

class App extends React.Component<{ greeting: string }, { count: number }> {
	state = { count: 0 };
	render() {
		return (
			<Container>
				<Typography variant="h1">{this.props.greeting}</Typography>
				<Button variant="contained" onClick={() => this.setState({ count: this.state.count + 1 })}>
					This button has been clicked {this.state.count} times.
				</Button>
			</Container>);
	}
}

render(
	<App greeting="Hello, world!" />,
	document.getElementById("root")
);
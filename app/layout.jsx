import '@styles/globals.css';
import Nav from '@components/Nav';
export const metadata = {
	title: 'Application Manager',
	description: 'Apply and manage applications and course management',
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>
				<Nav />
				<main className="app">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;

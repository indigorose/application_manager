import '@styles/globals.css';

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

				<main className="app">{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;

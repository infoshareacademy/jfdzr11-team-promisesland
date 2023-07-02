import useAuth from '../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { getUserData } from '../../utils/getUserData';

const Home = () => {
	const { currentUser } = useAuth();
	const [user, setUser] = useState();

	useEffect(() => {
		if (currentUser) {
			getUserData(currentUser.uid, setUser);
		}
	}, [currentUser]);

	return (
		<>
			{user ? (
				<div>
					<div className={styles.greetingBox}>
						<h2 className={styles.greeting}>
							<span>Witaj,</span>
							<br />
							{user.firstName} {user.lastName}!
						</h2>
					</div>

					<div className={styles.honeycomb}>
						<div className={styles.ibwsfix}>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/userprofile' className={styles.linkshx}>
										Mój profil
									</Link>
								</div>
							</div>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/mytrips/ownedtrips' className={styles.linkshx}>
										Moje podróże
									</Link>
								</div>
							</div>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/addtrip' className={styles.linkshx}>
										Stwórz podróż
									</Link>
								</div>
							</div>
							<div className={styles.hexagon}>
								<div className={styles.hexagontent}>
									<Link to='/alltrips' className={styles.linkshx}>
										Szukaj podróży
									</Link>
								</div>
							</div>
							<div className={styles.ibwsfix}>
								<div className={styles.hexagon}>
									<div className={styles.hexagontent}>
										<span>+</span>
									</div>
								</div>
								<div className={styles.hexagon}>
									<div className={styles.hexagontent}>
										<span>+</span>
									</div>
								</div>
								<div className={styles.hexagon}>
									<div className={styles.hexagontent}>
										<span>+</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Home;

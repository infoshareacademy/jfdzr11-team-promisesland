import React from 'react';
import styles from './Footer.module.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
	const { pathname } = useLocation();

	return (
		<div className={styles.footer}>
			<Link className={pathname === '/' ? styles.active : ''} to='/'>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src={
							pathname === '/'
								? '/assets/icons/home-circle-light.svg'
								: '/assets/icons/home-circle-dark.svg'
						}
						alt='Ikona skrótu do Home'
					/>
					<span>Home</span>
				</div>
			</Link>
			<Link
				className={pathname === '/alltrips' ? styles.active : ''}
				to='/alltrips'
			>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src={
							pathname === '/alltrips'
								? '/assets/icons/airplane-light.svg'
								: '/assets/icons/airplane-dark.svg'
						}
						alt='Ikona skrótu do Podróżuj'
					/>

					<span>Podróżuj</span>
				</div>
			</Link>
			<Link
				className={
					pathname === '/mytrips/ownedtrips' || pathname === '/mytrips/joinedtrips'
						? styles.active
						: ''
				}
				to='/mytrips/ownedtrips'
			>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src={
							pathname === '/mytrips/ownedtrips' || pathname === '/mytrips/joinedtrips'
								? '/assets/icons/auto-mode-light.svg'
								: '/assets/icons/auto-mode-dark.svg'
						}
						alt='Ikona skrótu do Moje Podróże'
					/>
					<span>Moje podróże</span>
				</div>
			</Link>
			<Link
				className={pathname === '/userprofile' ? styles.active : null}
				to='/userprofile'
			>
				<div className={styles.link}>
					<img
						className={styles.icon}
						src={
							pathname === '/userprofile'
								? '/assets/icons/account-circle-light.svg'
								: '/assets/icons/account-circle-dark.svg'
						}
						alt='Ikona skrótu do Profil'
					/>
					<span>Profil</span>
				</div>
			</Link>
		</div>
	);
};

export default Footer;

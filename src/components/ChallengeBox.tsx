import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
	const hasActiveChallenge = true;

	return (
		<div className={styles.challengeBoxContainer}>
			{hasActiveChallenge ? (
				<div className={styles.challengeActive}>
					<header> Ganhe 400xp </header>
					<main>
						<img src="icons/body.svg" alt="" />
						<strong>Novo desafio</strong>
						<p>Levante e faça uma caminhada de 3 minutos.</p>
					</main>

					<footer>
						<button
							type="button"
							className={styles.challengeFailedButton}
							onClick={null}
						>
							Falhei
						</button>
						<button
							type="button"
							className={styles.challengeSucceededButton}
							onClick={null}
						>
							completei
						</button>
					</footer>
				</div>
			) : (
				<div className={styles.challengeNotActive}>
					<strong>
						Finalize um ciclo para receber um desafio
						<p>
							<img src="icons/level-up.svg" alt="level up" />
							Avance de level completando desafios
						</p>
					</strong>
				</div>
			)}
		</div>
	);
}

import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/Countdown/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
	const { activeChallenge, resetChallenge, completeChallenge } = useContext(
		ChallengesContext
	);
	const { resetCountdown } = useContext(CountdownContext);

	function handleChallengeSucceeded() {
		completeChallenge();
		resetCountdown();
	}
	function handleChallengeFailed() {
		resetChallenge();
		resetCountdown();
	}

	return (
		<div className={styles.challengeBoxContainer}>
			{activeChallenge ? (
				<div className={styles.challengeActive}>
					<header> Ganhe {activeChallenge.amount} </header>
					<main>
						<img src={`icons/${activeChallenge.type}.svg`} />
						<strong>Novo desafio</strong>
						<p>{activeChallenge.description}</p>
					</main>

					<footer>
						<button
							type="button"
							className={styles.challengeFailedButton}
							onClick={handleChallengeFailed}
						>
							Falhei
						</button>
						<button
							type="button"
							className={styles.challengeSucceededButton}
							onClick={handleChallengeSucceeded}
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

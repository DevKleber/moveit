import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/Countdown/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;
const countDownInial: number = 0.1 * 60;

export function Countdown() {
	const {
		hasFinished,
		isActive,
		minutes,
		seconds,
		resetCountdown,
		startCountdown,
	} = useContext(CountdownContext);

	const [minuteLeft, minuteRight] = String(minutes)
		.padStart(2, "0")
		.split("");
	const [secondLeft, secondRight] = String(seconds)
		.padStart(2, "0")
		.split("");

	return (
		<div>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{hasFinished ? (
				<button disabled className={styles.countdownButton}>
					Ciclo encerrado
				</button>
			) : (
				<>
					{isActive ? (
						<button
							type="button"
							className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
							onClick={resetCountdown}
						>
							Abandonar um ciclo
						</button>
					) : (
						<button
							type="button"
							className={styles.countdownButton}
							onClick={startCountdown}
						>
							Iniciar um ciclo
						</button>
					)}
				</>
			)}
		</div>
	);
}

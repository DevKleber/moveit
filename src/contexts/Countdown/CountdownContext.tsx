import { createContext, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../ChallengesContext";
import {
	CountdownContextData,
	CountdownProviderPros,
} from "./CountdownContextTypes";

export const CountdownContext = createContext({} as CountdownContextData);
const countDownInial: number = 0.1 * 60;
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderPros) {
	const { startNewChallenge } = useContext(ChallengesContext);

	const [time, setTime] = useState(countDownInial);
	const [isActive, setIsActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	function startCountdown() {
		setIsActive(true);
	}

	function resetCountdown() {
		clearTimeout(countdownTimeout);
		setIsActive(false);
		setTime(countDownInial);
		setHasFinished(false);
	}

	useEffect(() => {
		if (isActive && time > 0) {
			countdownTimeout = setTimeout(() => {
				setTime(time - 1);
			}, 1000);
		} else if (isActive && time === 0) {
			setHasFinished(true);
			setIsActive(false);
			startNewChallenge();
		}
	}, [isActive, time]);

	return (
		<CountdownContext.Provider
			value={{
				minutes,
				seconds,
				hasFinished,
				isActive,
				startCountdown,
				resetCountdown,
			}}
		>
			{children}
		</CountdownContext.Provider>
	);
}

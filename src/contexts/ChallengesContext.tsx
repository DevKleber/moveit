import { createContext, ReactNode, useState } from "react";
import {
	ChallangesProviderPros,
	ChallengesContextData,
} from "./ChallengesContextTypes";
import challenges from "../../challenges.json";

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallangesProviderPros) {
	const [level, setLevel] = useState(11);
	const [currentExperience, setCurrentExperience] = useState(30);
	const [challengesCompleted, setChallengesCompleted] = useState(0);

	const [activeChallenge, setActiveChallenge] = useState(null);

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

	function levelUp() {
		setLevel(level + 1);
	}

	function startNewChallenge() {
		const randomChallengeIndex = Math.floor(
			Math.random() * challenges.length
		);
		const challenge = challenges[randomChallengeIndex];

		setActiveChallenge(challenge);
	}

	function resetChallenge() {
		setActiveChallenge(null);
	}

	return (
		<ChallengesContext.Provider
			value={{
				level,
				currentExperience,
				challengesCompleted,
				activeChallenge,
				experienceToNextLevel,
				levelUp,
				startNewChallenge,
				resetChallenge,
			}}
		>
			{children}
		</ChallengesContext.Provider>
	);
}

import { ReactNode } from "react";
import challenges from "../../challenges.json";

export interface ChallangesProviderPros {
	children: ReactNode;
}

export interface Challenge {
	type: "body" | "eye";
	description: string;
	amount: number;
}

export interface ChallengesContextData {
	//tipo de retorno para facilitar no uso do context.
	level: number;
	currentExperience: number;
	challengesCompleted: number;
	experienceToNextLevel: number;
	activeChallenge: Challenge;
	levelUp: () => void; //é assim que tipa funções sem retorno.
	startNewChallenge: () => void;
	resetChallenge: () => void;
	completeChallenge: () => void;
}

import { createContext, ReactNode, useState } from "react";

export const ChallengesContext = createContext({});

interface ChallangesProviderPros {
	children: ReactNode;
}

export function ChallengesProvider({ children }: ChallangesProviderPros) {
	const [level, setLevel] = useState(1);

	function levelUp() {
		setLevel(level + 1);
	}

	return (
		<ChallengesContext.Provider value={{ level, levelUp }}>
			{children}
		</ChallengesContext.Provider>
	);
}

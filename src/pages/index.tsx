import Head from "next/head";

import { ExpirenceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import style from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/Countdown/CountdownContext";

export default function Home() {
	return (
		<div className={style.container}>
			<Head>
				<title>Inicio | Move.it</title>
			</Head>
			<ExpirenceBar />
			<CountdownProvider>
				<section>
					<div>
						<Profile />
						<CompletedChallenges />
						<Countdown />
					</div>
					<div>
						<ChallengeBox />
					</div>
				</section>
			</CountdownProvider>
		</div>
	);
}

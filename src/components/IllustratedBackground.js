export default function IllustratedBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 overflow-hidden">
			<svg
				aria-hidden="true"
				viewBox="0 0 1600 1100"
				className="absolute inset-0 h-full w-full opacity-30"
				preserveAspectRatio="xMidYMid slice"
			>
				<defs>
					<linearGradient id="treeSkyGlow" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#0d1420" stopOpacity="0.15" />
						<stop offset="100%" stopColor="#10253a" stopOpacity="0.4" />
					</linearGradient>
					<linearGradient id="treeTrunk" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#1d2f42" />
						<stop offset="100%" stopColor="#09111a" />
					</linearGradient>
					<linearGradient id="treeLeaves" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" stopColor="#bfe9ff" stopOpacity="0.95" />
						<stop offset="45%" stopColor="#75c8ff" stopOpacity="0.75" />
						<stop offset="100%" stopColor="#2458a8" stopOpacity="0.55" />
					</linearGradient>
				</defs>

				<rect width="1600" height="1100" fill="url(#treeSkyGlow)" />

				<g transform="translate(875 120) scale(1.02)">
					<path d="M170 760 C168 670, 176 592, 190 524 C205 446, 210 372, 203 284" stroke="url(#treeTrunk)" strokeWidth="18" fill="none" strokeLinecap="round" />
					<path d="M195 534 C155 488, 109 446, 56 414" stroke="url(#treeTrunk)" strokeWidth="10" fill="none" strokeLinecap="round" />
					<path d="M200 488 C250 452, 304 416, 370 392" stroke="url(#treeTrunk)" strokeWidth="10" fill="none" strokeLinecap="round" />
					<path d="M196 438 C166 386, 141 334, 124 276" stroke="url(#treeTrunk)" strokeWidth="8" fill="none" strokeLinecap="round" />
					<path d="M206 395 C242 340, 279 288, 330 248" stroke="url(#treeTrunk)" strokeWidth="8" fill="none" strokeLinecap="round" />
					<path d="M195 573 C145 556, 103 543, 54 538" stroke="url(#treeTrunk)" strokeWidth="7" fill="none" strokeLinecap="round" />
					<path d="M205 562 C253 566, 305 578, 362 599" stroke="url(#treeTrunk)" strokeWidth="7" fill="none" strokeLinecap="round" />
					<path d="M214 360 C273 325, 330 294, 393 270" stroke="url(#treeTrunk)" strokeWidth="7" fill="none" strokeLinecap="round" />
					<path d="M188 330 C139 302, 97 276, 48 252" stroke="url(#treeTrunk)" strokeWidth="7" fill="none" strokeLinecap="round" />

					<g fill="url(#treeLeaves)">
						<circle cx="82" cy="240" r="34" />
						<circle cx="128" cy="196" r="42" />
						<circle cx="172" cy="154" r="50" />
						<circle cx="226" cy="164" r="46" />
						<circle cx="285" cy="188" r="48" />
						<circle cx="342" cy="230" r="42" />
						<circle cx="388" cy="284" r="34" />
						<circle cx="70" cy="308" r="30" opacity="0.85" />
						<circle cx="116" cy="286" r="34" opacity="0.85" />
						<circle cx="152" cy="252" r="30" opacity="0.85" />
						<circle cx="212" cy="230" r="34" opacity="0.85" />
						<circle cx="264" cy="244" r="32" opacity="0.85" />
						<circle cx="316" cy="270" r="30" opacity="0.85" />
						<circle cx="360" cy="318" r="28" opacity="0.85" />
						<circle cx="42" cy="396" r="24" opacity="0.8" />
						<circle cx="92" cy="360" r="26" opacity="0.82" />
						<circle cx="146" cy="330" r="28" opacity="0.85" />
						<circle cx="200" cy="312" r="26" opacity="0.82" />
						<circle cx="258" cy="314" r="30" opacity="0.82" />
						<circle cx="316" cy="340" r="28" opacity="0.8" />
						<circle cx="372" cy="386" r="24" opacity="0.76" />
						<circle cx="34" cy="500" r="22" opacity="0.72" />
						<circle cx="88" cy="470" r="24" opacity="0.78" />
						<circle cx="146" cy="454" r="26" opacity="0.8" />
						<circle cx="208" cy="456" r="28" opacity="0.8" />
						<circle cx="268" cy="478" r="26" opacity="0.78" />
						<circle cx="326" cy="512" r="24" opacity="0.74" />
						<circle cx="376" cy="552" r="22" opacity="0.7" />
					</g>

					<path
						d="M120 610 C120 730, 130 830, 156 900 C176 858, 190 790, 198 720 C204 650, 202 596, 195 530"
						fill="none"
						stroke="url(#treeTrunk)"
						strokeWidth="14"
						strokeLinecap="round"
					/>
					<path
						d="M156 892 C120 930, 100 955, 82 990"
						stroke="url(#treeTrunk)"
						strokeWidth="9"
						fill="none"
						strokeLinecap="round"
					/>
					<path
						d="M158 860 C190 902, 210 938, 228 994"
						stroke="url(#treeTrunk)"
						strokeWidth="9"
						fill="none"
						strokeLinecap="round"
					/>

					<ellipse cx="168" cy="1010" rx="140" ry="20" fill="#071019" opacity="0.8" />
				</g>

				<g opacity="0.16">
					<path d="M0 930 C260 900, 470 910, 680 940 C925 975, 1195 980, 1600 935" stroke="#8cc8ff" strokeWidth="10" fill="none" strokeLinecap="round" />
				</g>
			</svg>

			<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/18 to-black/48" />
		</div>
	);
}

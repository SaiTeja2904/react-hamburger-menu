import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Mic = (props) => {
	const { commands } = props;

	useSpeechRecognition({ commands });

	if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
		return null;
	}

	return (
		<div>
			<button onClick={SpeechRecognition.startListening}>Voice Search</button>
		</div>
	);
};
export default Mic;

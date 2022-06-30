import { NextComponentType } from "next";
import { useLottie } from "lottie-react";
import moment from "moment";

import * as animationData from "@public/assets/animations/email-sent.json";

import * as S from "./styles";

type EmailSentProps = {
	date: moment.Moment;
}

const EmailSent: NextComponentType<{}, {}, EmailSentProps> = ({ date }) => {
	const { View: EmailSentAnimation } = useLottie({ animationData, loop: false });

	return (
		<S.RecentlySentEmailMessage>
			<h2>Obrigado por entrar em contato!</h2>
			<p>Responderei o mais breve possível.</p>

			<S.EmailSentAnimationContainer>
				{EmailSentAnimation}
			</S.EmailSentAnimationContainer>

			<span>Sua última mensagem foi enviada em {date.format("DD/MM/YYYY")} às {date.format("hh:mm:ss")}.</span>
		</S.RecentlySentEmailMessage>
	)
}

export default EmailSent;
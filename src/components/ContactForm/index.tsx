import axios from "axios";
import CircularProgress from "components/CircularProgress";
import { NextComponentType } from "next";
import { useState } from "react";

import * as S from "./styles";

const ContactForm: NextComponentType = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const onChange = (setState: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setState(e.target.value);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setLoading(true);

		try {
			const data = await axios.post("/api/contact", {
				name, email, subject, message
			});

			console.log("Send Email.", data);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	return (
		<S.Root>
			<S.Header>
				<S.Title>Entrar em Contato </S.Title>

				<S.Message>
					Minha caixa de entrada está sempre aberta. Se você tem uma pergunta ou apenas quer dizer um oi, farei o possível para responder o quanto antes!
				</S.Message>
			</S.Header>

			<S.Form onSubmit={handleSubmit}>
				<div>
					<S.Input placeholder="Nome" value={name} onChange={onChange(setName)} />
					<S.Input placeholder="Email" value={email} onChange={onChange(setEmail)} />
				</div>

				<S.Input placeholder="Assunto" value={subject} onChange={onChange(setSubject)} />

				<S.Textarea placeholder="Mensagem" value={message} onChange={onChange(setMessage)} />

				<S.SendButton loading={loading}>
					{loading ? (
						<CircularProgress size={20} />
					) : "Enviar mensagem!"}
				</S.SendButton>
			</S.Form>
		</S.Root>
	);
}

export default ContactForm;
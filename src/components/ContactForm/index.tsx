import { useEffect, useState } from "react";
import { NextComponentType } from "next";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

import CircularProgress from "components/CircularProgress";

import * as S from "./styles";

type FormValues = {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const ContactForm: NextComponentType = () => {
	const { handleSubmit, register, formState: { errors }, watch } = useForm<FormValues>();
	const [elementOnFocus, setElementOnFocus] = useState<undefined | keyof FormValues>();
	const [message, setMessage] = useState<undefined | string>("");
	const [loading, setLoading] = useState(false);

	const onFocus = (key: keyof FormValues) => () => setElementOnFocus(key);
	const onBlur = () => setElementOnFocus(undefined);

	async function onSubmit(data: FormValues) {
		setLoading(true);

		try {
			await axios.post("/api/contact", data);

			toast.success("Mensagem enviada com sucesso!", { theme: "colored" });
		} catch (err) {
			console.error(err);
			toast.error("Oops, A mensagem não foi enviada", { theme: "colored" });
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		const countCharacters = watch(({ message }) => setMessage(message));

		return () => countCharacters.unsubscribe();
	}, [watch]);

	return (
		<S.Root>
			<S.Header>
				<S.Title>Entrar em Contato </S.Title>

				<S.Message>
					Minha caixa de entrada está sempre aberta. Se você tem uma pergunta ou apenas quer dizer um oi, farei o possível para responder o quanto antes!
				</S.Message>
			</S.Header>

			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<S.Input
						placeholder="Nome"
						error={Boolean(errors?.name)}
						onFocus={onFocus("name")}
						{...register("name", {
							onBlur,
							required: {
								value: true,
								message: "* Nome — Campo Obrigatório"
							},
							maxLength: {
								value: 55,
								message: "O nome deve ter no máximo 55 caracteres"
							}
						})} />

					<S.Input
						placeholder="Email"
						error={Boolean(errors?.email)}
						onFocus={onFocus("email")}
						{...register("email", {
							onBlur,
							required: {
								value: true,
								message: "* Email — Campo Obrigatório"
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Endereço de email inválido"
							},
							maxLength: {
								value: 320,
								message: "O email deve ter no máximo 320 caracteres"
							}
						})} />
				</div>

				<S.Input
					placeholder="Assunto"
					error={Boolean(errors?.subject)}
					onFocus={onFocus("subject")}
					{...register("subject", {
						onBlur,
						required: {
							value: true,
							message: "* Assunto — Campo Obrigatório"
						},
						maxLength: {
							value: 70,
							message: "O assunto deve ter no máximo 70 caracteres"
						}
					})} />

				<S.Textarea
					placeholder="Mensagem"
					error={Boolean(errors?.message)}
					onFocus={onFocus("message")}
					{...register("message", {
						onBlur,
						required: {
							value: true,
							message: "* Mensagem — Campo Obrigatório"
						},
						minLength: {
							value: 40,
							message: "A Mensagem deve ter no mínimo 40 caracteres"
						},
						maxLength: {
							value: 3500,
							message: "A Mensagem deve ter no máximo 3500 caracteres"
						}
					})} />

				<S.MessageLength
					error={Boolean(errors?.message)}>
					{message?.length || 0} caracteres
				</S.MessageLength>

				<S.Footer>
					{(Object.keys(errors).length > 0) && (
						<S.ErrorList>
							{Object.keys(errors).map((key, idx) => (
								<S.ErrorItem
									key={idx}
									errorInFocus={elementOnFocus === key}>
									{errors?.[key as keyof FormValues]?.message}
								</S.ErrorItem>
							))}
						</S.ErrorList>
					)}

					<S.SendButton loading={loading}>
						{loading ? (
							<CircularProgress size={20} />
						) : "Enviar mensagem!"}
					</S.SendButton>
				</S.Footer>
			</S.Form>
		</S.Root>
	);
}

export default ContactForm;
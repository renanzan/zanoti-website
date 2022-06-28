import CircularProgress from "components/CircularProgress";
import { NextComponentType } from "next";

import * as S from "./styles";

const ContactForm: NextComponentType = () => {
    return (
        <S.Root>
            <S.Header>
                <S.Title>Entrar em Contato </S.Title>

                <S.Message>
                    Minha caixa de entrada está sempre aberta. Se você tem uma pergunta ou apenas quer dizer um oi, farei o possível para responder o quanto antes!
                </S.Message>
            </S.Header>

            <S.Form>
                <div>
                    <S.Input placeholder="Nome" />
                    <S.Input placeholder="Email" />
                </div>

                <S.Input placeholder="Assunto" />

                <S.Textarea placeholder="Mensagem" />

                <S.SendButton loading>
                    <CircularProgress size={20} />
                </S.SendButton>
            </S.Form>
        </S.Root>
    );
}

export default ContactForm;
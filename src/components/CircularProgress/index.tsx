import React from "react";

import * as S from "./styles";


export interface Props {
	percentage?: number;
	color?: string;
	size?: number;
}

const CircularProgress: React.FC<Props> = ({ percentage, size, color }) => {
	const indeterminate = typeof percentage !== "number";

	return (
        <S.Root size={size}>
            {!indeterminate && (
                <span data-testid="percentage">{percentage}</span>
            )}
            
            <S.CircularChart indeterminate={indeterminate} color={color}>
                <S.Circle data-testid="percentage-indicator" percentage={percentage} />
            </S.CircularChart>
        </S.Root>
	);
}

export default CircularProgress;
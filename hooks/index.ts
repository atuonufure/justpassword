import { useState } from "react";

export const usePassword = () => {
    const [password, setPassword] = useState("Press button below");

    const symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890#$%'^,()*+.:|=?@/][_`{}\\!;-~";

    const calcSymbol = () => {
        const symbolNumber = Math.round(Math.random() * symbols.length);
        return symbols[symbolNumber];
    };

    const calcPassword = () => {
        const passwordArray = [];
        for (let i = 0; i < 16; i++) {
            const symbol = calcSymbol();
            passwordArray.push(symbol);
        }
        return passwordArray.join("");
    };

    const copyPassword = () => {
        navigator.clipboard.writeText(password);
    };

    return { password, copyPassword, setPassword, calcPassword };
};

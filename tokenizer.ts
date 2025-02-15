export enum TokenTypes {
  Paren,
  Name,
  Number,
}

interface Token {
  type: TokenTypes;
  value: string;
}

export function tokeneizer(code: string) {
  const tokens: Token[] = [];
  let current = 0; // 指针


  while (current < code.length) {
    let char = code[current];

    const WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
        current++;
        continue;
    }


    if (char === "(") {
      tokens.push({
        type: TokenTypes.Paren,
        value: char,
      });
      current++
      continue;
    }

    if (char === ")") {
      tokens.push({
        type: TokenTypes.Paren,
        value: char,
      });
      current++
      continue;
    }

    const LETTERS = /[a-z]/i;
    const NUMBER = /[0-9]/i;

    if (LETTERS.test(char)) {
      let value = "";
      while (LETTERS.test(char) && current < code.length) {
        value += char;
        char = code[++current];
      }

      tokens.push({
        type: TokenTypes.Name,
        value,
      });
    }

    if (NUMBER.test(char)) {
      let value = "";
      while (NUMBER.test(char) && current < code.length) {
        value += char;
        char = code[++current]; 
      }

      tokens.push({
        type: TokenTypes.Number,
        value,
      });
    }
  }

  return tokens;
}

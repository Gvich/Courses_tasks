function calculate(str) {
    const result = {};
    let num = 0;
    let name = "";
    let zero = '0'.charCodeAt(0);
    let nine = '9'.charCodeAt(0);
    let less = '@'.charCodeAt(0);
    let space = ' '.charCodeAt(0);
    let isName = false;

    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);

        if (char >= zero && char <= nine) {
            const digitNum = char - zero;
            num = num * 10 + digitNum;
            continue;
        }

        if (char === less) {
            isName = true;
            i++; // Пропускаємо '@'
        }
        if (isName) {
            if (char === space) {
                isName = false;
            } else {
                name += String.fromCharCode(str.charCodeAt(i));
                name = name.toLowerCase();
            }
        }

        if (num && name) {
            result[name] = num;
            num = 0;
            name = "";
        }
    }

    return result;
}

const text = 'Hello <@Kate />, you did your work well and I sent you 1000 USDT. <@Dmitrty /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT';
console.log(calculate(text));

// with regex
/*function calculate(str) {
    const regex = /<@(\w+) \/>.*?(\d+) USDT/g;
    const result = {};

    let match;
    while ((match = regex.exec(str)) !== null) {
      const name = match[1].toLowerCase();
      const amount = parseInt(match[2]);

      result[name] = (result[name] || 0) + amount;
    }

    return result;
  }*/
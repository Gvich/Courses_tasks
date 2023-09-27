//DateTimeFormat
// const date = new Date ();
// const options = {hour: 'numeric', year: 'numeric', month: 'long', day: 'numeric', localeMatcher: 'lookup'};
// const options2 = {year: 'numeric', month: 'short', day: 'numeric'};
// const options3 = {second: '2-digit', ...options};
// const options4 = {...options, formatMatcher: 'basic', hour12: false, timeZone: 'Europe/Kyiv', weekday: 'narrow', era: 'long', minute: 'numeric'}
// const locales = [ 'zh-Hans-CN', 'ru', 'en-GB'];
//
// const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date);
// const formattedDate2 = new Intl.DateTimeFormat('uk-UK', options).format(date);
// const formattedDate3 = new Intl.DateTimeFormat('en-EN', options).format(date);
// const formattedDate4 = new Intl.DateTimeFormat('de-DE', options2).format(date);
// const formattedDate5 = new Intl.DateTimeFormat(locales, options).format(date);
// const formattedDate6 = new Intl.DateTimeFormat(undefined, options2).format(date);
// const formattedDate7 = new Intl.DateTimeFormat('ja-JP', options3).format(date);
// const formattedDate8 = new Intl.DateTimeFormat('uk-UK', options4).format(date);
//
// const methodsDate = Intl.DateTimeFormat.supportedLocalesOf(locales);
// console.log(methodsDate)
// console.log(formattedDate)
// console.log(formattedDate2)
// console.log(formattedDate3)
// console.log(formattedDate4)
// console.log(formattedDate5)
// console.log(formattedDate6)
// console.log(formattedDate7)
// console.log(formattedDate8)
//DateTimeFormat

// NumberFormat
// let formatter = new Intl.NumberFormat("uk", {maximumSignificantDigits: 3});
// console.log(formatter.format(1234567890.123) ); // 1 230 000 000
//
// let formatter2 = new Intl.NumberFormat("en", {style: "currency", currency: "GBP"});
// console.log(formatter2.format(1234.5) ); // 1 234,5 £
//
// const optionsUAH = {style: "currency", currency: "UAH", minimumFractionDigits: 10}
// let formatter3 = new Intl.NumberFormat("uk", optionsUAH);
// let formatter4 = new Intl.NumberFormat('en', optionsUAH);
// console.log( formatter3.format(1234.5)); // 1 234,5000000000 ₴
// console.log( formatter4.format(1234.5)); // UAH 1 234,5000000000
//
// let num = 3500;
// console.log(new Intl.NumberFormat('en').format(num)) // 3,500
// console.log(new Intl.NumberFormat('uk').format(num)) // 3 500
//
// let number = 123456.789;
//
// // В Германии в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - точка
// console.log(new Intl.NumberFormat("de-DE").format(number));
// // → 123.456,789
//
// // В России в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов - пробел
// console.log(new Intl.NumberFormat("ru-RU").format(number));
// // → 123 456,789
//
// // В большинстве арабоговорящих стран используют настоящие арабские цифры
// console.log(new Intl.NumberFormat("ar-EG").format(number));
// // → ١٢٣٤٥٦٫٧٨٩
//
// // В Индии используют разделители для тысяч/лакх/крор
// console.log(new Intl.NumberFormat("en-IN").format(number));
// // → 1,23,456.789
//
// // Ключ расширения nu запрашивает систему нумерации, например, китайскую десятичную
// console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// // → 一二三,四五六.七八九
//
// // Если запрашиваемый язык может не поддерживаться, например
// // балийский, откатываемся на запасной язык, в данном случае индонезийский
// console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// // → 123.456,789
//
//
//
// // Запрашиваем формат валюты
// console.log(
//     new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
//         number,
//     ),
// );
// // → 123.456,79 €
//
// console.log(
//     new Intl.NumberFormat("uk-Uk", { style: "currency", currency: "UAH" , currencyDisplay: 'name'}).format(
//         number,
//     ),
// );
// // → 123 456,79 української гривні
//
// // Японская йена не использует младшие единицы
// console.log(
//     new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
//         number,
//     ),
// );
// // → ￥123,457
//
// // Ограничиваем до трёх значащих цифр
// console.log(
//     new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
//         number,
//     ),
// );
// // → 1,23,000
// NumberFormat

// ListFormat
// const vehicles = ['Motorcycle', 'Bus', 'Car'];
//
// const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
// console.log(formatter.format(vehicles));
// // Expected output: "Motorcycle, Bus, and Car"
//
// const formatter2 = new Intl.ListFormat('de', { style: 'short', type: 'disjunction' });
// console.log(formatter2.format(vehicles));
// // Expected output: "Motorcycle, Bus oder Car"
//
// const formatter3 = new Intl.ListFormat('en', { style: 'narrow', type: 'unit' });
// console.log(formatter3.format(vehicles));
// // Expected output: "Motorcycle Bus Car"
// console.log(
//     new Intl.ListFormat("en-GB", {
//         style: "long",
//         type: "conjunction",
//     }).formatToParts(vehicles)
// );
// ListFormat

// RelativeTimeFormat
const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'short' });

console.log(rtf1.format(3, 'quarter'));
// Expected output: "in 3 qtrs."

console.log(rtf1.format(-1, 'day'));
// Expected output: "1 day ago"

const rtf2 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

console.log(rtf2.format(2, 'day'));
// Expected output: "pasado mañana"
// RelativeTimeFormat

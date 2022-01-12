
var normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var default_text = "Nomes Para Free Fire";

function applyCharMap(map, text) {
  let out = "";
  for (let c of text.split("")) {
    if (map[c] !== undefined) out += map[c];
    else if (map[c.toLowerCase()] !== undefined) out += map[c.toLowerCase()];
    else out += c;
  }
  return out;
}

function invertedSquaresCharMapFun(text) {
  return applyCharMap(invertedSquaresCharMap, text);
}
function wideTextCharMapFun(text) {
  return applyCharMap(wideTextCharMap, text);
}
function squaresCharMapFun(text) {
  return applyCharMap(squaresCharMap, text);
}
function subscriptCharMapFun(text) {
  return applyCharMap(subscriptCharMap, text);
}
function bentTextCharMapFun(text) {
  return applyCharMap(bentTextCharMap, text);
}
function neonCharMapFun(text) {
  return applyCharMap(neonCharMap, text);
}
function futureAlienCharMapFun(text) {
  return applyCharMap(futureAlienCharMap, text);
}
function squiggleCharMapFun(text) {
  return applyCharMap(squiggleCharMap, text);
}
function squiggle2CharMapFun(text) {
  return applyCharMap(squiggle2CharMap, text);
}
function squiggle3CharMapFun(text) {
  return applyCharMap(squiggle3CharMap, text);
}
function squiggle4CharMapFun(text) {
  return applyCharMap(squiggle4CharMap, text);
}
function squiggle5CharMapFun(text) {
  return applyCharMap(squiggle5CharMap, text);
}
function squiggle6CharMapFun(text) {
  return applyCharMap(squiggle6CharMap, text);
}
function boldCharMapFun(text) {
  return applyCharMap(boldCharMap, text);
}
function oldEnglishCharMapFun(text) {
  return applyCharMap(oldEnglishCharMap, text);
}
function medievalCharMapFun(text) {
  return applyCharMap(medievalCharMap, text);
}
function cursiveCharMapFun(text) {
  return applyCharMap(cursiveCharMap, text);
}
function doubleStruckCharMapFun(text) {
  return applyCharMap(doubleStruckCharMap, text);
}
function italicCharMapFun(text) {
  return applyCharMap(italicCharMap, text);
}
function boldItalicCharMapFun(text) {
  return applyCharMap(boldItalicCharMap, text);
}
function monospaceCharMapFun(text) {
  return applyCharMap(monospaceCharMap, text);
}
function upperAnglesCharMapFun(text) {
  return applyCharMap(upperAnglesCharMap, text);
}
function greekCharMapFun(text) {
  return applyCharMap(greekCharMap, text);
}
function symbolsCharMapFun(text) {
  return applyCharMap(symbolsCharMap, text);
}
function currencyCharMapFun(text) {
  return applyCharMap(currencyCharMap, text);
}
function asianStyleCharMapFun(text) {
  return applyCharMap(asianStyleCharMap, text);
}
function asianStyle2CharMapFun(text) {
  return applyCharMap(asianStyle2CharMap, text);
}

var luni = new Lunicode();
luni.tools.creepify.options.maxHeight = 10;

function crazyWithFlourishOrSymbols(text) {
  if (Math.random() < 0.7) return wrapInSymbols(crazifyText(text), 2);
  else return wrapInFlourish(crazifyText(text), 2);
}

function illuminati(text) {
  return applyCharMap(doubleStruckCharMap, "ð“‚€" + text + "ð“‚€");
}

function textgun(text) {
  return "â–„ï¸»ãƒ‡" + text.split("").join("&#823;") + "â•â•â”ä¸€";
}

function minigame(text) {
  return "â˜…å½¡[" + luni.tools.tiny.encode(text) + "]å½¡â˜…";
}

function pubggame1(text) {
  return applyCharMap(medievalCharMap, "ê§à¼’â˜¬" + text + "â˜¬à¼’ê§‚");
}

function pubggame2(text) {
  return applyCharMap(squiggle3CharMap, "ê§à¼º" + text + "à¼»ê§‚");
}

function pubggame3(text) {
  return applyCharMap(invertedSquaresCharMap, "ê§ð“Šˆð’†œ" + text + "ð’†œð“Š‰ê§‚");
}

function bricks(text) {
  return applyCharMap(squaresCharMap, "â–€â–„â–€â–„â–€â–„" + text + "â–€â–„â–€â–„â–€â–„");
}

function bigrus(text) {
  return "â–ˆâ–“â–’Â­â–‘â¡·â ‚" + luni.tools.tiny.encode(text) + "â â¢¾â–‘â–’â–“â–ˆ";
}

function strikeThrough(text) {
  return text.split("").join("Ì¶") + "Ì¶";
}
function tildeStrikeThrough(text) {
  return text.split("").join("Ì´") + "Ì´";
}
function underline(text) {
  return text.split("").join("Ì²") + "Ì²";
}
function doubleUnderline(text) {
  return text.split("").join("Ì³") + "Ì³";
}
function slashThrough(text) {
  return text.split("").join("Ì·") + "Ì·";
}
function stinky(text) {
  return text.split("").join("Ì¾") + "Ì¾";
}
function heartsBetween(text) {
  return text.split("").join("â™¥");
}
function arrowBelow(text) {
  return text.split("").join("ÍŽ") + "ÍŽ";
}
function crossAboveBelow(text) {
  return text.split("").join("Ì½Í“") + "Ì½Í“";
}

const wingdingsCharMap = {
  0: "ðŸ“ï¸Ž",
  1: "ðŸ“‚ï¸Ž",
  2: "ðŸ“„ï¸Ž",
  3: "ðŸ—ï¸Ž",
  4: "ðŸ—ï¸Ž",
  5: "ðŸ—„ï¸Ž",
  6: "âŒ›ï¸Ž",
  7: "ðŸ–®ï¸Ž",
  8: "ðŸ–°ï¸Ž",
  9: "ðŸ–²ï¸Ž",
  "!": "âœï¸Ž",
  '"': "âœ‚ï¸Ž",
  "#": "âœï¸Ž",
  $: "ðŸ‘“ï¸Ž",
  "%": "ðŸ•­ï¸Ž",
  "&": "ðŸ•®ï¸Ž",
  "'": "ðŸ•¯ï¸Ž",
  "(": "ðŸ•¿ï¸Ž",
  ")": "âœ†ï¸Ž",
  "*": "ðŸ–‚ï¸Ž",
  "+": "ðŸ–ƒï¸Ž",
  ",": "ðŸ“ªï¸Ž",
  "-": "ðŸ“«ï¸Ž",
  ".": "ðŸ“¬ï¸Ž",
  "/": "ðŸ“­ï¸Ž",
  ":": "ðŸ–³ï¸Ž",
  ";": "ðŸ–´ï¸Ž",
  "<": "ðŸ–«ï¸Ž",
  "=": "ðŸ–¬ï¸Ž",
  ">": "âœ‡ï¸Ž",
  "?": "âœï¸Ž",
  A: "âœŒï¸Ž",
  B: "ðŸ‘Œï¸Ž",
  C: "ðŸ‘ï¸Ž",
  D: "ðŸ‘Žï¸Ž",
  E: "â˜œï¸Ž",
  F: "â˜žï¸Ž",
  G: "â˜ï¸Ž",
  H: "â˜Ÿï¸Ž",
  I: "âœ‹ï¸Ž",
  J: "â˜ºï¸Ž",
  K: "ðŸ˜ï¸Ž",
  L: "â˜¹ï¸Ž",
  M: "ðŸ’£ï¸Ž",
  N: "â˜ ï¸Ž",
  O: "âšï¸Ž",
  P: "ðŸ±ï¸Ž",
  Q: "âœˆï¸Ž",
  R: "â˜¼ï¸Ž",
  S: "ðŸ’§ï¸Ž",
  T: "â„ï¸Ž",
  U: "ðŸ•†ï¸Ž",
  V: "âœžï¸Ž",
  W: "ðŸ•ˆï¸Ž",
  X: "âœ ï¸Ž",
  Y: "âœ¡ï¸Ž",
  Z: "â˜ªï¸Ž",
  "[": "â˜¯ï¸Ž",
  "\\": "à¥ï¸Ž",
  "]": "â˜¸ï¸Ž",
  "^": "â™ˆï¸Ž",
  _: "â™‰ï¸Ž",
  "`": "â™Šï¸Ž",
  a: "â™‹ï¸Ž",
  b: "â™Œï¸Ž",
  c: "â™ï¸Ž",
  d: "â™Žï¸Ž",
  e: "â™ï¸Ž",
  f: "â™ï¸Ž",
  g: "â™‘ï¸Ž",
  h: "â™’ï¸Ž",
  i: "â™“ï¸Ž",
  j: "ðŸ™°",
  k: "ðŸ™µ",
  l: "â—ï¸Ž",
  m: "âï¸Ž",
  n: "â– ï¸Ž",
  o: "â–¡ï¸Ž",
  p: "â—»ï¸Ž",
  q: "â‘ï¸Ž",
  r: "â’ï¸Ž",
  s: "â¬§ï¸Ž",
  t: "â§«ï¸Ž",
  u: "â—†ï¸Ž",
  v: "â–ï¸Ž",
  w: "â¬¥ï¸Ž",
  x: "âŒ§ï¸Ž",
  y: "â“ï¸Ž",
  z: "âŒ˜ï¸Ž",
  "{": "â€ï¸Ž",
  "|": "âœ¿ï¸Ž",
  "}": "âï¸Ž",
  "~": "âžï¸Ž",
  " ": "â–¯ï¸Ž",
  "â‚¬": "â“ªï¸Ž",
  " ": "â‘ ï¸Ž",
  "â€š": "â‘¡ï¸Ž",
  Æ’: "â‘¢ï¸Ž",
  "â€ž": "â‘£ï¸Ž",
  "â€¦": "â‘¤ï¸Ž",
  "â€ ": "â‘¥ï¸Ž",
  "â€¡": "â‘¦ï¸Ž",
  Ë†: "â‘§ï¸Ž",
  "â€°": "â‘¨ï¸Ž",
  Å : "â‘©ï¸Ž",
  "â€¹": "â“¿ï¸Ž",
  Å’: "â¶ï¸Ž",
  " ": "â·ï¸Ž",
  Å½: "â¸ï¸Ž",
  " ": "â¹ï¸Ž",
  " ": "âºï¸Ž",
  "â€˜": "â»ï¸Ž",
  "â€™": "â¼ï¸Ž",
  "â€œ": "â½ï¸Ž",
  "â€": "â¾ï¸Ž",
  "â€¢": "â¿ï¸Ž",
  "â€“": "â—»ï¸Ž",
  "â€”": "â—»ï¸Ž",
  "Ëœ": "â—»ï¸Ž",
  "â„¢": "â—»ï¸Ž",
  Å¡: "â—»ï¸Ž",
  "â€º": "â—»ï¸Ž",
  Å“: "â—»ï¸Ž",
  " ": "â—»ï¸Ž",
  Å¾: "Â·ï¸Ž",
  Å¸: "â€¢ï¸Ž",
  "Â¡": "â—‹ï¸Ž",
  "Â¢": "â­•ï¸Ž",
  "Â£": "â—»ï¸Ž",
  "Â¤": "â—‰ï¸Ž",
  "Â¥": "â—Žï¸Ž",
  "Â¦": "â—»ï¸Ž",
  "Â§": "â–ªï¸Ž",
  "Â¨": "â—»ï¸Ž",
  "Â©": "â—»ï¸Ž",
  Âª: "âœ¦ï¸Ž",
  "Â«": "â˜…ï¸Ž",
  "Â¬": "âœ¶ï¸Ž",
  "Â®": "âœ¹ï¸Ž",
  "Â¯": "âœµï¸Ž",
  "Â°": "â—»ï¸Ž",
  "Â±": "âŒ–ï¸Ž",
  "Â²": "âŸ¡ï¸Ž",
  "Â³": "âŒ‘ï¸Ž",
  "Â´": "â—»ï¸Ž",
  Âµ: "âœªï¸Ž",
  "Â¶": "âœ°ï¸Ž",
  "Â·": "ðŸ•ï¸Ž",
  "Â¸": "ðŸ•‘ï¸Ž",
  "Â¹": "ðŸ•’ï¸Ž",
  Âº: "ðŸ•“ï¸Ž",
  "Â»": "ðŸ•”ï¸Ž",
  "Â¼": "ðŸ••ï¸Ž",
  "Â½": "ðŸ•–ï¸Ž",
  "Â¾": "ðŸ•—ï¸Ž",
  "Â¿": "ðŸ•˜ï¸Ž",
  Ã€: "ðŸ•™ï¸Ž",
  Ã: "ðŸ•šï¸Ž",
  Ã‚: "ðŸ•›ï¸Ž",
  Ãƒ: "â—»ï¸Ž",
  Ã„: "â—»ï¸Ž",
  Ã…: "â—»ï¸Ž",
  Ã†: "â—»ï¸Ž",
  Ã‡: "â—»ï¸Ž",
  Ãˆ: "â—»ï¸Ž",
  Ã‰: "â—»ï¸Ž",
  ÃŠ: "â—»ï¸Ž",
  Ã‹: "â—»ï¸Ž",
  ÃŒ: "â—»ï¸Ž",
  Ã: "â—»ï¸Ž",
  ÃŽ: "â—»ï¸Ž",
  Ã: "â—»ï¸Ž",
  Ã: "â—»ï¸Ž",
  Ã‘: "â—»ï¸Ž",
  Ã’: "â—»ï¸Ž",
  Ã“: "â—»ï¸Ž",
  Ã”: "â—»ï¸Ž",
  Ã•: "âŒ«ï¸Ž",
  Ã–: "âŒ¦ï¸Ž",
  "Ã—": "â—»ï¸Ž",
  Ã˜: "âž¢ï¸Ž",
  Ã™: "â—»ï¸Ž",
  Ãš: "â—»ï¸Ž",
  Ã›: "â—»ï¸Ž",
  Ãœ: "âž²ï¸Ž",
  Ã: "â—»ï¸Ž",
  Ãž: "â—»ï¸Ž",
  ÃŸ: "â—»ï¸Ž",
  Ã : "â—»ï¸Ž",
  Ã¡: "â—»ï¸Ž",
  Ã¢: "â—»ï¸Ž",
  Ã£: "â—»ï¸Ž",
  Ã¤: "â—»ï¸Ž",
  Ã¥: "â—»ï¸Ž",
  Ã¦: "â—»ï¸Ž",
  Ã§: "â—»ï¸Ž",
  Ã¨: "âž”ï¸Ž",
  Ã©: "â—»ï¸Ž",
  Ãª: "â—»ï¸Ž",
  Ã«: "â—»ï¸Ž",
  Ã¬: "â—»ï¸Ž",
  Ã­: "â—»ï¸Ž",
  Ã®: "â—»ï¸Ž",
  Ã¯: "â‡¦ï¸Ž",
  Ã°: "â‡¨ï¸Ž",
  Ã±: "â‡§ï¸Ž",
  Ã²: "â‡©ï¸Ž",
  Ã³: "â¬„ï¸Ž",
  Ã´: "â‡³ï¸Ž",
  Ãµ: "â¬€ï¸Ž",
  Ã¶: "â¬ï¸Ž",
  "Ã·": "â¬ƒï¸Ž",
  Ã¸: "â¬‚ï¸Ž",
  Ã¹: "â–­ï¸Ž",
  Ãº: "â–«ï¸Ž",
  Ã»: "âœ—ï¸Ž",
  Ã¼: "âœ“ï¸Ž",
  Ã½: "â˜’ï¸Ž",
  Ã¾: "â˜‘ï¸Ž",
  Ã¿: "â—»ï¸Ž",
};
function wingdings(text) {
  return text
    .split("")
    .map(function (a) {
      return wingdingsCharMap[a] ? wingdingsCharMap[a] : a;
    })
    .join("");
}

const vaporwaveCharMap = {
  " ": "ã€€",
  "`": "`",
  1: "ï¼‘",
  2: "ï¼’",
  3: "ï¼“",
  4: "ï¼”",
  5: "ï¼•",
  6: "ï¼–",
  7: "ï¼—",
  8: "ï¼˜",
  9: "ï¼™",
  0: "ï¼",
  "-": "ï¼",
  "=": "ï¼",
  "~": "~",
  "!": "ï¼",
  "@": "ï¼ ",
  "#": "ï¼ƒ",
  $: "ï¼„",
  "%": "ï¼…",
  "^": "^",
  "&": "ï¼†",
  "*": "ï¼Š",
  "(": "ï¼ˆ",
  ")": "ï¼‰",
  _: "_",
  "+": "ï¼‹",
  q: "ï½‘",
  w: "ï½—",
  e: "ï½…",
  r: "ï½’",
  t: "ï½”",
  y: "ï½™",
  u: "ï½•",
  i: "ï½‰",
  o: "ï½",
  p: "ï½",
  "[": "[",
  "]": "]",
  "\\": "\\",
  Q: "ï¼±",
  W: "ï¼·",
  E: "ï¼¥",
  R: "ï¼²",
  T: "ï¼´",
  Y: "ï¼¹",
  U: "ï¼µ",
  I: "ï¼©",
  O: "ï¼¯",
  P: "ï¼°",
  "{": "{",
  "}": "}",
  "|": "|",
  a: "ï½",
  s: "ï½“",
  d: "ï½„",
  f: "ï½†",
  g: "ï½‡",
  h: "ï½ˆ",
  j: "ï½Š",
  k: "ï½‹",
  l: "ï½Œ",
  ";": "ï¼›",
  "'": "ï¼‡",
  A: "ï¼¡",
  S: "ï¼³",
  D: "ï¼¤",
  F: "ï¼¦",
  G: "ï¼§",
  H: "ï¼¨",
  J: "ï¼ª",
  K: "ï¼«",
  L: "ï¼¬",
  ":": "ï¼š",
  '"': '"',
  z: "ï½š",
  x: "ï½˜",
  c: "ï½ƒ",
  v: "ï½–",
  b: "ï½‚",
  n: "ï½Ž",
  m: "ï½",
  ",": "ï¼Œ",
  ".": "ï¼Ž",
  "/": "ï¼",
  Z: "ï¼º",
  X: "ï¼¸",
  C: "ï¼£",
  V: "ï¼¶",
  B: "ï¼¢",
  N: "ï¼®",
  M: "ï¼­",
  "<": "<",
  ">": ">",
  "?": "ï¼Ÿ",
};
function vaporwaveText(text) {
  var numSpaces = text.split(" ").length;
  text = applyCharMap(vaporwaveCharMap, text);
  var asianChars = getAsianChars(Math.max(3, numSpaces));
  if (numSpaces > 6)
    asianChars = asianChars
      .split("")
      .map((c) => c + ["", ""][Math.round(Math.random() * 0.6)])
      .join("");
  var outputs = [];
  outputs.push(text);
  return outputs.join();
}
function vaporwaveText1(text) {
  var numSpaces = text.split(" ").length;
  text = applyCharMap(vaporwaveCharMap, text);
  var asianChars = getAsianChars(Math.max(3, numSpaces));
  if (numSpaces > 6)
    asianChars = asianChars
      .split("")
      .map((c) => c + ["", ""][Math.round(Math.random() * 0.6)])
      .join("");
  var outputs = [];
  outputs.push(
    text
      .replace(/ã€€/g, "â–‘")
      .replace(/ï½ï½…/, "Ã¦")
      .replace(/ï¼¡/g, "Î›")
      .replace(/ï¼¥/g, function () {
        return Math.random() > 0.5 ? "Îž" : "Î£";
      })
      .replace(/ï¼¯/g, "â™¢")
  );
  return outputs.join();
}
function vaporwaveText2(text) {
  var numSpaces = text.split(" ").length;
  text = applyCharMap(vaporwaveCharMap, text);
  var asianChars = getAsianChars(Math.max(3, numSpaces));
  if (numSpaces > 6)
    asianChars = asianChars
      .split("")
      .map((c) => c + ["", ""][Math.round(Math.random() * 0.6)])
      .join("");
  var outputs = [];
  outputs.push("ã€ï»¿" + text + "ã€‘");
  return outputs.join();
}
function getAsianChars(n) {
  if (!n) n = 1;
  var chars =
    "ãƒªã‚µãƒ•ãƒ©ãƒ³ã‚¯ç¾ä»£ã®ã‚³ãƒ³ãƒ”ãƒ¥ç«¹å†… ã¾ã‚Šã‚„è‹¥è€…ãŒå±¥ãæµè¡Œã®ã‚¹ãƒ‹ãƒ¼ã‚«ãƒ¼çœŸå¤œä¸­ã®ãƒ‰ã‚¢ãƒ›ãƒƒãƒˆãƒ‰ãƒƒã‚°ãƒžã‚¹ã‚¿ãƒ¼ã‚¹ãƒˆãƒ©ã‚¤ã‚«ãƒ¼ã‚½ãƒ‹ãƒ¼ãƒ–ã‚®æ–°ã—ã„æ—¥ã®èª•ç”Ÿãƒ©ã‚¤ãƒ• - ãƒ’ã‚¹ã‚¤è’¸æ°—æ³¢ ç„¡ç·šã‚ ã‚¡ã‚¢ã‚£ã‚¤ã‚¥ã‚¦ã‚§ã‚¨ã‚©ã‚ªã‚«ã‚¬ã‚­ã‚®ã‚¯ã‚°ã‚±ã‚²ã‚³ã‚´ã‚µã‚¶ã‚·ã‚¸ã‚¹ã‚ºã‚»ã‚¼ã‚½ã‚¾ã‚¿ãƒ€ãƒãƒ‚ãƒƒãƒ„ãƒ…ãƒ†ãƒ‡ãƒˆãƒ‰ãƒŠãƒ‹ãƒŒãƒãƒŽãƒãƒãƒ‘ãƒ’ãƒ“ãƒ”ãƒ•ãƒ–ãƒ—ãƒ˜ãƒ™ãƒšãƒ›ãƒœãƒãƒžãƒŸãƒ ãƒ¡ãƒ¢ãƒ£ãƒ¤ãƒ¥ãƒ¦ãƒ§ãƒ¨ãƒ©ãƒªãƒ«ãƒ¬ãƒ­ãƒ®ãƒ¯ãƒ°ãƒ±ãƒ²ãƒ³ãƒ´ãƒµãƒ¶ãƒ·ãƒ¸ãƒ¹ãƒºãƒ»ãƒ¼ãƒ½ãƒ¾ãƒ¿ãã‚ãƒã„ã…ã†ã‡ãˆã‰ãŠã‹ãŒããŽããã‘ã’ã“ã”ã•ã–ã—ã˜ã™ãšã›ãœããžãŸã ã¡ã¢ã£ã¤ã¥ã¦ã§ã¨ã©ãªã«ã¬ã­ã®ã¯ã°ã±ã²ã³ã´ãµã¶ã·ã¸ã¹ãºã»ã¼ã½ã¾ã¿ã‚€ã‚ã‚‚ã‚ƒã‚„ã‚…ã‚†ã‚‡ã‚ˆã‚‰ã‚Šã‚‹ã‚Œã‚ã‚Žã‚ã‚ã‚‘ã‚’ã‚“ã‚”ã‚•ã‚–ã‚™ã‚šã‚›ã‚œã‚ã‚žã‚Ÿäºœå“€æŒ¨æ„›æ›–æ‚ªæ¡åœ§æ‰±å®›åµå®‰æ¡ˆæš—ä»¥è¡£ä½å›²åŒ»ä¾å§”å¨ç‚ºç•èƒƒå°‰ç•°ç§»èŽå‰æ¤…å½™æ„é•ç¶­æ…°éºç·¯åŸŸè‚²å£±é€¸èŒ¨èŠ‹å¼•å°å› å’½å§»å“¡é™¢æ·«é™°é£²éš éŸ»å³å®‡ç¾½é›¨å”„é¬±ç•æµ¦é‹é›²æ°¸æ³³è‹±æ˜ æ „å–¶è© å½±é‹­è¡›æ˜“ç–«ç›Šæ¶²é§…æ‚¦è¶Šè¬é–²å††å»¶æ²¿ç‚Žæ€¨å®´åª›æ´åœ’ç…™çŒ¿é é‰›å¡©æ¼”ç¸è‰¶æ±šçŽ‹å‡¹å¤®å¿œå¾€æŠ¼æ—ºæ¬§æ®´æ¡œç¿å¥¥æ¨ªå²¡å±‹å„„æ†¶è‡†è™žä¹™ä¿ºå¸éŸ³æ©æ¸©ç©ä¸‹åŒ–ç«åŠ å¯ä»®ä½•èŠ±ä½³ä¾¡æžœæ²³è‹›ç§‘";
  var str = "";
  for (var i = 0; i < n; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

const flourishArray = [
  "ê§à¼’â˜¬ [[text]] â˜¬à¼’ê§‚",
  "â—¥ê§à½‘ [[text]] à½Œê§‚â—¤",
  "â˜…Â·.Â·Â´Â¯`Â·.Â·â˜… [[text]] â˜…Â·.Â·Â´Â¯`Â·.Â·â˜…",
  "âš”ï¸ [[text]] âš”ï¸",
  "ê§à¼’à¼»â˜¬à½‘ [[text]] à½Œâ˜¬à¼ºà¼’ê§‚",
  "â™ªáƒ¦â™ª*â€¢.Â¸Â¸.â€¢*Â¨Â¨*â€¢.â™ª [[text]] â™ªáƒ¦â™ª*â€¢.Â¸Â¸.â€¢*Â¨Â¨*â€¢.â™ªáƒ¦â™ª",
  "â—¥ê§à½‘ à¥å[[text]] åà¥ à½Œê§‚â—¤",
  "( ï¾Ÿâˆ€ï¾Ÿ)ï¾‰ã€[[text]]ã€‘",
  "áƒ¦Æª(Ë†â—¡Ë†)Êƒâ™¡ [[text]] â™¡Æª(Ë†â—¡Ë†)Êƒâ™ª",
  "[[text]] â˜œ(`oÂ´)",
  "âŽâŽâœ§GÍ¥OÍ£DÍ«âœ§âŽ âŽ  [[text]] âŽâŽâœ§GÍ¥OÍ£DÍ«âœ§âŽ âŽ ",
  "<:::::[]=Â¤ [[text]] (â–€Ì¿Ì¿Ä¹Ì¯Ì¿Ì¿â–€Ì¿ Ì¿)",
  "ï½¡*ï¾Ÿ.*.ï½¡(ã£ á› )ã£âœ‚â•°â‹ƒâ•¯ [[text]]",
  "â”—(^o^ )â”“ä¸‰ [[text]] ä¸‰ â”—(^o^ )â”“",
  "(ã……êˆï¹ƒêˆ)* [[text]] *(êˆï¹ƒêˆã……)â™¡",
  "Â¯_( Í¡Â° ÍœÊ– Í¡Â°)_/Â¯ [[text]] Â¯_( Í¡Â° ÍœÊ– Í¡Â°)_/Â¯",
  "à­§(â€¢Ì€á—â€¢Ì)à«­ [[text]] à­§(â‡€â€¸â†¼â€¶)à«­",
  "â– â–‚ â–„ â–… â–† â–‡ â–ˆ [[text]] â–ˆ â–‡ â–† â–… â–„ â–‚ â–",
  "Â°Â°Â°Â·.Â°Â·..Â·Â°Â¯Â°Â·._.Â· [[text]] Â·._.Â·Â°Â¯Â°Â·.Â·Â° .Â·Â°Â°Â°",
  "Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸Â¸,Ã¸Â¤ÂºÂ° [[text]] Â°ÂºÂ¤Ã¸,Â¸Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸",
  "Ä±llÄ±llÄ± [[text]] Ä±llÄ±llÄ±",
  "â€¢?((Â¯Â°Â·._.â€¢ [[text]] â€¢._.Â·Â°Â¯))ØŸâ€¢",
  "â–Œâ”‚â–ˆâ•‘â–Œâ•‘â–Œâ•‘ [[text]] â•‘â–Œâ•‘â–Œâ•‘â–ˆâ”‚â–Œ",
  "Ã—ÂºÂ°â€Ëœ`â€Â°ÂºÃ— [[text]] Ã—ÂºÂ°â€Ëœ`â€Â°ÂºÃ—",
  "â€¢]â€¢â€¢Â´ÂºÂ´â€¢Â» [[text]] Â«â€¢Â´ÂºÂ´â€¢â€¢[â€¢",
  "*â€¢.Â¸â™¡ [[text]] â™¡Â¸.â€¢*",
  "â•°â˜†â˜† [[text]] â˜†â˜†â•®",
  ".â€¢Â°Â¤*(Â¯`â˜…Â´Â¯)*Â¤Â° [[text]] Â°Â¤*(Â¯Â´â˜…`Â¯)*Â¤Â°â€¢.",
  "(Â¯Â´â€¢._.â€¢ [[text]] â€¢._.â€¢Â´Â¯)",
  "Â¸â€ž.-â€¢~Â¹Â°â€Ë†ËœÂ¨ [[text]] Â¨ËœË†â€Â°Â¹~â€¢-.â€žÂ¸",
  "â–‘â–’â–“â–ˆ [[text]] â–ˆâ–“â–’â–‘",
  "â–‘â–’â–“â–ˆâ–ºâ”€â•  [[text]] â•â”€â—„â–ˆâ–“â–’â–‘",
  "â˜…å½¡ [[text]] å½¡â˜…",
  "â€¢Â´Â¯`â€¢. [[text]] .â€¢Â´Â¯`â€¢",
  "Â§.â€¢Â´Â¨'Â°Ã·â€¢..Ã— [[text]] Ã—,.â€¢Â´Â¨'Â°Ã·â€¢..Â§",
  "â€¢Â°Â¯`â€¢â€¢ [[text]] â€¢â€¢Â´Â¯Â°â€¢",
  "(Â¯`*â€¢.Â¸,Â¤Â°Â´âœ¿.ï½¡.:* [[text]] *.:ï½¡.âœ¿`Â°Â¤,Â¸.â€¢*Â´Â¯)",
  "|!Â¤*'~``~'*Â¤!| [[text]] |!Â¤*'~``~'*Â¤!|",
  "â€¢._.â€¢â€¢Â´Â¯``â€¢.Â¸Â¸.â€¢` [[text]] `â€¢.Â¸Â¸.â€¢Â´Â´Â¯`â€¢â€¢._.â€¢",
  "Â¸â€ž.-â€¢~Â¹Â°â€Ë†ËœÂ¨ [[text]] Â¨ËœË†â€Â°Â¹~â€¢-.â€žÂ¸",
  "(Â¯Â´â€¢._.â€¢ [[text]] â€¢._.â€¢Â´Â¯)",
  "â€¢â€¢Â¤(`Ã—[Â¤ [[text]] Â¤]Ã—Â´)Â¤â€¢â€¢",
  "â€¢Â´Â¯`â€¢Â» [[text]] Â«â€¢Â´Â¯`â€¢",
  " .o0Ã—XÃ—0o. [[text]] .o0Ã—XÃ—0o.",
  "Â¤Â¸Â¸.â€¢Â´Â¯`â€¢Â¸Â¸.â€¢..>> [[text]] <<..â€¢.Â¸Â¸â€¢Â´Â¯`â€¢.Â¸Â¸Â¤",
  "â€”(â€¢â€¢Ã·[ [[text]] ]Ã·â€¢â€¢)â€”",
  "Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸ [[text]] Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸",
  "`â€¢.Â¸Â¸.â€¢Â´Â´Â¯`â€¢â€¢._.â€¢ [[text]] â€¢._.â€¢â€¢`Â¯Â´Â´â€¢.Â¸Â¸.â€¢`",
  ",-*' ^ '~*-.,_,.-*~ [[text]] ~*-.,_,.-*~' ^ '*-,",
  "`â€¢.,Â¸Â¸,.â€¢Â´Â¯ [[text]] Â¯`â€¢.,Â¸Â¸,.â€¢Â´",
  "â†¤â†¤â†¤â†¤â†¤ [[text]] â†¦â†¦â†¦â†¦â†¦",
  "âž¶âž¶âž¶âž¶âž¶ [[text]] âž·âž·âž·âž·âž·",
  "â†«â†«â†«â†«â†« [[text]] â†¬â†¬â†¬â†¬â†¬",
  "Â·.Â¸Â¸.Â·â™©â™ªâ™« [[text]] â™«â™ªâ™©Â·.Â¸Â¸.Â·",
  "ã€ï½¡_ï½¡ã€‘ [[text]] ã€ï½¡_ï½¡ã€‘",
  "]|I{â€¢------Â» [[text]] Â«------â€¢}I|[",
  "â–€â–„â–€â–„â–€â–„ [[text]] â–„â–€â–„â–€â–„â–€",
  "(-_-) [[text]] (-_-)",
  "â€¢Â´Â¯`â€¢. [[text]] .â€¢Â´Â¯`â€¢",
  "-æ¼«~*'Â¨Â¯Â¨'*Â·èˆž~ [[text]] ~èˆž*'Â¨Â¯Â¨'*Â·~æ¼«-",
  "à¹‘Ûžà¹‘,Â¸Â¸,Ã¸Â¤ÂºÂ°`Â°à¹‘Û© [[text]] à¹‘Û© ,Â¸Â¸,Ã¸Â¤ÂºÂ°`Â°à¹‘Ûžà¹‘",
  ".â€¢Â°Â¤*(Â¯`â˜…Â´Â¯)*Â¤Â° [[text]] Â°Â¤*(Â¯Â´â˜…`Â¯)*Â¤Â°â€¢.",
  "â€¢â€¢.â€¢Â´Â¯`â€¢.â€¢â€¢ [[text]] â€¢â€¢.â€¢Â´Â¯`â€¢.â€¢â€¢",
  "Â¤Â¸Â¸.â€¢Â´Â¯`â€¢Â¸Â¸.â€¢..>> [[text]] <<..â€¢.Â¸Â¸â€¢Â´Â¯`â€¢.Â¸Â¸Â¤",
  "â—¦â€¢â—â—‰âœ¿ [[text]] âœ¿â—‰â—â€¢â—¦",
  "ê§ð“Šˆð’†œ [[text]] ð’†œð“Š‰ê§‚",
  "â•šÂ»â˜…Â«â• [[text]] â•šÂ»â˜…Â«â•",
  "â«· [[text]] â«¸",
  "-Â·=Â»â€¡Â«=Â·- [[text]] -Â·=Â»â€¡Â«=Â·-",
  "âˆ™âˆ™Â·â–«â–«áµ’á´¼áµ’â–«â‚’â‚’â–«áµ’á´¼áµ’â–«â‚’â‚’â–«áµ’á´¼áµ’ [[text]] áµ’á´¼áµ’â–«â‚’â‚’â–«áµ’á´¼áµ’â–«â‚’â‚’â–«áµ’á´¼áµ’â–«â–«Â·âˆ™âˆ™",
  "Â¸Â¸â™¬Â·Â¯Â·â™©Â¸Â¸â™ªÂ·Â¯Â·â™«Â¸Â¸ [[text]] Â¸Â¸â™«Â·Â¯Â·â™ªÂ¸Â¸â™©Â·Â¯Â·â™¬Â¸Â¸",
  "à®œÛ©ÛžÛ©à®œ [[text]] à®œÛ©ÛžÛ©à®œ",
  "Â¤ (Â¯Â´â˜†âœ­.Â¸_)Â¤ [[text]] Â¤(_Â¸.âœ­â˜†Â´Â¯) Â¤",
  "(Â¯`Â·.Â¸Â¸.Â·Â´Â¯`Â·.Â¸Â¸.-> [[text]] <-.Â¸Â¸.Â·Â´Â¯`Â·.Â¸Â¸.Â·Â´Â¯)",
  "âœ¿.ï½¡.:* â˜†:**:. [[text]] .:**:.â˜†*.:ï½¡.âœ¿",
  ".â€¢â™«â€¢â™¬â€¢ [[text]] â€¢â™¬â€¢â™«â€¢.",
  "áƒ¦(Â¯`â—•â€¿â—•Â´Â¯) â™« â™ª â™« [[text]] â™« â™ª â™« (Â¯`â—•â€¿â—•Â´Â¯)áƒ¦",
  "Â«-(Â¯`vÂ´Â¯)-Â« [[text]] Â»-(Â¯`vÂ´Â¯)-Â»",
];

function wrapInFlourish(text) {
  return flourishArray[
    Math.floor(Math.random() * flourishArray.length)
  ].replace("[[text]]", text);
}
function Flourishlist(number, text) {
  return flourishArray[number].replace("[[text]]", text);
}

function wrapInSymbols(text, number) {
  return randomSymbols(number) + "  " + text + "  " + randomSymbols(number);
}

function firework(text) {
  return text.split("").join("Ò‰") + "Ò‰";
}

function weirdBox(text) {
  return text.replace(/([^\s])/g, "[Ì…Ì²$1]");
}

function curlybrackets(text) {
  return text.replace(/([^\s])/g, "â§¼$1&#828;â§½");
}

function singlewavyJoiner(text) {
  return "ã€œ" + text.split("").join("âˆ¿") + "ã€œ";
}

function thickBox(text) {
  return text.replace(/([^\s])/g, "âŸ¦$1âŸ§");
}

function zigzagJoiner(text) {
  return text.replace(/([^\s])/g, "â¦š$1â¦š");
}

function hashJoiner(text) {
  return text.split("").join("â¨³");
}

function starJoiner(text) {
  return text.replace(/([^\s])/g, "â¦š$1â¦š");
}

function connectedJoiner(text) {
  return text.split("").join("âŠ¶");
}

function arrowjoin(text) {
  return text.replace(/([^\s])/g, "â¦$1&#x302;â¦Ž");
}

function dotBoxtwo(text) {
  return text.split("").join("&#778; â«¶");
}

function dotBox(text) {
  return text.replace(/([^\s])/g, "êœ$1êœ‰");
}

function diametricBox(text) {
  return text.replace(/([^\s])/g, "â¦‘$1â¦’");
}

function arrowBox(text) {
  return text.replace(/([^\s])/g, "â¦$1â¦Ž");
}

function littleSparkles(text) {
  return "Ëœâ€*Â°â€¢.Ëœâ€*Â°â€¢ " + text + " â€¢Â°*â€Ëœ.â€¢Â°*â€Ëœ";
}

function kirbyHug(text) {
  return "(ã£â—”â—¡â—”)ã£ â™¥ " + text + " â™¥";
}

function dottyJoiner(text) {
  return "â–‘" + text.split("").join("â–‘") + "â–‘";
}

function wavyJoiner(text) {
  return "â‰‹" + text.split("").join("â‰‹") + "â‰‹";
}

function diametricAngleFrame(text) {
  return text.replace(/([^\s])/g, "ã€Ž$1ã€");
}

function thickBlockFramed(text) {
  return text.replace(/([^\s])/g, "ã€$1ã€‘");
}

function star0(text) {
  return applyCharMap(italicCharMap, "ãƒŸâ˜… " + text + "â˜…å½¡");


}

function star1(text) {
  return applyCharMap(monospaceCharMap, "ê§â€¢âŠ¹Ù­" + text + "Ù­âŠ¹â€¢ê§‚");


}
function star2(text) {
  return applyCharMap(currencyCharMap, " Ä±llÄ±llÄ±â­ðŸŒŸ" + text + "ðŸŒŸâ­Ä±llÄ±llÄ±");


}
function star3(text) {
  return applyCharMap(monospaceCharMap, "â•°â€¢â˜…â˜… " + text + "â˜…â˜…â€¢â•¯");


}
function star4(text) {
  return applyCharMap(squaresCharMap, "`âœµâ€¢.Â¸,âœµÂ°âœµ.ï½¡.âœ°  " + text + "âœ°.ï½¡.âœµÂ°âœµ,Â¸.â€¢âœµÂ´");


}
function star5(text) {
  return applyCharMap(doubleStruckCharMap, "Â·.â˜…Â·.Â·Â´Â¯`Â·.Â·â˜…" + text + "â˜…Â·.Â·Â´Â¯`Â·.Â·â˜….Â·");


}
function star6(text) {
  return applyCharMap(invertedSquaresCharMap, "Â¨ËœË†â€Â°â£~â€¢âœ¡âŠ¹Ù­â€žÂ¸  " + text + "Â¸â€žÙ­âŠ¹âœ¡â€¢~â£Â°â€Ë†ËœÂ¨");


}
function star7(text) {
  return applyCharMap(asianStyleCharMap, "Â¸â€žÙ­âŠ¹âœ¡â€¢~â£Â°â€Ë†ËœÂ¨" + text + "Â¨ËœË†â€Â°â£~â€¢âœ¡âŠ¹Ù­â€žÂ¸");


}
function star8(text) {
  return applyCharMap(asianStyle2CharMap, "â˜…Â¸.â€¢â˜†â€¢.Â¸â˜… " + text + "â˜…â¡€.â€¢â˜†â€¢.â˜…");


}
function star9(text) {
  return applyCharMap(neonCharMap, "Ù­âŠ¹Â¤.â€¢â¨³â€¢.*â˜†âœ¬ " + text + "âœ¬â˜†*.â€¢â¨³â€¢.Â¤âŠ¹Ù­");


}
function star10(text) {
  return applyCharMap(squiggle6CharMap, "Ù­âŠ¹Â¤.â€¢â¨³â€¢.*â˜†âœ¬ " + text + "âœ¬â˜†*.â€¢â¨³â€¢.Â¤âŠ¹Ù­");


}
function heart0(text) {
  return applyCharMap(squiggle5CharMap, "(â—â€¢á´—â€¢â—) ãƒŸðŸ’– " + text + "ðŸ’–å½¡");


}
function heart1(text) {
  return applyCharMap(futureAlienCharMap, "à·´â¤ï¸à·´  " + text + "à·´â¤ï¸à·´");


}
function heart2(text) {
  return applyCharMap(boldCharMap, "ðŸ’–Â´ *â€¢.Â¸â™¥Â¸.â€¢** " + text + "**â€¢.Â¸â™¥Â¸.â€¢*Â´ðŸ’–");


}function heart3(text) {
  return applyCharMap(firework, "â™¡ã€œáƒš(à¹‘ç™¶ " + text + "ç™¶à¹‘)áƒšã€œâ™¡");


}function heart4(text) {
  return applyCharMap(symbolsCharMap, "â—¦â€¢â—â¤â™¡ " + text + "â™¡â¤â—â€¢â—¦");


}function heart5(text) {
  return applyCharMap(bentTextCharMap, "ðŸŒ¸Î¾Î¾(âˆµâ¤â—¡â¤âˆµ)Î¾Î¾Â·Â¯Â·â™©Â¸ " + text + "Â¸â™©Â·Â¯Â·Î¾Î¾(âˆµâ¤â—¡â¤âˆµ)Î¾Î¾ðŸŒ¸");


}function heart6(text) {
  return applyCharMap(upperAnglesCharMap, "â™¥â•£[-_-]â• â™¥" + text + "â™¥â•£[-_-]â• â™¥");


}function heart7(text) {
  return applyCharMap(boldCharMap, "ãƒŸãƒŸâ—¦â§â—¦Â°ËšÂ°â—¦.Â¸Â¸â—¦Â°Â´â¤*â€¢.Â¸â™¥  " + text + "â™¥Â¸.â€¢*â¤Â´Â°â—¦Â¸Â¸.â—¦Â°ËšÂ°â—¦â˜™â—¦å½¡å½¡");


}
function emoticon0(text) {
  return applyCharMap(oldEnglishCharMap, "å½¡(âœ¿â•¹â—¡â•¹) " + text + "(ï½€âˆ€Â´)Î¨");


}
function emoticon1(text) {
  return applyCharMap(squiggle6CharMap, "Ñ‰ï¼ˆï¾ŸÐ”ï¾ŸÑ‰ï¼‰ < " + text + ")");


}
function emoticon2(text) {
  return applyCharMap(boldCharMap, "â˜žÃ³ Íœã¤Ã²â˜ž  " + text + "");


}
function emoticon3(text) {
  return applyCharMap(squiggle5CharMap, "(â˜â—žâ€¸â—Ÿ)â˜ž" + text + "");


}function emoticon4(text) {
  return applyCharMap(cursiveCharMap, "(ã¥ï½¡â—•â€¿â€¿â—•ï½¡)ã¥ " + text + " Ù©(Ë˜â—¡Ë˜)Û¶");


}function emoticon5(text) {
  return applyCharMap(squiggle3CharMap, "ðŸŒ˜â€¿ðŸŒ˜  " + text + "(âœ¿ãƒ˜á´¥ãƒ˜)");


}function emoticon6(text) {
  return applyCharMap(wideTextCharMap, "(^â–½^)  " + text + "(âœ¿^â–½^)");


}function emoticon7(text) {
  return applyCharMap(squiggle2CharMap, "(äººâ—•â€¿â—•)" + text + "(â€¢â—¡â€¢)");


}
function thankyou0(text) {
  return applyCharMap(doubleStruckCharMap, "(ï½¥Ï‰ï½¥)â™ª" + text + "â™ª(ï½¥Ï‰ï½¥)ï¾‰");



}function thankyou1(text) {
  return applyCharMap(cursiveCharMap, "(*ËŠá—œË‹*)" + text + "(*ËŠá—œË‹*)");


}function thankyou2(text) {
  return applyCharMap(doubleStruckCharMap, "(*ã‚Ï‰ãƒ»)" + text + "(Ï‰ãƒ»*ã‚)");


}function thankyou3(text) {
  return applyCharMap(upperAnglesCharMap, "<(_ _*)>" + text + "");


}function thankyou4(text) {
  return applyCharMap(squiggle2CharMap, "â˜…âŒ’(â—ã‚Ï‰ãƒ»)" + text + "");


}function thankyou5(text) {
  return applyCharMap(asianStyleCharMap, "ï¾Ÿï½¥:,ï½¡â˜…ï¼¼(^-^ )â™ª" + text + "â™ª( ^-^)/â˜…,ï½¡ï½¥:ï½¥ï¾Ÿ");


}function thankyou6(text) {
  return applyCharMap(medievalCharMap, "+ï½¡:.ï¾Ÿãƒ½(*Â´âˆ€)ï¾‰ï¾Ÿ" + text + ".:ï½¡+ï¾Ÿ");


}function thankyou7(text) {
  return applyCharMap(neonCharMap, "(*ã‚Ï‰ãƒ»)" + text + "(*ã‚Ï‰ãƒ»)");


}
function sad0(text) {
  return applyCharMap(squiggle5CharMap, "(â—•ï¸¿â—•âœ¿) " + text + " (à¹‘â€²Â°ï¸¿Â°à¹‘)");


}
function sad1(text) {
  return applyCharMap(monospaceCharMap, "â”à¼¼ â—‰ â•­â•® â—‰à¼½â”“ " + text + " (ï¸¶ï¸¹ï¸º)");


}
function sad2(text) {
  return applyCharMap(squiggleCharMap,"(âšˆÌ¥Ì¥Ì¥Ì¥Ì¥ÌâŒ¢âšˆÌ¥Ì¥Ì¥Ì¥Ì¥Ì€)" + text + " (âšˆÌ¥Ì¥Ì¥Ì¥Ì¥ÌâŒ¢âšˆÌ¥Ì¥Ì¥Ì¥Ì¥Ì€)" );


}
function sad3(text) {
  return applyCharMap(italicCharMap, "( â—” Ê–Ì¯ â—” ) " + text + " ( â—” Ê–Ì¯ â—” )");


}
function sad4(text) {
  return applyCharMap(squiggle3CharMap, "(à²¥ ÍœÊ–à²¥) " + text + " Ù©ê’°Â´Â·âŒ¢â€¢ï½€ê’±Û¶â¼Â³â‚Œâ‚ƒ");


}
function sad5(text) {
  return applyCharMap(bentTextCharMap, "(oê†¤ï¸µê†¤o) " + text + " â—ï¸¿â—");


}
function sad6(text) {
  return applyCharMap(medievalCharMap, "(â€²ï¸¿â€µï½¡)" + text + "(|||â›ï¸µâ›.)");


}
function sad7(text) {
  return applyCharMap(symbolsCharMap, "(.ï¹’ï¸ â‚‹ï¹’ï¸¡.) ï¾ŸðŸ˜³â˜¹" + text + "â™¦ðŸ‘º ï¼ˆï¼ˆâ—Â´âˆ§ï½€â—ï¼‰ï¼‰");


}
function cuteText1(text) {
  return applyCharMap(italicCharMap, "ðŸ’˜ðŸŽ€" + text + "ðŸ’˜ðŸŽ€");


}function cuteText2(text) {
  return applyCharMap(squiggle5CharMap, "ðŸ¿ ðŸŽ€" + text + " ðŸŽ€ ðŸ¿");


}function cuteText3(text) {
  return applyCharMap(oldEnglishCharMap, "ðŸ£â™–" + text + " ðŸŽ€ ðŸ’");


}function cuteText4(text) {
  return applyCharMap(squiggleCharMap, "ðŸ‘»àµ " + text + "â˜…ï½¡ ðŸŽ€");


}function cuteText5(text) {
  return applyCharMap(cursiveCharMap, "ðŸŽ¯ðŸ§" + text + "ðŸ’œðŸ’˜");


}
function fullCrazy1(text) {
  return applyCharMap(boldCharMap, "â—¥ê§à½‘ à¥å" + text + " åà¥ à½Œê§‚â—¤");


}function fullCrazy2(text) {
  return applyCharMap(squiggleCharMap, "â€¢â€¢Â¤(`Ã—[Â¤ " + text + " Â¤]Ã—Â´)Â¤â€¢â€¢");


}function fullCrazy3(text) {
  return applyCharMap(doubleStruckCharMap, "â€”(â€¢â€¢Ã·[ " + text + " ]Ã·â€¢â€¢)â€” ");


}function fullCrazy4(text) {
  return applyCharMap(currencyCharMap, ".o0Ã—XÃ—0o. " + text + " .o0Ã—XÃ—0o. ");


}function fullCrazy5(text) {
  return applyCharMap(wideTextCharMap, "â€¢â—â—‰âœ¿ " + text + " âœ¿â—‰â—â€¢â—¦");


}
function crazyWithFlourishOrSymbols3(text) {
  return applyCharMap(italicCharMap, "âŽâŽâœ§GÍ¥OÍ£DÍ«âœ§âŽ âŽ " + text + " âŽâŽâœ§GÍ¥OÍ£DÍ«âœ§âŽ âŽ ");


} function crazyWithFlourishOrSymbols4(text) {
  return applyCharMap(asianStyle2CharMap, "Â¯_( Í¡Â° ÍœÊ– Í¡Â°)_/Â¯  " + text + "Â¯_( Í¡Â° ÍœÊ– Í¡Â°)_/Â¯");


}
function crazyWithFlourishOrSymbols1(text) {
  return applyCharMap(italicCharMap, "â«·  " + text + " â«¸");


} function crazyWithFlourishOrSymbols2(text) {
  return applyCharMap(boldItalicCharMap, "Â«-(Â¯`vÂ´Â¯)-Â« " + text + " Â»-(Â¯`vÂ´Â¯)-Â»");


}  function crazyWithFlourishOrSymbols5(text) {
  return applyCharMap(squaresCharMap, "à®œÛ©ÛžÛ©à®œ " + text + "à®œÛ©ÛžÛ©à®œ");


}
function wrap1(text) {
  return applyCharMap(boldCharMap, "â–‘â–’â–“â–ˆâ–ºâ”€â•" + [text]+ "â•â”€â—„â–ˆâ–“â–’â–‘");


} function wrap2(text) {
  return applyCharMap(cursiveCharMap, " â–‚ â–„ â–… â–† â–‡ â–ˆ " + [text] + "  â–ˆ â–‡ â–† â–… â–„ â–‚â–");


} function wrap3(text) {
  return applyCharMap(boldItalicCharMap, "â–Œâ”‚â–ˆâ•‘â–Œâ•‘â–Œâ•‘ " + [text]+ " â•‘â–Œâ•‘â–Œâ•‘â–ˆâ”‚â–Œ");


} function wrap4(text) {
  return applyCharMap(neonCharMap, "ê§ð“Šˆð’†œ" + [text]+ "] ð’†œð“Š‰ê§‚");


} function wrap5(text) {
  return applyCharMap(boldItalicCharMap, "â•šÂ»â˜…Â«â• " + [text]+ "â•šÂ»â˜…Â«â•");


}

/* new added */
var newtext = {
  s1: {
    1: "&alpha;",
    2: "&#4310;",
    3: "&#392;",
    4: "&#1283;",
    5: "&#1213;",
    6: "&#989;",
    7: "&#608;",
    8: "&#1291;",
    9: "&iota;",
    10: "&#669;",
    11: "&#409;",
    12: "&#645;",
    13: "&#625;",
    14: "&#627;",
    15: "&sigma;",
    16: "&rho;",
    17: "&#985;",
    18: "&#638;",
    19: "&#642;",
    20: "&#410;",
    21: "&upsilon;",
    22: "&#651;",
    23: "&#623;",
    24: "x",
    25: "&#4327;",
    26: "&#549;",
    27: "A",
    28: "B",
    29: "C",
    30: "D",
    31: "E",
    32: "F",
    33: "G",
    34: "H",
    35: "I",
    36: "J",
    37: "K",
    38: "L",
    39: "M",
    40: "N",
    41: "O",
    42: "P",
    43: "Q",
    44: "R",
    45: "S",
    46: "T",
    47: "U",
    48: "V",
    49: "W",
    50: "X",
    51: "Y",
    52: "Z",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s2: {
    1: "&#41807;",
    2: "&#9837;",
    3: "&#9790;",
    4: "&#9687;",
    5: "&euro;",
    6: "&#988;",
    7: "&#10081;",
    8: "&#9796;",
    9: "&#9815;",
    10: "&#9834;",
    11: "&#1008;",
    12: "&#8627;",
    13: "&#9812;",
    14: "&#9835;",
    15: "&#8857;",
    16: "&rho;",
    17: "&#9773;",
    18: "&#9736;",
    19: "&#9442;",
    20: "&#9730;",
    21: "&#9739;",
    22: "&#10003;",
    23: "&omega;",
    24: "&#8984;",
    25: "&#9791;",
    26: "&#9761;",
    27: "&#41807;",
    28: "&#9837;",
    29: "&#9790;",
    30: "&#9687;",
    31: "&euro;",
    32: "&#988;",
    33: "&#10081;",
    34: "&#9796;",
    35: "&#9815;",
    36: "&#9834;",
    37: "&#1008;",
    38: "&#8627;",
    39: "&#9812;",
    40: "&#9835;",
    41: "&#8857;",
    42: "&rho;",
    43: "&#9773;",
    44: "&#9736;",
    45: "&#9442;",
    46: "&#9730;",
    47: "&#9739;",
    48: "&#10003;",
    49: "&omega;",
    50: "&#8984;",
    51: "&#9791;",
    52: "&#9761;",
    53: "&#10122;",
    54: "&#10123;",
    55: "&#10124;",
    56: "&#10125;",
    57: "&#10126;",
    58: "&#10127;",
    59: "&#10128;",
    60: "&#10129;",
    61: "&#10130;",
    62: "&#9450;",
  },
  s3: {
    1: "&#258;",
    2: "&beta;",
    3: "&#268;",
    4: "&#270;",
    5: "&#276;",
    6: "&#358;",
    7: "&#286;",
    8: "&#292;",
    9: "&#296;",
    10: "&#308;",
    11: "&#310;",
    12: "&#313;",
    13: "&#1052;",
    14: "&#323;",
    15: "&#336;",
    16: "&#1056;",
    17: "Q",
    18: "&#340;",
    19: "&#346;",
    20: "&#356;",
    21: "&Uacute;",
    22: "V",
    23: "&#372;",
    24: "&#1046;",
    25: "&#374;",
    26: "&#377;",
    27: "&#258;",
    28: "&beta;",
    29: "&#268;",
    30: "&#270;",
    31: "&#276;",
    32: "&#358;",
    33: "&#286;",
    34: "&#292;",
    35: "&#296;",
    36: "&#308;",
    37: "&#310;",
    38: "&#313;",
    39: "&#1052;",
    40: "&#323;",
    41: "&#336;",
    42: "&#1056;",
    43: "Q",
    44: "&#340;",
    45: "&#346;",
    46: "&#356;",
    47: "&Uacute;",
    48: "V",
    49: "&#372;",
    50: "&#1046;",
    51: "&#374;",
    52: "&#377;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s4: {
    1: "&#592;",
    2: "q",
    3: "&#596;",
    4: "p",
    5: "&#477;",
    6: "&#607;",
    7: "&#387;",
    8: "&#613;",
    9: "&#7433;",
    10: "&#638;",
    11: "&#670;",
    12: "l",
    13: "&#623;",
    14: "u",
    15: "o",
    16: "d",
    17: "b",
    18: "&#633;",
    19: "s",
    20: "&#647;",
    21: "n",
    22: "&#652;",
    23: "&#653;",
    24: "x",
    25: "&#654;",
    26: "z",
    27: "&#592;",
    28: "q",
    29: "&#596;",
    30: "p",
    31: "&#477;",
    32: "&#607;",
    33: "&#387;",
    34: "&#613;",
    35: "&#7433;",
    36: "&#638;",
    37: "&#670;",
    38: "l",
    39: "&#623;",
    40: "u",
    41: "o",
    42: "d",
    43: "b",
    44: "&#633;",
    45: "s",
    46: "&#647;",
    47: "n",
    48: "&#652;",
    49: "&#653;",
    50: "x",
    51: "&#654;",
    52: "z",
    53: "&#406;",
    54: "&#4357;",
    55: "&#400;",
    56: "&#12579;",
    57: "&#987;",
    58: "9",
    59: "&#12581;",
    60: "8",
    61: "6",
    62: "0",
  },
  s5: {
    1: "&Delta;",
    2: "&beta;",
    3: "&#262;",
    4: "&#272;",
    5: "&euro;",
    6: "&#8355;",
    7: "&#484;",
    8: "&#294;",
    9: "&#407;",
    10: "&#308;",
    11: "&#1180;",
    12: "&#321;",
    13: "&Mu;",
    14: "&#327;",
    15: "&Oslash;",
    16: "&#420;",
    17: "&Omega;",
    18: "&#344;",
    19: "&#350;",
    20: "&#358;",
    21: "&#7918;",
    22: "V",
    23: "&#372;",
    24: "&#1046;",
    25: "&yen;",
    26: "&#381;",
    27: "&Delta;",
    28: "&beta;",
    29: "&#262;",
    30: "&#272;",
    31: "&euro;",
    32: "&#8355;",
    33: "&#484;",
    34: "&#294;",
    35: "&#407;",
    36: "&#308;",
    37: "&#1180;",
    38: "&#321;",
    39: "&Mu;",
    40: "&#327;",
    41: "&Oslash;",
    42: "&#420;",
    43: "&Omega;",
    44: "&#344;",
    45: "&#350;",
    46: "&#358;",
    47: "&#7918;",
    48: "V",
    49: "&#372;",
    50: "&#1046;",
    51: "&yen;",
    52: "&#381;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s6: {
    1: "&alpha;",
    2: "&#595;",
    3: "&#2798;",
    4: "&part;",
    5: "&epsilon;",
    6: "&fnof;",
    7: "&#608;",
    8: "&#614;",
    9: "&#3648;",
    10: "&#669;",
    11: "&#1185;",
    12: "&#8467;",
    13: "&#625;",
    14: "&#627;",
    15: "&sigma;",
    16: "&rho;",
    17: "&phi;",
    18: "&#2792;",
    19: "&#3619;",
    20: "&#429;",
    21: "&micro;",
    22: "&#1141;",
    23: "&omega;",
    24: "&#1488;",
    25: "&#4327;",
    26: "&#438;",
    27: "&alpha;",
    28: "&#595;",
    29: "&#2798;",
    30: "&part;",
    31: "&epsilon;",
    32: "&fnof;",
    33: "&#608;",
    34: "&#614;",
    35: "&#3648;",
    36: "&#669;",
    37: "&#1185;",
    38: "&#8467;",
    39: "&#625;",
    40: "&#627;",
    41: "&sigma;",
    42: "&rho;",
    43: "&phi;",
    44: "&#2792;",
    45: "&#3619;",
    46: "&#429;",
    47: "&micro;",
    48: "&#1141;",
    49: "&omega;",
    50: "&#1488;",
    51: "&#4327;",
    52: "&#438;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s7: {
    1: "&#5609;",
    2: "&#5623;",
    3: "&#5205;",
    4: "&#5610;",
    5: "&#5620;",
    6: "&#5556;",
    7: "&#484;",
    8: "&#5500;",
    9: "&#5029;",
    10: "&#5262;",
    11: "&#5845;",
    12: "&#5290;",
    13: "&#5616;",
    14: "&#5198;",
    15: "&#5597;",
    16: "&#5229;",
    17: "&#586;",
    18: "&#5511;",
    19: "&#5397;",
    20: "&#19973;",
    21: "&#5196;",
    22: "&#5167;",
    23: "&#5615;",
    24: "&#5741;",
    25: "&#435;",
    26: "&#20057;",
    27: "&#5609;",
    28: "&#5623;",
    29: "&#5205;",
    30: "&#5610;",
    31: "&#5620;",
    32: "&#5556;",
    33: "&#484;",
    34: "&#5500;",
    35: "&#5029;",
    36: "&#5262;",
    37: "&#5845;",
    38: "&#5290;",
    39: "&#5616;",
    40: "&#5198;",
    41: "&#5597;",
    42: "&#5229;",
    43: "&#586;",
    44: "&#5511;",
    45: "&#5397;",
    46: "&#19973;",
    47: "&#5196;",
    48: "&#5167;",
    49: "&#5615;",
    50: "&#5741;",
    51: "&#435;",
    52: "&#20057;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s8: {
    1: "&#4315;",
    2: "&#4329;",
    3: "&#4308;",
    4: "&#4331;",
    5: "&#4318;",
    6: "f",
    7: "&#4330;",
    8: "h",
    9: "&#7990;",
    10: "&#4325;",
    11: "&kappa;",
    12: "l",
    13: "&#4317;",
    14: "&#8134;",
    15: "&otilde;",
    16: "&rho;",
    17: "&#4306;",
    18: "&Gamma;",
    19: "&#4336;",
    20: "&#3923;",
    21: "&upsilon;",
    22: "&#8023;",
    23: "w",
    24: "&#4335;",
    25: "&#4327;",
    26: "&#576;",
    27: "&#4315;",
    28: "&#4329;",
    29: "&#4308;",
    30: "&#4331;",
    31: "&#4318;",
    32: "f",
    33: "&#4330;",
    34: "h",
    35: "&#7990;",
    36: "&#4325;",
    37: "&kappa;",
    38: "l",
    39: "&#4317;",
    40: "&#8134;",
    41: "&otilde;",
    42: "&rho;",
    43: "&#4306;",
    44: "&Gamma;",
    45: "&#4336;",
    46: "&#3923;",
    47: "&upsilon;",
    48: "&#8023;",
    49: "w",
    50: "&#4335;",
    51: "&#4327;",
    52: "&#576;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s9: {
    1: "&#940;",
    2: "&#1074;",
    3: "&sigmaf;",
    4: "&#545;",
    5: "&#941;",
    6: "&#1171;",
    7: "&#291;",
    8: "&#295;",
    9: "&#943;",
    10: "&#1112;",
    11: "&#311;",
    12: "&#315;",
    13: "&#1084;",
    14: "&#942;",
    15: "&#972;",
    16: "&rho;",
    17: "q",
    18: "&#341;",
    19: "&#351;",
    20: "&#355;",
    21: "&ugrave;",
    22: "&nu;",
    23: "&#974;",
    24: "x",
    25: "&#1095;",
    26: "&#382;",
    27: "&#940;",
    28: "&#1074;",
    29: "&sigmaf;",
    30: "&#545;",
    31: "&#941;",
    32: "&#1171;",
    33: "&#291;",
    34: "&#295;",
    35: "&#943;",
    36: "&#1112;",
    37: "&#311;",
    38: "&#315;",
    39: "&#1084;",
    40: "&#942;",
    41: "&#972;",
    42: "&rho;",
    43: "q",
    44: "&#341;",
    45: "&#351;",
    46: "&#355;",
    47: "&ugrave;",
    48: "&nu;",
    49: "&#974;",
    50: "x",
    51: "&#1095;",
    52: "&#382;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s10: {
    1: "&#41707;",
    2: "&#41155;",
    3: "&#41976;",
    4: "&#41045;",
    5: "&#41823;",
    6: "&#41240;",
    7: "&#41037;",
    8: "&#42075;",
    9: "&#41105;",
    10: "&#41005;",
    11: "&#40983;",
    12: "&#42130;",
    13: "&#41042;",
    14: "&#41081;",
    15: "&#41346;",
    16: "&#41571;",
    17: "&#41080;",
    18: "&#42131;",
    19: "&#41754;",
    20: "&#42181;",
    21: "&#41991;",
    22: "&#41949;",
    23: "&#41296;",
    24: "&#41427;",
    25: "&#42015;",
    26: "&#41076;",
    27: "&#41707;",
    28: "&#41155;",
    29: "&#41976;",
    30: "&#41045;",
    31: "&#41823;",
    32: "&#41240;",
    33: "&#41037;",
    34: "&#42075;",
    35: "&#41105;",
    36: "&#41005;",
    37: "&#40983;",
    38: "&#42130;",
    39: "&#41042;",
    40: "&#41081;",
    41: "&#41346;",
    42: "&#41571;",
    43: "&#41080;",
    44: "&#42131;",
    45: "&#41754;",
    46: "&#42181;",
    47: "&#41991;",
    48: "&#41949;",
    49: "&#41296;",
    50: "&#41427;",
    51: "&#42015;",
    52: "&#41076;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s11: {
    1: "&#1044;",
    2: "&#1041;",
    3: "C",
    4: "D",
    5: "&Xi;",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "&#1180;",
    12: "L",
    13: "M",
    14: "&#1048;",
    15: "&#1060;",
    16: "P",
    17: "&#490;",
    18: "&#1071;",
    19: "S",
    20: "&Gamma;",
    21: "&#1062;",
    22: "V",
    23: "&#1065;",
    24: "&#1046;",
    25: "&#1059;",
    26: "Z",
    27: "&#1044;",
    28: "&#1041;",
    29: "C",
    30: "D",
    31: "&Xi;",
    32: "F",
    33: "G",
    34: "H",
    35: "I",
    36: "J",
    37: "&#1180;",
    38: "L",
    39: "M",
    40: "&#1048;",
    41: "&#1060;",
    42: "P",
    43: "&#490;",
    44: "&#1071;",
    45: "S",
    46: "&Gamma;",
    47: "&#1062;",
    48: "V",
    49: "&#1065;",
    50: "&#1046;",
    51: "&#1059;",
    52: "Z",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s12: {
    1: "&#41807;",
    2: "&#41731;",
    3: "&#41555;",
    4: "&#41016;",
    5: "&#41823;",
    6: "&#41863;",
    7: "&#41029;",
    8: "&#41157;",
    9: "&#40996;",
    10: "&#41005;",
    11: "&#40984;",
    12: "&#42130;",
    13: "&#41141;",
    14: "&#41508;",
    15: "&#41126;",
    16: "&#41571;",
    17: "&#41392;",
    18: "&#41706;",
    19: "&#41751;",
    20: "&#42180;",
    21: "&#40974;",
    22: "&#41204;",
    23: "&#41295;",
    24: "&#41660;",
    25: "&#41769;",
    26: "&#41076;",
    27: "&#41807;",
    28: "&#41731;",
    29: "&#41555;",
    30: "&#41016;",
    31: "&#41823;",
    32: "&#41863;",
    33: "&#41029;",
    34: "&#41157;",
    35: "&#40996;",
    36: "&#41005;",
    37: "&#40984;",
    38: "&#42130;",
    39: "&#41141;",
    40: "&#41508;",
    41: "&#41126;",
    42: "&#41571;",
    43: "&#41392;",
    44: "&#41706;",
    45: "&#41751;",
    46: "&#42180;",
    47: "&#40974;",
    48: "&#41204;",
    49: "&#41295;",
    50: "&#41660;",
    51: "&#41769;",
    52: "&#41076;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s13: {
    1: "&#41708;",
    2: "&#41203;",
    3: "&#41556;",
    4: "&#42159;",
    5: "&#41922;",
    6: "&#41648;",
    7: "&#41804;",
    8: "&#41053;",
    9: "&#42128;",
    10: "&#42171;",
    11: "&#40984;",
    12: "&#42130;",
    13: "&#41141;",
    14: "&#41674;",
    15: "&#41266;",
    16: "&#41571;",
    17: "&#41392;",
    18: "&#41706;",
    19: "&#41433;",
    20: "&#42180;",
    21: "&#42148;",
    22: "&#42150;",
    23: "&#41296;",
    24: "&#41575;",
    25: "&#41766;",
    26: "&#41076;",
    27: "&#41708;",
    28: "&#41203;",
    29: "&#41556;",
    30: "&#42159;",
    31: "&#41922;",
    32: "&#41648;",
    33: "&#41804;",
    34: "&#41053;",
    35: "&#42128;",
    36: "&#42171;",
    37: "&#40984;",
    38: "&#42130;",
    39: "&#41141;",
    40: "&#41674;",
    41: "&#41266;",
    42: "&#41571;",
    43: "&#41392;",
    44: "&#41706;",
    45: "&#41433;",
    46: "&#42180;",
    47: "&#42148;",
    48: "&#42150;",
    49: "&#41296;",
    50: "&#41575;",
    51: "&#41766;",
    52: "&#41076;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s14: {
    1: "&Lambda;",
    2: "&#998;",
    3: "&#12552;",
    4: "&ETH;",
    5: "&#400;",
    6: "F",
    7: "&#403;",
    8: "&#1085;",
    9: "&#618;",
    10: "&#65420;",
    11: "&#1178;",
    12: "&#321;",
    13: "&#3057;",
    14: "&#1051;",
    15: "&Oslash;",
    16: "&thorn;",
    17: "&#1192;",
    18: "&#23610;",
    19: "&#12425;",
    20: "&#356;",
    21: "&#1062;",
    22: "&#404;",
    23: "&#412;",
    24: "&chi;",
    25: "&#996;",
    26: "&#7828;",
    27: "&Lambda;",
    28: "&#998;",
    29: "&#12552;",
    30: "&ETH;",
    31: "&#400;",
    32: "F",
    33: "&#403;",
    34: "&#1085;",
    35: "&#618;",
    36: "&#65420;",
    37: "&#1178;",
    38: "&#321;",
    39: "&#3057;",
    40: "&#1051;",
    41: "&Oslash;",
    42: "&thorn;",
    43: "&#1192;",
    44: "&#23610;",
    45: "&#12425;",
    46: "&#356;",
    47: "&#1062;",
    48: "&#404;",
    49: "&#412;",
    50: "&chi;",
    51: "&#996;",
    52: "&#7828;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s15: {
    1: "&#411;",
    2: "&#385;",
    3: "&#391;",
    4: "&#394;",
    5: "&#1028;",
    6: "&#401;",
    7: "&#403;",
    8: "&#1223;",
    9: "&#406;",
    10: "&#646;",
    11: "&#408;",
    12: "&#1340;",
    13: "M",
    14: "&#413;",
    15: "&#416;",
    16: "&#420;",
    17: "&#418;",
    18: "&#422;",
    19: "&#423;",
    20: "&#428;",
    21: "&#434;",
    22: "&#404;",
    23: "&#412;",
    24: "&#1202;",
    25: "&#435;",
    26: "&#548;",
    27: "&#411;",
    28: "&#385;",
    29: "&#391;",
    30: "&#394;",
    31: "&#1028;",
    32: "&#401;",
    33: "&#403;",
    34: "&#1223;",
    35: "&#406;",
    36: "&#646;",
    37: "&#408;",
    38: "&#1340;",
    39: "M",
    40: "&#413;",
    41: "&#416;",
    42: "&#420;",
    43: "&#418;",
    44: "&#422;",
    45: "&#423;",
    46: "&#428;",
    47: "&#434;",
    48: "&#404;",
    49: "&#412;",
    50: "&#1202;",
    51: "&#435;",
    52: "&#548;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s16: {
    1: "&#41074;",
    2: "&#41712;",
    3: "&#41007;",
    4: "&#41120;",
    5: "&#41532;",
    6: "&#41246;",
    7: "&#41029;",
    8: "&#41833;",
    9: "&#41105;",
    10: "&#42171;",
    11: "&#40983;",
    12: "&#42130;",
    13: "&#41141;",
    14: "&#41674;",
    15: "&#41126;",
    16: "&#41571;",
    17: "&#41079;",
    18: "&#41733;",
    19: "&#41754;",
    20: "&#41686;",
    21: "&#41991;",
    22: "&#41008;",
    23: "&#41295;",
    24: "&#41426;",
    25: "&#42014;",
    26: "&#41076;",
    27: "&#41074;",
    28: "&#41712;",
    29: "&#41007;",
    30: "&#41120;",
    31: "&#41532;",
    32: "&#41246;",
    33: "&#41029;",
    34: "&#41833;",
    35: "&#41105;",
    36: "&#42171;",
    37: "&#40983;",
    38: "&#42130;",
    39: "&#41141;",
    40: "&#41674;",
    41: "&#41126;",
    42: "&#41571;",
    43: "&#41079;",
    44: "&#41733;",
    45: "&#41754;",
    46: "&#41686;",
    47: "&#41991;",
    48: "&#41008;",
    49: "&#41295;",
    50: "&#41426;",
    51: "&#42014;",
    52: "&#41076;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s17: {
    1: "&#1337;",
    2: "&#1349;",
    3: "&#1351;",
    4: "&#1338;",
    5: "&#541;",
    6: "&#1330;",
    7: "&#1331;",
    8: "&#615;",
    9: "&#639;",
    10: "&#669;",
    11: "&#409;",
    12: "&#645;",
    13: "&#653;",
    14: "&#1356;",
    15: "&#1342;",
    16: "&rho;",
    17: "&phi;",
    18: "&#1360;",
    19: "&#1359;",
    20: "&#1333;",
    21: "&#1348;",
    22: "&#1506;",
    23: "&#1377;",
    24: "&#1347;",
    25: "&#1358;",
    26: "&#1344;",
    27: "&#1337;",
    28: "&#1349;",
    29: "&#1351;",
    30: "&#1338;",
    31: "&#541;",
    32: "&#1330;",
    33: "&#1331;",
    34: "&#615;",
    35: "&#639;",
    36: "&#669;",
    37: "&#409;",
    38: "&#645;",
    39: "&#653;",
    40: "&#1356;",
    41: "&#1342;",
    42: "&rho;",
    43: "&phi;",
    44: "&#1360;",
    45: "&#1359;",
    46: "&#1333;",
    47: "&#1348;",
    48: "&#1506;",
    49: "&#1377;",
    50: "&#1347;",
    51: "&#1358;",
    52: "&#1344;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s18: {
    1: "&alpha;",
    2: "&szlig;",
    3: "&sigmaf;",
    4: "d",
    5: "&epsilon;",
    6: "&fnof;",
    7: "g",
    8: "h",
    9: "&iuml;",
    10: "&#1397;",
    11: "&kappa;",
    12: "&#65434;",
    13: "m",
    14: "&eta;",
    15: "&oplus;",
    16: "p",
    17: "&Omega;",
    18: "r",
    19: "&scaron;",
    20: "&dagger;",
    21: "u",
    22: "&forall;",
    23: "&omega;",
    24: "x",
    25: "&psi;",
    26: "z",
    27: "&alpha;",
    28: "&szlig;",
    29: "&sigmaf;",
    30: "d",
    31: "&epsilon;",
    32: "&fnof;",
    33: "g",
    34: "h",
    35: "&iuml;",
    36: "&#1397;",
    37: "&kappa;",
    38: "&#65434;",
    39: "m",
    40: "&eta;",
    41: "&oplus;",
    42: "p",
    43: "&Omega;",
    44: "r",
    45: "&scaron;",
    46: "&dagger;",
    47: "u",
    48: "&forall;",
    49: "&omega;",
    50: "x",
    51: "&psi;",
    52: "z",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s19: {
    1: "&#3588;",
    2: "&#4330;",
    3: "&#2414;",
    4: "&#4331;",
    5: "&#2799;",
    6: "&#1330;",
    7: "&#2797;",
    8: "&#1210;",
    9: "&#639;",
    10: "&#646;",
    11: "&#1179;",
    12: "&#1350;",
    13: "&#625;",
    14: "&#1352;",
    15: "&#2790;",
    16: "&#447;",
    17: "&#1193;",
    18: "&#1360;",
    19: "&sigmaf;",
    20: "&#2670;",
    21: "&upsilon;",
    22: "&#3182;",
    23: "&omega;",
    24: "&#2794;",
    25: "&#1506;",
    26: "&#2749;",
    27: "&#3588;",
    28: "&#4330;",
    29: "&#2414;",
    30: "&#4331;",
    31: "&#2799;",
    32: "&#1330;",
    33: "&#2797;",
    34: "&#1210;",
    35: "&#639;",
    36: "&#646;",
    37: "&#1179;",
    38: "&#1350;",
    39: "&#625;",
    40: "&#1352;",
    41: "&#2790;",
    42: "&#447;",
    43: "&#1193;",
    44: "&#1360;",
    45: "&sigmaf;",
    46: "&#2670;",
    47: "&upsilon;",
    48: "&#3182;",
    49: "&omega;",
    50: "&#2794;",
    51: "&#1506;",
    52: "&#2749;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s20: {
    1: "&#1072;",
    2: "&#1073;",
    3: "c",
    4: "&#1076;",
    5: "&#1105;",
    6: "f",
    7: "g",
    8: "&#1085;",
    9: "&#1111;",
    10: "j",
    11: "&#1082;",
    12: "&#1075;",
    13: "&#1131;",
    14: "&#1087;",
    15: "&#1139;",
    16: "p",
    17: "&#1092;",
    18: "&#1103;",
    19: "$",
    20: "&#1090;",
    21: "&#1094;",
    22: "&#1141;",
    23: "&#1097;",
    24: "&#1078;",
    25: "&#1095;",
    26: "&#1079;",
    27: "&#1040;",
    28: "&#1041;",
    29: "C",
    30: "&#1044;",
    31: "&#1028;",
    32: "F",
    33: "G",
    34: "H",
    35: "&#1031;",
    36: "J",
    37: "&#1050;",
    38: "&#1043;",
    39: "&#1130;",
    40: "&#1049;",
    41: "&#1138;",
    42: "P",
    43: "&#1060;",
    44: "&#1071;",
    45: "$",
    46: "T",
    47: "&#1062;",
    48: "&#1140;",
    49: "&#1064;",
    50: "&#1046;",
    51: "&#1063;",
    52: "&#1047;",
    53: "1",
    54: "2",
    55: "3",
    56: "4",
    57: "5",
    58: "6",
    59: "7",
    60: "8",
    61: "9",
    62: "0",
  },
  s21: {
    1: "a&#830;",
    2: "b&#830;",
    3: "c&#830;",
    4: "d&#830;",
    5: "e&#830;",
    6: "f&#830;",
    7: "g&#830;",
    8: "h&#830;",
    9: "i&#830;",
    10: "j&#830;",
    11: "k&#830;",
    12: "l&#830;",
    13: "m&#830;",
    14: "n&#830;",
    15: "o&#830;",
    16: "p&#830;",
    17: "q&#830;",
    18: "r&#830;",
    19: "s&#830;",
    20: "t&#830;",
    21: "u&#830;",
    22: "v&#830;",
    23: "w&#830;",
    24: "x&#830;",
    25: "y&#830;",
    26: "z&#830;",
    27: "A&#830;",
    28: "B&#830;",
    29: "C&#830;",
    30: "D&#830;",
    31: "E&#830;",
    32: "F&#830;",
    33: "G&#830;",
    34: "H&#830;",
    35: "I&#830;",
    36: "J&#830;",
    37: "K&#830;",
    38: "L&#830;",
    39: "M&#830;",
    40: "N&#830;",
    41: "O&#830;",
    42: "P&#830;",
    43: "Q&#830;",
    44: "R&#830;",
    45: "S&#830;",
    46: "T&#830;",
    47: "U&#830;",
    48: "V&#830;",
    49: "W&#830;",
    50: "X&#830;",
    51: "Y&#830;",
    52: "Z&#830;",
    53: "1&#830;",
    54: "2&#830;",
    55: "3&#830;",
    56: "4&#830;",
    57: "5&#830;",
    58: "6&#830;",
    59: "7&#830;",
    60: "8&#830;",
    61: "9&#830;",
    62: "0&#830;",
  },
  s22: {
    1: "a&#838;",
    2: "b&#838;",
    3: "c&#838;",
    4: "d&#838;",
    5: "e&#838;",
    6: "f&#838;",
    7: "g&#838;",
    8: "h&#838;",
    9: "i&#838;",
    10: "j&#838;",
    11: "k&#838;",
    12: "l&#838;",
    13: "m&#838;",
    14: "n&#838;",
    15: "o&#838;",
    16: "p&#838;",
    17: "q&#838;",
    18: "r&#838;",
    19: "s&#838;",
    20: "t&#838;",
    21: "u&#838;",
    22: "v&#838;",
    23: "w&#838;",
    24: "x&#838;",
    25: "y&#838;",
    26: "z&#838;",
    27: "A&#838;",
    28: "B&#838;",
    29: "C&#838;",
    30: "D&#838;",
    31: "E&#838;",
    32: "F&#838;",
    33: "G&#838;",
    34: "H&#838;",
    35: "I&#838;",
    36: "J&#838;",
    37: "K&#838;",
    38: "L&#838;",
    39: "M&#838;",
    40: "N&#838;",
    41: "O&#838;",
    42: "P&#838;",
    43: "Q&#838;",
    44: "R&#838;",
    45: "S&#838;",
    46: "T&#838;",
    47: "U&#838;",
    48: "V&#838;",
    49: "W&#838;",
    50: "X&#838;",
    51: "Y&#838;",
    52: "Z&#838;",
    53: "1&#838;",
    54: "2&#838;",
    55: "3&#838;",
    56: "4&#838;",
    57: "5&#838;",
    58: "6&#838;",
    59: "7&#838;",
    60: "8&#838;",
    61: "9&#838;",
    62: "0&#838;",
  },
  s23: {
    1: "a&#826;",
    2: "b&#826;",
    3: "c&#826;",
    4: "d&#826;",
    5: "e&#826;",
    6: "f&#826;",
    7: "g&#826;",
    8: "h&#826;",
    9: "i&#826;",
    10: "j&#826;",
    11: "k&#826;",
    12: "l&#826;",
    13: "m&#826;",
    14: "n&#826;",
    15: "o&#826;",
    16: "p&#826;",
    17: "q&#826;",
    18: "r&#826;",
    19: "s&#826;",
    20: "t&#826;",
    21: "u&#826;",
    22: "v&#826;",
    23: "w&#826;",
    24: "x&#826;",
    25: "y&#826;",
    26: "z&#826;",
    27: "A&#826;",
    28: "B&#826;",
    29: "C&#826;",
    30: "D&#826;",
    31: "E&#826;",
    32: "F&#826;",
    33: "G&#826;",
    34: "H&#826;",
    35: "I&#826;",
    36: "J&#826;",
    37: "K&#826;",
    38: "L&#826;",
    39: "M&#826;",
    40: "N&#826;",
    41: "O&#826;",
    42: "P&#826;",
    43: "Q&#826;",
    44: "R&#826;",
    45: "S&#826;",
    46: "T&#826;",
    47: "U&#826;",
    48: "V&#826;",
    49: "W&#826;",
    50: "X&#826;",
    51: "Y&#826;",
    52: "Z&#826;",
    53: "1&#826;",
    54: "2&#826;",
    55: "3&#826;",
    56: "4&#826;",
    57: "5&#826;",
    58: "6&#826;",
    59: "7&#826;",
    60: "8&#826;",
    61: "9&#826;",
    62: "0&#826;",
  },
  s24: {
    1: "a&#857;",
    2: "b&#857;",
    3: "c&#857;",
    4: "d&#857;",
    5: "e&#857;",
    6: "f&#857;",
    7: "g&#857;",
    8: "h&#857;",
    9: "i&#857;",
    10: "j&#857;",
    11: "k&#857;",
    12: "l&#857;",
    13: "m&#857;",
    14: "n&#857;",
    15: "o&#857;",
    16: "p&#857;",
    17: "q&#857;",
    18: "r&#857;",
    19: "s&#857;",
    20: "t&#857;",
    21: "u&#857;",
    22: "v&#857;",
    23: "w&#857;",
    24: "x&#857;",
    25: "y&#857;",
    26: "z&#857;",
    27: "A&#857;",
    28: "B&#857;",
    29: "C&#857;",
    30: "D&#857;",
    31: "E&#857;",
    32: "F&#857;",
    33: "G&#857;",
    34: "H&#857;",
    35: "I&#857;",
    36: "J&#857;",
    37: "K&#857;",
    38: "L&#857;",
    39: "M&#857;",
    40: "N&#857;",
    41: "O&#857;",
    42: "P&#857;",
    43: "Q&#857;",
    44: "R&#857;",
    45: "S&#857;",
    46: "T&#857;",
    47: "U&#857;",
    48: "V&#857;",
    49: "W&#857;",
    50: "X&#857;",
    51: "Y&#857;",
    52: "Z&#857;",
    53: "1&#857;",
    54: "2&#857;",
    55: "3&#857;",
    56: "4&#857;",
    57: "5&#857;",
    58: "6&#857;",
    59: "7&#857;",
    60: "8&#857;",
    61: "9&#857;",
    62: "0&#857;",
  },
  s25: {
    1: "a&#799;",
    2: "b&#799;",
    3: "c&#799;",
    4: "d&#799;",
    5: "e&#799;",
    6: "f&#799;",
    7: "g&#799;",
    8: "h&#799;",
    9: "i&#799;",
    10: "j&#799;",
    11: "k&#799;",
    12: "l&#799;",
    13: "m&#799;",
    14: "n&#799;",
    15: "o&#799;",
    16: "p&#799;",
    17: "q&#799;",
    18: "r&#799;",
    19: "s&#799;",
    20: "t&#799;",
    21: "u&#799;",
    22: "v&#799;",
    23: "w&#799;",
    24: "x&#799;",
    25: "y&#799;",
    26: "z&#799;",
    27: "A&#799;",
    28: "B&#799;",
    29: "C&#799;",
    30: "D&#799;",
    31: "E&#799;",
    32: "F&#799;",
    33: "G&#799;",
    34: "H&#799;",
    35: "I&#799;",
    36: "J&#799;",
    37: "K&#799;",
    38: "L&#799;",
    39: "M&#799;",
    40: "N&#799;",
    41: "O&#799;",
    42: "P&#799;",
    43: "Q&#799;",
    44: "R&#799;",
    45: "S&#799;",
    46: "T&#799;",
    47: "U&#799;",
    48: "V&#799;",
    49: "W&#799;",
    50: "X&#799;",
    51: "Y&#799;",
    52: "Z&#799;",
    53: "1&#799;",
    54: "2&#799;",
    55: "3&#799;",
    56: "4&#799;",
    57: "5&#799;",
    58: "6&#799;",
    59: "7&#799;",
    60: "8&#799;",
    61: "9&#799;",
    62: "0&#799;",
  },
  s26: {
    1: "a&#846;",
    2: "b&#846;",
    3: "c&#846;",
    4: "d&#846;",
    5: "e&#846;",
    6: "f&#846;",
    7: "g&#846;",
    8: "h&#846;",
    9: "i&#846;",
    10: "j&#846;",
    11: "k&#846;",
    12: "l&#846;",
    13: "m&#846;",
    14: "n&#846;",
    15: "o&#846;",
    16: "p&#846;",
    17: "q&#846;",
    18: "r&#846;",
    19: "s&#846;",
    20: "t&#846;",
    21: "u&#846;",
    22: "v&#846;",
    23: "w&#846;",
    24: "x&#846;",
    25: "y&#846;",
    26: "z&#846;",
    27: "A&#846;",
    28: "B&#846;",
    29: "C&#846;",
    30: "D&#846;",
    31: "E&#846;",
    32: "F&#846;",
    33: "G&#846;",
    34: "H&#846;",
    35: "I&#846;",
    36: "J&#846;",
    37: "K&#846;",
    38: "L&#846;",
    39: "M&#846;",
    40: "N&#846;",
    41: "O&#846;",
    42: "P&#846;",
    43: "Q&#846;",
    44: "R&#846;",
    45: "S&#846;",
    46: "T&#846;",
    47: "U&#846;",
    48: "V&#846;",
    49: "W&#846;",
    50: "X&#846;",
    51: "Y&#846;",
    52: "Z&#846;",
    53: "1&#846;",
    54: "2&#846;",
    55: "3&#846;",
    56: "4&#846;",
    57: "5&#846;",
    58: "6&#846;",
    59: "7&#846;",
    60: "8&#846;",
    61: "9&#846;",
    62: "0&#846;",
  },
  s27: {
    1: "a&#829;&#851;",
    2: "b&#829;&#851;",
    3: "c&#829;&#851;",
    4: "d&#829;&#851;",
    5: "e&#829;&#851;",
    6: "f&#829;&#851;",
    7: "g&#829;&#851;",
    8: "h&#829;&#851;",
    9: "i&#829;&#851;",
    10: "j&#829;&#851;",
    11: "k&#829;&#851;",
    12: "l&#829;&#851;",
    13: "m&#829;&#851;",
    14: "n&#829;&#851;",
    15: "o&#829;&#851;",
    16: "p&#829;&#851;",
    17: "q&#829;&#851;",
    18: "r&#829;&#851;",
    19: "s&#829;&#851;",
    20: "t&#829;&#851;",
    21: "u&#829;&#851;",
    22: "v&#829;&#851;",
    23: "w&#829;&#851;",
    24: "x&#829;&#851;",
    25: "y&#829;&#851;",
    26: "z&#829;&#851;",
    27: "A&#829;&#851;",
    28: "B&#829;&#851;",
    29: "C&#829;&#851;",
    30: "D&#829;&#851;",
    31: "E&#829;&#851;",
    32: "F&#829;&#851;",
    33: "G&#829;&#851;",
    34: "H&#829;&#851;",
    35: "I&#829;&#851;",
    36: "J&#829;&#851;",
    37: "K&#829;&#851;",
    38: "L&#829;&#851;",
    39: "M&#829;&#851;",
    40: "N&#829;&#851;",
    41: "O&#829;&#851;",
    42: "P&#829;&#851;",
    43: "Q&#829;&#851;",
    44: "R&#829;&#851;",
    45: "S&#829;&#851;",
    46: "T&#829;&#851;",
    47: "U&#829;&#851;",
    48: "V&#829;&#851;",
    49: "W&#829;&#851;",
    50: "X&#829;&#851;",
    51: "Y&#829;&#851;",
    52: "Z&#829;&#851;",
    53: "1&#829;&#851;",
    54: "2&#829;&#851;",
    55: "3&#829;&#851;",
    56: "4&#829;&#851;",
    57: "5&#829;&#851;",
    58: "6&#829;&#851;",
    59: "7&#829;&#851;",
    60: "8&#829;&#851;",
    61: "9&#829;&#851;",
    62: "0&#829;&#851;",
  },
  s29: {
    1: "&#120458;&#823;",
    2: "&#120459;&#823;",
    3: "&#120460;&#823;",
    4: "&#120461;&#823;",
    5: "&#120462;&#823;",
    6: "&#120463;&#823;",
    7: "&#120464;&#823;",
    8: "&#120465;&#823;",
    9: "&#120466;&#823;",
    10: "&#120467;&#823;",
    11: "&#120468;&#823;",
    12: "&#120469;&#823;",
    13: "&#120470;&#823;",
    14: "&#120471;&#823;",
    15: "&#120472;&#823;",
    16: "&#120473;&#823;",
    17: "&#120474;&#823;",
    18: "&#120475;&#823;",
    19: "&#120476;&#823;",
    20: "&#120477;&#823;",
    21: "&#120478;&#823;",
    22: "&#120479;&#823;",
    23: "&#120480;&#823;",
    24: "&#120481;&#823;",
    25: "&#120482;&#823;",
    26: "&#120483;&#823;",
    27: "&#120432;&#823;",
    28: "&#120433;&#823;",
    29: "&#120434;&#823;",
    30: "&#120435;&#823;",
    31: "&#120436;&#823;",
    32: "&#120437;&#823;",
    33: "&#120438;&#823;",
    34: "&#120439;&#823;",
    35: "&#120440;&#823;",
    36: "&#120441;&#823;",
    37: "&#120442;&#823;",
    38: "&#120443;&#823;",
    39: "&#120444;&#823;",
    40: "&#120445;&#823;",
    41: "&#120446;&#823;",
    42: "&#120447;&#823;",
    43: "&#120448;&#823;",
    44: "&#120449;&#823;",
    45: "&#120450;&#823;",
    46: "&#120451;&#823;",
    47: "&#120452;&#823;",
    48: "&#120453;&#823;",
    49: "&#120454;&#823;",
    50: "&#120455;&#823;",
    51: "&#120456;&#823;",
    52: "&#120457;&#823;",
    53: "&#120823;&#823;",
    54: "&#120824;&#823;",
    55: "&#120825;&#823;",
    56: "&#120826;&#823;",
    57: "&#120827;&#823;",
    58: "&#120828;&#823;",
    59: "&#120829;&#823;",
    60: "&#120830;&#823;",
    61: "&#120831;&#823;",
    62: "&#120822;&#823;",
  },
  s30: {
    1: "a&#866;",
    2: "b&#866;",
    3: "c&#866;",
    4: "d&#866;",
    5: "e&#866;",
    6: "f&#866;",
    7: "g&#866;",
    8: "h&#866;",
    9: "i&#866;",
    10: "j&#866;",
    11: "k&#866;",
    12: "l&#866;",
    13: "m&#866;",
    14: "n&#866;",
    15: "o&#866;",
    16: "p&#866;",
    17: "q&#866;",
    18: "r&#866;",
    19: "s&#866;",
    20: "t&#866;",
    21: "u&#866;",
    22: "v&#866;",
    23: "w&#866;",
    24: "x&#866;",
    25: "y&#866;",
    26: "z&#866;",
    27: "A&#866;",
    28: "B&#866;",
    29: "C&#866;",
    30: "D&#866;",
    31: "E&#866;",
    32: "F&#866;",
    33: "G&#866;",
    34: "H&#866;",
    35: "I&#866;",
    36: "J&#866;",
    37: "K&#866;",
    38: "L&#866;",
    39: "M&#866;",
    40: "N&#866;",
    41: "O&#866;",
    42: "P&#866;",
    43: "Q&#866;",
    44: "R&#866;",
    45: "S&#866;",
    46: "T&#866;",
    47: "U&#866;",
    48: "V&#866;",
    49: "W&#866;",
    50: "X&#866;",
    51: "Y&#866;",
    52: "Z&#866;",
    53: "1&#866;",
    54: "2&#866;",
    55: "3&#866;",
    56: "4&#866;",
    57: "5&#866;",
    58: "6&#866;",
    59: "7&#866;",
    60: "8&#866;",
    61: "9&#866;",
    62: "0&#866;",
  },
  s31: {
    1: "a&#828;",
    2: "b&#828;",
    3: "c&#828;",
    4: "d&#828;",
    5: "e&#828;",
    6: "f&#828;",
    7: "g&#828;",
    8: "h&#828;",
    9: "i&#828;",
    10: "j&#828;",
    11: "k&#828;",
    12: "l&#828;",
    13: "m&#828;",
    14: "n&#828;",
    15: "o&#828;",
    16: "p&#828;",
    17: "q&#828;",
    18: "r&#828;",
    19: "s&#828;",
    20: "t&#828;",
    21: "u&#828;",
    22: "v&#828;",
    23: "w&#828;",
    24: "x&#828;",
    25: "y&#828;",
    26: "z&#828;",
    27: "A&#828;",
    28: "B&#828;",
    29: "C&#828;",
    30: "D&#828;",
    31: "E&#828;",
    32: "F&#828;",
    33: "G&#828;",
    34: "H&#828;",
    35: "I&#828;",
    36: "J&#828;",
    37: "K&#828;",
    38: "L&#828;",
    39: "M&#828;",
    40: "N&#828;",
    41: "O&#828;",
    42: "P&#828;",
    43: "Q&#828;",
    44: "R&#828;",
    45: "S&#828;",
    46: "T&#828;",
    47: "U&#828;",
    48: "V&#828;",
    49: "W&#828;",
    50: "X&#828;",
    51: "Y&#828;",
    52: "Z&#828;",
    53: "1&#828;",
    54: "2&#828;",
    55: "3&#828;",
    56: "4&#828;",
    57: "5&#828;",
    58: "6&#828;",
    59: "7&#828;",
    60: "8&#828;",
    61: "9&#828;",
    62: "0&#828;",
  },
};

function Change(intext, id) {
  var text = "";

  var intext = intext;
  if (intext.length == 0) return;

  for (i = 0; i < intext.length; i++) {
    var c = intext.charAt(i),
      loc = normal.indexOf(c) + 1;
    if (c == " ") {
      text += " ";
    } else if (!loc) {
      text += c;
    } else {
      text += newtext[id][loc];
    }
  }
  return text;
}

/* eslint-disable */
const futureAlienCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "á—©",
  b: "á—·",
  c: "á‘¢",
  d: "á•²",
  e: "á˜¿",
  f: "á–´",
  g: "á˜œ",
  h: "á•¼",
  i: "á“°",
  j: "á’š",
  k: "á–½á¸",
  l: "á’ª",
  m: "á˜»",
  n: "á˜‰",
  o: "á“",
  p: "á•µ",
  q: "á•´",
  r: "á–‡",
  s: "S",
  t: "á–¶",
  u: "á‘˜",
  v: "áº",
  w: "á˜º",
  x: "á™­",
  y: "á–»",
  z: "á—±",
  A: "á—©",
  B: "á—·",
  C: "á‘¢",
  D: "á•²",
  E: "á˜¿",
  F: "á–´",
  G: "á˜œ",
  H: "á•¼",
  I: "á“°",
  J: "á’š",
  K: "á–½á¸",
  L: "á’ª",
  M: "á˜»",
  N: "á˜‰",
  O: "á“",
  P: "á•µ",
  Q: "á•´",
  R: "á–‡",
  S: "S",
  T: "á–¶",
  U: "á‘˜",
  V: "áº",
  W: "á˜º",
  X: "á™­",
  Y: "á–»",
  Z: "á—±",
};
const squiggle6CharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "à¸„",
  b: "à¹–",
  c: "Â¢",
  d: "à»“",
  e: "Ä“",
  f: "f",
  g: "àº‡",
  h: "h",
  i: "i",
  j: "à¸§",
  k: "k",
  l: "l",
  m: "à¹“",
  n: "àº–",
  o: "à»",
  p: "p",
  q: "à¹‘",
  r: "r",
  s: "Åž",
  t: "t",
  u: "à¸™",
  v: "à¸‡",
  w: "àºŸ",
  x: "x",
  y: "à¸¯",
  z: "àºŠ",
  A: "à¸„",
  B: "à¹–",
  C: "Â¢",
  D: "à»“",
  E: "Ä“",
  F: "f",
  G: "àº‡",
  H: "h",
  I: "i",
  J: "à¸§",
  K: "k",
  L: "l",
  M: "à¹“",
  N: "àº–",
  O: "à»",
  P: "p",
  Q: "à¹‘",
  R: "r",
  S: "Åž",
  T: "t",
  U: "à¸™",
  V: "à¸‡",
  W: "àºŸ",
  X: "x",
  Y: "à¸¯",
  Z: "àºŠ",
};
const squiggle5CharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "Ä…",
  b: "áƒª",
  c: "Æˆ",
  d: "É–",
  e: "É›",
  f: "Ê„",
  g: "É ",
  h: "É§",
  i: "Ä±",
  j: "Ê",
  k: "Æ™",
  l: "Æ–",
  m: "É±",
  n: "Å‹",
  o: "Æ¡",
  p: "â„˜",
  q: "Õ¦",
  r: "à½ž",
  s: "Ê‚",
  t: "É¬",
  u: "Å³",
  v: "Û·",
  w: "á¿³",
  x: "Ò³",
  y: "áƒ§",
  z: "Ê‘",
  A: "Ä…",
  B: "áƒª",
  C: "Æˆ",
  D: "É–",
  E: "É›",
  F: "Ê„",
  G: "É ",
  H: "É§",
  I: "Ä±",
  J: "Ê",
  K: "Æ™",
  L: "Æ–",
  M: "É±",
  N: "Å‹",
  O: "Æ¡",
  P: "â„˜",
  Q: "Õ¦",
  R: "à½ž",
  S: "Ê‚",
  T: "É¬",
  U: "Å³",
  V: "Û·",
  W: "á¿³",
  X: "Ò³",
  Y: "áƒ§",
  Z: "Ê‘",
};
const asianStyle2CharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ï¾‘",
  b: "ä¹ƒ",
  c: "á„ƒ",
  d: "ã‚Š",
  e: "ä¹‡",
  f: "ï½·",
  g: "ãƒ ",
  h: "ã‚“",
  i: "ï¾‰",
  j: "ï¾Œ",
  k: "ã‚º",
  l: "ï¾š",
  m: "ï¾¶",
  n: "åˆ€",
  o: "ã®",
  p: "ï½±",
  q: "ã‚",
  r: "å°º",
  s: "ä¸‚",
  t: "ï½²",
  u: "ã²",
  v: "âˆš",
  w: "W",
  x: "ï¾’",
  y: "ï¾˜",
  z: "ä¹™",
  A: "ï¾‘",
  B: "ä¹ƒ",
  C: "á„ƒ",
  D: "ã‚Š",
  E: "ä¹‡",
  F: "ï½·",
  G: "ãƒ ",
  H: "ã‚“",
  I: "ï¾‰",
  J: "ï¾Œ",
  K: "ã‚º",
  L: "ï¾š",
  M: "ï¾¶",
  N: "åˆ€",
  O: "ã®",
  P: "ï½±",
  Q: "ã‚",
  R: "å°º",
  S: "ä¸‚",
  T: "ï½²",
  U: "ã²",
  V: "âˆš",
  W: "W",
  X: "ï¾’",
  Y: "ï¾˜",
  Z: "ä¹™",
};
const asianStyleCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "å‚",
  b: "ä¹ƒ",
  c: "åŒš",
  d: "á—ª",
  e: "ä¹‡",
  f: "åƒ",
  g: "áŽ¶",
  h: "å„",
  i: "ä¸¨",
  j: "ï¾Œ",
  k: "Òœ",
  l: "ã„¥",
  m: "çˆª",
  n: "å‡ ",
  o: "ã„–",
  p: "å©",
  q: "ÉŠ",
  r: "å°º",
  s: "ä¸‚",
  t: "ã„’",
  u: "ã„©",
  v: "á¯",
  w: "å±±",
  x: "ä¹‚",
  y: "ã„š",
  z: "ä¹™",
  A: "å‚",
  B: "ä¹ƒ",
  C: "åŒš",
  D: "á—ª",
  E: "ä¹‡",
  F: "åƒ",
  G: "áŽ¶",
  H: "å„",
  I: "ä¸¨",
  J: "ï¾Œ",
  K: "Òœ",
  L: "ã„¥",
  M: "çˆª",
  N: "å‡ ",
  O: "ã„–",
  P: "å©",
  Q: "ÉŠ",
  R: "å°º",
  S: "ä¸‚",
  T: "ã„’",
  U: "ã„©",
  V: "á¯",
  W: "å±±",
  X: "ä¹‚",
  Y: "ã„š",
  Z: "ä¹™",
};
const squaresCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ðŸ„°",
  b: "ðŸ„±",
  c: "ðŸ„²",
  d: "ðŸ„³",
  e: "ðŸ„´",
  f: "ðŸ„µ",
  g: "ðŸ„¶",
  h: "ðŸ„·",
  i: "ðŸ„¸",
  j: "ðŸ„¹",
  k: "ðŸ„º",
  l: "ðŸ„»",
  m: "ðŸ„¼",
  n: "ðŸ„½",
  o: "ðŸ„¾",
  p: "ðŸ„¿",
  q: "ðŸ…€",
  r: "ðŸ…",
  s: "ðŸ…‚",
  t: "ðŸ…ƒ",
  u: "ðŸ…„",
  v: "ðŸ……",
  w: "ðŸ…†",
  x: "ðŸ…‡",
  y: "ðŸ…ˆ",
  z: "ðŸ…‰",
  A: "ðŸ„°",
  B: "ðŸ„±",
  C: "ðŸ„²",
  D: "ðŸ„³",
  E: "ðŸ„´",
  F: "ðŸ„µ",
  G: "ðŸ„¶",
  H: "ðŸ„·",
  I: "ðŸ„¸",
  J: "ðŸ„¹",
  K: "ðŸ„º",
  L: "ðŸ„»",
  M: "ðŸ„¼",
  N: "ðŸ„½",
  O: "ðŸ„¾",
  P: "ðŸ„¿",
  Q: "ðŸ…€",
  R: "ðŸ…",
  S: "ðŸ…‚",
  T: "ðŸ…ƒ",
  U: "ðŸ…„",
  V: "ðŸ……",
  W: "ðŸ…†",
  X: "ðŸ…‡",
  Y: "ðŸ…ˆ",
  Z: "ðŸ…‰",
};
const squiggle4CharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "á—",
  b: "á°",
  c: "áˆ",
  d: "áŽ´",
  e: "á‹",
  f: "áŽ¦",
  g: "áŽ¶",
  h: "á‚",
  i: "áŽ¥",
  j: "á ",
  k: "á¦",
  l: "á",
  m: "áŽ·",
  n: "á",
  o: "áŽ§",
  p: "áŽ®",
  q: "áŽ¤",
  r: "á’",
  s: "á•",
  t: "á–",
  u: "á¬",
  v: "á‰",
  w: "á‡",
  x: "áŒ€",
  y: "áŽ©",
  z: "áš",
  A: "á—",
  B: "á°",
  C: "áˆ",
  D: "áŽ´",
  E: "á‹",
  F: "áŽ¦",
  G: "áŽ¶",
  H: "á‚",
  I: "áŽ¥",
  J: "á ",
  K: "á¦",
  L: "á",
  M: "áŽ·",
  N: "á",
  O: "áŽ§",
  P: "áŽ®",
  Q: "áŽ¤",
  R: "á’",
  S: "á•",
  T: "á–",
  U: "á¬",
  V: "á‰",
  W: "á‡",
  X: "áŒ€",
  Y: "áŽ©",
  Z: "áš",
};
const neonCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "á—©",
  b: "á—·",
  c: "á‘•",
  d: "á—ª",
  e: "E",
  f: "á–´",
  g: "G",
  h: "á•¼",
  i: "I",
  j: "á’",
  k: "K",
  l: "á’ª",
  m: "á—°",
  n: "á‘Ž",
  o: "O",
  p: "á‘­",
  q: "á‘«",
  r: "á–‡",
  s: "á”•",
  t: "T",
  u: "á‘Œ",
  v: "á¯",
  w: "á—¯",
  x: "á™­",
  y: "Y",
  z: "á˜”",
  A: "á—©",
  B: "á—·",
  C: "á‘•",
  D: "á—ª",
  E: "E",
  F: "á–´",
  G: "G",
  H: "á•¼",
  I: "I",
  J: "á’",
  K: "K",
  L: "á’ª",
  M: "á—°",
  N: "á‘Ž",
  O: "O",
  P: "á‘­",
  Q: "á‘«",
  R: "á–‡",
  S: "á”•",
  T: "T",
  U: "á‘Œ",
  V: "á¯",
  W: "á—¯",
  X: "á™­",
  Y: "Y",
  Z: "á˜”",
};
const squiggle3CharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ÇŸ",
  b: "É®",
  c: "Æˆ",
  d: "É–",
  e: "É›",
  f: "Ê„",
  g: "É¢",
  h: "É¦",
  i: "É¨",
  j: "Ê",
  k: "Ó„",
  l: "ÊŸ",
  m: "Ê",
  n: "Õ¼",
  o: "Ö…",
  p: "Ö„",
  q: "Õ¦",
  r: "Ê€",
  s: "Ö†",
  t: "È¶",
  u: "ÊŠ",
  v: "Ê‹",
  w: "Õ¡",
  x: "Ó¼",
  y: "Ê",
  z: "Ê",
  A: "ÇŸ",
  B: "É®",
  C: "Æˆ",
  D: "É–",
  E: "É›",
  F: "Ê„",
  G: "É¢",
  H: "É¦",
  I: "É¨",
  J: "Ê",
  K: "Ó„",
  L: "ÊŸ",
  M: "Ê",
  N: "Õ¼",
  O: "Ö…",
  P: "Ö„",
  Q: "Õ¦",
  R: "Ê€",
  S: "Ö†",
  T: "È¶",
  U: "ÊŠ",
  V: "Ê‹",
  W: "Õ¡",
  X: "Ó¼",
  Y: "Ê",
  Z: "Ê",
};
const monospaceCharMap = {
  0: "ðŸ¶",
  1: "ðŸ·",
  2: "ðŸ¸",
  3: "ðŸ¹",
  4: "ðŸº",
  5: "ðŸ»",
  6: "ðŸ¼",
  7: "ðŸ½",
  8: "ðŸ¾",
  9: "ðŸ¿",
  a: "ðšŠ",
  b: "ðš‹",
  c: "ðšŒ",
  d: "ðš",
  e: "ðšŽ",
  f: "ðš",
  g: "ðš",
  h: "ðš‘",
  i: "ðš’",
  j: "ðš“",
  k: "ðš”",
  l: "ðš•",
  m: "ðš–",
  n: "ðš—",
  o: "ðš˜",
  p: "ðš™",
  q: "ðšš",
  r: "ðš›",
  s: "ðšœ",
  t: "ðš",
  u: "ðšž",
  v: "ðšŸ",
  w: "ðš ",
  x: "ðš¡",
  y: "ðš¢",
  z: "ðš£",
  A: "ð™°",
  B: "ð™±",
  C: "ð™²",
  D: "ð™³",
  E: "ð™´",
  F: "ð™µ",
  G: "ð™¶",
  H: "ð™·",
  I: "ð™¸",
  J: "ð™¹",
  K: "ð™º",
  L: "ð™»",
  M: "ð™¼",
  N: "ð™½",
  O: "ð™¾",
  P: "ð™¿",
  Q: "ðš€",
  R: "ðš",
  S: "ðš‚",
  T: "ðšƒ",
  U: "ðš„",
  V: "ðš…",
  W: "ðš†",
  X: "ðš‡",
  Y: "ðšˆ",
  Z: "ðš‰",
};
const boldItalicCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ð™–",
  b: "ð™—",
  c: "ð™˜",
  d: "ð™™",
  e: "ð™š",
  f: "ð™›",
  g: "ð™œ",
  h: "ð™",
  i: "ð™ž",
  j: "ð™Ÿ",
  k: "ð™ ",
  l: "ð™¡",
  m: "ð™¢",
  n: "ð™£",
  o: "ð™¤",
  p: "ð™¥",
  q: "ð™¦",
  r: "ð™§",
  s: "ð™¨",
  t: "ð™©",
  u: "ð™ª",
  v: "ð™«",
  w: "ð™¬",
  x: "ð™­",
  y: "ð™®",
  z: "ð™¯",
  A: "ð˜¼",
  B: "ð˜½",
  C: "ð˜¾",
  D: "ð˜¿",
  E: "ð™€",
  F: "ð™",
  G: "ð™‚",
  H: "ð™ƒ",
  I: "ð™„",
  J: "ð™…",
  K: "ð™†",
  L: "ð™‡",
  M: "ð™ˆ",
  N: "ð™‰",
  O: "ð™Š",
  P: "ð™‹",
  Q: "ð™Œ",
  R: "ð™",
  S: "ð™Ž",
  T: "ð™",
  U: "ð™",
  V: "ð™‘",
  W: "ð™’",
  X: "ð™“",
  Y: "ð™”",
  Z: "ð™•",
};
const boldCharMap = {
  0: "ðŸŽ",
  1: "ðŸ",
  2: "ðŸ",
  3: "ðŸ‘",
  4: "ðŸ’",
  5: "ðŸ“",
  6: "ðŸ”",
  7: "ðŸ•",
  8: "ðŸ–",
  9: "ðŸ—",
  a: "ðš",
  b: "ð›",
  c: "ðœ",
  d: "ð",
  e: "ðž",
  f: "ðŸ",
  g: "ð ",
  h: "ð¡",
  i: "ð¢",
  j: "ð£",
  k: "ð¤",
  l: "ð¥",
  m: "ð¦",
  n: "ð§",
  o: "ð¨",
  p: "ð©",
  q: "ðª",
  r: "ð«",
  s: "ð¬",
  t: "ð­",
  u: "ð®",
  v: "ð¯",
  w: "ð°",
  x: "ð±",
  y: "ð²",
  z: "ð³",
  A: "ð€",
  B: "ð",
  C: "ð‚",
  D: "ðƒ",
  E: "ð„",
  F: "ð…",
  G: "ð†",
  H: "ð‡",
  I: "ðˆ",
  J: "ð‰",
  K: "ðŠ",
  L: "ð‹",
  M: "ðŒ",
  N: "ð",
  O: "ðŽ",
  P: "ð",
  Q: "ð",
  R: "ð‘",
  S: "ð’",
  T: "ð“",
  U: "ð”",
  V: "ð•",
  W: "ð–",
  X: "ð—",
  Y: "ð˜",
  Z: "ð™",
};
const italicCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ð˜¢",
  b: "ð˜£",
  c: "ð˜¤",
  d: "ð˜¥",
  e: "ð˜¦",
  f: "ð˜§",
  g: "ð˜¨",
  h: "ð˜©",
  i: "ð˜ª",
  j: "ð˜«",
  k: "ð˜¬",
  l: "ð˜­",
  m: "ð˜®",
  n: "ð˜¯",
  o: "ð˜°",
  p: "ð˜±",
  q: "ð˜²",
  r: "ð˜³",
  s: "ð˜´",
  t: "ð˜µ",
  u: "ð˜¶",
  v: "ð˜·",
  w: "ð˜¸",
  x: "ð˜¹",
  y: "ð˜º",
  z: "ð˜»",
  A: "ð˜ˆ",
  B: "ð˜‰",
  C: "ð˜Š",
  D: "ð˜‹",
  E: "ð˜Œ",
  F: "ð˜",
  G: "ð˜Ž",
  H: "ð˜",
  I: "ð˜",
  J: "ð˜‘",
  K: "ð˜’",
  L: "ð˜“",
  M: "ð˜”",
  N: "ð˜•",
  O: "ð˜–",
  P: "ð˜—",
  Q: "ð˜˜",
  R: "ð˜™",
  S: "ð˜š",
  T: "ð˜›",
  U: "ð˜œ",
  V: "ð˜",
  W: "ð˜ž",
  X: "ð˜Ÿ",
  Y: "ð˜ ",
  Z: "ð˜¡",
};
const squiggle2CharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "Î±",
  b: "á‚¦",
  c: "Æˆ",
  d: "Ôƒ",
  e: "Ò½",
  f: "Ï",
  g: "É ",
  h: "Ô‹",
  i: "Î¹",
  j: "Ê",
  k: "Æ™",
  l: "Ê…",
  m: "É±",
  n: "É³",
  o: "Ïƒ",
  p: "Ï",
  q: "Ï™",
  r: "É¾",
  s: "Ê‚",
  t: "Æš",
  u: "Ï…",
  v: "Ê‹",
  w: "É¯",
  x: "x",
  y: "áƒ§",
  z: "È¥",
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  J: "J",
  K: "K",
  L: "L",
  M: "M",
  N: "N",
  O: "O",
  P: "P",
  Q: "Q",
  R: "R",
  S: "S",
  T: "T",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "Z",
};
const currencyCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "â‚³",
  b: "à¸¿",
  c: "â‚µ",
  d: "Ä",
  e: "É†",
  f: "â‚£",
  g: "â‚²",
  h: "â±§",
  i: "Å‚",
  j: "J",
  k: "â‚­",
  l: "â± ",
  m: "â‚¥",
  n: "â‚¦",
  o: "Ã˜",
  p: "â‚±",
  q: "Q",
  r: "â±¤",
  s: "â‚´",
  t: "â‚®",
  u: "É„",
  v: "V",
  w: "â‚©",
  x: "Ó¾",
  y: "ÉŽ",
  z: "â±«",
  A: "â‚³",
  B: "à¸¿",
  C: "â‚µ",
  D: "Ä",
  E: "É†",
  F: "â‚£",
  G: "â‚²",
  H: "â±§",
  I: "Å‚",
  J: "J",
  K: "â‚­",
  L: "â± ",
  M: "â‚¥",
  N: "â‚¦",
  O: "Ã˜",
  P: "â‚±",
  Q: "Q",
  R: "â±¤",
  S: "â‚´",
  T: "â‚®",
  U: "É„",
  V: "V",
  W: "â‚©",
  X: "Ó¾",
  Y: "ÉŽ",
  Z: "â±«",
};
const symbolsCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "Ã¥",
  b: "ÃŸ",
  c: "Â¢",
  d: "Ã",
  e: "Ãª",
  f: "Â£",
  g: "g",
  h: "h",
  i: "Ã¯",
  j: "j",
  k: "k",
  l: "l",
  m: "m",
  n: "Ã±",
  o: "Ã°",
  p: "Ã¾",
  q: "q",
  r: "r",
  s: "Â§",
  t: "â€ ",
  u: "Âµ",
  v: "v",
  w: "w",
  x: "x",
  y: "Â¥",
  z: "z",
  A: "Ã„",
  B: "ÃŸ",
  C: "Ã‡",
  D: "Ã",
  E: "Ãˆ",
  F: "Â£",
  G: "G",
  H: "H",
  I: "ÃŒ",
  J: "J",
  K: "K",
  L: "L",
  M: "M",
  N: "Ã±",
  O: "Ã–",
  P: "Ã¾",
  Q: "Q",
  R: "R",
  S: "Â§",
  T: "â€ ",
  U: "Ãš",
  V: "V",
  W: "W",
  X: "Ã—",
  Y: "Â¥",
  Z: "Z",
};
const greekCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "Î±",
  b: "Ð²",
  c: "Â¢",
  d: "âˆ‚",
  e: "Ñ”",
  f: "Æ’",
  g: "g",
  h: "Ð½",
  i: "Î¹",
  j: "× ",
  k: "Ðº",
  l: "â„“",
  m: "Ð¼",
  n: "Î·",
  o: "Ïƒ",
  p: "Ï",
  q: "q",
  r: "Ñ",
  s: "Ñ•",
  t: "Ñ‚",
  u: "Ï…",
  v: "Î½",
  w: "Ï‰",
  x: "Ï‡",
  y: "Ñƒ",
  z: "z",
  A: "Î±",
  B: "Ð²",
  C: "Â¢",
  D: "âˆ‚",
  E: "Ñ”",
  F: "Æ’",
  G: "g",
  H: "Ð½",
  I: "Î¹",
  J: "× ",
  K: "Ðº",
  L: "â„“",
  M: "Ð¼",
  N: "Î·",
  O: "Ïƒ",
  P: "Ï",
  Q: "q",
  R: "Ñ",
  S: "Ñ•",
  T: "Ñ‚",
  U: "Ï…",
  V: "Î½",
  W: "Ï‰",
  X: "Ï‡",
  Y: "Ñƒ",
  Z: "z",
};
const bentTextCharMap = {
  0: "âŠ˜",
  1: "ðŸ™",
  2: "Ï©",
  3: "Ó ",
  4: "à¥«",
  5: "Æ¼",
  6: "Ï¬",
  7: "7",
  8: "ðŸ ",
  9: "à¥¯",
  a: "Ä…",
  b: "Ò",
  c: "Ã§",
  d: "Õª",
  e: "Ò½",
  f: "Æ’",
  g: "Ö",
  h: "Õ°",
  i: "Ã¬",
  j: "Ê",
  k: "ÒŸ",
  l: "Ó€",
  m: "Ê",
  n: "Õ²",
  o: "Ö…",
  p: "Ö„",
  q: "Õ¦",
  r: "É¾",
  s: "Ê‚",
  t: "Õ§",
  u: "Õ´",
  v: "Ñµ",
  w: "Õ¡",
  x: "Ã—",
  y: "Õ¾",
  z: "Õ€",
  A: "Èº",
  B: "Î²",
  C: "â†»",
  D: "áŽ ",
  E: "Æ",
  F: "Æ‘",
  G: "Æ“",
  H: "Ç¶",
  I: "Ä¯",
  J: "Ù„",
  K: "Ò ",
  L: "êˆ",
  M: "â±®",
  N: "áž ",
  O: "à¶§",
  P: "Ï†",
  Q: "Ò¨",
  R: "à½ ",
  S: "Ïš",
  T: "Í²",
  U: "Ô±",
  V: "á»¼",
  W: "à°š",
  X: "áƒ¯",
  Y: "Ó‹",
  Z: "É€",
};
const upperAnglesCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "Î›",
  b: "B",
  c: "á„ƒ",
  d: "D",
  e: "Î£",
  f: "F",
  g: "G",
  h: "Î‰",
  i: "I",
  j: "J",
  k: "K",
  l: "á„‚",
  m: "M",
  n: "ÐŸ",
  o: "Ó¨",
  p: "P",
  q: "Q",
  r: "Ð¯",
  s: "Æ§",
  t: "Æ¬",
  u: "Ð¦",
  v: "V",
  w: "Ð©",
  x: "X",
  y: "Y",
  z: "Z",
  A: "Î›",
  B: "B",
  C: "á„ƒ",
  D: "D",
  E: "Î£",
  F: "F",
  G: "G",
  H: "Î‰",
  I: "I",
  J: "J",
  K: "K",
  L: "á„‚",
  M: "M",
  N: "ÐŸ",
  O: "Ó¨",
  P: "P",
  Q: "Q",
  R: "Ð¯",
  S: "Æ§",
  T: "Æ¬",
  U: "Ð¦",
  V: "V",
  W: "Ð©",
  X: "X",
  Y: "Y",
  Z: "Z",
};
const subscriptCharMap = {
  0: "â‚€",
  1: "â‚",
  2: "â‚‚",
  3: "â‚ƒ",
  4: "â‚„",
  5: "â‚…",
  6: "â‚†",
  7: "â‚‡",
  8: "â‚ˆ",
  9: "â‚‰",
  a: "â‚",
  b: "b",
  c: "c",
  d: "d",
  e: "â‚‘",
  f: "f",
  g: "g",
  h: "â‚•",
  i: "áµ¢",
  j: "â±¼",
  k: "â‚–",
  l: "â‚—",
  m: "â‚˜",
  n: "â‚™",
  o: "â‚’",
  p: "â‚š",
  q: "q",
  r: "áµ£",
  s: "â‚›",
  t: "â‚œ",
  u: "áµ¤",
  v: "áµ¥",
  w: "w",
  x: "â‚“",
  y: "y",
  z: "z",
  A: "â‚",
  B: "B",
  C: "C",
  D: "D",
  E: "â‚‘",
  F: "F",
  G: "G",
  H: "â‚•",
  I: "áµ¢",
  J: "â±¼",
  K: "â‚–",
  L: "â‚—",
  M: "â‚˜",
  N: "â‚™",
  O: "â‚’",
  P: "â‚š",
  Q: "Q",
  R: "áµ£",
  S: "â‚›",
  T: "â‚œ",
  U: "áµ¤",
  V: "áµ¥",
  W: "W",
  X: "â‚“",
  Y: "Y",
  Z: "Z",
  "+": "â‚Š",
  "-": "â‚‹",
  "=": "â‚Œ",
  "(": "â‚",
  ")": "â‚Ž",
};
const superscriptCharMap = {
  0: "â°",
  1: "Â¹",
  2: "Â²",
  3: "Â³",
  4: "â´",
  5: "âµ",
  6: "â¶",
  7: "â·",
  8: "â¸",
  9: "â¹",
  a: "áµƒ",
  b: "áµ‡",
  c: "á¶œ",
  d: "áµˆ",
  e: "áµ‰",
  f: "á¶ ",
  g: "áµ",
  h: "Ê°",
  i: "â±",
  j: "Ê²",
  k: "áµ",
  l: "Ë¡",
  m: "áµ",
  n: "â¿",
  o: "áµ’",
  p: "áµ–",
  q: "q",
  r: "Ê³",
  s: "Ë¢",
  t: "áµ—",
  u: "áµ˜",
  v: "áµ›",
  w: "Ê·",
  x: "Ë£",
  y: "Ê¸",
  z: "á¶»",
  A: "á´¬",
  B: "á´®",
  C: "á¶œ",
  D: "á´°",
  E: "á´±",
  F: "á¶ ",
  G: "á´³",
  H: "á´´",
  I: "á´µ",
  J: "á´¶",
  K: "á´·",
  L: "á´¸",
  M: "á´¹",
  N: "á´º",
  O: "á´¼",
  P: "á´¾",
  Q: "Q",
  R: "á´¿",
  S: "Ë¢",
  T: "áµ€",
  U: "áµ",
  V: "â±½",
  W: "áµ‚",
  X: "Ë£",
  Y: "Ê¸",
  Z: "á¶»",
  "+": "âº",
  "-": "â»",
  "=": "â¼",
  "(": "â½",
  ")": "â¾",
};
const squiggleCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "à¸„",
  b: "à¹’",
  c: "Ï‚",
  d: "à¹”",
  e: "Ñ”",
  f: "Å¦",
  g: "ï»®",
  h: "Ñ’",
  i: "à¹€",
  j: "×Ÿ",
  k: "Ðº",
  l: "É­",
  m: "à¹“",
  n: "à¸ ",
  o: "à¹",
  p: "×§",
  q: "á»£",
  r: "Ð³",
  s: "à¸£",
  t: "Õ‡",
  u: "à¸¢",
  v: "×©",
  w: "à¸¬",
  x: "×",
  y: "×¥",
  z: "Õ¹",
  A: "à¸„",
  B: "à¹’",
  C: "Ï‚",
  D: "à¹”",
  E: "Ñ”",
  F: "Å¦",
  G: "ï»®",
  H: "Ñ’",
  I: "à¹€",
  J: "×Ÿ",
  K: "Ðº",
  L: "É­",
  M: "à¹“",
  N: "à¸ ",
  O: "à¹",
  P: "×§",
  Q: "á»£",
  R: "Ð³",
  S: "à¸£",
  T: "Õ‡",
  U: "à¸¢",
  V: "×©",
  W: "à¸¬",
  X: "×",
  Y: "×¥",
  Z: "Õ¹",
};
const doubleStruckCharMap = {
  0: "ðŸ˜",
  1: "ðŸ™",
  2: "ðŸš",
  3: "ðŸ›",
  4: "ðŸœ",
  5: "ðŸ",
  6: "ðŸž",
  7: "ðŸŸ",
  8: "ðŸ ",
  9: "ðŸ¡",
  a: "ð•’",
  b: "ð•“",
  c: "ð•”",
  d: "ð••",
  e: "ð•–",
  f: "ð•—",
  g: "ð•˜",
  h: "ð•™",
  i: "ð•š",
  j: "ð•›",
  k: "ð•œ",
  l: "ð•",
  m: "ð•ž",
  n: "ð•Ÿ",
  o: "ð• ",
  p: "ð•¡",
  q: "ð•¢",
  r: "ð•£",
  s: "ð•¤",
  t: "ð•¥",
  u: "ð•¦",
  v: "ð•§",
  w: "ð•¨",
  x: "ð•©",
  y: "ð•ª",
  z: "ð•«",
  A: "ð”¸",
  B: "ð”¹",
  C: "â„‚",
  D: "ð”»",
  E: "ð”¼",
  F: "ð”½",
  G: "ð”¾",
  H: "â„",
  I: "ð•€",
  J: "ð•",
  K: "ð•‚",
  L: "ð•ƒ",
  M: "ð•„",
  N: "â„•",
  O: "ð•†",
  P: "â„™",
  Q: "â„š",
  R: "â„",
  S: "ð•Š",
  T: "ð•‹",
  U: "ð•Œ",
  V: "ð•",
  W: "ð•Ž",
  X: "ð•",
  Y: "ð•",
  Z: "â„¤",
};
const medievalCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ð–†",
  b: "ð–‡",
  c: "ð–ˆ",
  d: "ð–‰",
  e: "ð–Š",
  f: "ð–‹",
  g: "ð–Œ",
  h: "ð–",
  i: "ð–Ž",
  j: "ð–",
  k: "ð–",
  l: "ð–‘",
  m: "ð–’",
  n: "ð–“",
  o: "ð–”",
  p: "ð–•",
  q: "ð––",
  r: "ð–—",
  s: "ð–˜",
  t: "ð–™",
  u: "ð–š",
  v: "ð–›",
  w: "ð–œ",
  x: "ð–",
  y: "ð–ž",
  z: "ð–Ÿ",
  A: "ð•¬",
  B: "ð•­",
  C: "ð•®",
  D: "ð•¯",
  E: "ð•°",
  F: "ð•±",
  G: "ð•²",
  H: "ð•³",
  I: "ð•´",
  J: "ð•µ",
  K: "ð•¶",
  L: "ð•·",
  M: "ð•¸",
  N: "ð•¹",
  O: "ð•º",
  P: "ð•»",
  Q: "ð•¼",
  R: "ð•½",
  S: "ð•¾",
  T: "ð•¿",
  U: "ð–€",
  V: "ð–",
  W: "ð–‚",
  X: "ð–ƒ",
  Y: "ð–„",
  Z: "ð–…",
};
const invertedSquaresCharMap = {
  q: "ðŸ†€",
  w: "ðŸ††",
  e: "ðŸ…´",
  r: "ðŸ†",
  t: "ðŸ†ƒ",
  y: "ðŸ†ˆ",
  u: "ðŸ†„",
  i: "ðŸ…¸",
  o: "ðŸ…¾",
  p: "ðŸ…¿",
  a: "ðŸ…°",
  s: "ðŸ†‚",
  d: "ðŸ…³",
  f: "ðŸ…µ",
  g: "ðŸ…¶",
  h: "ðŸ…·",
  j: "ðŸ…¹",
  k: "ðŸ…º",
  l: "ðŸ…»",
  z: "ðŸ†‰",
  x: "ðŸ†‡",
  c: "ðŸ…²",
  v: "ðŸ†…",
  b: "ðŸ…±",
  n: "ðŸ…½",
  m: "ðŸ…¼",
};
const cursiveCharMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  a: "ð“ª",
  b: "ð“«",
  c: "ð“¬",
  d: "ð“­",
  e: "ð“®",
  f: "ð“¯",
  g: "ð“°",
  h: "ð“±",
  i: "ð“²",
  j: "ð“³",
  k: "ð“´",
  l: "ð“µ",
  m: "ð“¶",
  n: "ð“·",
  o: "ð“¸",
  p: "ð“¹",
  q: "ð“º",
  r: "ð“»",
  s: "ð“¼",
  t: "ð“½",
  u: "ð“¾",
  v: "ð“¿",
  w: "ð”€",
  x: "ð”",
  y: "ð”‚",
  z: "ð”ƒ",
  A: "ð“",
  B: "ð“‘",
  C: "ð“’",
  D: "ð““",
  E: "ð“”",
  F: "ð“•",
  G: "ð“–",
  H: "ð“—",
  I: "ð“˜",
  J: "ð“™",
  K: "ð“š",
  L: "ð“›",
  M: "ð“œ",
  N: "ð“",
  O: "ð“ž",
  P: "ð“Ÿ",
  Q: "ð“ ",
  R: "ð“¡",
  S: "ð“¢",
  T: "ð“£",
  U: "ð“¤",
  V: "ð“¥",
  W: "ð“¦",
  X: "ð“§",
  Y: "ð“¨",
  Z: "ð“©",
};
const oldEnglishCharMap = {
  a: "ð”ž",
  b: "ð”Ÿ",
  c: "ð” ",
  d: "ð”¡",
  e: "ð”¢",
  f: "ð”£",
  g: "ð”¤",
  h: "ð”¥",
  i: "ð”¦",
  j: "ð”§",
  k: "ð”¨",
  l: "ð”©",
  m: "ð”ª",
  n: "ð”«",
  o: "ð”¬",
  p: "ð”­",
  q: "ð”®",
  r: "ð”¯",
  s: "ð”°",
  t: "ð”±",
  u: "ð”²",
  v: "ð”³",
  w: "ð”´",
  x: "ð”µ",
  y: "ð”¶",
  z: "ð”·",
  A: "ð”„",
  B: "ð”…",
  C: "â„­",
  D: "ð”‡",
  E: "ð”ˆ",
  F: "ð”‰",
  G: "ð”Š",
  H: "â„Œ",
  I: "â„‘",
  J: "ð”",
  K: "ð”Ž",
  L: "ð”",
  M: "ð”",
  N: "ð”‘",
  O: "ð”’",
  P: "ð”“",
  Q: "ð””",
  R: "â„œ",
  S: "ð”–",
  T: "ð”—",
  U: "ð”˜",
  V: "ð”™",
  W: "ð”š",
  X: "ð”›",
  Y: "ð”œ",
  Z: "â„¨",
};
const wideTextCharMap = {
  "`": "`",
  1: "ï¼‘",
  2: "ï¼’",
  3: "ï¼“",
  4: "ï¼”",
  5: "ï¼•",
  6: "ï¼–",
  7: "ï¼—",
  8: "ï¼˜",
  9: "ï¼™",
  0: "ï¼",
  "-": "ï¼",
  "=": "ï¼",
  "~": "~",
  "!": "ï¼",
  "@": "ï¼ ",
  "#": "ï¼ƒ",
  $: "ï¼„",
  "%": "ï¼…",
  "^": "^",
  "&": "ï¼†",
  "*": "ï¼Š",
  "(": "ï¼ˆ",
  ")": "ï¼‰",
  _: "_",
  "+": "ï¼‹",
  q: "ï½‘",
  w: "ï½—",
  e: "ï½…",
  r: "ï½’",
  t: "ï½”",
  y: "ï½™",
  u: "ï½•",
  i: "ï½‰",
  o: "ï½",
  p: "ï½",
  "[": "[",
  "]": "]",
  "\\": "\\",
  Q: "ï¼±",
  W: "ï¼·",
  E: "ï¼¥",
  R: "ï¼²",
  T: "ï¼´",
  Y: "ï¼¹",
  U: "ï¼µ",
  I: "ï¼©",
  O: "ï¼¯",
  P: "ï¼°",
  "{": "{",
  "}": "}",
  "|": "|",
  a: "ï½",
  s: "ï½“",
  d: "ï½„",
  f: "ï½†",
  g: "ï½‡",
  h: "ï½ˆ",
  j: "ï½Š",
  k: "ï½‹",
  l: "ï½Œ",
  ";": "ï¼›",
  "'": "ï¼‡",
  A: "ï¼¡",
  S: "ï¼³",
  D: "ï¼¤",
  F: "ï¼¦",
  G: "ï¼§",
  H: "ï¼¨",
  J: "ï¼ª",
  K: "ï¼«",
  L: "ï¼¬",
  ":": "ï¼š",
  '"': '"',
  z: "ï½š",
  x: "ï½˜",
  c: "ï½ƒ",
  v: "ï½–",
  b: "ï½‚",
  n: "ï½Ž",
  m: "ï½",
  ",": "ï¼Œ",
  ".": "ï¼Ž",
  "/": "ï¼",
  Z: "ï¼º",
  X: "ï¼¸",
  C: "ï¼£",
  V: "ï¼¶",
  B: "ï¼¢",
  N: "ï¼®",
  M: "ï¼­",
  "<": "<",
  ">": ">",
  "?": "ï¼Ÿ",
};

// Lunicode.js
// from lunicode.com
// on GitHub: https://github.com/combatwombat/Lunicode.js
// Copyright Â© 2012 Robert Gerlach - robsite.net
function Lunicode() {
  this.tools = {
    flip: {
      init: function () {
        for (i in this.map) this.map[this.map[i]] = i;
      },
      encode: function (i) {
        for (var r, t = [], o = 0, h = i.length; h > o; o++)
          (r = i.charAt(o)),
            o > 0 && ("Ì¤" == r || "Ì—" == r || "Ì–" == r || "Ì®" == r)
              ? ((r = this.map[i.charAt(o - 1) + r]), t.pop())
              : ((r = this.map[r]),
                "undefined" == typeof r && (r = i.charAt(o))),
            t.push(r);
        return t.reverse().join("");
      },
      decode: function (i) {
        for (var r, t = [], o = 0, h = i.length; h > o; o++)
          (r = i.charAt(o)),
            o > 0 && ("Ì¤" == r || "Ì—" == r || "Ì–" == r || "Ì®" == r)
              ? ((r = this.map[i.charAt(o - 1) + r]), t.pop())
              : ((r = this.map[r]),
                "undefined" == typeof r && (r = i.charAt(o))),
            t.push(r);
        return t.reverse().join("");
      },
      map: {
        a: "É",
        b: "q",
        c: "É”",
        d: "p",
        e: "Ç",
        f: "ÉŸ",
        g: "É“",
        h: "É¥",
        i: "Ä±",
        j: "É¾",
        k: "Êž",
        l: "l",
        m: "É¯",
        n: "u",
        r: "É¹",
        t: "Ê‡",
        v: "ÊŒ",
        w: "Ê",
        y: "ÊŽ",
        A: "âˆ€",
        B: "á™ ",
        C: "Æ†",
        D: "á—¡",
        E: "ÆŽ",
        F: "â„²",
        G: "â…",
        J: "Å¿",
        K: "â‹Š",
        L: "Ë¥",
        M: "W",
        P: "Ô€",
        Q: "ÎŒ",
        R: "á´š",
        T: "âŠ¥",
        U: "âˆ©",
        V: "Î›",
        Y: "â…„",
        1: "â‡‚",
        2: "á„…",
        3: "Æ",
        4: "ã„£",
        5: "ÞŽ",
        6: "9",
        7: "ã„¥",
        "&": "â…‹",
        ".": "Ë™",
        '"': "â€ž",
        ";": "Ø›",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "Â¿",
        "!": "Â¡",
        "'": ",",
        "<": ">",
        "â€¾": "_",
        "Â¯": "_",
        "â€¿": "â€",
        "â…": "â†",
        "âˆ´": "âˆµ",
        "\r": "\n",
        ÃŸ: "á™ ",
        "Ìˆ": "Ì¤",
        Ã¤: "ÉÌ¤",
        Ã¶: "oÌ¤",
        Ã¼: "nÌ¤",
        Ã„: "âˆ€Ì¤",
        Ã–: "OÌ¤",
        Ãœ: "âˆ©Ì¤",
        "Â´": " Ì—",
        Ã©: "ÇÌ—",
        Ã¡: "ÉÌ—",
        Ã³: "oÌ—",
        Ãº: "nÌ—",
        Ã‰: "ÆŽÌ—",
        Ã: "âˆ€Ì—",
        Ã“: "OÌ—",
        Ãš: "âˆ©Ì—",
        "`": " Ì–",
        Ã¨: "ÇÌ–",
        Ã : "ÉÌ–",
        Ã²: "oÌ–",
        Ã¹: "nÌ–",
        Ãˆ: "ÆŽÌ–",
        Ã€: "âˆ€Ì–",
        Ã’: "OÌ–",
        Ã™: "âˆ©Ì–",
        "^": " Ì®",
        Ãª: "ÇÌ®",
        Ã¢: "ÉÌ®",
        Ã´: "oÌ®",
        Ã»: "nÌ®",
        ÃŠ: "ÆŽÌ®",
        Ã‚: "âˆ€Ì®",
        Ã”: "OÌ®",
        Ã›: "âˆ©Ì®",
      },
    },
    mirror: {
      init: function () {
        for (i in this.map) this.map[this.map[i]] = i;
      },
      encode: function (i) {
        for (var r, t = [], o = [], h = 0, n = i.length; n > h; h++)
          (r = i.charAt(h)),
            h > 0 && ("Ìˆ" == r || "Ì€" == r || "Ì" == r || "Ì‚" == r)
              ? ((r = this.map[i.charAt(h - 1) + r]), t.pop())
              : ((r = this.map[r]),
                "undefined" == typeof r && (r = i.charAt(h))),
            "\n" == r ? (o.push(t.reverse().join("")), (t = [])) : t.push(r);
        return o.push(t.reverse().join("")), o.join("\n");
      },
      decode: function (i) {
        for (var r, t = [], o = [], h = 0, n = i.length; n > h; h++)
          (r = i.charAt(h)),
            h > 0 && ("Ìˆ" == r || "Ì€" == r || "Ì" == r || "Ì‚" == r)
              ? ((r = this.map[i.charAt(h - 1) + r]), t.pop())
              : ((r = this.map[r]),
                "undefined" == typeof r && (r = i.charAt(h))),
            "\n" == r ? (o.push(t.reverse().join("")), (t = [])) : t.push(r);
        return o.push(t.reverse().join("")), o.join("\n");
      },
      map: {
        a: "É’",
        b: "d",
        c: "É”",
        e: "É˜",
        f: "áŽ¸",
        g: "Ç«",
        h: "Êœ",
        j: "êž",
        k: "Êž",
        l: "|",
        n: "á´Ž",
        p: "q",
        r: "É¿",
        s: "ê™…",
        t: "Æš",
        y: "Ê",
        z: "Æ¹",
        B: "á™ ",
        C: "Æ†",
        D: "á—¡",
        E: "ÆŽ",
        F: "êŸ»",
        G: "áŽ®",
        J: "á‚±",
        K: "â‹Š",
        L: "â…ƒ",
        N: "Í¶",
        P: "êŸ¼",
        Q: "á»Œ",
        R: "Ð¯",
        S: "ê™„",
        Z: "Æ¸",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        "&": "",
        ";": "",
        "[": "]",
        "(": ")",
        "{": "}",
        "?": "â¸®",
        "<": ">",
        Ã¤: "É’Ìˆ",
        ÃŸ: "á™ ",
        "Â´": "`",
        Ã©: "É˜Ì€",
        Ã¡: "É’Ì€",
        Ã³: "Ã²",
        Ãº: "Ã¹",
        Ã‰: "ÆŽÌ€",
        Ã: "Ã€",
        Ã“: "Ã’",
        Ãš: "Ã™",
        "`": "Â´",
        Ã¨: "É˜Ì",
        Ã : "É’Ì",
        Ãˆ: "ÆŽÌ",
        Ãª: "É˜Ì‚",
        Ã¢: "É’Ì‚",
        ÃŠ: "ÆŽÌ‚",
        Ã˜: "á´“",
        Ã¸: "á´“",
      },
    },
    creepify: {
      init: function () {
        for (var i = 768; 789 >= i; i++)
          this.diacriticsTop.push(String.fromCharCode(i));
        for (var i = 790; 819 >= i; i++)
          794 != i &&
            795 != i &&
            this.diacriticsBottom.push(String.fromCharCode(i));
        this.diacriticsTop.push(String.fromCharCode(794)),
          this.diacriticsTop.push(String.fromCharCode(795));
        for (var i = 820; 824 >= i; i++)
          this.diacriticsMiddle.push(String.fromCharCode(i));
        for (var i = 825; 828 >= i; i++)
          this.diacriticsBottom.push(String.fromCharCode(i));
        for (var i = 829; 836 >= i; i++)
          this.diacriticsTop.push(String.fromCharCode(i));
        this.diacriticsTop.push(String.fromCharCode(836)),
          this.diacriticsBottom.push(String.fromCharCode(837)),
          this.diacriticsTop.push(String.fromCharCode(838)),
          this.diacriticsBottom.push(String.fromCharCode(839)),
          this.diacriticsBottom.push(String.fromCharCode(840)),
          this.diacriticsBottom.push(String.fromCharCode(841)),
          this.diacriticsTop.push(String.fromCharCode(842)),
          this.diacriticsTop.push(String.fromCharCode(843)),
          this.diacriticsTop.push(String.fromCharCode(844)),
          this.diacriticsBottom.push(String.fromCharCode(845)),
          this.diacriticsBottom.push(String.fromCharCode(846)),
          this.diacriticsTop.push(String.fromCharCode(848)),
          this.diacriticsTop.push(String.fromCharCode(849)),
          this.diacriticsTop.push(String.fromCharCode(850)),
          this.diacriticsBottom.push(String.fromCharCode(851)),
          this.diacriticsBottom.push(String.fromCharCode(852)),
          this.diacriticsBottom.push(String.fromCharCode(853)),
          this.diacriticsBottom.push(String.fromCharCode(854)),
          this.diacriticsTop.push(String.fromCharCode(855)),
          this.diacriticsTop.push(String.fromCharCode(856)),
          this.diacriticsBottom.push(String.fromCharCode(857)),
          this.diacriticsBottom.push(String.fromCharCode(858)),
          this.diacriticsTop.push(String.fromCharCode(859)),
          this.diacriticsBottom.push(String.fromCharCode(860)),
          this.diacriticsTop.push(String.fromCharCode(861)),
          this.diacriticsTop.push(String.fromCharCode(861)),
          this.diacriticsBottom.push(String.fromCharCode(863)),
          this.diacriticsTop.push(String.fromCharCode(864)),
          this.diacriticsTop.push(String.fromCharCode(865));
      },
      encode: function (r) {
        var t,
          o = "";
        for (i in r) {
          if (
            ((t = r[i]),
              this.options.middle &&
              (t += this.diacriticsMiddle[
                Math.floor(Math.random() * this.diacriticsMiddle.length)
              ]),
              this.options.top)
          )
            for (
              var h = this.diacriticsTop.length - 1,
              n = 0,
              a =
                this.options.maxHeight -
                Math.random() *
                ((this.options.randomization / 100) *
                  this.options.maxHeight);
              a > n;
              n++
            )
              t += this.diacriticsTop[Math.floor(Math.random() * h)];
          if (this.options.bottom)
            for (
              var s = this.diacriticsBottom.length - 1,
              n = 0,
              a =
                this.options.maxHeight -
                Math.random() *
                ((this.options.randomization / 100) *
                  this.options.maxHeight);
              a > n;
              n++
            )
              t += this.diacriticsBottom[Math.floor(Math.random() * s)];
          o += t;
        }
        return o;
      },
      decode: function (r) {
        var t,
          o = "";
        for (i in r)
          (t = r[i].charCodeAt(0)), (768 > t || t > 865) && (o += r[i]);
        return o;
      },
      diacriticsTop: [],
      diacriticsMiddle: [],
      diacriticsBottom: [],
      options: {
        top: !0,
        middle: !0,
        bottom: !0,
        maxHeight: 15,
        randomization: 100,
      },
    },
    bubbles: {
      init: function () {
        for (var i = 49; 57 >= i; i++)
          this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9263);
        this.map[0] = "â“ª";
        for (var i = 65; 90 >= i; i++)
          this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9333);
        for (var i = 97; 122 >= i; i++)
          this.map[String.fromCharCode(i)] = String.fromCharCode(i + 9327);
        for (i in this.map) this.mapInverse[this.map[i]] = i;
      },
      encode: function (r) {
        var t,
          o = "",
          h = !0;
        for (i in r)
          (t = this.map[r[i]]),
            "undefined" == typeof t &&
            (r[i].charCodeAt(0) >= 33
              ? ((t = r[i] + String.fromCharCode(8413)),
                h ||
                (t =
                  String.fromCharCode(8239) +
                  String.fromCharCode(160) +
                  String.fromCharCode(160) +
                  String.fromCharCode(8239) +
                  t))
              : (t = r[i])),
            (o += t),
            (h = "\n" == t);
        return o;
      },
      decode: function (r) {
        var t,
          o = "",
          h = "";
        for (i in r)
          (t = this.mapInverse[r[i]]),
            (o += "undefined" == typeof t ? r[i] : t);
        for (i in o)
          (t = o[i].charCodeAt(0)),
            160 != t && 8239 != t && 8413 != t && (h += o[i]);
        return h;
      },
      map: {},
      mapInverse: {},
    },
    squares: {
      init: function () { },
      encode: function (r) {
        var t,
          o = "",
          h = !0;
        for (i in r)
          r[i].charCodeAt(0) >= 33
            ? ((t = r[i] + String.fromCharCode(8414)),
              h ||
              (t =
                String.fromCharCode(8239) +
                String.fromCharCode(160) +
                String.fromCharCode(160) +
                String.fromCharCode(8239) +
                t))
            : (t = r[i]),
            (o += t),
            (h = "\n" == t);
        return o;
      },
      decode: function (r) {
        var t,
          o = "";
        for (i in r)
          (t = r[i].charCodeAt(0)),
            160 != t && 8239 != t && 8414 != t && (o += r[i]);
        return o;
      },
    },
    roundsquares: {
      init: function () { },
      encode: function (r) {
        var t,
          o = "",
          h = !0;
        for (i in r)
          r[i].charCodeAt(0) >= 33
            ? ((t = r[i] + String.fromCharCode(8419)),
              h ||
              (t =
                String.fromCharCode(160) +
                String.fromCharCode(160) +
                String.fromCharCode(160) +
                t))
            : (t = r[i]),
            (o += t),
            (h = "\n" == t);
        return o;
      },
      decode: function (r) {
        var t,
          o = "";
        for (i in r)
          (t = r[i].charCodeAt(0)),
            160 != t && 8239 != t && 8419 != t && (o += r[i]);
        return o;
      },
    },
    bent: {
      init: function () {
        for (i in this.map) this.map[this.map[i]] = i;
      },
      encode: function (i) {
        for (var r, t = "", o = 0, h = i.length; h > o; o++)
          (r = this.map[i.charAt(o)]),
            "undefined" == typeof r && (r = i.charAt(o)),
            (t += r);
        return t;
      },
      decode: function (i) {
        for (var r, t = "", o = 0, h = i.length; h > o; o++)
          (r = this.map[i.charAt(o)]),
            "undefined" == typeof r && (r = i.charAt(o)),
            (t += r);
        return t;
      },
      map: {
        a: "Ä…",
        b: "Ò",
        c: "Ã§",
        d: "Õª",
        e: "Ò½",
        f: "Æ’",
        g: "Ö",
        h: "Õ°",
        i: "Ã¬",
        j: "Ê",
        k: "ÒŸ",
        l: "Ó€",
        m: "Ê",
        n: "Õ²",
        o: "Ö…",
        p: "Ö„",
        q: "Õ¦",
        r: "É¾",
        s: "Ê‚",
        t: "Õ§",
        u: "Õ´",
        v: "Ñµ",
        w: "Õ¡",
        x: "Ã—",
        y: "Õ¾",
        z: "Õ€",
        A: "Èº",
        B: "Î²",
        C: "â†»",
        D: "áŽ ",
        E: "Æ",
        F: "Æ‘",
        G: "Æ“",
        H: "Ç¶",
        I: "Ä¯",
        J: "Ù„",
        K: "Ò ",
        L: "êˆ",
        M: "â±®",
        N: "áž ",
        O: "à¶§",
        P: "Ï†",
        Q: "Ò¨",
        R: "à½ ",
        S: "Ïš",
        T: "Í²",
        U: "Ô±",
        V: "á»¼",
        W: "à°š",
        X: "áƒ¯",
        Y: "Ó‹",
        Z: "É€",
        0: "âŠ˜",
        1: "ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½",
        2: "Ï©",
        3: "Ó ",
        4: "à¥«",
        5: "Æ¼",
        6: "Ï¬",
        7: "7",
        8: "ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½",
        9: "à¥¯",
        "&": "â…‹",
        "(": "{",
        ")": "}",
        "{": "(",
        "}": ")",
        Ã¤: "Ä…Ìˆ",
        Ã¶: "Ö…Ìˆ",
        Ã¼: "Õ´Ìˆ",
        Ã„: "ÈºÌˆ",
        Ã–: "à¶§Ìˆ",
        Ãœ: "Ô±Ìˆ",
        Ã©: "Ò½Ì",
        Ã¡: "Ä…Ì",
        Ã³: "Ö…Ì",
        Ãº: "Õ´Ì",
        Ã‰: "ÆÌ",
        Ã: "ÈºÌ",
        Ã“: "à¶§Ì",
        Ãš: "Ô±Ì",
        Ã¨: "Ò½Ì€",
        Ã : "Ä…Ì€",
        Ã²: "Ö…Ì€",
        Ã¹: "Õ´Ì€",
        Ãˆ: "ÆÌ€",
        Ã€: "ÈºÌ€",
        Ã’: "à¶§Ì€",
        Ã™: "Ô±Ì€",
        Ãª: "Ò½Ì‚",
        Ã¢: "Ä…Ì‚",
        Ã´: "Ö…Ì‚",
        Ã»: "Õ´Ì‚",
        ÃŠ: "ÆÌ‚",
        Ã‚: "ÈºÌ‚",
        Ã”: "à¶§Ì‚",
        Ã›: "Ô±Ì‚",
      },
    },
    tiny: {
      init: function () {
        for (i in this.map) this.map[this.map[i]] = i;
      },
      encode: function (i) {
        var r,
          t = "";
        i = i.toUpperCase();
        for (var o = 0, h = i.length; h > o; o++)
          (r = this.map[i.charAt(o)]),
            "undefined" == typeof r && (r = i.charAt(o)),
            (t += r);
        return t;
      },
      decode: function (i) {
        for (var r, t = "", o = 0, h = i.length; h > o; o++)
          (r = this.map[i.charAt(o)]),
            "undefined" == typeof r && (r = i.charAt(o)),
            (t += r);
        return t;
      },
      map: {
        A: "á´€",
        B: "Ê™",
        C: "á´„",
        D: "á´…",
        E: "á´‡",
        F: "êœ°",
        G: "É¢",
        H: "Êœ",
        I: "Éª",
        J: "á´Š",
        K: "á´‹",
        L: "ÊŸ",
        M: "á´",
        N: "É´",
        O: "á´",
        P: "á´˜",
        Q: "Q",
        R: "Ê€",
        S: "êœ±",
        T: "á´›",
        U: "á´œ",
        V: "á´ ",
        W: "á´¡",
        X: "x",
        Y: "Ê",
        Z: "á´¢",
      },
    },
  };
  for (i in this.tools) this.tools[i].init();
  this.getHTML = function (i) {
    for (var r, t = "", o = !0, h = 0, n = 0, a = 0, s = i.length; s > a; a++)
      (r = i.charCodeAt(a)),
        10 == r || 13 == r
          ? ((t += "<br>\n"), (o = !0))
          : 32 == r
            ? o
              ? ((t += " "), (o = !1))
              : ((t += " "), (o = !0))
            : (r >= 55296 && 56319 >= r
              ? ((h = r), (n = 0))
              : h > 0
                ? (r >= 56320 &&
                  57343 >= r &&
                  (n = 1024 * (h - 55296) + (r - 56320) + 65536),
                  (h = 0))
                : (n = r),
              0 != n && ((t += "&#x" + n.toString(16) + ";"), (o = !0)));
    return t;
  };
}

// CUTE TEXT:
function cuteText(text) {
  if (text.trim() === "") return "";
  qi = -1;
  var bounds = boundingString(Math.floor(Math.random() * 2) + 1);
  return (
    bounds +
    "  ðŸŽ€  " +
    text
      .split(/([!?.]+)/gi)
      .map(cuteSentence)
      .join("") +
    "  ðŸŽ€  " +
    esrever.reverse(bounds)
  );
}
function cuteSentence(sentence) {
  return sentence
    .split(/([\s,]+)/gi)
    .map(cuteWord)
    .join("");
}
function cuteWord(word) {
  //remember to handle exclamations, empty strings, commas etc. etc.!!
  if (word === "" || /[[!?.\s,]+]/gi.test(word)) return word;
  //TODO: random turn o's into flowers, turn quotes into unicode and ! and ?
  word = roundReplace(word);
  word = punctReplace(word);
  word = emojiReplace(word);
  return scriptify(word);
}
var qi = -1;
var qa = ["â", "âž"];
function quotes() {
  qi++;
  if (qi === 2) qi = 0;
  return qa[qi];
}
function punctReplace(word) {
  return word
    .split("")
    .map(function (a) {
      if (a === "!") return randomElement(["â£", "â¢"]);
      else if (a === "?") return randomElement(["Â¿", "?"]);
      else if (a === '"') return quotes();
      else return a;
    })
    .join("");
}
function emojiReplace(word) {
  return word
    .replace(":)", randomElement(emoji[":)"]))
    .replace("(:", randomElement(emoji[":)"]))
    .replace("^^", randomElement(emoji["^^"]))
    .replace(":P", randomElement(emoji[":p"]))
    .replace(":p", randomElement(emoji[":p"]))
    .replace(":D", randomElement(emoji[":D"]))
    .replace("<3", randomElement(emoji["<3"]))
    .replace("(y)", randomElement(emoji["(y)"]))
    .replace("(Y)", randomElement(emoji["(y)"]));
}
function roundReplace(text) {
  return text
    .split("")
    .map(function (a) {
      if (a.toLowerCase() === "o" || a === "0") {
        return randomElement(round);
      } else {
        return a;
      }
    })
    .join("");
}
var emoji = {
  ":)": [
    "Ù©(Ë˜â—¡Ë˜)Û¶",
    "(â€¢â—¡â€¢)",
    "(É”â—”â€¿â—”)É”",
    "â€â—•â€¿â—•â€",
    "(ï½¡â—•â€¿â—•ï½¡)",
    "â—â€¿â—",
    "â—•â€¿â—•",
    "ðŸ˜",
    "ãƒ„",
    "(âœ¿ãƒ˜á´¥ãƒ˜)",
    "ðŸŒ˜â€¿ðŸŒ˜",
    "(ã¥ï½¡â—•â€¿â€¿â—•ï½¡)ã¥",
    "(/â—”â—¡â—”)/",
    "s(^â€¿^)-b",
    "(äººâ—•â€¿â—•)",
    "(âœ¿â•¹â—¡â•¹)",
    "â—”â—¡â—”",
  ],
  "^^": [
    "(^â–½^)",
    "(âœ¿^â–½^)",
    "áµ”âŒ£áµ”",
    "áµ”á´¥áµ”",
    "(â‰§â—¡â‰¦)",
    "^ã……^",
    "^ã…‚^",
    "(âŒ’â€¿âŒ’)",
    "â— â—¡â— ",
    "â€â€¿â€",
    "",
  ],
  ":p": [":Ãž", ""],
  ":D": ["(ï¾‰â—•ãƒ®â—•)ï¾‰*:ï½¥ï¾Ÿâœ§", "(âœ¿â—•á—œâ—•)â”â™«.*ï½¥ï½¡ï¾Ÿ", "á••(á›)á•—"],
  "<3": [
    "â™¡",
    "â¤",
    "â™¥",
    "â¥",
    "ðŸ’˜",
    "ðŸ’™",
    "ðŸ’—",
    "ðŸ’–",
    "ðŸ’•",
    "ðŸ’“",
    "ðŸ’ž",
    "ðŸ’",
    "ðŸ’Ÿ",
  ],
  "(y)": ["ðŸ‘", "ðŸ‘Œ"],
};
var round = [
  "â",
  "ðŸŒº",
  "â€",
  "ðŸ’®",
  "ðŸµ",
  "ðŸŒ¸",
  "â˜¯",
  "ðŸ˜",
  "â™¡",
  "ðŸ©",
  "ðŸ¬",
  "ðŸ’™",
  "ðŸŒž",
  "ðŸ’",
  "ðŸª",
  "â¤",
  "ðŸ’—",
  "ðŸ‘",
  "ðŸ’ž",
];
var food = [
  "ðŸ¬",
  "ðŸ­",
  "ðŸ’",
  "ðŸŽ",
  "ðŸ‰",
  "ðŸ‡",
  "ðŸ“",
  "ðŸŒ",
  "ðŸ‘",
  "ðŸ°",
  "ðŸŽ‚",
  "ðŸ©",
  "ðŸª",
  "ðŸ§",
  "ðŸ¦",
  "ðŸ«",
  "ðŸ¡",
];
var flowers = [
  "âœ¿",
  "âš˜",
  "â¦",
  "â§",
  "âœ¾",
  "â",
  "â€",
  "ðŸ’",
  "ðŸŒ¸",
  "ðŸ’®",
  "ðŸµ",
  "ðŸŒ¹",
  "ðŸŒº",
  "ðŸŒ»",
  "ðŸŒ·",
  "â˜˜",
  "ðŸŒ±",
  "ðŸŒ²",
  "ðŸŒ³",
  "ðŸŒ´",
  "ðŸŒ¿",
  "ðŸ‚",
];
var twinkles = [
  "âš›",
  "ðŸŒŒ",
  "ðŸŒ ",
  "*",
  ":",
  "ï½¡",
  "ï½¥ï¾Ÿ",
  "âœ§",
  "âœ®",
  "â˜…",
  "âœ©",
  "â‹†",
  ".",
  "Â°",
  "`",
  "âœ´",
  "ï½¡",
  "âœ´",
  "â‹†",
  "âœ³",
  "âœ¶",
  "âœ·",
  "âˆ",
];
var animals = [
  "ðŸ¯",
  "ðŸŽ",
  "ðŸ–",
  "ðŸ·",
  "ðŸ",
  "ðŸ‘",
  "ðŸ",
  "ðŸ«",
  "ðŸ˜",
  "ðŸ­",
  "ðŸ",
  "ðŸ€",
  "ðŸ¹",
  "ðŸ°",
  "ðŸ‡",
  "ðŸ¿",
  "ðŸ»",
  "ðŸ¨",
  "ðŸ¼",
  "ðŸ¾",
  "ðŸ”",
  "ðŸ“",
  "ðŸ£",
  "ðŸ¤",
  "ðŸ¥",
  "ðŸ¦",
  "ðŸ§",
  "ðŸ•Š",
  "ðŸ¸",
  "ðŸ¢",
  "ðŸ³",
  "ðŸ‹",
  "ðŸ¬",
  "ðŸŸ",
  "ðŸ ",
  "ðŸ¡",
  "ðŸ™",
  "ðŸš",
  "ðŸŒ",
  "ðŸž",
];
var plants = [
  "âœ¿",
  "âš˜",
  "â¦",
  "â§",
  "âœ¾",
  "â",
  "â€",
  "ðŸ’",
  "ðŸŒ¸",
  "ðŸ’®",
  "ðŸµ",
  "ðŸŒ¹",
  "ðŸŒº",
  "ðŸŒ»",
  "ðŸŒ·",
  "â˜˜",
  "ðŸŒ±",
  "ðŸŒ²",
  "ðŸŒ³",
  "ðŸŒ´",
  "ðŸŒ¿",
  "ðŸ‚",
];
var misc = [
  "ðŸŒŒ",
  "ðŸŒ ",
  "ðŸŽ‰",
  "ðŸŽŠ",
  "ðŸŽˆ",
  "ðŸ’Œ",
  "ðŸŽŽ",
  "ðŸŽ",
  "ðŸŽ€",
  "ðŸ•¯",
  "ðŸ”®",
  "ðŸ›€",
  "ðŸŽ–",
  "ðŸ†",
  "ðŸ…",
  "ðŸ‘‘",
  "ðŸ’",
  "ðŸ‘¶",
  "ðŸ‘¼",
  "ðŸ‘¸",
  "ðŸ‘¯",
  "ðŸ‘’",
  "ðŸ‘»",
];
var music = ["â™«", "â™¬", "â™ª", "â™©", "Â°", "ï½¡", "âœ§", "ðŸŽ»", "ðŸŽº", "ðŸŽ¸", "ðŸŽ·", "ðŸ“¯"];

var flourish = [
  "â€¢?((Â¯Â°Â·._.â€¢ ",
  "Ä±llÄ±llÄ± ",
  "Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸Â¸,Ã¸Â¤ÂºÂ° ",
  "Â°Â°Â°Â·.Â°Â·..Â·Â°Â¯Â°Â·._.Â· ",
  "â€¢Â´Â¯`â€¢. ",
  "Ã—ÂºÂ°â€Ëœ`â€Â°ÂºÃ— ",
  "â€¢]â€¢â€¢Â´ÂºÂ´â€¢Â» ",
  "]|I{â€¢------Â» ",
  "Â§.â€¢Â´Â¨'Â°Ã·â€¢..Ã— ",
  "â€¢Â°Â¯`â€¢â€¢ ",
  "(Â¯`Â·.Â¸Â¸.Â·Â´Â¯`Â·.Â¸Â¸.-> ",
  "*Â´Â¯`*.Â¸Â¸.*Â´Â¯`* ",
  "(Â¯`Â·.Â¸Â¸.-> Â°Âº ",
  "Â°Â·.Â¸.Â·Â°Â¯Â°Â·.Â¸.Â·Â°Â¯Â°Â·.Â¸.-> ",
  "â€¢._.â€¢â€¢Â´Â¯``â€¢.Â¸Â¸.â€¢` ",
  "Â¸â€ž.-â€¢~Â¹Â°â€Ë†ËœÂ¨ ",
  "(Â¯Â´â€¢._.â€¢ ",
  "â€¢â€¢Â¤(`Ã—",
  "â€¢Â´Â¯`â€¢Â» ",
  "`â€¢.,Â¸Â¸,.â€¢Â´Â¯ ",
  "Â¸,Ã¸Â¤ÂºÂ°`Â°ÂºÂ¤Ã¸,Â¸ ",
  ".o0Ã—XÃ—0o. ",
  ",-*'^'~*-.,_,.-*~ ",
  "`â€¢.Â¸Â¸.â€¢Â´Â´Â¯`â€¢â€¢._.â€¢ ",
  "â€”(â€¢â€¢Ã·",
  "Â¤Â¸Â¸.â€¢Â´Â¯`â€¢Â¸Â¸.â€¢..>> ",
  "â€¢â€¢.â€¢Â´Â¯`â€¢.â€¢â€¢ ",
  ".â€¢Â°Â¤*(Â¯`â˜…Â´Â¯)*Â¤Â° ",
  "à¹‘Ûžà¹‘,Â¸Â¸,Ã¸Â¤ÂºÂ°`Â°à¹‘Û© ",
  "-æ¼«~*'Â¨Â¯Â¨'*Â·èˆž~ ",
  "â˜…Â·.Â·Â´Â¯`Â·.Â·â˜… ",
  "â– â–‚ â–„ â–… â–† â–‡ â–ˆ ",
  "â–€â–„â–€â–„â–€â–„ ",
  "â–Œâ”‚â–ˆâ•‘â–Œâ•‘â–Œâ•‘ ",
];

function boundingString(n) {
  return randomElement([
    foodString,
    twinkleString,
    animalString,
    flourishString,
  ])(n);
}
function foodString(n) {
  return new Array(n + 1)
    .join("0")
    .split("")
    .map(function (a) {
      return randomElement(food);
    })
    .join(" â‹† ");
}
function twinkleString(n) {
  return new Array(n + 1)
    .join("0")
    .split("")
    .map(function () {
      return randomElement(twinkles);
    })
    .join("");
}
function animalString(n) {
  return new Array(n + 1)
    .join("0")
    .split("")
    .map(function (a) {
      return randomElement(animals);
    })
    .join(" â‹† ");
}
function flourishString(n) {
  return randomElement(flourish);
}
function scriptify(text) {
  var map = {
    0: "ðŸ¢",
    1: "ðŸ£",
    2: "ðŸ¤",
    3: "ðŸ¥",
    4: "ðŸ¦",
    5: "ðŸ§",
    6: "ðŸ¨",
    7: "ðŸ©",
    8: "ðŸª",
    9: "ðŸ«",
    a: "ð’¶",
    b: "ð’·",
    c: "ð’¸",
    d: "ð’¹",
    e: "ð‘’",
    f: "ð’»",
    g: "ð‘”",
    h: "ð’½",
    i: "ð’¾",
    j: "ð’¿",
    k: "ð“€",
    l: "ð“",
    m: "ð“‚",
    n: "ð“ƒ",
    o: "ð‘œ",
    p: "ð“…",
    q: "ð“†",
    r: "ð“‡",
    s: "ð“ˆ",
    t: "ð“‰",
    u: "ð“Š",
    v: "ð“‹",
    w: "ð“Œ",
    x: "ð“",
    y: "ð“Ž",
    z: "ð“",
    A: "ð’œ",
    B: "ðµ",
    C: "ð’ž",
    D: "ð’Ÿ",
    E: "ð¸",
    F: "ð¹",
    G: "ð’¢",
    H: "ð»",
    I: "ð¼",
    J: "ð’¥",
    K: "ð’¦",
    L: "ð¿",
    M: "ð‘€",
    N: "ð’©",
    O: "ð’ª",
    P: "ð’«",
    Q: "ð’¬",
    R: "ð‘…",
    S: "ð’®",
    T: "ð’¯",
    U: "ð’°",
    V: "ð’±",
    W: "ð’²",
    X: "ð’³",
    Y: "ð’´",
    Z: "ð’µ",
  };
  var charArray = text.split("");
  for (var i = 0; i < charArray.length; i++) {
    if (map[charArray[i].toLowerCase()]) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}
function shuffleArray(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function randomElement(a) {
  return a[Math.floor(Math.random() * a.length)];
}
//https://github.com/mathiasbynens/esrever
!(function (e) {
  var o = "object" == typeof exports && exports,
    r = "object" == typeof module && module && module.exports == o && module,
    n = "object" == typeof global && global;
  (n.global === n || n.window === n) && (e = n);
  var t = /(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g,
    i = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g,
    f = function (e) {
      e = e
        .replace(t, function (e, o, r) {
          return f(r) + o;
        })
        .replace(i, "$2$1");
      for (var o = "", r = e.length; r--;) o += e.charAt(r);
      return o;
    },
    l = { version: "<%= version %>", reverse: f };
  if (
    "function" == typeof define &&
    "object" == typeof define.amd &&
    define.amd
  )
    define(function () {
      return l;
    });
  else if (o && !o.nodeType)
    if (r) r.exports = l;
    else for (var a in l) l.hasOwnProperty(a) && (o[a] = l[a]);
  else e.esrever = l;
})(this);

// CRAZY TEXT
function fullCrazy(text) {
  if (text.trim() === "") return "";
  return randomSymbols(2) + "  " + crazifyText(text) + "  " + randomSymbols(2);
}
function crazifyText(text) {
  text = text.split("");
  for (var i = 0; i < text.length; i++) {
    text[i] = crazifyCharacter(text[i]);
  }
  return text.join("");
}
function crazifyCharacter(c) {
  c = c.toLowerCase();
  var map = {
    "&": "â…‹",
    "%": ["â…", "â„€", "â„", "â„†", "â„…"],
    0: ["ï¼", "Ñ²", "Ê˜"],
    1: ["âž€", "â¶", "ï¼‘"],
    2: ["ï¼’", "â·", "âž"],
    3: ["ï¼“", "â¸", "âž‚"],
    4: ["ï¼”", "â¹", "âžƒ"],
    5: ["âº", "âž„", "ï¼•"],
    6: ["ï¼–", "â»", "âž…"],
    7: ["ï¼—", "â¼", "âž†"],
    8: ["ï¼˜", "âž‡", "â½"],
    9: ["âžˆ", "â¾", "ï¼™"],
    "<": [
      "â‰¼",
      "â‰º",
      "â‰ª",
      "â˜¾",
      "â‰¾",
      "â‹œ",
      "â‹ž",
      "â‹",
      "âŠ‚",
      "âŠ",
      "âŠ‘",
      "ã€Š",
      "ï¼œ",
      "â®",
      "â°",
      "â«·",
    ],
    ">": "â˜½â‰«â‰»â‰½â‰¿â‹â‹Ÿâ‹‘âŠƒâŠâŠ’â«¸ã€‹ï¼žâ¯â±",
    "[": "ã€ã€–ã€˜ã€šï¼»",
    "]": "ã€‘ã€—ã€™ã€›ï¼½",
    "*": "âœ¨âœ©âœªâœ«âœ¬âœ­âœ®âœ¯âœ°âœ¦âœ±âœ²âœ³âœ´âœµâœ¶âœ·ÖÖŽâœ¸âœ¹âœºâœ»âœ¼âœ½âœ¾âœ¿â€ââ‚âƒâ„â˜…â˜†ï¼Š",
    a: [
      "â’¶",
      "â“",
      "Î±",
      "ï¼¡",
      "ï½",
      "á—©",
      "å‚",
      "Î”",
      "à¸„",
      "Î±",
      "Î¬",
      "Ãƒ",
      "ð”ž",
      "ð“ª",
      "ð’¶",
      "ð“",
      "ð€",
      "ðš",
      "ð”¸",
      "ð•’",
      "áµƒ",
    ],
    b: [
      "â’·",
      "â“‘",
      "Ð²",
      "ï¼¢",
      "ä¹ƒ",
      "ï½‚",
      "á—·",
      "Î²",
      "à¹’",
      "Ð²",
      "Ð²",
      "Î²",
      "ð”Ÿ",
      "ð“«",
      "ð’·",
      "ð“‘",
      "ð",
      "ð›",
      "ð”¹",
      "ð•“",
      "áµ‡",
    ],
    c: [
      "â’¸",
      "â“’",
      "åŒš",
      "Â¢",
      "ï¼£",
      "ï½ƒ",
      "á‘•",
      "Ä†",
      "Ï‚",
      "c",
      "Ï‚",
      "ÄŒ",
      "â„ƒ",
      "ð” ",
      "ð“¬",
      "ð’¸",
      "ð“’",
      "ð‚",
      "ðœ",
      "â„‚",
      "ð•”",
      "á¶œ",
    ],
    d: [
      "â’¹",
      "â““",
      "âˆ‚",
      "ï¼¤",
      "ï½„",
      "á—ª",
      "Ä",
      "à¹”",
      "âˆ‚",
      "Ä‘",
      "ÄŽ",
      "ð”¡",
      "ð“­",
      "ð’¹",
      "ð““",
      "ðƒ",
      "á—ª",
      "ð",
      "ð”»",
      "ð••",
      "áµˆ",
    ],
    e: [
      "â’º",
      "ä¹‡",
      "â“”",
      "Ñ”",
      "ï¼¥",
      "ï½…",
      "á—´",
      "â‚¬",
      "Ñ”",
      "Îµ",
      "Î­",
      "áº¸",
      "ð”¢",
      "ð’†",
      "ð‘’",
      "ð“”",
      "ð„",
      "ðž",
      "ð”¼",
      "ð•–",
      "áµ‰",
    ],
    f: [
      "â’»",
      "â“•",
      "Æ’",
      "ï¼¦",
      "ï½†",
      "åƒ",
      "á–´",
      "â„±",
      "Å¦",
      "Ò“",
      "Ò“",
      "Æ‘",
      "ð”£",
      "ð’‡",
      "ð’»",
      "ð“•",
      "ð…",
      "ðŸ",
      "ð”½",
      "ð•—",
      "á¶ ",
    ],
    g: [
      "â’¼",
      "â“–",
      "Ù‚",
      "g",
      "ï¼§",
      "ï½‡",
      "Ç¤",
      "áŽ¶",
      "ï»®",
      "g",
      "Ä£",
      "Äž",
      "ð”¤",
      "ð“°",
      "ð‘”",
      "ð“–",
      "ð†",
      "ð ",
      "ð”¾",
      "ð•˜",
      "áµ",
      "áŽ¶",
    ],
    h: [
      "â’½",
      "å„",
      "â“—",
      "Ð½",
      "ï¼¨",
      "ï½ˆ",
      "á•¼",
      "Ä¦",
      "Ñ’",
      "Ð½",
      "Ä§",
      "Ä¤",
      "ð”¥",
      "ð“±",
      "ð’½",
      "ð“—",
      "ð‡",
      "ð¡",
      "â„",
      "ð•™",
      "Ê°",
    ],
    i: [
      "â’¾",
      "â“˜",
      "Î¹",
      "ï¼©",
      "ï½‰",
      "áŽ¥",
      "ä¸¨",
      "Æ—",
      "à¹€",
      "Î¹",
      "Î¯",
      "Ä®",
      "ð”¦",
      "ð“²",
      "ð’¾",
      "ð“˜",
      "ðˆ",
      "ð¢",
      "ð•€",
      "ð•š",
      "á¶¤",
    ],
    j: [
      "â’¿",
      "â“™",
      "× ",
      "ï¼ª",
      "Ú¶",
      "ï½Š",
      "á’Ž",
      "Ä´",
      "×Ÿ",
      "× ",
      "Ñ˜",
      "Ä´",
      "ð”§",
      "ð“³",
      "ð’¿",
      "ð“™",
      "ð‰",
      "ð£",
      "ð•",
      "ð•›",
      "Ê²",
    ],
    k: [
      "â“€",
      "â“š",
      "Ðº",
      "ï¼«",
      "ï½‹",
      "á›•",
      "Òœ",
      "Ðº",
      "Ðº",
      "Ä·",
      "ÐŒ",
      "ð”¨",
      "ð“´",
      "ð“€",
      "ð“š",
      "ðŠ",
      "ð¤",
      "ð•‚",
      "ð•œ",
      "áµ",
      "Òœ",
    ],
    l: [
      "â“",
      "â“›",
      "â„“",
      "ã„¥",
      "ï¼¬",
      "ï½Œ",
      "á’ª",
      "Å",
      "l",
      "â„“",
      "Ä»",
      "Ä¹",
      "ð”©",
      "ð“µ",
      "ð“",
      "ð“›",
      "ð‹",
      "ð¥",
      "ð•ƒ",
      "ð•",
      "Ë¡",
    ],
    m: [
      "â“‚",
      "â“œ",
      "Ð¼",
      "ï¼­",
      "ï½",
      "á—°",
      "Îœ",
      "à¹“",
      "Ð¼",
      "Ð¼",
      "Ï»",
      "ð”ª",
      "ð“¶",
      "ð“‚",
      "ð“œ",
      "ðŒ",
      "ð¦",
      "ð•„",
      "ð•ž",
      "áµ",
      "çˆª",
    ],
    n: [
      "â“ƒ",
      "å‡ ",
      "â“",
      "Î·",
      "ï¼®",
      "ï½Ž",
      "á‘Ž",
      "Å‡",
      "à¸ ",
      "Î·",
      "Î®",
      "Å‡",
      "ð”«",
      "ð“·",
      "ð“ƒ",
      "ð“",
      "ð",
      "ð§",
      "â„•",
      "ð•Ÿ",
      "á¶°",
    ],
    o: [
      "â“„",
      "ã„–",
      "â“ž",
      "Ïƒ",
      "ï¼¯",
      "ï½",
      "á—",
      "Ã˜",
      "à¹",
      "Ïƒ",
      "ÏŒ",
      "á»–",
      "ð”¬",
      "ð“¸",
      "ð‘œ",
      "ð“ž",
      "ðŽ",
      "ð¨",
      "ð•†",
      "ð• ",
      "áµ’",
    ],
    p: [
      "â“…",
      "â“Ÿ",
      "Ï",
      "ï¼°",
      "ï½",
      "å©",
      "á‘­",
      "Æ¤",
      "×§",
      "Ï",
      "Ï",
      "Æ¤",
      "ð”­",
      "ð“¹",
      "ð“…",
      "ð“Ÿ",
      "ð",
      "ð©",
      "â„™",
      "ð•¡",
      "áµ–",
    ],
    q: [
      "â“†",
      "â“ ",
      "q",
      "ï¼±",
      "ï½‘",
      "ÉŠ",
      "Î©",
      "á»£",
      "q",
      "q",
      "Çª",
      "ð”®",
      "ð“º",
      "ð“†",
      "ð“ ",
      "ð",
      "ðª",
      "â„š",
      "ð•¢",
      "áµ ",
    ],
    r: [
      "â“‡",
      "â“¡",
      "Ñ",
      "å°º",
      "ï¼²",
      "ï½’",
      "á–‡",
      "Å˜",
      "Ð³",
      "Ñ",
      "Å•",
      "Å˜",
      "ð”¯",
      "ð“»",
      "ð“‡",
      "ð“¡",
      "ð‘",
      "ð«",
      "â„",
      "ð•£",
      "Ê³",
    ],
    s: [
      "â“ˆ",
      "â“¢",
      "Ñ•",
      "ï¼³",
      "ä¸‚",
      "ï½“",
      "á”•",
      "Åž",
      "à¸£",
      "s",
      "ÅŸ",
      "Åœ",
      "ð”°",
      "ð“¼",
      "ð“ˆ",
      "ð“¢",
      "ð’",
      "ð¬",
      "ð•Š",
      "ð•¤",
      "Ë¢",
    ],
    t: [
      "â“‰",
      "â“£",
      "Ñ‚",
      "ï¼´",
      "ï½”",
      "ä¸…",
      "Å¦",
      "t",
      "Ñ‚",
      "Å£",
      "Å¤",
      "ð”±",
      "ð“½",
      "ð“‰",
      "ð“£",
      "ð“",
      "ð­",
      "ð•‹",
      "ð•¥",
      "áµ—",
    ],
    u: [
      "â“Š",
      "â“¤",
      "Ï…",
      "ï¼µ",
      "ï½•",
      "á‘Œ",
      "á»®",
      "à¸¢",
      "Ï…",
      "Ã¹",
      "Ç—",
      "ð”²",
      "ð“¾",
      "ð“Š",
      "ð“¤",
      "ð”",
      "ð®",
      "ð•Œ",
      "ð•¦",
      "áµ˜",
    ],
    v: [
      "â“‹",
      "â“¥",
      "Î½",
      "ï¼¶",
      "ï½–",
      "á¯",
      "V",
      "×©",
      "v",
      "Î½",
      "Ñ¶",
      "ð”³",
      "ð“¿",
      "ð“‹",
      "ð“¥",
      "ð•",
      "ð¯",
      "ð•",
      "ð•§",
      "áµ›",
    ],
    w: [
      "â“Œ",
      "â“¦",
      "Ï‰",
      "ï¼·",
      "ï½—",
      "á—¯",
      "Å´",
      "à¸¬",
      "Ï‰",
      "ÏŽ",
      "Å´",
      "ð”´",
      "ð”€",
      "ð“Œ",
      "ð“¦",
      "ð–",
      "ð°",
      "ð•Ž",
      "ð•¨",
      "Ê·",
      "å±±",
    ],
    x: [
      "â“",
      "â“§",
      "Ï‡",
      "ï¼¸",
      "ä¹‚",
      "ï½˜",
      "á™­",
      "Ð–",
      "×",
      "x",
      "x",
      "Ð–",
      "ð”µ",
      "ð”",
      "ð“",
      "ð“§",
      "ð—",
      "ð±",
      "ð•",
      "ð•©",
      "Ë£",
    ],
    y: [
      "â“Ž",
      "ã„š",
      "â“¨",
      "Ñƒ",
      "ï¼¹",
      "ï½™",
      "Æ³",
      "Â¥",
      "×¥",
      "Ò¯",
      "Ñ‡",
      "ÐŽ",
      "ð”¶",
      "ð”‚",
      "ð“Ž",
      "ð“¨",
      "ð˜",
      "ð²",
      "ð•",
      "ð•ª",
      "Ê¸",
    ],
    z: [
      "â“",
      "â“©",
      "z",
      "ä¹™",
      "ï¼º",
      "ï½š",
      "Æµ",
      "Å½",
      "z",
      "z",
      "Å¾",
      "Å»",
      "ð”·",
      "ð”ƒ",
      "ð“",
      "ð“©",
      "ð™",
      "ð³",
      "â„¤",
      "ð•«",
      "á¶»",
    ],
  };
  if (map[c]) {
    return randomElement(map[c]);
  } else {
    return c;
  }
}
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function randomSymbols(n) {
  var symbols = [
    "ðŸ™",
    "ðŸ‰",
    "ðŸŠ",
    "ðŸ’",
    "ðŸ",
    "ðŸœ",
    "ðŸš",
    "ðŸ²",
    "ðŸ³",
    "ðŸ¸",
    "ðŸ‘‘",
    "ðŸ‘¹",
    "ðŸ‘º",
    "ðŸ‘¤",
    "ðŸ’²",
    "ðŸ’£",
    "ðŸ’™",
    "ðŸ’š",
    "ðŸ’›",
    "ðŸ’œ",
    "ðŸ’",
    "ðŸ’—",
    "ðŸ’˜",
    "ðŸ’ž",
    "ðŸ’”",
    "ðŸ’¥",
    "ðŸ¯",
    "ðŸ¼",
    "ðŸ»",
    "ðŸº",
    "ðŸ‘Œ",
    "ðŸ",
    "ðŸ§",
    "ðŸŸ",
    "ðŸ ",
    "ðŸ¨",
    "ðŸŽ¯",
    "ðŸ†",
    "ðŸŽ",
    "ðŸŽ€",
    "ðŸŽ‰",
    "ðŸŽˆ",
    "ðŸ®",
    "ðŸ­",
    "ðŸ¬",
    "ðŸ«",
    "ðŸª",
    "ðŸ§",
    "ðŸŒ·",
    "ðŸ“",
    "ðŸ˜º",
    "ðŸ˜¾",
    "âœŽ",
    "ðŸ˜Ž",
    "ðŸ˜",
    "ðŸ˜‚",
    "ðŸ˜ˆ",
    "ðŸ˜¡",
    "ðŸ˜²",
    "ðŸ˜³",
    "ðŸ”",
    "ðŸŸ",
    "ðŸ©",
    "ðŸŽƒ",
    "ðŸŽ„",
    "ðŸŽ…",
    "ðŸ£",
    "ðŸ¤",
    "ðŸ‘",
    "ðŸ‘Š",
    "ðŸ‘»",
    "ðŸ‘½",
    "ðŸ‘®",
    "ðŸ’Ž",
    "ðŸ’‹",
    "ðŸ‘£",
    "ðŸ’€",
    "ðŸ’¢",
    "ðŸ”¥",
    "â™”",
    "â™•",
    "â™–",
    "â™—",
    "â™˜",
    "â™™",
    "â™š",
    "â™›",
    "â™œ",
    "â™",
    "â™ž",
    "â™Ÿ",
    "â™ ",
    "â™¡",
    "â™¢",
    "â™£",
    "â™¤",
    "â™¥",
    "â™¦",
    "â™§",
    "â™¨",
    "â™©",
    "â™ª",
    "â™¬",
    "â˜…",
    "â˜†",
    "â˜º",
    "â˜¹",
    "â˜¯",
    "â˜®",
    "â˜¢",
    "â˜ ",
    "â˜Ÿ",
    "â˜ž",
    "â˜",
    "â˜œ",
    "âœŒ",
    "âœ‹",
    "âœŠ",
    "â›µ",
    "àµ ",
    "âœŒ",
    "à¶",
  ];
  var s = [];
  for (var i = 0; i < n; i++) s.push(randomElement(symbols));
  return s.join("");
}
function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

$(document).ready(function () {
  $(
    "<style> // tipos de letras by :herosinghdj9@gmail.com </style>"
  ).insertBefore("body");

  $("#fontSize").on("input change", function () {
    $(
      "<style> .hsfonts p{font-size:" + $(this).val() + "px} </style>"
    ).insertBefore("body");
  });

  gen(default_text);

  $(".hero-text").on("input", function (e) {
    if ($("#insane").val() < 1) {
      gen(default_text);
    } else {
      var text = $("#insane").val();
      gen(text);
    }
  });

  var url = window.location.href;
  var params = url.split("?=");
  urltext = params[1];
  if (urltext) {
    urltext = decodeURIComponent(urltext);
    $("#insane").val(urltext);
    gen(urltext);
  }




  function gen(text) {
    text = text.trim();

    $(".result-s1").html(Change(text, "s1"));
    $(".result-s2").html(Change(text, "s2"));
    $(".result-s3").html(Change(text, "s3"));
    $(".result-s4").html(Change(text, "s4"));
    $(".result-s5").html(Change(text, "s5"));
    $(".result-s6").html(Change(text, "s6"));
    $(".result-s7").html(Change(text, "s7"));
    $(".result-s8").html(Change(text, "s8"));
    $(".result-s9").html(Change(text, "s9"));
    $(".result-s10").html(Change(text, "s10"));
    $(".result-s11").html(Change(text, "s11"));
    $(".result-s12").html(Change(text, "s12"));
    $(".result-s13").html(Change(text, "s13"));
    $(".result-s14").html(Change(text, "s14"));
    $(".result-s15").html(Change(text, "s15"));
    $(".result-s16").html(Change(text, "s16"));
    $(".result-s17").html(Change(text, "s17"));
    $(".result-s18").html(Change(text, "s18"));
    $(".result-s19").html(Change(text, "s19"));
    $(".result-s20").html(Change(text, "s20"));
    $(".result-s21").html(Change(text, "s21"));
    $(".result-s22").html(Change(text, "s22"));
    $(".result-s23").html(Change(text, "s23"));
    $(".result-s24").html(Change(text, "s24"));
    $(".result-s25").html(Change(text, "s25"));
    $(".result-s26").html(Change(text, "s26"));
    $(".result-s27").html(Change(text, "s27"));
    $(".result-s29").html(Change(text, "s29"));
    $(".result-s30").html(Change(text, "s30"));
    $(".result-s31").html(Change(text, "s31"));
    $(".lunitoolsbubbles").html(luni.tools.bubbles.encode(text));
    $(".invertedSquaresCharMap").html(
      applyCharMap(invertedSquaresCharMap, text)
    );
    $(".illuminati").html(illuminati(text));
    $(".textgun").html(textgun(text));
    $(".minigame").html(minigame(text));
    $(".pubggame1").html(pubggame1(text));
    $(".pubggame2").html(pubggame2(text));
    $(".pubggame3").html(pubggame3(text));
    $(".bricks").html(bricks(text));
    $(".bigrus").html(bigrus(text));
    $(".wideTextCharMap").html(applyCharMap(wideTextCharMap, text));
    $(".lunitoolstinyencode").html(luni.tools.tiny.encode(text));
    $(".lunitoolsflipencode").html(luni.tools.flip.encode(text));
    $(".squaresCharMap").html(applyCharMap(squaresCharMap, text));
    $(".lunitoolsmirrorencode").html(luni.tools.mirror.encode(text));
    $(".subscriptCharMap").html(applyCharMap(subscriptCharMap, text));
    $(".superscriptCharMap").html(applyCharMap(superscriptCharMap, text));
    $(".bentTextCharMap").html(applyCharMap(bentTextCharMap, text));
    $(".neonCharMap").html(applyCharMap(neonCharMap, text));
    $(".futureAlienCharMap").html(applyCharMap(futureAlienCharMap, text));
    $(".strikeThrough").html(strikeThrough(text));
    $(".tildeStrikeThrough").html(tildeStrikeThrough(text));
    $(".slashThrough").html(slashThrough(text));
    $(".underline").html(underline(text));
    $(".doubleUnderline").html(doubleUnderline(text));
    $(".lunicreepify").html(luni.tools.creepify.encode(text));
    $(".squiggleCharMap").html(applyCharMap(squiggleCharMap, text));
    $(".squiggle2CharMap").html(applyCharMap(squiggle2CharMap, text));
    $(".squiggle3CharMap").html(applyCharMap(squiggle3CharMap, text));
    $(".squiggle4CharMap").html(applyCharMap(squiggle4CharMap, text));
    $(".squiggle5CharMap").html(applyCharMap(squiggle5CharMap, text));
    $(".squiggle6CharMap").html(applyCharMap(squiggle6CharMap, text));
    $(".boldCharMap").html(applyCharMap(boldCharMap, text));
    $(".luniroundsquares").html(luni.tools.roundsquares.encode(text));
    $(".lunisquares").html(luni.tools.squares.encode(text.toUpperCase()));
    $(".oldEnglishCharMap").html(applyCharMap(oldEnglishCharMap, text));
    $(".medievalCharMap").html(applyCharMap(medievalCharMap, text));
    $(".cursiveCharMap").html(applyCharMap(cursiveCharMap, text));
    $(".scriptify").html(scriptify(text));
    $(".doubleStruckCharMap").html(applyCharMap(doubleStruckCharMap, text));
    $(".italicCharMap").html(applyCharMap(italicCharMap, text));
    $(".boldItalicCharMap").html(applyCharMap(boldItalicCharMap, text));
    $(".monospaceCharMap").html(applyCharMap(monospaceCharMap, text));
    $(".upperAnglesCharMap").html(applyCharMap(upperAnglesCharMap, text));
    $(".greekCharMap").html(applyCharMap(greekCharMap, text));
    $(".symbolsCharMap").html(applyCharMap(symbolsCharMap, text));
    $(".currencyCharMap").html(applyCharMap(currencyCharMap, text));
    $(".asianStyleCharMap").html(applyCharMap(asianStyleCharMap, text));
    $(".asianStyle2CharMap").html(applyCharMap(asianStyle2CharMap, text));
    $(".thickBlockFramed").html(thickBlockFramed(text));
    $(".diametricAngleFrame").html(diametricAngleFrame(text));
    $(".wavyJoiner").html(wavyJoiner(text));
    $(".dottyJoiner").html(dottyJoiner(text));
    $(".kirbyHug").html(kirbyHug(text));
    $(".vaporwaveText").html(vaporwaveText(text));
    $(".vaporwaveText1").html(vaporwaveText1(text));
    $(".vaporwaveText2").html(vaporwaveText2(text));
    $(".littleSparkles").html(littleSparkles(text));
    $(".weirdBox").html(weirdBox(text));
    $(".thickBox").html(thickBox(text));
    $(".zigzagJoiner").html(zigzagJoiner(text));
    $(".hashJoiner").html(hashJoiner(text));
    $(".starJoiner").html(starJoiner(text));
    $(".connectedJoiner").html(connectedJoiner(text));
    $(".arrowjoin").html(arrowjoin(text));
    $(".dotBoxtwo").html(dotBoxtwo(text));
    $(".dotBox").html(dotBox(text));
    $(".diametricBox").html(diametricBox(text));
    $(".arrowBox").html(arrowBox(text));
    $(".curlybrackets").html(curlybrackets(text));
    $(".singlewavyJoiner").html(singlewavyJoiner(text));
    $(".firework").html(firework(text));
    $(".stinky").html(stinky(text));
    $(".heartsBetween").html(heartsBetween(text));
    $(".arrowBelow").html(arrowBelow(text));
    $(".crossAboveBelow").html(crossAboveBelow(text));
    $(".wingdings").html(wingdings(text));
    $(".fullCrazy").html(fullCrazy(text));
    $(".crazyWithFlourishOrSymbols").html(crazyWithFlourishOrSymbols(text));
    $(".cuteText").html(cuteText(text));

    $(".star0").html(star0(text));
    $(".star1").html(star1(text));
    $(".star2").html(star2(text));
    $(".star3").html(star3(text));
    $(".star4").html(star4(text));
    $(".star5").html(star5(text));
    $(".star6").html(star6(text));
    $(".star7").html(star7(text));
    $(".star8").html(star8(text));
    $(".star9").html(star9(text));
    $(".star10").html(star10(text));

    $(".heart0").html(heart0(text));
    $(".heart1").html(heart1(text));
    $(".heart2").html(heart2(text));
    $(".heart3").html(heart3(text));
    $(".heart4").html(heart4(text));
    $(".heart5").html(heart5(text));
    $(".heart6").html(heart6(text));
    $(".heart7").html(heart7(text));

   $(".emoticon0").html(emoticon0(text));
    $(".emoticon1").html(emoticon1(text));
    $(".emoticon2").html(emoticon2(text));
    $(".emoticon3").html(emoticon3(text));
    $(".emoticon4").html(emoticon4(text));
    $(".emoticon5").html(emoticon5(text));
    $(".emoticon6").html(emoticon6(text));
    $(".emoticon7").html(emoticon7(text));


   $(".thankyou0").html(thankyou0(text));
    $(".thankyou1").html(thankyou1(text));
    $(".thankyou2").html(thankyou2(text));
    $(".thankyou3").html(thankyou3(text));
    $(".thankyou4").html(thankyou4(text));
    $(".thankyou5").html(thankyou5(text));
    $(".thankyou6").html(thankyou6(text));
    $(".thankyou7").html(thankyou7(text));

     $(".sad0").html(sad0(text));
    $(".sad1").html(sad1(text));
    $(".sad2").html(sad2(text));
    $(".sad3").html(sad3(text));
    $(".sad4").html(sad4(text));
    $(".sad5").html(sad5(text));
    $(".sad6").html(sad6(text));
    $(".sad7").html(sad7(text));

   $(".cuteText1").html(cuteText1(text));
    $(".cuteText2").html(cuteText2(text));
    $(".cuteText3").html(cuteText3(text));
    $(".cuteText4").html(cuteText4(text));
    $(".cuteText5").html(cuteText5(text));

    $(".crazyWithFlourishOrSymbols1").html(crazyWithFlourishOrSymbols1(text));
    $(".crazyWithFlourishOrSymbols2").html(crazyWithFlourishOrSymbols2(text));
      $(".crazyWithFlourishOrSymbols3").html(crazyWithFlourishOrSymbols3(text));
      $(".crazyWithFlourishOrSymbols4").html(crazyWithFlourishOrSymbols4(text));
      $(".crazyWithFlourishOrSymbols5").html(crazyWithFlourishOrSymbols5(text));


     $(".fullCrazy1").html(fullCrazy1(text));
    $(".fullCrazy2").html(fullCrazy2(text));
    $(".fullCrazy3").html(fullCrazy3(text));
    $(".fullCrazy4").html(fullCrazy4(text));
    $(".fullCrazy5").html(fullCrazy5(text));

    $(".wrap1").html(wrap1(text));
    $(".wrap2").html(wrap2(text));
    $(".wrap3").html(wrap3(text));
    $(".wrap4").html(wrap4(text));
    $(".wrap5").html(wrap5(text));




    }




/*extra*/



  $(".clear").click(function () {
    $("#insane").val("");
  });

  function copied() {
    var copied = document.querySelector(".copied1");
    var copyTxt = copied.querySelector(".text");
    document.querySelectorAll(".hsfonts").forEach((e) => {
      e.addEventListener("click", () => {
        copyTxt.value = e.querySelector("p").innerText;
        copyit(copyTxt);
        copied.classList.add("copied1-show");
        setTimeout(() => {
          copied.classList.remove("copied1-show");
        }, 1000);
      });
    });
  }
  copied();

  function copyit(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text.innerText || text.value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }


});

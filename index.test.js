const { encrypt } = require("./index.js");
test("passes if encodes a single word with shift of 1", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" checked/>
        <input type="radio" name="decodeOp" id="decodeOp" />
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "abc";
    const shiftBy = 1;
    const mode = "encode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("bcd");
});
test("passes if decodes a single word with shift of 1", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" />
        <input type="radio" name="decodeOp" id="decodeOp" checked/>
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "bcd";
    const shiftBy = 1;
    const mode = "decode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("abc");
});
test("passes if wraps around from z to a when encodes", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" checked/>
        <input type="radio" name="decodeOp" id="decodeOp" />
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "xyz";
    const shiftBy = 3;
    const mode = "encode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("abc");
});
test("passes if wraps around from a to z when decodes", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" />
        <input type="radio" name="decodeOp" id="decodeOp" checked/>
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "abc";
    const shiftBy = 3;
    const mode = "decode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("xyz");
});
test("passes if ignores non alphabetic characters when encodes", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" checked/>
        <input type="radio" name="decodeOp" id="decodeOp" />
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "hello, world!";
    const shiftBy = 2;
    const mode = "encode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("jgnnq, yqtnf!");
});
test("passes if ignores non alphabetic characters when decodes", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" />
        <input type="radio" name="decodeOp" id="decodeOp" checked/>
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "jgnnq, yqtnf!";
    const shiftBy = 2;
    const mode = "decode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("hello, world!");
});
test("passes if handles negative shifts when encodes", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" checked/>
        <input type="radio" name="decodeOp" id="decodeOp" />
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "abc";
    const shiftBy = -3;
    const mode = "encode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("xyz");
});
test("passes if handles negative shifts when encodes", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" checked/>
        <input type="radio" name="decodeOp" id="decodeOp" />
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "abc";
    const shiftBy = -3;
    const mode = "encode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("xyz");
});
test("passes if handles negative shifts when decodes", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" />
        <input type="radio" name="decodeOp" id="decodeOp" checked/>
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "abc";
    const shiftBy = -3;
    const mode = "decode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("def");
});
test("passes if encodes a full sentence", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" checked/>
        <input type="radio" name="decodeOp" id="decodeOp" />
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "this is a sentence!";
    const shiftBy = 12;
    const mode = "encode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("ftue ue m eqzfqzoq!");
});
test("passes if decodes a full sentence", () => {
    document.body.innerHTML = `
        <textarea id="userMsg" name="userMsg"></textarea>
        <input type="radio" name="encodeOp" id="encodeOp" />
        <input type="radio" name="decodeOp" id="decodeOp" checked/>
        <input id="shift" type="number" value="1" />
       <label for="output" id="outputLabel">Output</label>
       <textarea id="output" name="output"></textarea>
   `;
   
    const userMessage = "ftue ue m eqzfqzoq!";
    const shiftBy = 12;
    const mode = "decode";
    expect(encrypt(userMessage, shiftBy, mode)).toBe("this is a sentence!");
});
/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";

export default function PasswordGen() {
  const [passwordGen, setPasswordGen] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [handelText, setHandelText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChangeUppercase = () => {
    setPasswordGen({
      ...passwordGen,
      uppercase: !passwordGen.uppercase,
    });
  };

  const handleChangeLowercase = () => {
    setPasswordGen({
      ...passwordGen,
      lowercase: !passwordGen.lowercase,
    });
  };

  const handleChangeNumbers = () => {
    setPasswordGen({
      ...passwordGen,
      numbers: !passwordGen.numbers,
    });
  };

  const handleChangeSymbols = () => {
    setPasswordGen({
      ...passwordGen,
      symbols: !passwordGen.symbols,
    });
  };

  const setPasswordLength = (val) => {
    setPasswordGen({
      ...passwordGen,
      length: val,
    });
  };

  function generatePassword() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code)
    );
    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const { length, uppercase, lowercase, numbers, symbols } = passwordGen;

    const generateTheWord = (
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    ) => {
      const availableCharacters = [
        ...(lowercase ? lowerCaseLetters : []),
        ...(uppercase ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandelText(characters.join(""));
      return characters;
    };

    generateTheWord(length, uppercase, lowercase, numbers, symbols);
  }

  return (
    <>
      <div className="mt-2 p-3">
        <h1 className="flex justify-center font-bold text-xl mb-5">
          Password Generator
        </h1>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your Password
        </label>
        <input
          type="text"
          name="text"
          id="text"
          value={handelText}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder=""
          onChange={(e) => setHandelText(e.target.value)}
        />
      </div>
      <div class="flex items-center mb-4 p-3 justify-between mx-5">
        <input
          id="default-checkbox"
          type="checkbox"
          value={passwordGen.uppercase}
          onChange={handleChangeUppercase}
          className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-transparent"
        />
        <label
          for="default-checkbox"
          class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
        >
          Include Uppercase Letters
        </label>
      </div>
      <div class="flex items-center mb-4 p-3 justify-between mx-5">
        <input
          id="default-checkbox"
          type="checkbox"
          value={passwordGen.lowercase}
          onChange={handleChangeLowercase}
          className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-transparent"
        />
        <label
          for="default-checkbox"
          class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
        >
          Include LowerCase Letters
        </label>
      </div>
      <div class="flex items-center mb-4 p-3 justify-between mx-5">
        <input
          id="default-checkbox"
          type="checkbox"
          value={passwordGen.numbers}
          onChange={handleChangeNumbers}
          className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-transparent"
        />
        <label
          for="default-checkbox"
          class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
        >
          Include Numbers
        </label>
      </div>
      <div class="flex items-center mb-4 p-3 justify-between mx-5">
        <input
          id="default-checkbox"
          type="checkbox"
          value={passwordGen.symbols}
          onChange={handleChangeSymbols}
          className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-transparent"
        />
        <label
          for="default-checkbox"
          class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
        >
          Include Symbols
        </label>
      </div>
      <div className="p-3">
        <label
          for="minmax-range"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password Leagth
        </label>
        <input
          type="range"
          id="points"
          name="points"
          min="0"
          max="10"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <div
        className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg text-center justify-center cursor-pointer flex mt-2 mx-auto"
        onClick={generatePassword}
      >
        Generate
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import randomColorGenerator from "../../utils/randomColor";

function generateColorArray(): string[] {
  const color: string[] = [];
  for (let i = 0; i < 3; ++i) {
    const hex = randomColorGenerator();
    color.push(hex);
  }
  return color;
}

interface Tround {
  color: string[];
  answer: string;
}
function roundStart(): Tround {
  const color = generateColorArray();
  const answer = color[Math.floor(Math.random() * 3)];
  return { color: color, answer: answer };
}

const ColorPicker = () => {
  const [round, setRound] = useState<Tround>(roundStart());
  const [input, setInput] = useState<string | undefined>(undefined);
  const [result, setResult] = useState<string | undefined>(undefined);

  const handleColorChange = (color: string) => {
    if (round.answer === color) {
      setResult("Correct");
    } else {
      setResult("Incorrect");
    }
    setInput(color);
    setRound(roundStart());
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center flex-col gap-10">
      <div className="size-96 border flex justify-center items-center  flex-col rounded-xl p-8 ">
        <div
          style={{ backgroundColor: round.answer }}
          className="size-8/9 rounded-lg"
        ></div>
      </div>
      <div className="border  w-96 rounded-xl flex flex-col justify-center items-center gap-4 p-4">
        <div className="w-full flex justify-center items-center gap-6 text-white text-center rounded-md">
          {round.color.map((color) => {
            return (
              <h1
                onClick={() => handleColorChange(color)}
                className=" bg-amber-500 w-full rounded-md p-2 cursor-pointer"
                key={color}
              >
                {color}
              </h1>
            );
          })}
        </div>
        <Result result={result} />
      </div>
    </div>
  );
};

const Result = ({ result }: { result?: string }) => {
  return (
    <div
      className={`${result ? (result === "Incorrect" ? "bg-rose-800" : "bg-green-600") : "bg-slate-800"} border text-white border-amber-500 w-full p-5 text-center`}
    >
      {result ?? "Pick a color"}
    </div>
  );
};

export default ColorPicker;

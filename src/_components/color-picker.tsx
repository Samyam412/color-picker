import { useState } from "react";
import randomColorGenerator from "../../utils/randomColor";

function roundStart(): string[] {
  const color: string[] = [];
  for (let i = 0; i < 3; ++i) {
    const hex = randomColorGenerator();
    color.push(hex);
  }
  return color;
}

const ColorPicker = () => {
  const hexArr = roundStart();
  const [color, setColor] = useState(hexArr);
  const [currentColor, setCurrentColor] = useState<string>(
    hexArr[Math.floor(Math.random() * 3)],
  );
  const [answer, setAnswer] = useState(currentColor);
  const [input, setInput] = useState<string | undefined>(undefined);

  const handleColorChange = ({ color }: { color: string }) => {
    const randomNum = Math.floor(Math.random() * 3);
    const ran = hexArr[randomNum];
    setColor(hexArr);
    setCurrentColor(ran);
    setAnswer(currentColor);
    setInput(color);
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center flex-col gap-10">
      <div className="size-96 border flex justify-center items-center  flex-col rounded-xl p-8 ">
        <div
          style={{ backgroundColor: currentColor }}
          className="size-8/9 rounded-lg"
        ></div>
      </div>
      <div className="border  w-96 rounded-xl flex justify-center items-center gap-4 p-4">
        <div className="w-full flex justify-center items-center gap-6 text-white text-center rounded-md">
          {color.map((color) => {
            return (
              <h1
                onClick={() => handleColorChange({ color: color })}
                className=" bg-amber-500 w-full rounded-md p-2 cursor-pointer"
                key={color}
              >
                {color}
              </h1>
            );
          })}
        </div>
      </div>
      <Result answer={answer} input={input} />
    </div>
  );
};

const Result = ({ answer, input }: { answer: string; input?: string }) => {
  const outcome = input ? (input === answer ? "success" : "fail") : undefined;
  return (
    <div>
      <h1>answer-{answer}</h1>
      <div>result: {outcome ?? "Pick a color"}</div>
    </div>
  );
};

export default ColorPicker;

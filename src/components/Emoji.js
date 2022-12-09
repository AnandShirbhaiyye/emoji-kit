import React from "react";
import { useState } from "react";
import "./Emoji.css";

function Emoji() {
  const [emoji, setEmoji] = useState("🏆");
  const [emojiColor, setEmojiColor] = useState("white");
  const [emojiSize, setEmojiSize] = useState(20);
  const [emojiDeg, setEmojiDeg] = useState(0);
  return (
    <>
      <div className="background-emoji">
        <div className="container">
          <div className="app-title-container shadow-lg">
            <h1 className="app-title text-center">EMOJI-KIT🤡</h1>
          </div>

          <div className="emoji-editor-container">
            <div>
              <div
                className="emoji-container"
                style={{
                  backgroundColor: emojiColor,
                  transform: `rotate(${emojiDeg * 3.6}deg)`,
                }}
              >
                <div
                  className="emoji text-center"
                  style={{ fontSize: `${emojiSize * 2}px` }}
                >
                  {emoji}
                </div>
              </div>

              <div className="emoji-container-emoji">
                <div
                  className="emoji"
                  onClick={() => {
                    setEmoji("😎");
                  }}
                >
                  😎
                </div>

                <div
                  className="emoji"
                  onClick={() => {
                    setEmoji("😇");
                  }}
                >
                  😇
                </div>

                <div
                  className="emoji"
                  onClick={() => {
                    setEmoji("🤩");
                  }}
                >
                  🤩
                </div>

                <div
                  className="emoji"
                  onClick={() => {
                    setEmoji("😶");
                  }}
                >
                  😶
                </div>

                <div
                  className="emoji"
                  onClick={() => {
                    setEmoji("🥰");
                  }}
                >
                  🥰
                </div>

                <div
                  className="emoji"
                  onClick={() => {
                    setEmoji("🎯");
                  }}
                >
                  🎯
                </div>

                <div
                  className="emoji"
                  onClick={() => {
                    setEmoji("🎁");
                  }}
                >
                  🎁
                </div>
              </div>
            </div>
            <div>
              <div className="colors-container">
                <div
                  className="color-item bg-red"
                  onClick={() => {
                    setEmojiColor("red");
                  }}
                ></div>
                <div
                  className="color-item bg-purple"
                  onClick={() => {
                    setEmojiColor("purple");
                  }}
                ></div>
                <div
                  className="color-item bg-pink"
                  onClick={() => {
                    setEmojiColor("pink");
                  }}
                ></div>
                <div
                  className="color-item bg-yellow"
                  onClick={() => {
                    setEmojiColor("yellow");
                  }}
                ></div>
                <div
                  className="color-item bg-orange"
                  onClick={() => {
                    setEmojiColor("orange");
                  }}
                ></div>
                <div
                  className="color-item bg-black"
                  onClick={() => {
                    setEmojiColor("black");
                  }}
                ></div>
              </div>
              
              <div className="size-container">
                <input
                  type="range"
                  className="size-slider"
                  onChange={(e) => {
                    setEmojiSize(e.target.value);
                  }}
                />
              </div>

              <div className="size-container">
                <input
                  type="range"
                  className="size-slider"
                  onChange={(e) => {
                    setEmojiDeg(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container text-center mt-4">
          <h3>ThankYou...🙏</h3>
        </div>
      </div>
    </>
  );
}

export default Emoji;

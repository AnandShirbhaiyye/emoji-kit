import React from "react";
import { useState } from "react";
import "./Emoji.css";

function Emoji() {
  const [emoji, setEmoji] = useState("😍");
  return (
    <>
      <div className="background-emoji">
        <div className="container">
          <div className="app-title-container shadow-lg">
            <h1 className="app-title text-center">EMOJI-KIT🤡</h1>
          </div>

          <div className="emoji-container">
            <div className="emoji text-center">{emoji}</div>
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
        <div className="footer-container text-center mt-4">
          <h3>ThankYou...🙏</h3>
        </div>
      </div>
    </>
  );
}

export default Emoji;

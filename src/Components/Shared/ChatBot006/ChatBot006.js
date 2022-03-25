import React from "react";
import ChatBot from "react-simple-chatbot";

const ChatBot006 = () => {
  const config = {
    width: "300px",
    height: "400px",
    floating: true,
  };
  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Do you want to know about our courses?",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: 1, label: "Yes", trigger: "5" },
        { value: 2, label: "No", trigger: "3" },
      ],
    },
    {
      id: "5",
      options: [
        { value: 1, label: "Web Development", trigger: "6" },
        { value: 2, label: "C++", trigger: "7" },
        { value: 3, label: "C#", trigger: "8" },
        { value: 4, label: "Game Development", trigger: "9" },
        { value: 5, label: "Artificial Intelligence", trigger: "10" },
        { value: 6, label: "Machine Learning", trigger: "11" },
      ],
    },
    {
      id: "6",
      message: "We have the best Web Development Courses Including MERN Stack.",
    },
    {
      id: "7",
      message:
        "Our C++ fundamental course will help you to solve more problems.",
    },
    {
      id: "8",
      message:
        "We have best C# Instructors they will guide you and support you.",
    },
    {
      id: "9",
      message:
        "Our game development courses are a bit advance that will help you to boost your skill.",
    },
    {
      id: "10",
      message:
        "This course branch is not available yet, Very soon we will launch our AI courses.",
    },
    {
      id: "11",
      message:
        "This course branch is not available yet, Very soon we will also launch our Machine Learning courses.",
    },
    {
      id: "12",
      message: "Who can use the Edu Buddies platform?",
      trigger: "12",
    },
    {
      id: "13",
      options: [
        { value: 1, label: "Yes", trigger: "13" },
        { value: 2, label: "No", trigger: "14" },
      ],
    },
    {
      id: "14",
      message:
        "Just about any one who wants to improve employee skills management, increase knowledge acquisition and retention, reduce liability through compliance training or even just complement traditional classroom instruction can use the Edu Buddies online programming training platform. For more information checkout our contact form.",
    },
  ];
  return (
    <div>
      <div className="chat">
        <ChatBot
          headerTitle="Speech Recognition"
          recognitionEnable={true}
          /* speechSynthesis={{ enable: true, lang: "en" }} */
          steps={steps}
          {...config}
        />
      </div>
    </div>
  );
};

export default ChatBot006;

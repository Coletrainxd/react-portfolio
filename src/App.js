import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <h1>Portfolio</h1>
        </header>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">
              Bio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="portfolio.html">
              Portfolio
            </a>
          </li>
          <div>
            <h1>Project 1:</h1>
            <p>
              For my first project we made a League Of Legends stat tracker that
              lets you look other players stats using the Riot Games API.
            </p>
            <img
              id="Project1"
              src="./images/project 1.PNG"
              alt="League Of Legends Stat Tracker"
            />
            <ul>
              <li>
                <strong>GitHub link:</strong>
                <a href="https://github.com/Zapro9/Project1">Project 1</a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Project 2:</h1>
            <p>
              For my second project my group decided to make a website that can
              find trails near you using the Hiking Project Data API to find
              trails and the MapBox API to display them.
            </p>
            <img
              id="Project2"
              src="./images/project 2.PNG"
              alt="Trail Finder"
            />
            <ul>
              <li>
                <strong>GitHub link:</strong>
                <a href="https://github.com/doctari77/Trail_Finder">
                  Project 2
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Password Generator:</h1>
            <p>
              This is a password generator that asks you a series of questions
              and generates a random password to meet the criteria you chose.
            </p>
            <img
              id="Password generator"
              src="./images/homework 3.PNG"
              alt="Password generator"
            />
            <ul>
              <li>
                <strong>GitHub link:</strong>
                <a href="https://github.com/Coletrainxd/Homework-3">
                  Password generator
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Weather Dashboard:</h1>
            <p>
              This is a weather dashboard that lets you search any city in the
              U.S. and view a 5 day forecast.
            </p>
            <img
              id="Weather Dashboard"
              src="./images/weather dashboard.PNG"
              alt="Weather Dashboard"
            />
            <ul>
              <li>
                <strong>GitHub link:</strong>
                <a href="https://github.com/Coletrainxd/homework6">
                  Weather Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1>Day Planner:</h1>
            <p>
              This is a day planner that lets you write and save your to-do's
              for the day and view what tasks are next based on the current
              hour.
            </p>
            <img
              id="TaskManager"
              src="./images/Schedule.PNG"
              alt="taskManager"
            />
            <ul>
              <li>
                <strong>GitHub link:</strong>
                <a href="https://github.com/Coletrainxd/homework5">
                  Day Planner
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </body>
    </div>
  );
}

export default App;

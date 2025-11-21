import taskManager from "./assets/TicketAndTaskManager.png";
import todoList from "./assets/ToDoList.png";
import atm from "./assets/ATM.png";
import characterAnalysis from "./assets/CharacterAnalysis.png";

export default function Projects() {
  return (
    <div class="project-container" id="projects">
      <div>
        <h2 class="container-title">Projects</h2>
      </div>
      <div class="project-list">
        <div class="project">
          <div class="project-preview">
            <a href="https://github.com/ThereaultL/CharacterAnalysis">
              <img src={characterAnalysis} alt="Character Analysis" />
            </a>
          </div>
          <h2>Character Analysis</h2>
          <p>
            Analyzes a text file to identify all character names mentioned in
            the text and counts how many times each one appears. It also detects
            dialogue by iterating through the file and applying simple
            speech-pattern rules. Using English grammar cues, the program infers
            which character is speaking in each line of dialogue. For every
            character who speaks, the program extracts a “catchphrase” by
            determining the most frequently used word in their speech, excluding
            pronouns, articles, and prepositions.
          </p>
          <div class="project-stack-container">
            <div class="project-stack">
              <p>
                <em>Python</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>File Parsing</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>Text Analysis</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>Data Analysis</em>
              </p>
            </div>
          </div>
        </div>
        <div class="project">
          <div class="project-preview">
            <a href="https://github.com/ThereaultL/TicketAndTaskManager">
              <img src={taskManager} alt="Ticket and Task Manager" />
            </a>
          </div>
          <h2>Task and Ticket Manager</h2>
          <p>
            A simplified of Jira or Trello for managing tickets (issues, bugs,
            tasks). Users can create, view, edit, update, and resolve/delete
            tickets with details like title, description, and status.
          </p>
          <div class="project-stack-container">
            <div class="project-stack">
              <p>
                <em>React.js</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>Node.js</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>Express.js</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>REST API</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>JavaScript</em>
              </p>
            </div>
          </div>
        </div>
        <div class="project">
          <div class="project-preview">
            <a href="https://github.com/ThereaultL/ToDo-DesktopApp">
              <img src={todoList} alt="ToDo List" />
            </a>
          </div>
          <h2>ToDo List</h2>
          <p>
            A basic ToDo list desktop application that allows users to create,
            view, and complete tasks. Users tasks are saved to their account and
            can be accessed from any device upon logon.
          </p>
          <div class="project-stack-container">
            <div class="project-stack">
              <p>
                <em>React.js</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>Node.js</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>Electron.js</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>Express.js</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>JavaScript</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>MySQL</em>
              </p>
            </div>
          </div>
        </div>
        <div class="project">
          <div class="project-preview">
            <a href="https://github.com/ThereaultL/ATM">
              <img src={atm} alt="ATM" />
            </a>
          </div>
          <h2>ATM</h2>
          <p>
            A console based ATM simulator that allows users to perform basic
            banking operations such as checking balance, depositing,
            withdrawing, and transferring funds. It simulates a real ATM
            experience with user authentication and admin functionality.
            Security measures are implemented to prevent users from overdrafting
            their accounts or pulling out more money than is readily available
            inside of the ATM.
          </p>
          <div class="project-stack-container">
            <div class="project-stack">
              <p>
                <em>Java</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>OOP</em>
              </p>
            </div>
            <div class="project-stack">
              <p>
                <em>Data Handeling</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

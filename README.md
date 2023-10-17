# PAREDIFA

## Authors
Team 01-10am.
- Andres Alvarez Duran     117520958
- Joaquin Barrientos Monge 117440348
- Oscar Ortiz Chavarria    208260347
- David Zarate Marin       116770797

## Requirements
1. The user must have Node.js installed in their device. 
2. User must have SWI-Prolog installed in the computer. 

## How to launch
1. Open your Windows Terminal or an equivalent program. \
Make sure your current working directory is paredifa/paredifa_react/Server and open a terminal window. \
Run the _npm install_ command in order to gather the Express dependencies. \
Then change the change directory to paredifa/paredifa_react and execute the same command to gather the React dependencies. 

2. Now in the same path, proceed by executing the _npm start_ command in order to run the Express Server with the React App. 
This will execute the _npm run build_ command which will create a optimized production build of the react application, 
then it will automatically change directory to paredifa/paredifa_react/Server where the build is, finally it will run the
command _node app_, which will execute this build and open the port 3000 in your browser with the application running. 

3. Run the Prolog Server.\
For this, the user must be located in paredifa/paredifa_prolog and open a terminal window.
The command _swipl server.pl_ must be executed in order for the Prolog server to launch on port 9000. 
   
## How to use
### Automata mode
1. On the left side we have a button 'Set Alphabet', where you will have the chance to set a new alphabet for the automata. You just have to type it in the pop-up modal!
We use a regex to detect the alphabet you input, so, there isn't a strict format to type it. You can put: _"123", "1,2,3", "1 2 3", "1-2-3"_. They all mean the same _{1, 2, 3}_ 
(a set containig 1, 2, and 3). 
    - **Important**: If the user forgets to set an alphabet. The program will suggest _{1, 0}_ as the default one.

2. Now that the alphabet is ready. The user is good to place some states and start building an automata. 
    - With the mouse situated anywhere withing the canvas, the user is able to create a state by pressing the letter **Q**. 
    - To change the location of the state by clicking on that state (it turns orange), and holding or draging the mouse anywhere is desired. (This is only one gesture. One click.)
    - The user is able to change the state name by clicking on any state (it turns orange) and pressing letter **R**. Then with _backspace_ remove the old name and typing the new one. 
    - By selecting a state and pressing **DEL** the user will remove that selected state. 
    - The user sets a state as initial by clicking on a state and pressing **S**. Only one initial state is allowed.
    - The user sets a state as final by clicking on a stated and pressing **F**. Several final states are allowed. 
    - If the user selects a final state and presses **F**, the state won't be final anymore.
   

3. Now that we have some states it is time to connect them and make the automata! 
    - First you need to select a state by clicking on it (it turns orange). 
    - Then double clicking the state you enable the _transition mode_ which you will distinguish due to the flags that appear, the red flag means origin and the gray flag means destination and creates a temporary transition. 
    - This temporary transition needs to be connected to a destination state, the one with the gray flag. In order to do that you will have to drag your mouse to the desired state and click the state in order to connect both states. 
    - It is not ready yet, now we have to place the transition symbols between these two states. 
    Once you see the states area connected type the symbols from the alphabet that will connect those states. When you finish press **ENTER**.
    - **Important** if you try to place a symbol not included in the alphabet a warning will be shown on the top-left corner.

4. While the user is building the automata on the right side of the screen a panel will show the error and the small tasks needed to be completed before the automata is ready to run.
   - But, if the user has an initial state, and a final state. A new button under the alphabet will appear with the label _Convert to DFA_. This button will complete the automata for you, and it will turn into a DFA. 

5.  Once automata is completed the user will be able to enter an input string. This has to match the symbols from the alphabet, once again. Otherwise, an error will be shown.

6. Once no errors are detected, the corresponding run buttons will be enabled on the center-top of the screen. Also, on the top-left corner of the canvas, the user will see 
the input string and which character is the automata currently processing highlighted in purple.
There are two options:
    - **Run continuous**: This will run the automata all at once, with no pauses.
    - **Run by steps**: This option will show two new buttons. Enabling the user to run the automata with pause and also rewind. 
        - **Next Step (in green):** This will color the next transition the automata will take. 
        - **Prev Step (in red):** By pressing this button the user is able to rewind the automata, and check the previous transitions.

7. Finally, once the automata finishes, a result will be shown on the right-pannel, below the errors dialog. 
The user will be able to identify the input string, and the final state, followed by a result.
    - Accepted will be shown in green if the input string finished in a final state.
    - Rejected will be shown in red if the input string finished in a non-final state.

8. The user has the option to _Clear the Canvas_ by clicking the button in the bottom-right corner of the canvas.

9. This program is powered with a database where you can store and fetch automatas.
    - So when the user wants to save the automata, by clicking the _cloud button with the arrow facing up_ will open a modal with instruction to save it. 
    - Or by clicking the _cloud button with the arrow facing down_ the user will be able to fetch an automata from the database directly with an ID or by choosing one from the list. 
    
10. The user will have the change to download the automata as as PNG image by clicking the _Save as PNG_ button in the bottom-right corner of the canvas. 

### Regex mode  
1. By clicking on the RegEx Mode button located in the navbar, a modal will appear, here you can select among the compiler options.
2. Next, a RegEx must be placed on the input field. Once everything is ready, you can click on the _Send_ button which will send a request indirectly to the Prolog server that will compile the RegEx into a DFA, that will load in the canvas instantly. 
3. Now you can use the commands and instructions from the Automata mode section. 
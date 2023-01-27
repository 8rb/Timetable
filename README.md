# My Timetable
<a href="https://my-timetable.netlify.app/" target="_blank"><img  style="display:inline-block"  alt="Logo" height="100px" src="https://raw.githubusercontent.com/8rb/Timetable/main/public/timetable_icon.png?raw=true" /></a>
  
This repo is a _*made-from-scratch*_ timetable using basic table tags for structuring and styled-components for styling. The language chosen was TypeScript for learning purposes.

In case you want to create your Timetable using this repo, proceed as follows:

1. Clone the repo into your machine

2. Start the app by running the command `yarn start`

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

4. To replace the courses go to the file `events.ts` located inside the `src` folder.

5. Create the Courses you are taking as classes to avoid writing repetitive code (DRY).

6. Inside the `TimeTableData` array, place the courses in their respective time and day, ****time**** being the object of the `TimeTableData`'s array and ****day**** being an attribute of the time object.

7. Save the changes and view them in the browser.

8. For deployment you can use [Netlify](https://www.netlify.com/) for continuous deployment.

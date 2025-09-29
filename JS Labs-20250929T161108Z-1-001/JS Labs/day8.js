import { greetUser } from './utils.js';

console.log(greetUser("Tefaa"));


// 2. Write a Promise that resolves after 2 seconds with the message "Task completed!". Use .then() to log the result to the console.
const firstPromise = new Promise ((resolve) => {
    setTimeout(() =>{
        resolve("Task completed!")
    },2000);
});
console.log(firstPromise);
// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
async function waitAndGreet(){
    const msg = await new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Welcome")
        },1000);
    }); 
    return msg
}
    
waitAndGreet().then((msg) => console.log(msg));   
// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
async function fetchUserData() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const user = await response.json()
        console.log(`Name ${user.name}`)
        console.log(`Email  ${user.email}`)
    }
    catch(error) {
        console.error("error fetching data", error)
    }
    
    
}
fetchUserData()
// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
async function fetchTitle(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const arr = await response.json()
        const titles = arr.slice(0,3).map(arr => arr.title)
        return titles
    } 
    catch (error){
        console.error("error fetching data", error)
        return[]
    }
} 
fetchTitle().then(titles => console.log(titles))
// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
function timer(){
    return new Promise((resolve) => {
        let count = 1;
        const interval = setInterval(() => {
            console.log(count);
            count++;
            if (count > 3) {
                clearInterval(interval);
                resolve();
            }
        }, 1000);
    });
}

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.

function safeJsonParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Invalid JSON:", error);
        return null;
    }
}

const validJson = '{"name": "Omar"}';
const invalidJson = '{name: Omar}';

console.log(safeJsonParse(validJson));
console.log(safeJsonParse(invalidJson));

// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
async function fetchCompletedTodosCount() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
        const todos = await response.json();
        const completedCount = todos.filter(todo => todo.completed).length;
        return completedCount;
    } catch (error) {
        console.error("Error fetching todos:", error);
        return 0;
    }
}

// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.

export default class DataFetcher {
  async getUser(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user with id ${id}: ${response.statusText}`);
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }
}

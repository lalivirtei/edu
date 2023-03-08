// = 1
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status === 200) {
    return await response.json();
  }
  throw new HttpError(response);
}

async function demoGithubUser() {
  let user;
  while (true) {
    try {
      let name = 'lalivirtei'
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status === 404) {
        console.log('no such user, try again');
      } else {
        throw err;
      }
    }
  }
  console.log(user);
  return user;
}

let user = demoGithubUser();
console.log(user);


// = 2
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

// - won't work!
// function f() {
//   let some;
//   wait().then(result => some = result);
//   return some;
// }
// console.log(f())

// + will work!
function f() {
  wait().then(result => console.log(result));
}

f();
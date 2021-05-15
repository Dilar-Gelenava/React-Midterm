function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
}

var limit = 1;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.get('limit')) {
  limit = urlParams.get('limit');
}

try {
  fetch('https://fakerapi.it/api/v1/books?_quantity=' + limit, {
    method: 'GET',
  })
    .then(function (response) {
      if (response.status !== 200) {
        throw response.status;
      }
      return response.json();
    })
    .then(function (responseData) {
      responseData.data.forEach((e) => {
        console.log(e);
      });
      console.log('❤❤❤');
    })
    .catch(function (error) {
      if (error === 404) {
        console.log('Page Not found', error);
      } else {
        console.log('Server Error');
      }
      console.log(error);
    });
} catch (error) {
  ErrorFallback(error);
}

function Books() {
  return (
    <div>
      <a className={'bg-light'} href="books?limit=5">
        get 5 books
      </a>
      <br />
      <a className={'bg-light'} href="books?limit=10">
        get 10 books
      </a>
      <br />
      <a className={'bg-light'} href="books?limit=15">
        get 15 books
      </a>
      <br />
      <a className={'bg-light'} href="books?limit=20">
        get 20 books
      </a>

      <br />
      <h1>{limit} Books are waiting for you in the console ❤❤❤</h1>
      <h1>check it out</h1>
      <h3>(sorry ❤❤❤)</h3>
    </div>
  );
}

export default Books;

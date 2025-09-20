import { Suspense } from 'react';
import './App.css';
import Countries from './Components/Countries/Countries';
// import Countries from './Components/Countries/counties2';
const countriesPromise = fetch(
  'https://openapi.programming-hero.com/api/all'
).then((res) => res.json());
function App() {
  return (
    <>
      <Suspense fallback={<p>Please Wait ...</p>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './../App.css'
import LeafletMap from "./LeafletMap"

export default function App() {
    return (
      <LeafletMap />
    )
 }

// function MyMap() {
//   return (
//     <script>
//       const map = L.map('map').setView([51.505, -0.09], 13);

//       const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//       }).addTo(map);

//       const marker = L.marker([51.5, -0.09]).addTo(map)
//         .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();
//     </script>
//   );
// }


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

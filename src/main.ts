import { age, name } from "./bases/types.ts"
import { charmander } from "./bases/classes.ts"
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${name} ${age}!!</h1>
  <h2>${charmander.name} ${charmander.id}</h2>
`

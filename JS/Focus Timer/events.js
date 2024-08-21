


                import { controls } from './elements.js'
                import * as actions from './actions.js'
                import * as el from './elements.js'
                import { updateDisplay } from './timer.js'
            
                export function registerControls() {
                    controls.addEventListener('click',(event) => {
                        const action = event.target.dataset.action

                        if(typeof actions[action] != "function") {
                            return
                        }

                        actions[action]()
                    })
                }

                export function setMinutes() {
                    el.minutes.addEventListener('focus', () => {
                        el.minutes.textContent = ""
                    })

                    el.minutes.onkeydown = (event) => /\d/.test(event.key)

                    el.minutes.addEventListener('blur', (event) => {
                        let time = event.currentTarget.textContent
                        time =  time > 60 ? 60 : time
                        console.log(time)
                        
                        let minutes = time
                        let seconds = 0

                        updateDisplay(minutes, seconds)
                        el.minutes.removeAttribute('contenteditable')
                    })
                }
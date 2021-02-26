import React, { Component } from 'react'
import {redux} from 'redux'

export class Cake extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {

        const createStore = redux.createStore()

        const initialState = {
            numOfCakes: 10
        }

        const BUY_CAKE = 'BUY_CAKE'

        function buyCake() {
            return {
                type: BUY_CAKE,
                info: 'First redux action'
            }
        }

        // (previousState, action) => newState

        const reducer = (state = initialState, action) => {
            switch (action.type) {
                case BUY_CAKE: return {
                    ...state,
                    numOfCakes: state.numOfCakes - 1
                }

                default: return state
            }
        }

        const store = createStore(reducer)
        console.log('initial state', store.getState())
        const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
        store.dispatch(buyCake())
        store.dispatch(buyCake())
        store.dispatch(buyCake())
        unsubscribe()
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Cake

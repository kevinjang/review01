import React from 'react'
import { bindActionCreators } from 'redux';

const connect = (mapStatetoProps,mapDispatchToProps)=>{
    return WrapComponent=>{
        return class ConnectComponent extends React.Component{
            // 获取Context
            constructor(props,context){
                super(props, context)
                this.state= {
                    props:{}
                }
            }

            componentDidMount(){
                // 获取最外层由Provider传入的store
                

                store.subscribe(()=>this.update)
            }

            update(){
                const {store} = this.context
                const stateProps = mapStatetoProps(store.getState())
                const dispatchProps = bindActionCreators(mapDispatchToProps,store.dispatch)

                this.setState({
                    props:{
                        ...this.state.props,
                        ...stateProps,
                        ...dispatchProps
                    }
                })
            }

            render(){
                return <WrapComponent {...this.state.props}>

                </WrapComponent>
            }
        }


    }
}

class Provider{
    getChildrenContext(){
        return {store: props.store}
    }

    constructor(props){
        this.store = props.store
    }

    render(){
        return this.props.children
    }
}
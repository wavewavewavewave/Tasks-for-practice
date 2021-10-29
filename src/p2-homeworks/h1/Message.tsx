import React from 'react';
import m from './Message.module.css'


export type propsMessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
    // getMessageData: (message: string) => void

}


export function Message(props: propsMessageType) {

    // const getMessageData = () => {
    //     return {
    //         avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    //         name: 'September',
    //         message: 'some text',
    //         time: '22:00',
    //     }
    // }
    //
    //
    // const title = getMessageData().name
    // const time = getMessageData().time
    // // const avatar = getMessageData().avatar
    // // const message = getMessageData().message

    return (
        <div className={m.message}>
            <div>
                <img src={props.avatar} alt={'#props.avatar'} className={m.ava}/>
            </div>

            <div className={m.corner}/>

            <div className={m.content}>
                <div className={m.name}>
                    {props.name}
                </div>
                <div>
                    {props.message}
                </div>
                <div className={m.time}>
                    {props.time}
                </div>

            </div>
        </div>
    )

}


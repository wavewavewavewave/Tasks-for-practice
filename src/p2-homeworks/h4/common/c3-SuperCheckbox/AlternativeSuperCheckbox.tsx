import React, {useState} from 'react'
import "./AlternativeSuperCheckbox.css"
import {animated, config, useChain, useSpring, useSpringRef} from "react-spring"
import {useSelector} from "react-redux";


function AlternativeSuperCheckbox() {
    const [isChecked, setisChecked] = useState(false)
    const checkboxAnimationRef = useSpringRef()
    const checkboxAnimationStyle = useSpring({
        backgroundColor: isChecked ? "#808" : "#fff",
        borderColor: isChecked ? "#808" : "#fff",
        // config: config.gentle,
        // ref: checkboxAnimationRef,
    })

    const [checkMarkLenght, setCheckMarkLenght] = useState("null")

    const checkMarkAnimationRef = useSpringRef()
    const checkMarkAnimationStyle = useSpring({
        x: isChecked ? 0 : checkMarkLenght,
        // config: config.gentle,
        // ref: checkMarkAnimationRef,
    })


    // useChain(
    //     isChecked
    //         ? [checkboxAnimationRef, checkMarkAnimationRef]
    //         : [checkMarkAnimationStyle, checkboxAnimationRef],
    //     [0, 0.1]
    // )

    const onChangeHandler = () => {
        setisChecked(!isChecked)
    }


    return (
        <label>
            <input type={'checkbox'}
                   onChange={onChangeHandler}/>

            <animated.svg
                style={checkboxAnimationStyle}
                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                aria-hidden={true}
                viewBox="0 0 15 11"
                fill="none"
            >
                <animated.path
                    d="M1 4.5L5 9L14 1"
                    strokeWidth={"2"}
                    stroke="#fff"
                    strokeDasharray={checkMarkLenght}
                    strokeDashoffset={checkMarkAnimationStyle.x}
                    ref={(ref) => {
                        if (ref) {
                            // @ts-ignore
                            setCheckMarkLenght(ref.getTotalLength())
                        }
                    }}
                />
            </animated.svg>
            Go click clack
        </label>
    )
}

export default AlternativeSuperCheckbox



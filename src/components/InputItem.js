import { useEffect, useState } from 'react'

function InputItem(props) {
    let [click,setClick] = useState(1)
    let [id, setId] = useState()
    useEffect(() => {
        function newId() {
            return Math.random().toString(36).substr(2, 16);
        }
        setId(newId)
    }, [click])


    return (
        <>
            <div className='inputBox'>
                <input placeholder='할일을 입력하세요!' type="text" onChange={(e) => {
                    props.setMylist(e.target.value)
                }} onClick={(e) => { props.setMylist(e.target.value = '') }} />
                <button onClick={(e) => {
                    setClick(click=click+1)

                    let myBox = localStorage.getItem('myBox')
                    myBox = JSON.parse(myBox)
                    if (props.mylist == '') {
                        alert('할일을 입력하세요!')
                    } else if (myBox.length > 5) {
                        alert('최대 6개까지 입력가능')
                    } else if (props.mylist != '') {
                        myBox.push({ list: props.mylist, 아이디: id, 상태: false, 클릭: 0 })
                        localStorage.setItem('myBox', JSON.stringify(myBox))
                        props.setTest(myBox)
                    }
                }}>Add</button>
            </div>
        </>

        
    )
} export default InputItem;
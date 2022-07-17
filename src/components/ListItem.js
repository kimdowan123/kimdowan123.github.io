import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


function ListItem(props) {
    return (
        <>
            {
                props.test?.map(function (a, i) {

                    return (
                        <div key={i} className='list'>
                            <div className='list-left'>
                                <span className={
                                    a?.상태 == true ? 'checkbox' : null
                                }>
                                    <FontAwesomeIcon className='checkBox' icon={faCheck} onClick={() => {
                                        let myBox = localStorage.getItem('myBox');
                                        myBox = JSON.parse(myBox)
                                        myBox[i].클릭++
                                        localStorage.setItem('myBox', JSON.stringify(myBox))
                                        props.setTest(myBox)
                                        if (myBox[i].클릭 % 2 == 0) {
                                            myBox[i].상태 = false
                                            localStorage.setItem('myBox', JSON.stringify(myBox))
                                            props.setTest(myBox)
                                        } else {

                                            myBox[i].상태 = true
                                            localStorage.setItem('myBox', JSON.stringify(myBox))
                                            props.setTest(myBox)
                                        }
                                    }} />
                                </span>
                                <span className={
                                    a?.상태 == true ? 'PlusLine' : null
                                }>&nbsp;&nbsp;{a?.list}</span>
                            </div>


                            <FontAwesomeIcon className='trash' icon={faTrashCan} onClick={() => {
                                let myBox = localStorage.getItem('myBox');
                                myBox = JSON.parse(myBox)

                                let newArray = myBox.filter(function (x) {
                                    return (
                                        x.아이디 != a?.아이디
                                    )
                                })
                                localStorage.setItem('myBox', JSON.stringify(newArray))
                                props.setTest(newArray)
                            }} />
                        </div>
                    )
                })
            }
        </>
    )
} export default ListItem;
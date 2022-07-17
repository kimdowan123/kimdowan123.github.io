function TitleItem() {

    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;

    return (
        <div className='title'>
            <div className='title-right'>TodoList-ReactJS</div>
            <div className='title-left'>{dateString}</div>
        </div>
    )
} export default TitleItem;
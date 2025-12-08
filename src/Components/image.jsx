
function Image({path, text}) {

return (

<div >
    <div>
        <img src={path} alt="text" style={{ maxWidth: '100%', height: 'auto' }}></img>
    </div>
    <div style={{textAlign: 'center'}}>
    <p>{text}</p>
    </div>
</div>

    );
}
export default Image
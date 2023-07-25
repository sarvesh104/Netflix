function Card(props){
    return(
        <>
        
        <div style={{ paddingLeft: "13px", paddingRight:"5px", paddingTop: "417px" }}>
                <div className="zoom">
                <img src={props.img_src} alt="mypic" style={{ height: "210px",width:"173px" }} />
                </div>
                {/* <h2 style={{ paddingLeft: "40px", color: "white" }}>{props.title}</h2> */}
            </div>
        
        
        
    
        
        </>
    )
}
export default Card;
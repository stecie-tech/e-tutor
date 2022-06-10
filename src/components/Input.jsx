export default function Input(prop) {


    return <div style={{
        backgroundColor: "#ccc",
        display: "flex"
    }}>
       <div style={{
           backgroundColor: "blue"
       }}>
        <img src={`/assets/${prop.iconName}`} alt="form icon"/> 
       </div>
        <input type={prop.type} onChange={(e) => prop.handleInputchange(e.currentTarget.value)} value={prop.value} name={prop.name} placeholder={prop.placeholder} />
    </div>
}
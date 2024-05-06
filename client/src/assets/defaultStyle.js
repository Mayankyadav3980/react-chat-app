const defaultStyle = {  
    suggestions: {
      list: {
        backgroundColor: "white",
        border: "1px solid rgba(0,0,0,0.15)",
        fontSize: 20,
        position:"absolute",
        bottom: "20px"
      },
      item: {
        padding: "5px 15px",
        borderBottom: "1px solid rgba(0,0,0,0.15)",
        "&focused": {
          backgroundColor: "#cee4e5",
        },
      },
    },
  };

  export default defaultStyle;
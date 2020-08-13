fetch('http://localhost:3000/widgets')
    .then(res => res.json())
    .then(res => {

        let mainNode = document.getElementById("main");

        for (var i = 0; i < res.length; i++) {

            let widget = res[i];

            let widgetNode = document.createElement("div");
            widgetNode.setAttribute("class", "animation widget");
            mainNode.appendChild(widgetNode);
            
            let titleNode = document.createElement("h2");

            if (widget.headerType === "light"){
                titleNode.setAttribute("class", "light-h2");

            }

            widgetNode.appendChild(titleNode);
            
            let paragraphNode = document.createElement("p");
            widgetNode.appendChild(paragraphNode);            

            let text = "";
            let title = "";

            title += widget.title;

            for (var j = 0; j < widget.data.length; j++) {

                if (widget.type === "messages"){
                    text += widget.data[j].author+": "+widget.data[j].message;
                } else {
                    text += widget.data[j].firstName+" "+widget.data[j].lastName+" "+widget.data[j].userName;
                }

            }

            titleNode.appendChild(document.createTextNode(title));
            paragraphNode.appendChild(document.createTextNode(text));
        }
    });
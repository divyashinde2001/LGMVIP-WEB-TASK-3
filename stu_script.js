document.getElementById('push').addEventListener("click",makeTable);

//make Table function
function makeTable()
    {
        var table=document.getElementById('tab');
        var row = 1;
        var col = 6;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var website = document.getElementById('Website').value;
        var imagename = document.getElementById('imagename').value;
        var skills = document.getElementById('skills').value;
        for(var roein=0;roein<row;roein++)
            {
                var tr=document.createElement('tr');
                for(var coli=0;coli<col;coli++)
                    {
                        var td=document.createElement('td');
                        if(coli==1)
                            {
                                var text=document.createTextNode(name );
                                td.appendChild(text);
                            }
                        if(coli==2)
                            {
                                var data=document.createTextNode(email );
                                td.appendChild(data);
                            }
                        if(coli==3)
                            {
                                var data=document.createTextNode(website );
                                td.appendChild(data);
                            }
                        if(coli==4)
                            {
                                src = 'C:/task3/' + imagename +'.jpg',
                                img = document.createElement('img');
                                img.src = src;
                                td.appendChild(img);
                            }
                        if(coli==5)
                            {
                                var data=document.createTextNode(skills );
                                td.appendChild(data);
                            }     
                            tr.appendChild(td);
                    }
                    table.appendChild(tr);
            }

    }
//delete row fromm the table
function delRow()
    {
        document.getElementById("tab").deleteRow(1);
    } 
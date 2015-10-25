function OpenConn()
{
    var connection = new ActiveXObject("ADODB.Connection");

    var connectionstring = "Data Source=MONA-PC\QSA;Initial Catalog=STARSDB;User ID=sa;Password=P@ssW0rd;Provider=SQLOLEDB";

    connection.Open(connectionstring);
    
    //  return connection;
    GetListofStudents(connection);
}

function GetListofStudents(connection) {
    var rs = new ActiveXObject("ADODB.Recordset");
    rs.Open("SELECT * FROM Students", connection);
    rs.MoveFirst
    while (!rs.eof) {
        document.write(rs.fields(1));
        rs.movenext;
    }
}
function CloseConn(connection)
{
    rs.close;
    connection.close;
}
